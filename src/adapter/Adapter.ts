import {
  ILogger,
  IAdapter,
  IBlueprint,
  HookContext,
  AdapterHooks,
  AdapterContext,
  RawResponseOptions,
  IRawResponseWrapper,
  IAdapterEventBuilder,
  IAdapterErrorHandler,
  MetaAdapterErrorHandler,
  AdapterEventHandlerType,
  IAdapterErrorHandlerClass,
  FactoryAdapterErrorHandler,
  AdapterEventHandlerResolver,
  LifecycleAdapterEventHandler,
  FunctionalAdapterEventHandler,
  FunctionalAdapterErrorHandler
} from '../declarations'
import { OutgoingResponse } from '../events/OutgoingResponse'
import { IntegrationError } from '../errors/IntegrationError'
import { IncomingEvent, IncomingEventOptions } from '../events/IncomingEvent'
import { isMetaClassModule, isMetaFactoryModule, isHandlerHasHook, isMetaFunctionModule } from '../utils'
import { isClassPipe, isFactoryPipe, isFunction, MetaPipe, MixedPipe, Pipeline, PipelineOptions } from '@stone-js/pipeline'

/**
 * Adapter options.
 *
 * @template IncomingEventType
 * @template OutgoingResponseType
 */
export interface AdapterOptions<
  IncomingEventType extends IncomingEvent,
  OutgoingResponseType extends OutgoingResponse
> {
  logger: ILogger
  hooks: AdapterHooks
  blueprint: IBlueprint
  handlerResolver: AdapterEventHandlerResolver<IncomingEventType, OutgoingResponseType>
}

/**
 * Class representing an Adapter.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 *
 * @template RawEventType
 * @template RawResponseType
 * @template ExecutionContextType
 * @template IncomingEventType
 * @template IncomingEventOptionsType
 * @template OutgoingResponseType
 * @template AdapterContextType
 */
export abstract class Adapter<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType extends IncomingEvent,
  IncomingEventOptionsType extends IncomingEventOptions,
  OutgoingResponseType extends OutgoingResponse,
  AdapterContextType extends AdapterContext<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType,
  IncomingEventOptionsType,
  OutgoingResponseType
  > = AdapterContext<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType,
  IncomingEventOptionsType,
  OutgoingResponseType
  >
> implements IAdapter {
  protected readonly logger: ILogger
  protected readonly hooks: AdapterHooks
  protected readonly blueprint: IBlueprint
  protected readonly handlerResolver: AdapterEventHandlerResolver<IncomingEventType, OutgoingResponseType>
  private readonly resolvedErrorHandlers: Record<string, IAdapterErrorHandler<RawEventType, RawResponseType, ExecutionContextType>>

  /**
   * Create an Adapter.
   *
   * @param options - Adapter options.
   */
  protected constructor ({
    hooks,
    logger,
    blueprint,
    handlerResolver
  }: AdapterOptions<IncomingEventType, OutgoingResponseType>) {
    if (logger === undefined) {
      throw new IntegrationError('Logger is required to create an Adapter instance.')
    }
    if (blueprint?.get === undefined) {
      throw new IntegrationError('Blueprint is required to create an Adapter instance.')
    }
    if (typeof handlerResolver !== 'function') {
      throw new IntegrationError(`The 'handlerResolver' expects a function or a class, but provided: ${typeof handlerResolver}.`)
    }

    this.logger = logger
    this.hooks = hooks ?? []
    this.blueprint = blueprint
    this.resolvedErrorHandlers = {}
    this.handlerResolver = handlerResolver
  }

  /**
   * Run handler.
   *
   * @example
   * Implementation flow
   * ```ts
   * await this.onStart();
   * const eventHandler = this.handlerResolver(this.blueprint)
   * await this.onPrepare(eventHandler);
   * const rawEvent: MockRawEvent = { name: 'Stone.js' }
   * const context: AdapterContext<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> = {
   *   rawEvent,
   *   incomingEventBuilder: AdapterBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: v => IncomingEvent.create(v) }),
   *   rawResponseBuilder: AdapterBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: v => new MockRawResponseWrapper(v) })
   * }
   * return await this.sendEventThroughDestination(eventHandler, context);
   * ```
   * @returns The result of the handler execution.
   */
  abstract run<ExecutionResultType = unknown>(): Promise<ExecutionResultType>

  /**
   * Incoming message listener.
   *
   * @param context - The event context.
   * @returns Platform-specific output.
   */
  protected async sendEventThroughDestination (
    eventHandler: AdapterEventHandlerType<IncomingEventType, OutgoingResponseType>,
    context: AdapterContextType
  ): Promise<RawResponseType> {
    if (eventHandler === undefined) { throw new IntegrationError('No eventHandler provided') }
    if (context.rawResponseBuilder?.build === undefined) { throw new IntegrationError('No RawResponseBuilder provided') }
    if (context.incomingEventBuilder?.build === undefined) { throw new IntegrationError('No IncomingEventBuilder provided') }

    const middleware = this.blueprint.get<
    Array<MixedPipe<AdapterContextType,
    IAdapterEventBuilder<RawResponseOptions, IRawResponseWrapper<RawResponseType>>>>
    >('stone.adapter.middleware', [])

    try {
      await this.beforeHandle(eventHandler)

      const responseBuilder = await Pipeline
        .create<
      AdapterContextType,
      IAdapterEventBuilder<RawResponseOptions, IRawResponseWrapper<RawResponseType>>
      >(this.makePipelineOptions())
        .send(context)
        .through(...middleware)
        .then(async (ctx) => await this.prepareResponse(eventHandler, ctx))

      await this.afterHandle(eventHandler, context)

      context.rawResponse = await responseBuilder.build().respond()
    } catch (error: any) {
      await this.afterHandle(eventHandler, context)
      context.rawResponse = await this.resolveErrorHandler(error).handle(error, context)
    } finally {
      try {
        await this.onTerminate(eventHandler, context)
      } catch (error: any) {
        this.logger.error(error.message, { error })
      }
    }

    return context.rawResponse
  }

  /**
   * Hook that runs once before everything.
   */
  protected async onStart (): Promise<void> {
    await this.executeHooks('onStart')
  }

  /**
   * Hook that runs just before shutting down the application.
   */
  protected async onStop (): Promise<void> {
    await this.executeHooks('onStop')
  }

  /**
   * Hook that runs before preparing the event context.
   *
   * @param eventHandler - Action handler to be run.
   */
  protected async onPrepare (eventHandler: AdapterEventHandlerType<IncomingEventType, OutgoingResponseType>): Promise<void> {
    await this.executeHooks('onPrepare')
    if (isHandlerHasHook(eventHandler, 'onPrepare')) {
      await eventHandler.onPrepare()
    }
  }

  /**
   * Hook that runs before handling each event.
   *
   * @param eventHandler - Action handler to be run.
   */
  protected async beforeHandle (eventHandler: AdapterEventHandlerType<IncomingEventType, OutgoingResponseType>): Promise<void> {
    await this.executeHooks('beforeHandle')
    if (isHandlerHasHook(eventHandler, 'beforeHandle')) {
      await eventHandler.beforeHandle()
    }
  }

  /**
   * Hook that runs after handling each event.
   *
   * @param eventHandler - Action handler to be run.
   * @param context - The event context.
   */
  protected async afterHandle (eventHandler: AdapterEventHandlerType<IncomingEventType, OutgoingResponseType>, context: AdapterContextType): Promise<void> {
    await this.executeHooks('afterHandle', context)
    if (isHandlerHasHook(eventHandler, 'afterHandle')) {
      await eventHandler.afterHandle(this.makeHookContext(context))
    }
  }

  /**
   * Hook that runs after running the action handler.
   *
   * @param eventHandler - Action handler to be run.
   * @param context - The event context.
   */
  protected async onTerminate (eventHandler: AdapterEventHandlerType<IncomingEventType, OutgoingResponseType>, context: AdapterContextType): Promise<void> {
    await this.executeHooks('onTerminate', context)
    if (isHandlerHasHook(eventHandler, 'onTerminate')) {
      await eventHandler.onTerminate(this.makeHookContext(context))
    }
  }

  /**
   * Execute lifecycle hooks.
   *
   * @param hook - The hook to execute.
   * @param context - The event context.
   */
  protected async executeHooks (hook: keyof AdapterHooks, context?: AdapterContextType): Promise<void> {
    if (Array.isArray(this.hooks[hook])) {
      for (const listener of this.hooks[hook]) {
        await listener(this.blueprint, this.makeHookContext(context))
      }
    }
  }

  /**
   * Create pipeline options for the Adapter.
   *
   * @returns The pipeline options for transforming the event.
   */
  protected makePipelineOptions (): PipelineOptions<AdapterContextType, IAdapterEventBuilder<RawResponseOptions, IRawResponseWrapper<RawResponseType>>> {
    return {
      resolver: (metaPipe: MetaPipe<AdapterContextType, IAdapterEventBuilder<RawResponseOptions, IRawResponseWrapper<RawResponseType>>>) => {
        if (isClassPipe(metaPipe)) {
          return new metaPipe.module.prototype.constructor({ blueprint: this.blueprint, logger: this.logger })
        } else if (isFactoryPipe(metaPipe)) {
          return metaPipe.module({ blueprint: this.blueprint, logger: this.logger })
        }
      }
    }
  }

  /**
   * Get the error handler for the given error.
   *
   * @param error - The error to get the handler for.
   * @returns The error handler.
   */
  protected resolveErrorHandler (error: Error): IAdapterErrorHandler<RawEventType, RawResponseType, ExecutionContextType> {
    if (this.resolvedErrorHandlers[error.name] === undefined) {
      const metaErrorHandler = this.blueprint.get<MetaAdapterErrorHandler<RawEventType, RawResponseType, ExecutionContextType>>(
        `stone.adapter.errorHandlers.${error.name}`,
        this.blueprint.get<MetaAdapterErrorHandler<RawEventType, RawResponseType, ExecutionContextType>>(
          'stone.adapter.errorHandlers.default',
          {} as any
        )
      )

      if (isMetaClassModule<IAdapterErrorHandlerClass<RawEventType, RawResponseType, ExecutionContextType>>(metaErrorHandler)) {
        this.resolvedErrorHandlers[error.name] = new metaErrorHandler.module.prototype.constructor({ blueprint: this.blueprint, logger: this.logger })
      } else if (isMetaFactoryModule<FactoryAdapterErrorHandler<RawEventType, RawResponseType, ExecutionContextType>>(metaErrorHandler)) {
        this.resolvedErrorHandlers[error.name] = { handle: metaErrorHandler.module({ blueprint: this.blueprint, logger: this.logger }) }
      } else if (isMetaFunctionModule<FunctionalAdapterErrorHandler<RawEventType, RawResponseType, ExecutionContextType>>(metaErrorHandler)) {
        this.resolvedErrorHandlers[error.name] = { handle: metaErrorHandler.module }
      } else {
        throw new IntegrationError(`The error handler for ${String(error.name)} is not provided.`)
      }
    }

    return this.resolvedErrorHandlers[error.name]
  }

  /**
   * Prepare the response for the event handler.
   *
   * @param eventHandler - The event handler to prepare the response for.
   * @param context - The event context.
   * @returns The raw response wrapper.
   */
  protected async prepareResponse (
    eventHandler: AdapterEventHandlerType<IncomingEventType, OutgoingResponseType>,
    context: AdapterContextType
  ): Promise<IAdapterEventBuilder<RawResponseOptions, IRawResponseWrapper<RawResponseType>>> {
    const lifecycleEventHandler = eventHandler as LifecycleAdapterEventHandler<IncomingEventType, OutgoingResponseType>

    context.incomingEvent = context.incomingEventBuilder.build()

    if (context.incomingEvent === undefined) {
      throw new IntegrationError('No IncomingEvent provided')
    }

    context.outgoingResponse = isFunction(lifecycleEventHandler.handle)
      ? await lifecycleEventHandler.handle(context.incomingEvent)
      : await (eventHandler as FunctionalAdapterEventHandler<IncomingEventType, OutgoingResponseType>)(context.incomingEvent)

    return context.rawResponseBuilder
  }

  /**
   * Create a hook context.
   *
   * @param context - The adapter context.
   * @returns The hook context.
   */
  private makeHookContext (context?: AdapterContextType): HookContext<IncomingEventType, OutgoingResponseType> {
    return {
      event: context?.incomingEvent as IncomingEventType,
      response: context?.outgoingResponse as OutgoingResponseType
    }
  }
}

import {
  ILogger,
  IAdapter,
  IBlueprint,
  HookContext,
  AdapterHooks,
  EventHandler,
  AdapterContext,
  RawResponseOptions,
  IRawResponseWrapper,
  IAdapterEventBuilder,
  EventHandlerFunction,
  IAdapterErrorHandler,
  LifecycleEventHandler,
  AdapterHandlerResolver
} from '../declarations'
import { isConstructor } from '../utils'
import { OutgoingResponse } from '../events/OutgoingResponse'
import { IntegrationError } from '../errors/IntegrationError'
import { IncomingEvent, IncomingEventOptions } from '../events/IncomingEvent'
import { MixedPipe, Pipe, Pipeline, PipelineOptions } from '@stone-js/pipeline'

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
  handlerResolver: AdapterHandlerResolver<IncomingEventType, OutgoingResponseType>
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
  AdapterContextType extends AdapterContext<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType> = AdapterContext<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType>
> implements IAdapter {
  protected readonly logger: ILogger
  protected readonly hooks: AdapterHooks
  protected readonly blueprint: IBlueprint
  protected readonly handlerResolver: AdapterHandlerResolver<IncomingEventType, OutgoingResponseType>

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
    this.handlerResolver = handlerResolver
  }

  /**
   * Run handler.
   *
   * @example
   * Implementation flow
   * ```ts
   * await this.onInit();
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
  protected async sendEventThroughDestination (eventHandler: EventHandler<IncomingEventType, OutgoingResponseType>, context: AdapterContextType): Promise<RawResponseType> {
    if (eventHandler === undefined) { throw new IntegrationError('No eventHandler provided') }
    if (context.rawResponseBuilder?.build === undefined) { throw new IntegrationError('No RawResponseBuilder provided') }
    if (context.incomingEventBuilder?.build === undefined) { throw new IntegrationError('No IncomingEventBuilder provided') }

    const middleware = this.blueprint.get<MixedPipe[]>('stone.adapter.middleware', [])
    const lifecycleEventHandler = eventHandler as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>

    try {
      await this.beforeHandle(lifecycleEventHandler)

      const responseBuilder = await Pipeline
        .create<AdapterContextType, IAdapterEventBuilder<RawResponseOptions, IRawResponseWrapper<RawResponseType>>>(this.makePipelineOptions())
        .send(context)
        .through(middleware)
        .then(async (ctx) => await this.prepareResponse(eventHandler, ctx))

      await this.afterHandle(lifecycleEventHandler, context)

      context.rawResponse = await responseBuilder.build().respond()
    } catch (error: any) {
      context.rawResponse = await this.getErrorHandler(error).handle(error, context)
    } finally {
      try {
        await this.onTerminate(lifecycleEventHandler, context)
      } catch (error: any) {
        this.logger.error(error.message, { error })
      }
    }

    return context.rawResponse
  }

  /**
   * Hook that runs once before everything.
   */
  protected async onInit (): Promise<void> {
    await this.executeHooks('onInit')
  }

  /**
   * Hook that runs before preparing the event context.
   *
   * @param eventHandler - Action handler to be run.
   */
  protected async onPrepare (eventHandler: LifecycleEventHandler<IncomingEventType, OutgoingResponseType>): Promise<void> {
    await this.executeHooks('onPrepare')
    if (typeof eventHandler?.onPrepare === 'function') {
      await eventHandler.onPrepare()
    }
  }

  /**
   * Hook that runs before handling each event.
   *
   * @param eventHandler - Action handler to be run.
   */
  protected async beforeHandle (eventHandler: LifecycleEventHandler<IncomingEventType, OutgoingResponseType>): Promise<void> {
    await this.executeHooks('beforeHandle')
    if (typeof eventHandler?.beforeHandle === 'function') {
      await eventHandler.beforeHandle()
    }
  }

  /**
   * Hook that runs after handling each event.
   *
   * @param eventHandler - Action handler to be run.
   * @param context - The event context.
   */
  protected async afterHandle (eventHandler: LifecycleEventHandler<IncomingEventType, OutgoingResponseType>, context: AdapterContextType): Promise<void> {
    await this.executeHooks('afterHandle', context)
    if (typeof eventHandler?.afterHandle === 'function') {
      await eventHandler.afterHandle(this.makeHookContext(context))
    }
  }

  /**
   * Hook that runs after running the action handler.
   *
   * @param eventHandler - Action handler to be run.
   * @param context - The event context.
   */
  protected async onTerminate (eventHandler: LifecycleEventHandler<IncomingEventType, OutgoingResponseType>, context: AdapterContextType): Promise<void> {
    await this.executeHooks('onTerminate', context)
    if (typeof eventHandler?.onTerminate === 'function') {
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
      resolver: (Middleware: Pipe) => {
        if (isConstructor(Middleware)) {
          return new Middleware({ blueprint: this.blueprint, logger: this.logger })
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
  protected getErrorHandler (error: Error): IAdapterErrorHandler<RawEventType, RawResponseType, ExecutionContextType> {
    const handlers = this.blueprint.get<Record<string, IAdapterErrorHandler<RawEventType, RawResponseType, ExecutionContextType>>>('stone.adapter.errorHandlers', {})
    const ErrorHandler = handlers[error.name] ?? handlers.default

    if (isConstructor(ErrorHandler)) {
      return new ErrorHandler({ blueprint: this.blueprint, logger: this.logger })
    } else {
      throw new IntegrationError(`The error handler for ${String(error.name)} is not provided or is not a class.`)
    }
  }

  /**
   * Prepare the response for the event handler.
   *
   * @param eventHandler - The event handler to prepare the response for.
   * @param context - The event context.
   * @returns The raw response wrapper.
   */
  protected async prepareResponse (
    eventHandler: EventHandler<IncomingEventType, OutgoingResponseType>,
    context: AdapterContextType
  ): Promise<IAdapterEventBuilder<RawResponseOptions, IRawResponseWrapper<RawResponseType>>> {
    const lifecycleEventHandler = eventHandler as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>

    context.incomingEvent = context.incomingEventBuilder.build()

    if (context.incomingEvent === undefined) {
      throw new IntegrationError('No IncomingEvent provided')
    }

    context.outgoingResponse = typeof lifecycleEventHandler.handle === 'function'
      ? await lifecycleEventHandler.handle(context.incomingEvent)
      : await (eventHandler as EventHandlerFunction<IncomingEventType, OutgoingResponseType>)(context.incomingEvent)

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

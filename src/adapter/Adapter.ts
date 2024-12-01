import {
  AdapterContext,
  IRawResponseWrapper,
  AdapterHandlerResolver,
  AdapterHooks,
  IAdapter,
  IBlueprint,
  IErrorHandler,
  ILogger,
  LifecycleEventHandler,
  EventHandler
} from '../definitions'
import { isConstructor } from '../utils'
import { OutgoingResponse } from '../events/OutgoingResponse'
import { IntegrationError } from '../errors/IntegrationError'
import { IncomingEvent, IncomingEventOptions } from '../events/IncomingEvent'
import { MixedPipe, Pipe, Pipeline, PipelineOptions } from '@stone-js/pipeline'

/**
 * Adapter options.
 *
 * @template RawResponseType
 * @template IncomingEventType
 * @template OutgoingResponseType
 */
export interface AdapterOptions<
  RawResponseType,
  IncomingEventType extends IncomingEvent,
  OutgoingResponseType extends OutgoingResponse
> {
  logger: ILogger
  hooks: AdapterHooks
  blueprint: IBlueprint
  errorHandler: IErrorHandler<RawResponseType>
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
> implements IAdapter<RawResponseType> {
  protected readonly logger: ILogger
  protected readonly hooks: AdapterHooks
  protected readonly blueprint: IBlueprint
  protected readonly errorHandler: IErrorHandler<RawResponseType>
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
    errorHandler,
    handlerResolver
  }: AdapterOptions<RawResponseType, IncomingEventType, OutgoingResponseType>) {
    if (logger === undefined) {
      throw new IntegrationError('Logger is required to create an Adapter instance.')
    }
    if (errorHandler === undefined) {
      throw new IntegrationError('ErrorHandler is required to create an Adapter instance.')
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
    this.errorHandler = errorHandler
    this.handlerResolver = handlerResolver
  }

  /**
   * Run handler.
   *
   * @example
   * Implementation flow
   * ```ts
   * await this.onInit();
   * const rawEvent: MockRawEvent = { name: 'Stone.js' }
   * const context: AdapterContext<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> = {
   *   rawEvent,
   *   incomingEventBuilder: AdapterBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: v => IncomingEvent.create(v) }),
   *   rawResponseBuilder: AdapterBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: v => new MockRawResponseWrapper(v) })
   * }
   * return await this.sendEventThroughDestination(context);
   * ```
   * @returns The result of the handler execution.
   */
  abstract run (): Promise<RawResponseType>

  /**
   * Incoming message listener.
   *
   * @param context - The event context.
   * @returns Platform-specific output.
   */
  protected async sendEventThroughDestination (context: AdapterContextType): Promise<RawResponseType> {
    let result: RawResponseType
    const eventHandler = this.handlerResolver(this.blueprint) as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>

    try {
      if (eventHandler === undefined) { throw new IntegrationError('No eventHandler provided') }

      await this.beforeHandle(eventHandler)

      const rawResponseWrapper = await Pipeline
        .create<AdapterContextType, IRawResponseWrapper<RawResponseType>>(this.makePipelineOptions(eventHandler))
        .send(context)
        .through(this.blueprint.get<MixedPipe[]>('stone.adapter.middleware', []))
        .then((context) => {
          if (context.rawResponseBuilder?.build === undefined) { throw new IntegrationError('No RawResponseBuilder provided') }
          return context.rawResponseBuilder.build()
        })

      if (rawResponseWrapper?.respond === undefined) { throw new IntegrationError('No RawResponseWrapper provided') }

      result = await rawResponseWrapper.respond()
    } catch (e: any) {
      const error = IntegrationError.create<IntegrationError>(e.message, { cause: e, metadata: context })
      result = this.errorHandler.report(error).render(error)
    } finally {
      await this.onTerminate(eventHandler, context)
    }

    return result
  }

  /**
   * Hook that runs once before everything.
   */
  protected async onInit (): Promise<void> {
    await this.executeHooks('onInit')
  }

  /**
   * Hook that runs before handling each event.
   *
   * @param eventHandler - Action handler to be run.
   */
  protected async beforeHandle (eventHandler: LifecycleEventHandler<IncomingEventType, OutgoingResponseType>): Promise<void> {
    await this.executeHooks('beforeHandle')
    if (typeof eventHandler.beforeHandle === 'function') {
      await eventHandler.beforeHandle()
    }
  }

  /**
   * Hook that runs after running the action handler.
   *
   * @param eventHandler - Action handler to be run.
   * @param _adapterContext - The event context.
   */
  protected async onTerminate (eventHandler: LifecycleEventHandler<IncomingEventType, OutgoingResponseType>, _adapterContext: AdapterContextType): Promise<void> {
    await this.executeHooks('onTerminate')
    if (typeof eventHandler?.onTerminate === 'function') {
      await eventHandler.onTerminate()
    }
  }

  /**
   * Execute lifecycle hooks.
   *
   * @param hook - The hook to execute.
   */
  protected async executeHooks (hook: keyof AdapterHooks): Promise<void> {
    if (Array.isArray(this.hooks[hook])) {
      for (const listener of this.hooks[hook]) {
        await listener(this.blueprint)
      }
    }
  }

  /**
   * Create pipeline options for the Adapter.
   *
   * @returns The pipeline options for transforming the event.
   */
  protected makePipelineOptions (eventHandler: EventHandler<IncomingEventType, OutgoingResponseType>): PipelineOptions<AdapterContextType, IRawResponseWrapper<RawResponseType>> {
    return {
      resolver: (middleware: Pipe) => {
        if (isConstructor(middleware)) {
          return Reflect.construct(middleware as Function, [{ eventHandler, blueprint: this.blueprint, logger: this.logger }])
        }
      }
    }
  }
}

import { AdapterMapper } from './AdapterMapper'
import {
  AdapterContext,
  EventHandlerFunction,
  IRawResponseWrapper,
  AdapterHandlerResolver,
  AdapterHooks,
  IAdapter,
  IBlueprint,
  IErrorHandler,
  ILogger,
  LifecycleEventHandler
} from '../definitions'
import { OutgoingResponse } from '../events/OutgoingResponse'
import { IntegrationError } from '../errors/IntegrationError'
import { IncomingEvent, IncomingEventOptions } from '../events/IncomingEvent'

/**
 * Adapter options.
 *
 * @template RawEventType
 * @template RawResponseType
 * @template ExecutionContextType
 * @template IncomingEventType
 * @template IncomingEventOptionsType
 * @template OutgoingResponseType
 */
export interface AdapterOptions<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType extends IncomingEvent,
  IncomingEventOptionsType extends IncomingEventOptions,
  OutgoingResponseType extends OutgoingResponse
> {
  logger: ILogger
  hooks: AdapterHooks
  blueprint: IBlueprint
  errorHandler: IErrorHandler<RawResponseType>
  inputMapper: AdapterMapper<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType,
  IncomingEventOptionsType,
  OutgoingResponseType,
  IncomingEventType
  >
  outputMapper: AdapterMapper<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType,
  IncomingEventOptionsType,
  OutgoingResponseType,
  IRawResponseWrapper<RawResponseType>
  >
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
 */
export abstract class Adapter<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType extends IncomingEvent,
  IncomingEventOptionsType extends IncomingEventOptions,
  OutgoingResponseType extends OutgoingResponse
> implements IAdapter<RawResponseType> {
  protected readonly logger: ILogger
  protected readonly hooks: AdapterHooks
  protected readonly blueprint: IBlueprint
  protected readonly errorHandler: IErrorHandler<RawResponseType>
  protected readonly inputMapper: AdapterMapper<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType,
  IncomingEventOptionsType,
  OutgoingResponseType,
  IncomingEventType
  >

  protected readonly outputMapper: AdapterMapper<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType,
  IncomingEventOptionsType,
  OutgoingResponseType,
  IRawResponseWrapper<RawResponseType>
  >

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
    inputMapper,
    outputMapper,
    errorHandler,
    handlerResolver
  }: AdapterOptions<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType,
  IncomingEventOptionsType,
  OutgoingResponseType
  >) {
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
    if (!(inputMapper instanceof AdapterMapper)) {
      throw new IntegrationError('Input Mapper is required to create an Adapter instance.')
    }
    if (!(outputMapper instanceof AdapterMapper)) {
      throw new IntegrationError('Output Mapper is required to create an Adapter instance.')
    }

    this.logger = logger
    this.hooks = hooks ?? []
    this.blueprint = blueprint
    this.inputMapper = inputMapper
    this.outputMapper = outputMapper
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
   * const eventHandler = this.handlerResolver(this.blueprint);
   * await this.beforeHandle(eventHandler as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>);
   * return await this.onRawEventReceived(eventHandler, {});
   * ```
   * @returns The result of the handler execution.
   */
  abstract run (): Promise<RawResponseType>

  /**
   * Incoming message listener.
   *
   * @param eventHandler - Action handler to be run.
   * @param context - The event context.
   * @returns Platform-specific output.
   */
  protected async onRawEventReceived (
    eventHandler: EventHandlerFunction<IncomingEventType, OutgoingResponseType> | LifecycleEventHandler<IncomingEventType, OutgoingResponseType>,
    context: AdapterContext<
    RawEventType,
    RawResponseType,
    ExecutionContextType,
    IncomingEventType,
    IncomingEventOptionsType,
    OutgoingResponseType
    >
  ): Promise<RawResponseType> {
    let result: RawResponseType
    const lifecycleHandler = eventHandler as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>

    try {
      const incomingEvent = await this.inputMapper.map(context)

      if (incomingEvent === undefined) {
        throw new IntegrationError('No IncomingEvent provided')
      }

      const outgoingResponse = typeof lifecycleHandler.handle === 'function'
        ? await lifecycleHandler.handle(incomingEvent)
        : await (eventHandler as EventHandlerFunction<IncomingEventType, OutgoingResponseType>)(incomingEvent)

      const rawResponseWrapper = await this.outputMapper.map({ ...context, incomingEvent, outgoingResponse })

      result = rawResponseWrapper?.respond()
    } catch (error: any) {
      result = this.errorHandler.report({ ...error, context }).render({ ...error, context })
    } finally {
      await this.onTerminate(eventHandler as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>, context)
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
  protected async onTerminate (
    eventHandler: LifecycleEventHandler<IncomingEventType, OutgoingResponseType>,
    _adapterContext: AdapterContext<
    RawEventType,
    RawResponseType,
    ExecutionContextType,
    IncomingEventType,
    IncomingEventOptionsType,
    OutgoingResponseType
    >
  ): Promise<void> {
    await this.executeHooks('onTerminate')
    if (typeof eventHandler.onTerminate === 'function') {
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
}

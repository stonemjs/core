import { Event } from './events/Event'
import { Config } from '@stone-js/config'
import { EventEmitter } from './events/EventEmitter'
import { RuntimeError } from './errors/RuntimeError'
import { OutgoingResponse } from './events/OutgoingResponse'
import { IncomingEvent, IncomingEventOptions } from './events/IncomingEvent'

/**
 * Log level enumeration to define possible log levels.
 */
export enum LogLevel {
  TRACE = 'trace',
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error'
}

/**
 * Interface representing a provider within the system.
 *
 * This interface provides lifecycle hooks for managing the registration,
 * initialization, and termination phases of a provider. Implementations
 * of this interface are expected to define these lifecycle methods as needed.
 */
export interface IProvider {
  /**
   * Hook that runs before the main handler is invoked. This can be used for setup or validation purposes.
   */
  beforeHandle?: () => void | Promise<void>

  /**
   * Registers the provider into the system. Typically used for adding services or bindings to the container.
   */
  register?: () => void | Promise<void>

  /**
   * Boots the provider after registration. This method is used to initialize services that need to be started.
   */
  boot?: () => void | Promise<void>

  /**
   * Hook that runs after the main handler completes. This can be used for cleanup tasks.
   */
  onTerminate?: () => void | Promise<void>

  /**
   * Skip this provider.
   */
  mustSkip?: () => boolean
}

/**
 * Interface representing a listener for handling specific events.
 *
 * Listeners implementing this interface should define a `handle` method
 * that is called whenever the associated event occurs.
 */
export interface IListener {
  /**
   * Handles the event when it occurs. This method contains the logic that runs when the event is triggered.
   *
   * @param event - The event that was triggered.
   */
  handle: (event: Event) => void | Promise<void>
}

/**
 * Interface representing a subscriber to an event emitter.
 *
 * Subscribers implementing this interface can subscribe to an event emitter
 * and handle multiple types of events.
 */
export interface ISubscriber {
  /**
   * Subscribes to an event emitter to handle various events.
   *
   * @param eventEmitter - The event emitter to subscribe to.
   */
  subscribe: (eventEmitter: EventEmitter) => void | Promise<void>
}

/**
 * Logger Interface.
 *
 * Represents a generic logging interface, which can either be a native console object or a popular JavaScript logging library.
 */
export interface ILogger {
  /**
   * Logs informational messages.
   *
   * @param message - The message to log.
   * @param optionalParams - Optional parameters to log.
   */
  info: (message: string, ...optionalParams: unknown[]) => void

  /**
   * Logs debug-level messages, used for debugging purposes.
   *
   * @param message - The message to log.
   * @param optionalParams - Optional parameters to log.
   */
  debug: (message: string, ...optionalParams: unknown[]) => void

  /**
   * Logs warnings, used to indicate potential issues.
   *
   * @param message - The warning message to log.
   * @param optionalParams - Optional parameters to log.
   */
  warn: (message: string, ...optionalParams: unknown[]) => void

  /**
   * Logs errors, used to report errors or exceptions.
   *
   * @param message - The error message to log.
   * @param optionalParams - Optional parameters to log.
   */
  error: (message: string, ...optionalParams: unknown[]) => void

  /**
   * Logs general messages, similar to `info` but less specific.
   *
   * @param message - The message to log.
   * @param optionalParams - Optional parameters to log.
   */
  log?: (message: string, ...optionalParams: unknown[]) => void

  /**
   * Logs trace-level messages, providing the most detailed information, usually for diagnostic purposes.
   *
   * @param message - The trace message to log.
   * @param optionalParams - Optional parameters to log.
   */
  trace?: (message: string, ...optionalParams: unknown[]) => void
}

/**
 * EventHandlerFunction.
 *
 * Represents a function that handles incoming events and returns an outgoing response.
 *
 * @template W, X
 * @param incomingEvent - The incoming event to handle.
 * @returns The outgoing response.
 */
export type EventHandlerFunction<W extends IncomingEvent, X extends OutgoingResponse> = (incomingEvent: W) => X | Promise<X>

/**
 * RawResponseBuilder Interface.
 *
 * Represents a wrapper for building raw responses with specific options and a response function.
 *
 * @template R
 */
export interface IRawResponseWrapper<R> {
  respond: () => R | Promise<R>
}

/**
 * IAdapterEventBuilder Interface.
 *
 * Interface representing a builder for adapters that provides methods for adding properties and building the resulting object.
 *
 * @template K, R
 */
export interface IAdapterEventBuilder<K, R> {
  add: (key: keyof K, value: unknown) => this
  build: () => R
}

/**
 * RawResponseOptions.
 *
 * Represents an object where the property keys can be any valid property key and values can be anything.
 */
export interface RawResponseOptions {
  [k: PropertyKey]: unknown
}

/**
 * LifecycleEventHandler Interface.
 *
 * Represents a lifecycle event handler with hooks for initialization, pre-handling, handling, and termination phases.
 *
 * @template W, X
 */
export interface LifecycleEventHandler<W extends IncomingEvent, X extends OutgoingResponse> {
  beforeHandle?: () => void | Promise<void>
  handle: EventHandlerFunction<W, X>
  onTerminate?: () => void | Promise<void>
}

/**
 * EventHandler Type.
 *
 * Represents an event handler which can either be a simple function or a lifecycle event handler object.
 *
 * @template W, X
 */
export type EventHandler<W extends IncomingEvent, X extends OutgoingResponse> = EventHandlerFunction<W, X> | LifecycleEventHandler<W, X>

/**
 * AdapterHandlerResolver.
 *
 * Represents a resolver that provides an event handler based on the provided blueprint.
 *
 * @template W, X
 * @param blueprint - The application blueprint.
 * @returns The event handler.
 */
export type AdapterHandlerResolver<W extends IncomingEvent, X extends OutgoingResponse> = (blueprint: IBlueprint) => EventHandler<W, X>

/**
 * AdapterListenerHook Type.
 *
 * Represents a listener hook that can either be synchronous or asynchronous.
 */
export type AdapterListenerHook = (blueprint: IBlueprint) => void | Promise<void>

/**
 * ConfigContext Interface.
 *
 * Represents the context object for configuration, which contains the modules and blueprint used to configure the system.
 */
export interface ConfigContext {
  /**
   * List of configuration modules.
   */
  readonly modules: unknown[]

  /**
   * The configuration blueprint.
   */
  readonly blueprint: IBlueprint
}

/**
 * AdapterHooks Interface.
 *
 * Represents lifecycle hooks that can be defined for the adapter, such as initialization, pre-handling, and termination.
 */
export interface AdapterHooks {
  onInit?: AdapterListenerHook[]
  beforeHandle?: AdapterListenerHook[]
  onTerminate?: AdapterListenerHook[]
}

/**
 * Adapter Interface.
 *
 * Represents an adapter with a run method that returns a promise of type ExecutionResultType.
 */
export interface IAdapter {
  run: <ExecutionResultType = unknown>() => Promise<ExecutionResultType>
}

/**
 * DeepPartial Type.
 *
 * Represents a type that recursively makes all properties optional.
 *
 * @template T
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
}

/**
 * ErrorHandlerLevels Type.
 *
 * Represents a record of log levels and the corresponding error classes associated with each level.
 */
export type ErrorHandlerLevels = Record<LogLevel, Array<new (...args: any[]) => Error>>

/**
 * AdapterResolver Type.
 *
 * Represents a function that resolves an adapter instance based on the provided blueprint.
 *
 * @param blueprint - The application blueprint.
 * @returns The adapter instance.
 */
export type AdapterResolver = (blueprint: IBlueprint) => IAdapter

/**
 * LoggerResolver Type.
 *
 * Represents a function that resolves a logger instance based on the provided blueprint.
 *
 * @param blueprint - The application blueprint.
 * @returns The logger instance.
 */
export type LoggerResolver = (blueprint: IBlueprint) => ILogger

/**
 * ErrorHandlerResolver Type.
 *
 * Represents a function that resolves an error handler based on the provided blueprint.
 *
 * @template R
 * @param blueprint - The application blueprint.
 * @returns The error handler instance.
 */
export type ErrorHandlerResolver<R = unknown> = (blueprint: IBlueprint) => IErrorHandler<R>

/**
 * KernelResolver Type.
 *
 * Represents a function that resolves a lifecycle event handler based on the provided blueprint.
 *
 * @template U, V
 * @param blueprint - The application blueprint.
 * @returns The lifecycle event handler.
 */
export type KernelResolver<U extends IncomingEvent, V extends OutgoingResponse> = (blueprint: IBlueprint) => LifecycleEventHandler<U, V>

/**
 * ErrorHandler Interface.
 *
 * Represents an error handler that provides methods to report and render errors.
 *
 * @template R
 */
export interface IErrorHandler<R, E extends RuntimeError = RuntimeError> {
  report: (error: E) => this
  render: (error: E) => R
}

/**
 * Configuration Interface.
 *
 * Represents a configuration with an optional load method to asynchronously load configurations.
 *
 * @template R
 */
export interface IConfiguration<R> {
  load?: () => R | Promise<R>
}

/**
 * ErrorHandlerRenderResponseResolver Type.
 *
 * Represents a function that resolves the response for a given error.
 *
 * @template R
 * @param error - The error instance.
 * @returns The response for the error.
 */
export type ErrorHandlerRenderResponseResolver<R, E extends RuntimeError = RuntimeError> = (error: E) => R

/**
 * Blueprint Interface.
 *
 * Represents the blueprint configuration object, which is an instance of Config.
 *
 * @template T
 */
export type IBlueprint<T = any> = Config<T>

/**
 * Router Interface.
 *
 * Represents a router that can dispatch incoming events and return outgoing responses.
 *
 * @template U, V
 */
export interface IRouter<U extends IncomingEvent, V extends OutgoingResponse> {
  dispatch: (event: U) => V | Promise<V>
}

/**
 * ConfigModuleName Type.
 *
 * Represents the type for configuration module names, which can be 'app' or 'commands'.
 */
export type ConfigModuleName = 'app' | 'commands'

/**
 * ConfigRawModules Type.
 *
 * Represents the structure of raw configuration modules, organized by module names.
 */
export type ConfigRawModules = Record<ConfigModuleName, Record<PropertyKey, unknown>>

/**
 * KernelContext Interface.
 *
 * Represents the context for a kernel, containing the event and optional response.
 *
 * @template U, V
 */
export interface KernelContext<U extends IncomingEvent, V extends OutgoingResponse> {
  event: U
  response?: V
}

/**
 * ClassType Type.
 *
 * Represents a class type, including abstract classes.
 */
export type ClassType = abstract new (...args: any) => any

/**
 * ClassMethodType Type.
 *
 * Represents a method type within a class, with a specific context.
 *
 * @template This
 */
export type ClassMethodType<This = unknown> = (this: This, ...args: any) => any

/**
 * Class representing an AdapterContext.
 *
 * @template RawEventType
 * @template RawResponseType
 * @template ExecutionContext
 * @template IncomingEventType
 * @template IncomingEventOptionsType
 * @template OutgoingResponseType
 */
export interface AdapterContext<
RawEventType,
RawResponseType,
ExecutionContext,
IncomingEventType extends IncomingEvent = IncomingEvent,
IncomingEventOptionsType extends IncomingEventOptions = IncomingEventOptions,
OutgoingResponseType extends OutgoingResponse = OutgoingResponse
> {
  /**
   * The rawEvent of type RawEventType.
   */
  readonly rawEvent?: RawEventType

  /**
   * The incomingEvent associated with the executionContext.
   */
  readonly incomingEvent?: IncomingEventType

  /**
   * The executionContext of type ExecutionContext.
   */
  readonly executionContext?: ExecutionContext

  /**
   * The outgoingResponse associated with the executionContext.
   */
  readonly outgoingResponse?: OutgoingResponseType

  /**
   * The incomingEventBuilder.
   */
  readonly incomingEventBuilder?: IAdapterEventBuilder<IncomingEventOptionsType, IncomingEventType>

  /**
   * The rawResponseBuilder.
   */
  readonly rawResponseBuilder?: IAdapterEventBuilder<RawResponseOptions, IRawResponseWrapper<RawResponseType>>
}

/**
 * ErrorResponse Interface.
 *
 * Represents an error response with code, status, and message properties.
 */
export interface ErrorResponse {
  code?: number
  status: number
  message: unknown
}

/**
 * Represents options for configuring an error.
 */
export interface ErrorOptions {
  /**
   * A specific error code for identifying the error.
   */
  code?: string

  /**
   * The original error that caused this error, useful for error chaining.
   */
  cause?: Error

  /**
   * Additional information or context about the error.
   */
  metadata?: unknown
}

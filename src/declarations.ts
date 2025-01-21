import { Event } from './events/Event'
import { Config } from '@stone-js/config'
import { EventEmitter } from './events/EventEmitter'
import { MetadataSymbol } from './decorators/Metadata'
import { Container } from '@stone-js/service-container'
import { IncomingEvent, IncomingEventOptions } from './events/IncomingEvent'
import { OutgoingResponse, OutgoingResponseOptions } from './events/OutgoingResponse'

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
 * Represents an IncomingEvent source.
 */
export interface IncomingEventSource {
  /**
   * The raw event object from the originating platform.
   */
  rawEvent: unknown

  /**
   * The raw context object from the originating platform.
   */
  rawContext: unknown

  /**
   * The raw response object from the originating platform.
   */
  rawResponse?: unknown

  /**
   * The platform from which the event originated.
   */
  platform: string | symbol
}

/**
 * Interface representing a provider within the system.
 *
 * This interface provides lifecycle hooks for managing the registration,
 * initialization, and termination phases of a provider. Implementations
 * of this interface are expected to define these lifecycle methods as needed.
 *
 * @template TEvent, UResponse
 */
export interface IProvider<TEvent extends IncomingEvent = IncomingEvent, UResponse extends OutgoingResponse = OutgoingResponse> {
  /**
   * Hook that runs before the context is created. This can be used for setup or validation purposes.
   */
  onPrepare?: () => void | Promise<void>

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
   * Hook that runs after the main handler is invoked. This can be used for cleanup tasks.
   */
  afterHandle?: (context: HookContext<TEvent, UResponse>) => void | Promise<void>

  /**
   * Hook that runs after the main handler completes. This can be used for cleanup tasks.
   */
  onTerminate?: (context: Partial<HookContext<TEvent, UResponse>>) => void | Promise<void>

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
 * RawResponseBuilder Interface.
 *
 * Represents a wrapper for building raw responses with specific options and a response function.
 *
 * @template TResponse
 */
export interface IRawResponseWrapper<TResponse> {
  respond: () => TResponse | Promise<TResponse>
}

/**
 * IAdapterEventBuilder Interface.
 *
 * Interface representing a builder for adapters that provides methods for adding properties and building the resulting object.
 *
 * @template TValues, UResponse
 */
export interface IAdapterEventBuilder<TValues, UResponse> {
  add: (key: keyof TValues, value: TValues[typeof key]) => this
  build: () => UResponse
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
 * AppEventHandler Interface.
 *
 * Represents a lifecycle app event handler with hooks for initialization, pre-handling, handling, and termination phases.
 *
 * @template TEvent, UResponse
 */
export interface AppEventHandler<TEvent extends IncomingEvent = IncomingEvent, UResponse extends OutgoingResponse = OutgoingResponse> {
  onPrepare?: () => void | Promise<void>
  beforeHandle?: () => void | Promise<void>
  handle: AppEventHandlerFunction<TEvent, UResponse>
  afterHandle?: (context: HookContext<TEvent, UResponse>) => void | Promise<void>
  onTerminate?: (context: Partial<HookContext<TEvent, UResponse>>) => void | Promise<void>
}

/**
 * AppEventHandlerFunction.
 *
 * Represents a function that handles incoming events and returns an outgoing response.
 *
 * @template TEvent, UResponse
 * @param incomingEvent - The incoming event to handle.
 * @returns The outgoing response.
 */
export type AppEventHandlerFunction<TEvent extends IncomingEvent, UResponse extends OutgoingResponse> = (incomingEvent: TEvent) => UResponse | unknown | Promise<UResponse | unknown>

/**
 * LifecycleEventHandler Interface.
 *
 * Represents a lifecycle event handler with hooks for initialization, pre-handling, handling, and termination phases.
 *
 * @template TEvent, UResponse
 */
export interface LifecycleEventHandler<TEvent extends IncomingEvent, UResponse extends OutgoingResponse> {
  onPrepare?: () => void | Promise<void>
  beforeHandle?: () => void | Promise<void>
  handle: EventHandlerFunction<TEvent, UResponse>
  afterHandle?: (context: HookContext<TEvent, UResponse>) => void | Promise<void>
  onTerminate?: (context: Partial<HookContext<TEvent, UResponse>>) => void | Promise<void>
}

/**
 * EventHandlerFunction.
 *
 * Represents a function that handles incoming events and returns an outgoing response.
 *
 * @template TEvent, UResponse
 * @param incomingEvent - The incoming event to handle.
 * @returns The outgoing response.
 */
export type EventHandlerFunction<TEvent extends IncomingEvent, UResponse extends OutgoingResponse> = (incomingEvent: TEvent) => UResponse | Promise<UResponse>

/**
 * EventHandler Type.
 *
 * Represents an event handler which can either be a simple function or a lifecycle event handler object.
 *
 * @template TEvent, UResponse
 */
export type EventHandler<TEvent extends IncomingEvent, UResponse extends OutgoingResponse> = EventHandlerFunction<TEvent, UResponse> | LifecycleEventHandler<TEvent, UResponse>

/**
 * AdapterHandlerResolver.
 *
 * Represents a resolver that provides an event handler based on the provided blueprint.
 *
 * @template TEvent, UResponse
 * @param blueprint - The application blueprint.
 * @returns The event handler.
 */
export type AdapterHandlerResolver<TEvent extends IncomingEvent, UResponse extends OutgoingResponse> = (blueprint: IBlueprint) => EventHandler<TEvent, UResponse>

/**
 * AdapterListenerHook Type.
 *
 * Represents a listener hook that can either be synchronous or asynchronous.
 */
export type AdapterListenerHook = (blueprint: IBlueprint) => void | Promise<void>

/**
 * AdapterAfterHandleListenerHook Type.
 *
 * Represents a listener hook that can either be synchronous or asynchronous.
 */
export type AdapterAfterHandleListenerHook = <TEvent extends IncomingEvent, UResponse extends OutgoingResponse>(blueprint: IBlueprint, context: HookContext<TEvent, UResponse>) => void | Promise<void>

/**
 * AdapterOnTerminateListenerHook Type.
 *
 * Represents a listener hook that can either be synchronous or asynchronous.
 */
export type AdapterOnTerminateListenerHook = <TEvent extends IncomingEvent, UResponse extends OutgoingResponse>(blueprint: IBlueprint, context: Partial<HookContext<TEvent, UResponse>>) => void | Promise<void>

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
  onPrepare?: AdapterListenerHook[]
  beforeHandle?: AdapterListenerHook[]
  afterHandle?: AdapterAfterHandleListenerHook[]
  onTerminate?: AdapterOnTerminateListenerHook[]
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
 * @template TValues
 */
export type DeepPartial<TValues> = {
  [P in keyof TValues]?: TValues[P] extends object ? DeepPartial<TValues[P]> : TValues[P];
}

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
 * KernelResolver Type.
 *
 * Represents a function that resolves a lifecycle event handler based on the provided blueprint.
 *
 * @template TEvent, UResponse
 * @param blueprint - The application blueprint.
 * @returns The lifecycle event handler.
 */
export type KernelResolver<TEvent extends IncomingEvent, UResponse extends OutgoingResponse> = (blueprint: IBlueprint) => LifecycleEventHandler<TEvent, UResponse>

/**
 * A type representing a function that resolves an `IRouter` instance.
 *
 * The `RouterResolver` is responsible for generating an instance of `IRouter`
 * for processing incoming events and producing outgoing responses. It utilizes
 * a dependency injection container to dynamically resolve necessary dependencies.
 *
 * @template TEvent, UResponse
 * @param container - The dependency injection container used to resolve the `IRouter` instance.
 * @returns An `IRouter` instance capable of handling the specified incoming and outgoing types.
 */
export type RouterResolver<TEvent extends IncomingEvent, UResponse extends OutgoingResponse> = (container: Container) => IRouter<TEvent, UResponse>

/**
 * ResponseResolverOptions Type.
 *
 * Represents the options for resolving an outgoing response.
 */
export type ResponseResolverOptions = OutgoingResponseOptions & Record<string, unknown>

/**
 * ResponseResolver Type.
 *
 * Represents a function that resolves an outgoing response based on the provided options.
 *
 * @template TOutgoingResponse, TOptions
 * @param options - The outgoing response options.
 * @returns The outgoing response.
 */
export type ResponseResolver<TOutgoingResponse extends OutgoingResponse> = (options: ResponseResolverOptions) => TOutgoingResponse

/**
 * ErrorHandler Interface.
 *
 * Represents an error handler that provides methods to report and render errors.
 *
 * @template TEvent, UResponse
 */
export interface IErrorHandler<TEvent extends IncomingEvent, UResponse extends OutgoingResponse> {
  handle: (error: any, event: TEvent) => UResponse | Promise<UResponse>
}

/**
 * Adapter ErrorHandler Interface.
 *
 * Represents an error handler for the adapters, which can handle errors and return responses.
 */
export interface IAdapterErrorHandler<RawEventType, RawResponseType, ExecutionContextType> {
  handle: (error: any, context: AdapterErrorContext<RawEventType, RawResponseType, ExecutionContextType>) => RawResponseType | Promise<RawResponseType>
}

/**
 * Configuration Interface.
 *
 * Represents a configuration with an optional load method to asynchronously load configurations.
 *
 * @template TResponse
 */
export interface IConfiguration<TResponse> {
  load?: () => TResponse | Promise<TResponse>
}

/**
 * Blueprint Interface.
 *
 * Represents the blueprint configuration object, which is an instance of Config.
 *
 * @template TValues
 */
export type IBlueprint<TValues extends object = any> = Config<TValues>

/**
 * Router Interface.
 *
 * Represents a router that can dispatch incoming events and return outgoing responses.
 *
 * @template TEvent, UResponse
 */
export interface IRouter<TEvent extends IncomingEvent, UResponse extends OutgoingResponse> {
  dispatch: (event: TEvent) => UResponse | unknown | Promise<UResponse | unknown>
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
 * HookContext Interface.
 *
 * Represents the context for the hooks, containing the event and optional response.
 *
 * @template TEvent, UResponse
 */
export interface HookContext<TEvent extends IncomingEvent, UResponse extends OutgoingResponse> {
  event: TEvent
  response: UResponse
}

/**
 * ClassType Type.
 *
 * Represents a class type, including abstract classes.
 */
export type ClassType = (abstract new (...args: any) => any) | (new (...args: any) => any)

/**
 * Represents an object that holds metadata keyed by the `MetadataSymbol`.
 */
export interface MetadataHolder {
  [MetadataSymbol]: Record<PropertyKey, unknown>
}

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
 * @template ExecutionContextType
 * @template IncomingEventType
 * @template IncomingEventOptionsType
 * @template OutgoingResponseType
 */
export interface AdapterContext<
RawEventType,
RawResponseType,
ExecutionContextType,
IncomingEventType extends IncomingEvent = IncomingEvent,
IncomingEventOptionsType extends IncomingEventOptions = IncomingEventOptions,
OutgoingResponseType extends OutgoingResponse = OutgoingResponse
> {
  /**
   * The rawEvent of type RawEventType.
   */
  readonly rawEvent: RawEventType

  /**
   * The rawResponse of type RawResponseType.
   */
  rawResponse?: RawResponseType

  /**
   * The executionContext of type ExecutionContextType.
   */
  readonly executionContext: ExecutionContextType

  /**
   * The incomingEvent associated with the executionContext.
   */
  incomingEvent?: IncomingEventType

  /**
   * The outgoingResponse associated with the executionContext.
   */
  outgoingResponse?: OutgoingResponseType

  /**
   * The incomingEventBuilder.
   */
  readonly incomingEventBuilder: IAdapterEventBuilder<IncomingEventOptionsType, IncomingEventType>

  /**
   * The rawResponseBuilder.
   */
  readonly rawResponseBuilder: IAdapterEventBuilder<RawResponseOptions, IRawResponseWrapper<RawResponseType>>
}

/**
 * Class representing an AdapterErrorContext.
 *
 * @template RawEventType
 * @template RawResponseType
 * @template ExecutionContextType
 */
export interface AdapterErrorContext<RawEventType, RawResponseType, ExecutionContextType> {
  /**
   * The rawEvent of type RawEventType.
   */
  readonly rawEvent: RawEventType

  /**
   * The executionContext of type ExecutionContextType.
   */
  readonly executionContext: ExecutionContextType

  /**
   * The rawResponseBuilder.
   */
  readonly rawResponseBuilder: IAdapterEventBuilder<RawResponseOptions, IRawResponseWrapper<RawResponseType>>
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

/**
 * Represents a class decorator using the 2023-11 proposal syntax.
 *
 * A function that decorates a class and optionally returns a new constructor.
 *
 * @template TClass - The type of the class constructor being decorated.
 * @param target - The class constructor to be decorated.
 * @param context - The context object providing metadata about the class.
 * @returns The original or a modified class constructor, or `undefined`.
 */
export type ProposalClassDecorator<TClass extends ClassType = ClassType> = <TFunction extends TClass>(
  target: TFunction,
  context: ClassDecoratorContext<TClass>
) => TFunction | undefined

/**
 * Represents a method decorator using the 2023-11 proposal syntax.
 *
 * A function that decorates a class method and optionally returns a new method implementation.
 *
 * @template T - The type of the method being decorated.
 * @param target - The class prototype or static target containing the method.
 * @param context - The context object providing metadata about the method.
 * @returns The original or a modified method, or `undefined`.
 */
export type ProposalMethodDecorator<T extends Function = Function> = <TFunction extends T>(
  target: TFunction,
  context: ClassMethodDecoratorContext<T>
) => TFunction | undefined

/**
 * Represents a property decorator using the 2023-11 proposal syntax.
 *
 * A function that decorates a class field and optionally returns an initializer function
 * to define the property's initial value.
 *
 * @param target - Always `undefined` for field decorators.
 * @param context - The context object providing metadata about the field.
 * @returns An initializer function for the property value.
 */
export type ProposalPropertyDecorator = (
  target: undefined,
  context: ClassFieldDecoratorContext
) => (initialValue: unknown) => unknown | undefined

/**
 * Represents an accessor decorator using the 2023-11 proposal syntax.
 *
 * A function that decorates a getter or setter method and optionally returns a new implementation.
 *
 * @template T - The type of the accessor being decorated.
 * @param target - The class prototype or static target containing the accessor.
 * @param context - The context object providing metadata about the accessor.
 * @returns The original or a modified accessor, or `undefined`.
 */
export type ProposalAccessorDecorator<T extends Function = Function> = <TFunction extends T>(
  target: TFunction,
  context: ClassAccessorDecoratorContext<T>
) => TFunction | undefined

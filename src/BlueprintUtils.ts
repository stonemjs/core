import {
  LogLevel,
  Arrayable,
  IBlueprint,
  MetaService,
  ILoggerClass,
  FactoryLogger,
  FactoryService,
  IConfiguration,
  MetaMiddleware,
  MiddlewareType,
  MiddlewareClass,
  ErrorHandlerType,
  EventHandlerType,
  MetaErrorHandler,
  MetaEventHandler,
  BlueprintContext,
  FactoryMiddleware,
  MetaEventListener,
  EventHandlerClass,
  ConfigurationClass,
  MetaServiceProvider,
  FactoryErrorHandler,
  MetaEventSubscriber,
  FactoryEventHandler,
  FactoryEventListener,
  FunctionalMiddleware,
  FactoryEventSubscriber,
  FactoryServiceProvider,
  FunctionalEventHandler,
  MetaAdapterErrorHandler,
  AdapterErrorHandlerType,
  FunctionalConfiguration
} from './declarations'
import { Event } from './events/Event'
import { isFunctionModule } from './utils'
import { IncomingEvent } from './events/IncomingEvent'
import { MetadataSymbol } from './decorators/Metadata'
import { StoneBlueprint } from './options/StoneBlueprint'
import { CONFIGURATION_KEY } from './decorators/constants'
import { OutgoingResponse } from './events/OutgoingResponse'

/**
 * Defines an application blueprint by merging user-defined blueprints with default options.
 *
 * This function allows users to define their own blueprints and merges them with
 * the default blueprint options provided by the framework.
 * It ensures that all necessary properties are available while allowing user customizations.
 *
 * @param configuration - The user-defined blueprint configuration.
 * @returns The fully defined application blueprint.
 *
 * @example
 * ```typescript
 * const appBlueprint = defineBlueprintConfig((blueprint) => {
 *   blueprint.set('stone.name', 'MyApp')
 * });
 * ```
 */
export const defineBlueprintConfig = (
  configuration:
  | FunctionalConfiguration
  | Partial<Record<'configure' | 'afterConfigure', FunctionalConfiguration>>
): ConfigurationClass => {
  let configure: FunctionalConfiguration
  let afterConfigure: FunctionalConfiguration

  if (isFunctionModule<FunctionalConfiguration>(configuration)) {
    configure = configuration
    afterConfigure = () => {}
  } else {
    configure = configuration.configure ?? (() => {})
    afterConfigure = configuration.afterConfigure ?? (() => {})
  }

  return class implements IConfiguration {
    configure = configure
    afterConfigure = afterConfigure
    static readonly [MetadataSymbol] = { [CONFIGURATION_KEY]: { isClass: true } }
  }
}

/**
 * Defines an error handler with metadata for the provided handler function.
 * This function allows users to define an error handler with metadata.
 *
 * @param module - The module handler function to be defined.
 * @param options - The metadata options for the handler.
 * @returns The defined error handler with metadata.
 */
export const defineErrorHandler = <U extends IncomingEvent = IncomingEvent, V = OutgoingResponse>(
  module: ErrorHandlerType<U, V>,
  options: Omit<MetaErrorHandler<U, V>, 'module'>
): MetaErrorHandler<U, V> => {
  return { ...options, module }
}

/**
 * Defines an adapter error handler with metadata for the provided handler function.
 * This function allows users to define an adapter error handler with metadata.
 *
 * @param module - The module handler function to be defined.
 * @param options - The metadata options for the handler.
 * @returns The defined error handler with metadata.
 */
export const defineAdapterErrorHandler = <RawEventType, RawResponseType, ExecutionContextType>(
  module: AdapterErrorHandlerType<RawEventType, RawResponseType, ExecutionContextType>,
  options: Omit<MetaAdapterErrorHandler<RawEventType, RawResponseType, ExecutionContextType>, 'module'>
): MetaAdapterErrorHandler<RawEventType, RawResponseType, ExecutionContextType> => {
  return { ...options, module }
}

/**
 * Defines a factory handler with metadata for the provided handler function.
 * This function allows users to define a factory handler with metadata.
 *
 * @param module - The module handler function to be defined.
 * @returns The defined factory handler with metadata.
*/
export const defineFactoryEventHandler = <U extends IncomingEvent = IncomingEvent, V = OutgoingResponse>(
  module: FactoryEventHandler<U, V>
): MetaEventHandler<U, V> => {
  return { module, isFactory: true }
}

/**
 * Defines a factory error handler with metadata for the provided handler function.
 * This function allows users to define a factory error handler with metadata.
 *
 * @param module - The module handler function to be defined.
 * @returns The defined error handler with metadata.
 */
export const defineFactoryErrorHandler = <U extends IncomingEvent = IncomingEvent, V = OutgoingResponse>(
  module: FactoryErrorHandler<U, V>
): MetaErrorHandler<U, V> => {
  return { module, isFactory: true }
}

/**
 * Defines a factory service provider with metadata for the provided module.
 *
 * @param module - The module handler function to be defined.
 * @returns The defined factory service provider with metadata.
*/
export const defineFactoryServiceProvider = (module: FactoryServiceProvider): MetaServiceProvider => {
  return { module, isFactory: true }
}

/**
 * Defines a factory service with metadata for the provided module.
 *
 * @param alias - The alias for the service.
 * @param module - The module handler function to be defined.
 * @returns The defined factory service with metadata.
*/
export const defineFactoryService = (alias: string | string[], module: FactoryService): MetaService => {
  return { alias, module, isFactory: true }
}

/**
 * Defines a factory event listener with metadata for the provided module.
 *
 * @param event - The event name to listen for.
 * @param module - The module handler function to be defined.
 * @returns The defined factory event listener with metadata.
*/
export const defineFactoryEventListener = <TEvent extends Event = Event>(
  event: string,
  module: FactoryEventListener<TEvent>
): MetaEventListener<TEvent> => {
  return { event, module, isFactory: true }
}

/**
 * Defines a factory event subscriber with metadata for the provided module.
 *
 * @param module - The module handler function to be defined.
 * @returns The defined factory event subscriber with metadata.
*/
export const defineFactoryEventSubscriber = (
  module: FactoryEventSubscriber
): MetaEventSubscriber => {
  return { module, isFactory: true }
}

/**
 * Defines a factory middleware with metadata for the provided module.
 *
 * @param module - The module handler function to be defined.
 * @param options - The metadata options for the middleware.
 * @returns The defined factory middleware with metadata.
*/
export const defineFactoryMiddleware = <U extends IncomingEvent = IncomingEvent, V extends OutgoingResponse = OutgoingResponse>(
  module: FactoryMiddleware<U, V>,
  options: Omit<MetaMiddleware<U, V>, 'module' | 'isClass' | 'isFactory'> = {}
): MetaMiddleware<U, V> => {
  return { ...options, module, isFactory: true, isClass: false }
}

/**
 * Defines a class middleware with metadata for the provided module.
 *
 * @param module - The module handler function to be defined.
 * @param options - The metadata options for the middleware.
 * @returns The defined class middleware with metadata.
*/
export const defineClassMiddleware = <U extends IncomingEvent = IncomingEvent, V extends OutgoingResponse = OutgoingResponse>(
  module: MiddlewareClass<U, V>,
  options: Omit<MetaMiddleware<U, V>, 'module' | 'isClass' | 'isFactory'> = {}
): MetaMiddleware<U, V> => {
  return { ...options, module, isClass: true, isFactory: false }
}

/**
 * Utility function to define a function-based event handler.
 *
 * @param module - The EventHandler module.
 * @returns The StoneBlueprint.
 */
export function defineEventHandler <U extends IncomingEvent = IncomingEvent, V = OutgoingResponse> (
  module: FunctionalEventHandler<U, V>
): Partial<StoneBlueprint>

/**
 * Utility function to define a factory-based event handler.
 *
 * @param module - The EventHandler module.
 * @param isFactory - Indicates if the handler is a factory function. e.g. `true` for a factory function.
 * @returns The StoneBlueprint.
 */
export function defineEventHandler <U extends IncomingEvent = IncomingEvent, V = OutgoingResponse> (
  module: FactoryEventHandler<U, V>,
  isFactory?: true
): Partial<StoneBlueprint>

/**
 * Utility function to define a factory-based event handler.
 *
 * @param module - The EventHandler module.
 * @param isFactory - Indicates if the handler is a factory function. e.g. `false` for a class.
 * @returns The StoneBlueprint.
 */
export function defineEventHandler <U extends IncomingEvent = IncomingEvent, V = OutgoingResponse> (
  module: EventHandlerClass<U, V>,
  isFactory?: false
): Partial<StoneBlueprint>

/**
 * Utility function to define an event handler.
 *
 * @param module - The EventHandler module.
 * @param isFactory - Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional handler.
 * @returns The StoneBlueprint.
 */
export function defineEventHandler <U extends IncomingEvent = IncomingEvent, V = OutgoingResponse> (
  module: EventHandlerType<U, V>,
  isFactory?: boolean
): Partial<StoneBlueprint> {
  return {
    stone: {
      kernel: {
        eventHandler: {
          isFactory,
          isClass: isFactory === false,
          module: module as EventHandlerType<IncomingEvent, OutgoingResponse>
        }
      }
    }
  }
}

/**
 * Utility function to define a function-based blueprint middleware.
 *
 * @param module - The Middleware module.
 * @param isFactory - Indicates if the Middleware is a function. e.g. `undefined` for a function.
 * @param options - The options for the Middleware.
 * @returns The StoneBlueprint.
 */
export function defineBlueprintMiddleware (
  module: Arrayable<FunctionalMiddleware<BlueprintContext, IBlueprint>>,
  isFactory?: undefined,
  options?: { params?: any[], priority?: number }
): Partial<StoneBlueprint>

/**
 * Utility function to define a factory-based blueprint middleware.
 *
 * @param module - The Middleware module.
 * @param isFactory - Indicates if the Middleware is a factory function. e.g. `true` for a factory function.
 * @param options - The options for the Middleware.
 * @returns The StoneBlueprint.
 */
export function defineBlueprintMiddleware (
  module: Arrayable<FactoryMiddleware<BlueprintContext, IBlueprint>>,
  isFactory?: true,
  options?: { params?: any[], priority?: number }
): Partial<StoneBlueprint>

/**
 * Utility function to define a class-based blueprint middleware.
 *
 * @param module - The Middleware module.
 * @param isFactory - Indicates if the Middleware is a factory function. e.g. `false` for a class.
 * @param options - The options for the Middleware.
 * @returns The StoneBlueprint.
 */
export function defineBlueprintMiddleware (
  module: Arrayable<MiddlewareClass<BlueprintContext, IBlueprint>>,
  isFactory?: false,
  options?: { params?: any[], priority?: number }
): Partial<StoneBlueprint>

/**
 * Utility function to define a blueprint middleware.
 *
 * @param module - The Middleware module.
 * @param isFactory - Indicates if the Middleware is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional Middleware.
 * @param options - The options for the Middleware.
 * @returns The StoneBlueprint.
 */
export function defineBlueprintMiddleware (
  module: Arrayable<MiddlewareType<BlueprintContext, IBlueprint>>,
  isFactory?: boolean,
  options?: { params?: any[], priority?: number }
): Partial<StoneBlueprint> {
  const middleware: Array<MetaMiddleware<BlueprintContext, IBlueprint>> = [module].flat().map((item) => ({
    ...options,
    isFactory,
    isClass: isFactory === false,
    module: item
  }))

  return {
    stone: {
      blueprint: {
        middleware
      }
    }
  }
}

/**
 * Utility function to define a class-based logger.
 *
 * @param module - The Logger module.
 * @param isFactory - Indicates if the Logger is a factory function. e.g. `false` for a class.
 * @param options - The options for the Logger.
 * @returns The StoneBlueprint.
 */
export function defineLogger (
  module: ILoggerClass | FactoryLogger,
  isFactory?: false,
  options?: { level?: LogLevel } & Record<string, unknown>
): Partial<StoneBlueprint>

/**
 * Utility function to define a logger.
 *
 * @param module - The Logger module.
 * @param isFactory - Indicates if the Logger is a factory function. e.g. `true` for a factory function, `false` for a class.
 * @param options - The options for the Logger.
 * @returns The StoneBlueprint.
 */
export function defineLogger (
  module: ILoggerClass | FactoryLogger,
  isFactory?: boolean,
  options?: { level?: LogLevel } & Record<string, unknown>
): Partial<StoneBlueprint> {
  return {
    stone: {
      logger: {
        ...options,
        resolver: (blueprint: IBlueprint) => {
          return isFactory === false
            ? new (module as ILoggerClass).prototype.constructor({ blueprint })
            : (module as FactoryLogger)({ blueprint })
        }
      }
    }
  }
}

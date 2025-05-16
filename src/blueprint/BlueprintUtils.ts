import {
  Arrayable,
  IBlueprint,
  IConfiguration,
  MetaMiddleware,
  MiddlewareType,
  MiddlewareClass,
  EventHandlerType,
  BlueprintContext,
  FactoryMiddleware,
  EventHandlerClass,
  ConfigurationClass,
  FactoryEventHandler,
  FunctionalMiddleware,
  FunctionalEventHandler,
  FunctionalConfiguration
} from '../declarations'
import { IncomingEvent } from '../events/IncomingEvent'
import { MetadataSymbol } from '../decorators/Metadata'
import { CONFIGURATION_KEY } from '../decorators/constants'
import { isFunctionModule, mergeBlueprints } from '../utils'
import { OutgoingResponse } from '../events/OutgoingResponse'
import { AppConfig, stoneBlueprint, StoneBlueprint } from '../options/StoneBlueprint'

/**
 * Declares a complete Stone application blueprint using a function-based event handler.
 *
 * @param module - A function as an event handler.
 * @param options - Application-level configuration.
 * @param blueprints - Additional partial blueprints to merge.
 * @returns A fully merged Stone blueprint.
 */
export function defineStoneApp<U extends IncomingEvent = IncomingEvent, V = OutgoingResponse> (
  module: FunctionalEventHandler<U, V>,
  options?: Partial<AppConfig<U>>,
  blueprints?: Array<StoneBlueprint<any, any> & Record<string, any>>
): StoneBlueprint<U>

/**
 * Declares a complete Stone application blueprint using a factory-based event handler.
 *
 * @param module - A factory function that returns an event handler.
 * @param options - Application-level configuration with `{ isFactory: true }`.
 * @param blueprints - Additional partial blueprints to merge.
 * @returns A fully merged Stone blueprint.
 */
export function defineStoneApp<U extends IncomingEvent = IncomingEvent, V = OutgoingResponse> (
  module: FactoryEventHandler<U, V>,
  options: Partial<AppConfig<U>> & { isFactory: true },
  blueprints?: Array<StoneBlueprint<any, any> & Record<string, any>>
): StoneBlueprint<U>

/**
 * Declares a complete Stone application blueprint using a class-based event handler.
 *
 * @param module - A class constructor for the event handler.
 * @param options - Application-level configuration with `{ isFactory: false }`.
 * @param blueprints - Additional partial blueprints to merge.
 * @returns A fully merged Stone blueprint.
 */
export function defineStoneApp<U extends IncomingEvent = IncomingEvent, V = OutgoingResponse> (
  module: EventHandlerClass<U, V>,
  options: Partial<AppConfig<U>> & { isFactory: false },
  blueprints?: Array<StoneBlueprint<any, any> & Record<string, any>>
): StoneBlueprint<U>

/**
 * Declares a complete Stone application blueprint.
 *
 * This utility combines a main event handler with additional blueprints and configuration options
 * to define a full application. The event handler can be functional, class-based, or factory-based.
 *
 * @param module - A function, factory, or class that handles incoming events.
 * @param options - Optional application-level configuration (log level, middleware, lifecycle, etc.)
 * @param blueprints - Additional partial blueprints to merge into the final one.
 * @returns A fully merged Stone blueprint representing the application.
 *
 * @example
 * ```ts
 * defineStoneApp((event) => new OutgoingResponse({ content: 'ok' }))
 * defineStoneApp(MyHandlerClass, { isFactory: false })
 * defineStoneApp(() => (event) => new OutgoingResponse({ content: 'ok' }), { isFactory: true })
 * ```
 */
export function defineStoneApp<U extends IncomingEvent = IncomingEvent, V = OutgoingResponse> (
  module: EventHandlerType<U, V>,
  options: Partial<AppConfig<U>> & { isFactory?: boolean } = {},
  blueprints: Array<StoneBlueprint<any, any> & Record<string, any>> = []
): StoneBlueprint<U> {
  const eventHandler = {
    module,
    isClass: options?.isFactory === false,
    isFactory: options?.isFactory === true
  }

  return mergeBlueprints<U>(
    stoneBlueprint,
    ...blueprints,
    {
      stone: {
        ...options,
        kernel: {
          ...options.kernel,
          eventHandler
        }
      }
    }
  )
}

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
 * const appBlueprint = defineConfig((blueprint) => {
 *   blueprint.set('stone.name', 'MyApp')
 * });
 * ```
 */
export function defineConfig (
  configuration:
  | FunctionalConfiguration
  | Partial<Record<'configure' | 'afterConfigure', FunctionalConfiguration>>
): ConfigurationClass {
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
 * Utility function to define a function-based blueprint middleware.
 *
 * @param module - The Middleware module.
 * @param options - The options for the Middleware.
 * @returns The StoneBlueprint.
 */
export function defineBlueprintMiddleware (
  module: Arrayable<FunctionalMiddleware<BlueprintContext, IBlueprint>>,
  options?: { params?: any[], priority?: number }
): Partial<StoneBlueprint>

/**
 * Utility function to define a factory-based blueprint middleware.
 *
 * @param module - The Middleware module.
 * @param options - The options for the Middleware.
 * @returns The StoneBlueprint.
 */
export function defineBlueprintMiddleware (
  module: Arrayable<FactoryMiddleware<BlueprintContext, IBlueprint>>,
  options?: { params?: any[], priority?: number, isFactory?: true }
): Partial<StoneBlueprint>

/**
 * Utility function to define a class-based blueprint middleware.
 *
 * @param module - The Middleware module.
 * @param options - The options for the Middleware.
 * @returns The StoneBlueprint.
 */
export function defineBlueprintMiddleware (
  module: Arrayable<MiddlewareClass<BlueprintContext, IBlueprint>>,
  options?: { params?: any[], priority?: number, isFactory?: false }
): Partial<StoneBlueprint>

/**
 * Utility function to define a blueprint middleware.
 *
 * @param module - The Middleware module.
 * @param options - The options for the Middleware.
 * @returns The StoneBlueprint.
 */
export function defineBlueprintMiddleware (
  module: Arrayable<MiddlewareType<BlueprintContext, IBlueprint>>,
  options?: { params?: any[], priority?: number, isFactory?: boolean }
): Partial<StoneBlueprint> {
  const middleware: Array<MetaMiddleware<BlueprintContext, IBlueprint>> = [module].flat().map((item) => ({
    ...options,
    module: item,
    isClass: options?.isFactory === false,
    isFactory: options?.isFactory === true
  }))

  return {
    stone: {
      blueprint: {
        middleware
      }
    }
  }
}

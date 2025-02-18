import deepmerge from 'deepmerge'
import { Event } from './events/Event'
import { isObjectLike } from 'lodash-es'
import { SetupError } from './errors/SetupError'
import { IncomingEvent } from './events/IncomingEvent'
import { AdapterConfig } from './options/AdapterConfig'
import { StoneBlueprint } from './options/StoneBlueprint'
import { OutgoingResponse } from './events/OutgoingResponse'
import { isConstructor, isFunction } from '@stone-js/pipeline'
import { EventHandlerType, MetaEventHandler, IBlueprint, ErrorHandlerType, MetaErrorHandler, AdapterErrorHandlerType, MetaAdapterErrorHandler, FactoryEventHandler, FactoryErrorHandler, FactoryServiceProvider, MetaServiceProvider, FactoryService, MetaService, FactoryEventListener, MetaEventListener, FactoryEventSubscriber, MetaEventSubscriber, FactoryMiddleware, MetaMiddleware, MiddlewareClass } from './declarations'

/**
 * Export utils functions from the pipeline package.
 */
export { isConstructor, isFunction, isString } from '@stone-js/pipeline'

/**
 * Merges multiple blueprints into a single application blueprint.
 *
 * This function takes any number of blueprint objects and merges them into one,
 * with later blueprints overwriting properties of earlier ones in case of conflicts.
 * It uses deep merging to ensure nested properties are also combined appropriately.
 * Note: The `deepmerge` function can lead to unexpected results if objects have circular references.
 * Consider handling such cases or documenting this behavior if it applies to your usage.
 *
 * @param blueprints - An array of blueprints to be merged.
 * @returns The merged application blueprint.
 *
 * @throws {SetupError} - If any of the provided blueprints are not valid objects.
 *
 * @example
 * ```typescript
 * const mergedBlueprint = mergeBlueprints(blueprint1, blueprint2);
 * ```
 */
export const mergeBlueprints = <
  U extends IncomingEvent = IncomingEvent,
  V extends OutgoingResponse = OutgoingResponse
>(...blueprints: Array<StoneBlueprint<U, V> | Record<string, any>>): StoneBlueprint<U, V> => {
  validateBlueprints(blueprints)
  return blueprints.reduce<StoneBlueprint<U, V>>((prev, curr) => deepmerge<StoneBlueprint<U, V>>(prev, curr, { isMergeableObject: isMergeable }), { stone: {} })
}

/**
 * Set the current adapter configuration by platform.
 *
 * @param blueprint - The blueprint object containing the adapter configurations.
 * @param platform - The platform identifier to explicitly select the adapter.
 */
export const setCurrentAdapterByPlatform = (blueprint: IBlueprint, platform: string): void => {
  const adapters = blueprint.get<AdapterConfig[]>('stone.adapters', [])
  const selectedAdapter = adapters.find((v) => v.platform === platform)
  selectedAdapter !== undefined && blueprint.set('stone.adapter', selectedAdapter)
}

/**
 * Defines an application blueprint by merging user-defined blueprints with default options.
 *
 * This function allows users to define their own blueprints and merges them with
 * the default blueprint options provided by the framework.
 * It ensures that all necessary properties are available while allowing user customizations.
 *
 * @param userBlueprints - An array of partial user-defined blueprints to be merged with defaults.
 * @returns The fully defined application blueprint.
 *
 * @throws {SetupError} - If any of the provided blueprints are not valid objects.
 *
 * @example
 * ```typescript
 * const appBlueprint = defineAppBlueprint(customBlueprint1, customBlueprint2);
 * ```
 */
export const defineAppBlueprint = <U extends IncomingEvent = IncomingEvent, V extends OutgoingResponse = OutgoingResponse>(
  ...userBlueprints: Array<StoneBlueprint<U, V>>
): StoneBlueprint<U, V> => {
  validateBlueprints(userBlueprints)
  return mergeBlueprints(...userBlueprints)
}

/**
 * Defines an application handler with metadata for the provided handler function.
 * This function allows users to define an application handler with metadata.
 *
 * @param module - The module handler function to be defined.
 * @param options - The metadata options for the handler.
 * @returns The defined application handler with metadata.
 */
export const defineHandler = <U extends IncomingEvent = IncomingEvent, V = OutgoingResponse>(
  module: EventHandlerType<U, V>,
  options: Omit<MetaEventHandler<U, V>, 'module'> = {}
): MetaEventHandler<U, V> => {
  return { ...options, module }
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
export const factoryHandler = <U extends IncomingEvent = IncomingEvent, V = OutgoingResponse>(
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
export const factoryErrorHandler = <U extends IncomingEvent = IncomingEvent, V = OutgoingResponse>(
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
export const factoryServiceProvider = <U extends IncomingEvent = IncomingEvent, V extends OutgoingResponse = OutgoingResponse>(
  module: FactoryServiceProvider<U, V>
): MetaServiceProvider<U, V> => {
  return { module, isFactory: true }
}

/**
 * Defines a factory service with metadata for the provided module.
 *
 * @param alias - The alias for the service.
 * @param module - The module handler function to be defined.
 * @returns The defined factory service with metadata.
*/
export const factoryService = (alias: string | string[], module: FactoryService): MetaService => {
  return { alias, module, isFactory: true }
}

/**
 * Defines a factory event listener with metadata for the provided module.
 *
 * @param event - The event name to listen for.
 * @param module - The module handler function to be defined.
 * @returns The defined factory event listener with metadata.
*/
export const factoryEventListener = <TEvent extends Event = Event>(
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
export const factoryEventSubscriber = (
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
export const factoryMiddleware = <U extends IncomingEvent = IncomingEvent, V extends OutgoingResponse = OutgoingResponse>(
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
export const classMiddleware = <U extends IncomingEvent = IncomingEvent, V extends OutgoingResponse = OutgoingResponse>(
  module: MiddlewareClass<U, V>,
  options: Omit<MetaMiddleware<U, V>, 'module' | 'isClass' | 'isFactory'> = {}
): MetaMiddleware<U, V> => {
  return { ...options, module, isClass: true, isFactory: false }
}

/**
 * Check if the provided value is a Stone blueprint.
 * This function checks if the value is an object and contains the required `stone` property.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a Stone blueprint, otherwise `false`.
 */
export const isStoneBlueprint = (value: any): value is StoneBlueprint => {
  return typeof value?.stone === 'object'
}

/**
 * Check if the provided value is an object module.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an object module, otherwise `false`.
 */
export const isObjectLikeModule = <ObjectModuleType>(value: any): value is ObjectModuleType => {
  return isObjectLike(value)
}

/**
 * Check if the provided value is a function module.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a function module, otherwise `false`.
 */
export const isFunctionModule = <FunctionModuleType>(value: any): value is FunctionModuleType => {
  return isFunction(value)
}

/**
 * Check if the provided value is a meta module.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a meta module, otherwise `false`.
 */
export const isMetaModule = <MetaModuleType>(value: any): value is Record<'module', MetaModuleType> => {
  return isFunction(value?.module)
}

/**
 * Check if the provided value is a meta function module.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a meta function module, otherwise `false`.
 */
export const isMetaFunctionModule = <FunctionModuleType>(value: any): value is Record<'module', FunctionModuleType> => {
  return isFunction(value?.module) && value?.isClass !== true && value?.isFactory !== true
}

/**
 * Check if the provided value is a meta class module.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a meta class module, otherwise `false`.
*/
export const isMetaClassModule = <ClassModuleType>(value: any): value is Record<'module', ClassModuleType> => {
  return value?.isClass === true && isConstructor(value?.module)
}

/**
 * Check if the provided value is a meta factory module.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a meta factory module, otherwise `false`.
 */
export const isMetaFactoryModule = <FactoryModuleType>(value: any): value is Record<'module', FactoryModuleType> => {
  return value?.isFactory === true && isFunction(value?.module)
}

/**
 * Check if the provided value is a meta alias module.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a meta alias module, otherwise `false`.
 */
export const isMetaAliasModule = <AliasModuleType>(value: any): value is Record<'module', AliasModuleType> => {
  return value?.isAlias === true && isFunction(value?.module)
}

/**
 * Check if the provided handler has the specified hook.
 *
 * @param handler - The handler to check.
 * @param hookName - The hook name to check.
 * @returns `true` if the handler has the specified hook, otherwise `false`.
 */
export const isHandlerHasHook = <HandlerType>(
  handler: any,
  hookName: keyof HandlerType
): handler is HandlerType & Record<typeof hookName, (...args: any[]) => any> => {
  return typeof handler[hookName] === 'function'
}

/**
 * Check if the provided value is not empty.
 *
 * @param value - The value to check.
 * @returns `true` if the value is not empty, otherwise `false`.
 */
export const isNotEmpty = <ValueType = unknown>(value: unknown): value is ValueType => {
  if (value === null || value === undefined) return false

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length > 0
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size > 0
  }

  if (typeof value === 'object') {
    return Object.keys(value).length > 0 ||
      Object.getOwnPropertySymbols(value).length > 0
  }

  return true
}

/**
 * Check if the provided value is empty.
 *
 * @param value - The value to check.
 * @returns `true` if the value is empty, otherwise `false`.
 */
export const isEmpty = (value: unknown): value is undefined | null | 0 | false | '' => {
  return !isNotEmpty(value)
}

/**
 * Custom function to determine if an object is mergeable.
 * Helps to avoid issues with circular references.
 *
 * @param value - The value to check for mergeability.
 * @returns Whether the value is mergeable or not.
 *
 * @example
 * ```typescript
 * const canMerge = isMergeable(someValue);
 * ```
 */
const isMergeable = (value: any): boolean => {
  return value !== undefined && typeof value === 'object' && !Object.isFrozen(value)
}

/**
 * Validates that the provided blueprints are valid objects.
 *
 * This function checks if each blueprint in the provided array is an object,
 * throwing a SetupError if an invalid blueprint is found.
 *
 * @param blueprints - An array of blueprints to validate.
 * @throws {SetupError} - If any of the provided blueprints are not valid objects.
 *
 * @example
 * ```typescript
 * validateBlueprints([blueprint1, blueprint2]);
 * ```
 */
const validateBlueprints = <
  U extends IncomingEvent = IncomingEvent,
  V extends OutgoingResponse = OutgoingResponse
>(blueprints: Array<StoneBlueprint<U, V> | Record<string, any>>): void => {
  blueprints.forEach((blueprint, index) => {
    if (typeof blueprint !== 'object' || blueprint === null) {
      throw new SetupError(`Invalid blueprint at index ${index}. Expected an object but received ${typeof blueprint}.`)
    }
  })
}

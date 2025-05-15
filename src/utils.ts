import deepmerge from 'deepmerge'
import { isObjectLike } from 'lodash-es'
import { SetupError } from './errors/SetupError'
import { IncomingEvent } from './events/IncomingEvent'
import { StoneBlueprint } from './options/StoneBlueprint'
import { OutgoingResponse } from './events/OutgoingResponse'
import { isConstructor, isFunction } from '@stone-js/pipeline'

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
  return isFunctionModule(handler?.[hookName])
}

/**
 * Check if the provided value is not empty.
 *
 * @param value - The value to check.
 * @returns `true` if the value is not empty, otherwise `false`.
 */
export const isNotEmpty = <ValueType = unknown>(value: unknown): value is ValueType => {
  if (value === null || value === undefined || value === false || value === 0) return false

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length > 0
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size > 0
  }

  if (typeof value === 'object') {
    return Object.keys(value).length > 0 || Object.getOwnPropertySymbols(value).length > 0
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
export const validateBlueprints = <
  U extends IncomingEvent = IncomingEvent,
  V extends OutgoingResponse = OutgoingResponse
>(blueprints: Array<StoneBlueprint<U, V> | Record<string, any>>): void => {
  blueprints.forEach((blueprint, index) => {
    if (typeof blueprint !== 'object' || blueprint === null) {
      throw new SetupError(`Invalid blueprint at index ${index}. Expected an object but received ${typeof blueprint}.`)
    }
  })
}

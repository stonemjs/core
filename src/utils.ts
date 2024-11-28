import deepmerge from 'deepmerge'
import { SetupError } from './errors/SetupError'
import { StoneBlueprint } from './options/StoneBlueprint'

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
export const mergeBlueprints = (...blueprints: StoneBlueprint[]): StoneBlueprint => {
  validateBlueprints(blueprints)
  return blueprints.reduce<StoneBlueprint>((prev, curr) => deepmerge<StoneBlueprint>(prev, curr, { isMergeableObject: isMergeable }), { stone: {} })
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
export const defineAppBlueprint = (...userBlueprints: StoneBlueprint[]): StoneBlueprint => {
  validateBlueprints(userBlueprints)
  return mergeBlueprints(...userBlueprints)
}

/**
 * Checks if the given value is a constructor function.
 *
 * This function determines if the provided value is a function
 * that can be used as a constructor by verifying if it has a prototype.
 *
 * @param value - The value to be checked.
 * @returns True if the value is a constructor function, false otherwise.
 *
 * @example
 * ```typescript
 * class MyClass {}
 * const result = isConstructor(MyClass); // true
 * ```
 *
 * @example
 * ```typescript
 * const notAConstructor = () => {};
 * const result = isConstructor(notAConstructor); // false
 * ```
 */
export const isConstructor = (value: unknown): boolean => {
  return typeof value === 'function' && Object.prototype.hasOwnProperty.call(value, 'prototype')
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
const validateBlueprints = (blueprints: StoneBlueprint[]): void => {
  blueprints.forEach((blueprint, index) => {
    if (typeof blueprint !== 'object' || blueprint === null) {
      throw new SetupError(`Invalid blueprint at index ${index}. Expected an object but received ${typeof blueprint}.`)
    }
  })
}

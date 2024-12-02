import { mergeBlueprints } from '../utils'
import { BLUEPRINT_KEY } from './constants'
import { IncomingEvent } from '../events/IncomingEvent'
import { StoneBlueprint } from '../options/StoneBlueprint'
import { ClassMethodType, ClassType } from '../definitions'
import { OutgoingResponse } from '../events/OutgoingResponse'

/**
 * Set metadata on a given decorator context.
 *
 * @param context - The decorator context where metadata is being set.
 * @param key - The key for the metadata entry.
 * @param value - The value of the metadata entry.
 */
export function setMetadata (context: DecoratorContext, key: PropertyKey, value: unknown): void {
  context.metadata[key] = value
}

/**
 * Check if a class has specific metadata.
 *
 * @param Class - The class to check for metadata.
 * @param key - The key of the metadata to check.
 * @returns True if the metadata key exists on the class, false otherwise.
 */
export function hasMetadata<T extends ClassType> (Class: T, key: PropertyKey): boolean {
  return hasMetadataSymbol(Class) && Class[Symbol.metadata][key] !== undefined
}

/**
 * Get the metadata value for a given key from a class.
 *
 * @param Class - The class to get the metadata from.
 * @param key - The key of the metadata to retrieve.
 * @param defaultValue - The default value to return if the metadata key is not found.
 * @returns The metadata value or the default value if the key does not exist.
 */
export function getMetadata<T extends ClassType, R = unknown> (Class: T, key: PropertyKey, defaultValue?: R): R {
  return (hasMetadataSymbol(Class) ? Class[Symbol.metadata][key] : defaultValue) as R
}

/**
 * Get all metadata from a class.
 *
 * @param Class - The class to get all metadata from.
 * @param defaultValue - The default value to return if no metadata is found.
 * @returns All metadata or the default value if no metadata exists.
 */
export function getAllMetadata<T extends ClassType, R = unknown> (Class: T, defaultValue: R): R {
  return (hasMetadataSymbol(Class) ? Class[Symbol.metadata] : defaultValue) as R
}

/**
 * Remove a specific metadata entry from a class.
 *
 * @param Class - The class to remove metadata from.
 * @param key - The key of the metadata to remove.
 */
export function removeMetadata<T extends ClassType> (Class: T, key: PropertyKey): void {
  if (hasMetadataSymbol(Class)) {
    Class[Symbol.metadata][key] = undefined
  }
}

/**
 * Set metadata on a class using a class decorator.
 *
 * @param key - The key for the metadata entry.
 * @param value - The value of the metadata entry.
 * @returns A class decorator function that sets the metadata.
 */
export function setClassMetadata<T extends ClassType = ClassType> (key: PropertyKey, value: unknown): (_: T, context: ClassDecoratorContext<T>) => void {
  return createMetadataSetter<T, ClassDecoratorContext<T>>(key, value)
}

/**
 * Set metadata on a class method using a method decorator.
 *
 * @param key - The key for the metadata entry.
 * @param value - The value of the metadata entry.
 * @returns A method decorator function that sets the metadata.
 */
export function setMethodMetadata<T = unknown, V extends ClassMethodType = ClassMethodType> (
  key: PropertyKey, value: unknown
): (_: V, context: ClassMethodDecoratorContext<T, V>) => void {
  return createMetadataSetter<V, ClassMethodDecoratorContext<T, V>>(key, value)
}

/**
 * Set metadata on a class field using a field decorator.
 *
 * @param key - The key for the metadata entry.
 * @param value - The value of the metadata entry.
 * @returns A field decorator function that sets the metadata.
 */
export function setFieldMetadata<T = unknown, V = unknown> (
  key: PropertyKey, value: unknown
): (_: V, context: ClassFieldDecoratorContext<T, V>) => void {
  return createMetadataSetter<V, ClassFieldDecoratorContext<T, V>>(key, value)
}

/**
 * Add Blueprint on a given decorator context.
 *
 * @param Class - The class to get all metadata from.
 * @param context - The decorator context where metadata is being set.
 * @param blueprints - The list of blueprints.
 */
export function addBlueprint<T extends ClassType, U extends IncomingEvent = IncomingEvent, V extends OutgoingResponse = OutgoingResponse> (Class: T, context: DecoratorContext, ...blueprints: Array<StoneBlueprint<U, V>>): void {
  context.metadata[BLUEPRINT_KEY] = mergeBlueprints(getMetadata<T, StoneBlueprint<U, V>>(Class, BLUEPRINT_KEY, { stone: {} }), ...blueprints)
}

/**
 * Check if a class has blueprint.
 *
 * @param Class - The class to check for metadata.
 * @returns True if the metadata and BLUEPRINT_KEY keys exist on the class, false otherwise.
 */
export function hasBlueprint<T extends ClassType> (Class: T): boolean {
  return hasMetadataSymbol(Class) && Class[Symbol.metadata][BLUEPRINT_KEY] !== undefined
}

/**
 * Get the blueprint value from a class.
 *
 * @param Class - The class to get the blueprint from.
 * @param defaultValue - The default value to return if the blueprint key is not found.
 * @returns The blueprint value or the default value if the key does not exist.
 */
export function getBlueprint<T extends ClassType, R = StoneBlueprint> (Class: T, defaultValue?: R): R {
  return (hasMetadataSymbol(Class) ? Class[Symbol.metadata][BLUEPRINT_KEY] as StoneBlueprint : defaultValue) as R
}

/**
 * Type guard to check if a class has metadata.
 *
 * @param target - The target class to check.
 * @returns True if the target has metadata, false otherwise.
 */
function hasMetadataSymbol (target: any): target is { [Symbol.metadata]: Record<PropertyKey, unknown> } {
  return target !== undefined && typeof target[Symbol.metadata] !== 'undefined'
}

/**
 * Generalized function to set metadata on a given context.
 *
 * @param key - The key for the metadata entry.
 * @param value - The value of the metadata entry.
 * @returns A decorator function that sets the metadata.
 */
function createMetadataSetter<T, C> (key: PropertyKey, value: unknown): (_: T, context: C) => void {
  return (_: T, context: C) => setMetadata(context as any, key, value)
}

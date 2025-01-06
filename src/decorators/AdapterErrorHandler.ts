import { ClassType } from '../definitions'
import { setClassMetadata } from './Metadata'
import { ADAPTER_ERROR_HANDLER_KEY } from './constants'

/**
 * AdapterErrorHandler options.
 *
 * This interface defines the AdapterErrorHandler options for marking a class as a AdapterErrorHandler.
 */
export interface AdapterErrorHandlerOptions {
  /**
   * Additional configuration settings for the AdapterErrorHandler, if needed.
   */
  error: string | string[]
}

/**
 * AdapterErrorHandler decorator to set imperative configuration.
 *
 * @example
 * ```typescript
 * @AdapterErrorHandler({ error: ['Error', 'RuntimeError'] })
 * class MyClass {
 *   // ...
 * }
 * ```
 *
 * @param options - The AdapterErrorHandler options.
 * @returns A class decorator function that sets the metadata using the provided options.
 */
export const AdapterErrorHandler = <T extends ClassType = ClassType>(options: AdapterErrorHandlerOptions): ClassDecorator => {
  return setClassMetadata<T>(ADAPTER_ERROR_HANDLER_KEY, options)
}

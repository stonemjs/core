import { ClassType } from '../definitions'
import { setClassMetadata } from './Metadata'
import { ERROR_HANDLER_KEY } from './constants'

/**
 * ErrorHandler options.
 *
 * This interface defines the ErrorHandler options for marking a class as a ErrorHandler.
 */
export interface ErrorHandlerOptions {
  /**
   * Additional configuration settings for the ErrorHandler, if needed.
   */
  error: string | string[]
}

/**
 * ErrorHandler decorator to set imperative configuration.
 *
 * @example
 * ```typescript
 * @ErrorHandler({ error: ['Error', 'RuntimeError'] })
 * class MyClass {
 *   // ...
 * }
 * ```
 *
 * @param options - The ErrorHandler options.
 * @returns A class decorator function that sets the metadata using the provided options.
 */
export const ErrorHandler = <T extends ClassType = ClassType>(options: ErrorHandlerOptions): ClassDecorator => {
  return setClassMetadata<T>(ERROR_HANDLER_KEY, options)
}

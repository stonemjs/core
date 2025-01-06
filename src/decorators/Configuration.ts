import { ClassType } from '../definitions'
import { setClassMetadata } from './Metadata'
import { CONFIGURATION_KEY } from './constants'

/**
 * Configuration options.
 *
 * This interface defines the configuration options for marking a class as a Configuration.
 */
export interface ConfigurationOptions {
  /**
   * Additional configuration settings for the Configuration, if needed.
   */
  [key: string]: unknown
}

/**
 * Configuration decorator to set imperative configuration.
 *
 * @example
 * ```typescript
 * @Configuration()
 * class MyClass {
 *   // ...
 * }
 * ```
 *
 * @param options - The configuration options.
 * @returns A class decorator function that sets the metadata using the provided options.
 */
export const Configuration = <T extends ClassType = ClassType>(options: ConfigurationOptions = {}): ClassDecorator => {
  return setClassMetadata<T>(CONFIGURATION_KEY, options)
}

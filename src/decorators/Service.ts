import { SERVICE_KEY } from './constants'
import { ClassType } from '../definitions'
import { setClassMetadata } from './Metadata'

/**
 * Service options.
 *
 * This interface defines the configuration options for marking a class as a service.
 */
export interface ServiceOptions {
  /**
   * Whether the service should be treated as a singleton.
   * A singleton service will only have one instance in the container.
   * Optional.
   */
  singleton?: boolean

  /**
   * Alias or aliases for the service, used for identification or access.
   * Can be a single alias or an array of aliases.
   */
  alias: string | string[]
}

/**
 * Service decorator to mark a class as a service and automatically bind it to the container.
 *
 * This decorator is useful for marking classes that should be treated as services by the Stone.js framework,
 * making them easily injectable and manageable by the service container.
 *
 * @param options - The configuration options for the service, including singleton and alias settings.
 * @returns A decorator function to set metadata on the target class.
 *
 * @example
 * ```typescript
 * @Service({ singleton: true, alias: 'MyService' })
 * class MyService {
 *   // Service class logic here.
 * }
 * ```
 */
export const Service = <T extends ClassType = ClassType>(options: Partial<ServiceOptions> = {}): ClassDecorator => {
  return setClassMetadata<T>(SERVICE_KEY, options)
}

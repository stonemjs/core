import { Service } from './Service'

/**
 * Injectable decorator to mark a class as a service and automatically bind it to the container.
 *
 * This decorator can be used to easily mark a class as injectable within the Stone.js framework,
 * allowing it to be managed by the service container.
 *
 * @param options - The configuration options for the service.
 * @returns A function to set the class as a service.
 *
 * @example
 * ```typescript
 * @Injectable({ singleton: true, alias: 'MyInjectableService' })
 * class MyInjectableService {
 *   // Service class logic here.
 * }
 * ```
 */
export const Injectable = Service

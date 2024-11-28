import { ClassType } from '../definitions'
import { MIDDLEWARE_KEY } from './constants'
import { setClassMetadata } from './Metadata'

/**
 * Middleware options.
 *
 * This interface defines the configuration options for marking a class as middleware.
 */
export interface MiddlewareOptions {
  /**
   * The params to pass to the middleware.
   */
  params?: unknown[]

  /**
   * The execution priority of the middleware.
   */
  priority?: number

  /**
   * Set as Kernel middleware
   */
  global?: boolean
}

/**
 * Middleware decorator to mark a class as middleware within the Stone.js framework.
 *
 * This decorator is used to customize classes as middleware, allowing them to be registered and managed
 * as part of the request/response lifecycle or other layers such as adapter, kernel, or router.
 *
 * @param options - The configuration options for the middleware, including platform, priority, singleton registration, alias, layer, and type.
 * @returns A decorator function to set metadata on the target class.
 *
 * @example
 * ```typescript
 * @Middleware({ platform: 'node', priority: 1, singleton: true, alias: 'MyMiddleware', layer: 'adapter', type: 'input' })
 * class MyMiddleware {
 *   // Middleware class logic here.
 * }
 * ```
 */
export const Middleware = <T extends ClassType = ClassType>(options: MiddlewareOptions = {}): ((target: T, context: ClassDecoratorContext<T>) => void) => {
  return setClassMetadata<T>(MIDDLEWARE_KEY, options)
}

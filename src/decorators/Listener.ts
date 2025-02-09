import { ClassType } from '../declarations'
import { LISTENER_KEY } from './constants'
import { setClassMetadata } from './Metadata'

/**
 * Listener options.
 *
 * This interface defines the configuration options for marking a class as a listener.
 */
export interface ListenerOptions {
  /**
   * The event that the listener should handle.
   */
  event: string
}

/**
 * Listener decorator to mark a class as a listener for a specific event.
 *
 * This decorator is useful for customizing classes that need to listen for specific events within the Stone.js framework.
 * It allows the class to be recognized and managed by the event-handling system.
 *
 * @param options - The configuration options for the listener, including the event to listen for.
 * @returns A decorator function to set metadata on the target class.
 *
 * @example
 * ```typescript
 * @Listener({ event: 'UserRegistered' })
 * class UserRegisteredListener {
 *   // Listener class logic here.
 * }
 * ```
 */
export const Listener = <T extends ClassType = ClassType>(options: ListenerOptions): ClassDecorator => {
  return setClassMetadata<T>(LISTENER_KEY, { ...options, isClass: true })
}

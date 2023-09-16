import { Event } from './Event'
import NodeEventEmitter from 'node:events'

/**
 * EVENT_EMITTER_ALIAS.
 */
export const EVENT_EMITTER_ALIAS = 'eventEmitter'

/**
 * Class representing an EventEmitter.
 */
export class EventEmitter extends NodeEventEmitter {
  /**
   * Overloaded emit method to accept either a custom Event or event name and arguments.
   *
   * @param event - The event name or an instance of Event.
   */
  emit (event: Event): boolean
  /**
   * Overloaded emit method to accept either a custom Event or event name and arguments.
   *
   * @param event - The event name or an instance of Event.
   * @param args - Additional arguments to pass when emitting.
   */
  emit (event: symbol, ...args: any[]): boolean
  /**
   * Overloaded emit method to accept either a custom Event or event name and arguments.
   *
   * @param event - The event name or an instance of Event.
   * @param args - Additional arguments to pass when emitting.
   */
  emit (event: string, ...args: any[]): boolean
  /**
   * Overloaded emit method to accept either a custom Event or event name and arguments.
   *
   * @param event - The event name or an instance of Event.
   * @param args - Additional arguments to pass when emitting.
   */
  emit (event: string | symbol | Event, ...args: any[]): boolean {
    if (event instanceof Event) {
      return super.emit(event.type, event)
    } else {
      return super.emit(event, ...args)
    }
  }
}

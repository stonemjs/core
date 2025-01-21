import { Event } from './Event'
import mitt, { Emitter, Handler, WildcardHandler } from 'mitt'

/**
 * EVENT_EMITTER_ALIAS.
 */
export const EVENT_EMITTER_ALIAS = 'eventEmitter'

/**
 * Class representing an EventEmitter.
 */
export class EventEmitter<TEvent extends Event = Event> {
  private readonly emitter: Emitter<Record<string | symbol, TEvent>>
  /**
   * Create an EventEmitter.
   */
  constructor () {
    this.emitter = mitt()
  }

  /**
   * Registers an event listener for the given event type.
   *
   * @param event - The event name or type.
   * @param listener - The callback to invoke when the event is emitted.
   */
  on (event: string | symbol | '*', listener: Handler<Event> | WildcardHandler<Record<string | symbol, TEvent>>): void {
    this.emitter.on(event, listener as any)
  }

  /**
   * Removes an event listener for the given event type.
   *
   * @param event - The event name or type.
   * @param listener - The callback to remove.
   */
  off (event: string | symbol | '*', listener: Handler<Event> | WildcardHandler<Record<string | symbol, TEvent>>): void {
    this.emitter.off(event, listener as any)
  }

  /**
   * Emits an event, triggering all associated listeners.
   *
   * @param event - The event name or an instance of Event.
   * @param args - Additional arguments to pass to the listeners.
   */
  emit (event: string | symbol | TEvent, args?: TEvent): void {
    if (event instanceof Event) {
      this.emitter.emit(event.type, event)
    } else {
      this.emitter.emit(event, args ?? {} as any)
    }
  }
}

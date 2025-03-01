import {
  ListenerHandler,
  WildcardEventName,
  MixedListenerHandler,
  WildcardListenerHandler
} from '../declarations'
import { Event } from './Event'
import { isNotEmpty } from '../utils'

/**
 * EVENT_EMITTER_ALIAS.
 */
export const EVENT_EMITTER_ALIAS = 'eventEmitter'

/**
 * Class representing an EventEmitter.
 */
export class EventEmitter {
  private readonly listeners: Map<string | symbol, Array<MixedListenerHandler<any, WildcardEventName>>>

  /**
   * Create an EventEmitter.
   */
  constructor () {
    this.listeners = new Map()
  }

  /**
   * Registers an event listener for the given event type.
   *
   * @param event - The event name or type.
   * @param handler - The callback to invoke when the event is emitted.
   */
  on<TEvent extends Event = Event>(event: WildcardEventName, handler: MixedListenerHandler<TEvent, WildcardEventName>): this {
    const handlers = this.listeners.get(event)
    isNotEmpty<Array<MixedListenerHandler<TEvent, WildcardEventName>>>(handlers)
      ? handlers.push(handler)
      : this.listeners.set(event, [handler])

    return this
  }

  /**
   * Removes an event listener for the given event type.
   *
   * @param event - The event name or type.
   * @param handler - The callback to remove.
   */
  off<TEvent extends Event = Event>(event: WildcardEventName, handler: MixedListenerHandler<TEvent, WildcardEventName>): this {
    const handlers = this.listeners.get(event)
    isNotEmpty<Array<MixedListenerHandler<TEvent, WildcardEventName>>>(handlers)
      ? handlers.splice(handlers.indexOf(handler) >>> 0, 1)
      : this.listeners.set(event, [])

    return this
  }

  /**
   * Emits an event, triggering all associated listeners.
   *
   * @param event - The event name or an instance of Event.
   * @param args - Additional arguments to pass to the listeners.
   */
  async emit<TEvent extends Event = Event>(event: string | symbol | TEvent, args?: any): Promise<void> {
    let eventName: string | symbol
    let eventPayload: TEvent | undefined

    if (event instanceof Event) {
      eventName = event.type
      eventPayload = event
    } else {
      eventName = event
      eventPayload = args
    }

    const handlers = this.listeners.get(eventName)
    const wilcardHandlers = this.listeners.get('*')

    if (isNotEmpty<Array<ListenerHandler<TEvent>>>(handlers) && eventPayload !== undefined) {
      for (const handler of handlers.slice()) {
        await handler(eventPayload)
      }
    }

    if (isNotEmpty<Array<WildcardListenerHandler<WildcardEventName, TEvent>>>(wilcardHandlers) && eventPayload !== undefined) {
      for (const handler of wilcardHandlers.slice()) {
        await handler(eventName, eventPayload)
      }
    }
  }
}

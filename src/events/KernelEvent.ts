import { Event, EventOptions } from './Event'

/**
 * Class representing a kernel Event.
 *
 * @extends Event
 */
export class KernelEvent extends Event {
  /**
   * EVENT_HANDLED Event name, fires when event was intercepted by kernel.
   *
   * @event KernelEvent#EVENT_HANDLED
   */
  static EVENT_HANDLED: string = 'stonejs@kernel.event_handled'

  /**
   * RESPONSE_PREPARED Event name, fires before preparing the response.
   *
   * @event KernelEvent#RESPONSE_PREPARED
   */
  static RESPONSE_PREPARED: string = 'stonejs@kernel.response_prepared'

  /**
   * PREPARING_RESPONSE Event name, fires after the response was prepared.
   *
   * @event KernelEvent#PREPARING_RESPONSE
   */
  static PREPARING_RESPONSE: string = 'stonejs@kernel.preparing_response'

  /**
   * Create a KernelEvent.
   *
   * @param options - The options to create a KernelEvent.
   * @returns A new KernelEvent instance.
   */
  static create (options: EventOptions): KernelEvent {
    return new this(options)
  }
}

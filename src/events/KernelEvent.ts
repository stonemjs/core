import { Event, EventOptions } from './Event'

/**
 * Class representing a kernel Event.
 *
 * @extends Event
 */
export class KernelEvent extends Event {
  /**
   * HANDLING_EVENT Event name,
   * fires before the destination handler handles the event.
   *
   * @event KernelEvent#HANDLING_EVENT
   */
  static HANDLING_EVENT: string = 'stonejs@kernel.handling_event'

  /**
   * HANDLING_ERROR Event name,
   * fires when an error occurs while handling.
   *
   * @event KernelEvent#HANDLING_ERROR
   */
  static HANDLING_ERROR: string = 'stonejs@kernel.handling_error'

  /**
   * PREPARING_RESPONSE Event name, fires before preparing the response.
   *
   * @event KernelEvent#PREPARING_RESPONSE
   */
  static PREPARING_RESPONSE: string = 'stonejs@kernel.preparing_response'

  /**
   * RESPONSE_PREPARED Event name, fires after the response was prepared.
   *
   * @event KernelEvent#RESPONSE_PREPARED
   */
  static RESPONSE_PREPARED: string = 'stonejs@kernel.response_prepared'

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

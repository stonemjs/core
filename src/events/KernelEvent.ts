import { Event, EventOptions } from './Event'

/**
 * Class representing a kernel Event.
 *
 * @extends Event
 */
export class KernelEvent extends Event {
  /**
   * DISPATCHING_EVENT Event name, fires before dispatching
   * the incoming event to the destination handler.
   *
   * @event KernelEvent#DISPATCHING_EVENT
   */
  static DISPATCHING_EVENT: string = 'stonejs@kernel.dispatching_event'

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

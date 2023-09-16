import { Event, EventOptions } from './Event'

/**
 * IncomingEventOptions.
 */
export interface IncomingEventOptions extends EventOptions {
  locale?: string
}

/**
 * Class representing an IncomingEvent.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 *
 * @extends Event
 */
export class IncomingEvent extends Event {
  /**
   * INCOMING_EVENT Event name, fires on platform message.
   *
   * @event IncomingEvent#INCOMING_EVENT
   */
  static INCOMING_EVENT: string = 'stonejs@incoming_event'

  /**
   * The locale of the event.
   */
  public readonly locale: string

  /**
   * Create an IncomingEvent.
   *
   * @param options - The options to create an IncomingEvent.
   * @returns A new IncomingEvent instance.
   */
  static create (options: IncomingEventOptions): IncomingEvent {
    return new this(options)
  }

  /**
   * Create an IncomingEvent.
   *
   * @param options - The options to create an IncomingEvent.
   */
  protected constructor ({
    source,
    locale = 'en',
    metadata = {},
    timeStamp = Date.now(),
    type = IncomingEvent.INCOMING_EVENT
  }: IncomingEventOptions) {
    super({ type, metadata, source, timeStamp })
    this.locale = locale
  }
}

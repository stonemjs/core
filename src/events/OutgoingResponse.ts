import { IBlueprint } from '../definitions'
import { Event, EventOptions } from './Event'
import { IncomingEvent } from './IncomingEvent'

/**
 * OutgoingResponseOptions.
 */
export interface OutgoingResponseOptions extends EventOptions {
  content: unknown
  statusCode?: number | null
  statusMessage?: string | null
}

/**
 * Class representing an OutgoingResponse.
 *
 * @extends Event
 */
export class OutgoingResponse extends Event {
  /**
   * OUTGOING_RESPONSE Event name, fires on response to the incoming event.
   *
   * @event OutgoingResponse#OUTGOING_RESPONSE
   */
  static OUTGOING_RESPONSE: string = 'stonejs@outgoing_response'

  /**
   * The content of the response.
   */
  public readonly content: unknown

  /**
   * The original content of the response.
   */
  public readonly originalContent: unknown

  /**
   * The status code of the response.
   */
  public readonly statusCode?: number | null

  /**
   * The status message of the response.
   */
  public readonly statusMessage?: string | null

  /**
   * Create an OutgoingResponse.
   *
   * @param options - The options to create an OutgoingResponse.
   * @returns A new OutgoingResponse instance.
   */
  static create (options: OutgoingResponseOptions): OutgoingResponse {
    return new this(options)
  }

  /**
   * Create an OutgoingResponse.
   *
   * @param options - The options to create an OutgoingResponse.
   */
  protected constructor ({
    source,
    content,
    metadata = {},
    statusCode = null,
    statusMessage = null,
    timeStamp = Date.now(),
    type = OutgoingResponse.OUTGOING_RESPONSE
  }: OutgoingResponseOptions) {
    super({ type, metadata, source, timeStamp })
    this.content = content
    this.originalContent = content
    this.statusCode = statusCode
    this.statusMessage = statusMessage
  }

  /**
   * Prepare response before sending it.
   *
   * @param _event - The incoming event associated with this response.
   * @param _blueprint - The blueprint.
   * @returns This OutgoingResponse instance.
   */
  prepare (_event: IncomingEvent, _blueprint: IBlueprint): this | Promise<this> {
    // Add logic to modify the response based on the incoming event if needed
    return this
  }
}

import { Event, EventOptions } from './Event'
import { IncomingEvent } from './IncomingEvent'
import { Container } from '@stone-js/service-container'

/**
 * OutgoingResponseOptions.
 */
export interface OutgoingResponseOptions extends EventOptions {
  content?: unknown
  statusCode?: number
  statusMessage?: string
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
   * The original content of the response.
   */
  public readonly originalContent: unknown

  /**
   * The content of the response.
   */
  protected _content: unknown

  /**
   * The status code of the response.
   */
  protected _statusCode?: number

  /**
   * The status message of the response.
   */
  protected _statusMessage?: string

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
    timeStamp = Date.now(),
    statusCode = undefined,
    statusMessage = undefined,
    type = OutgoingResponse.OUTGOING_RESPONSE
  }: OutgoingResponseOptions) {
    super({ type, metadata, source, timeStamp })
    this._content = content
    this._statusCode = statusCode
    this.originalContent = content
    this._statusMessage = statusMessage
  }

  /**
   * Gets the status code of the outgoing response.
   *
   * @returns The status code of the response, or undefined if not set.
   */
  get statusCode (): number | undefined {
    return this._statusCode
  }

  /**
   * Gets the status message of the outgoing response.
   *
   * @returns The status message of the response, or undefined if not set.
   */
  get statusMessage (): string | undefined {
    return this._statusMessage
  }

  /**
   * Gets the content of the outgoing response.
   *
   * @returns The content of the outgoing response.
   */
  get content (): unknown {
    return this._content
  }

  /**
   * Prepare response before sending it.
   *
   * @param _event - The incoming event associated with this response.
   * @param _container - The container.
   * @returns This OutgoingResponse instance.
   */
  prepare (_event: IncomingEvent, _container: Container): this | Promise<this> {
    // Add logic to modify the response based on the incoming event if needed
    return this
  }
}

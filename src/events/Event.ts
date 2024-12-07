import { get, set, isPlainObject } from 'lodash-es'

/**
 * EventOptions.
 */
export interface EventOptions extends Record<string, unknown> {
  type?: string
  source?: object
  timeStamp?: number
  metadata?: Record<string, unknown>
}

/**
 * Class representing an Event.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export abstract class Event {
  /**
   * The type of the event.
   */
  public readonly type: string

  /**
   * The metadata associated with the event.
   */
  public readonly metadata: Record<string, unknown>

  /**
   * The source of the event.
   */
  public readonly source?: object

  /**
   * The timestamp of the event creation.
   */
  public readonly timeStamp: number

  /**
   * Create an Event.
   *
   * @param options - The options to create an Event.
   */
  constructor ({ type = '', metadata = {}, source, timeStamp = Date.now() }: EventOptions) {
    this.type = type
    this.source = source
    this.timeStamp = timeStamp
    this.metadata = isPlainObject(metadata) ? metadata : {}
  }

  /**
   * Get data from metadata.
   *
   * @param key - The key to retrieve from metadata.
   * @param fallback - The fallback value if the key is not found.
   * @returns The value associated with the key or the fallback.
   */
  get<R = unknown>(key: string, fallback?: R): R | undefined {
    return this.getMetadataValue(key, fallback)
  }

  /**
   * Get data from metadata.
   *
   * @param key - The key to retrieve from metadata.
   * @param fallback - The fallback value if the key is not found.
   * @returns The value associated with the key or the fallback.
   */
  getMetadataValue<R = unknown>(key: string, fallback?: R): R | undefined {
    return get<unknown, string, R | undefined>(this.metadata, key, fallback)
  }

  /**
   * Add data to metadata.
   *
   * @param key - The key or object to add to metadata.
   * @param value - The value to associate with the key.
   * @returns This Event instance.
   */
  setMetadataValue (key: string | Record<string, unknown>, value?: unknown): this {
    Object.entries(isPlainObject(key) ? key : { [key as string]: value }).forEach(([name, val]) => set(this.metadata, name, val))
    return this
  }

  /**
   * Return a cloned instance.
   *
   * @returns A cloned instance of the current class.
   */
  clone<T extends this>(): T {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
  }
}

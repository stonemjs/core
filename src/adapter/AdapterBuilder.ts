import { IAdapterBuilder } from '../definitions'

/**
 * AdapterBuilderOptions.
 *
 * This interface defines the options used to create an AdapterBuilder instance.
 * It includes an optional initial options object of type `V` and a resolver function.
 *
 * @template V - The type of the options used to build the final object.
 * @template R - The type of the final object that will be built.
 */
export interface AdapterBuilderOptions<V, R> {
  /**
   * The initial options used for building the object. This is optional.
   */
  options?: V

  /**
   * The resolver function that takes the options and returns the final object of type `R`.
   */
  resolver: (options: V) => R
}

/**
 * Class representing a generic AdapterBuilder.
 *
 * This class provides a builder pattern to construct an object of type `R` based on options of type `V`.
 * It is intended to handle complex object creation by allowing flexible modification of options and resolving the final object.
 *
 * @template V - The type of the options used to build the final object. Must be an object.
 * @template R - The type of the final object that will be built.
 */
export class AdapterBuilder<V extends object, R> implements IAdapterBuilder<V, R> {
  /**
   * The options used for building the final object.
   */
  private readonly options: V

  /**
   * The resolver function that takes the options and returns the final object of type `R`.
   */
  private readonly resolver: (options: V) => R

  /**
   * Static method to create a new AdapterBuilder instance.
   *
   * @param options - The options for creating the AdapterBuilder instance, including the initial options and the resolver function.
   * @returns A new instance of AdapterBuilder.
   */
  static create<V extends object, R>(options: AdapterBuilderOptions<V, R>): AdapterBuilder<V, R> {
    return new this(options)
  }

  /**
   * Constructs an AdapterBuilder.
   *
   * @param options - The options for creating the AdapterBuilder instance, including the initial options and the resolver function.
   * @protected
   */
  protected constructor ({ options, resolver }: AdapterBuilderOptions<V, R>) {
    if (typeof resolver !== 'function') { throw new TypeError('Resolver is required to create an AdapterBuilder instance.') }
    this.resolver = resolver
    this.options = options ?? ({} as any)
  }

  /**
   * Adds or updates a key-value pair in the options.
   *
   * @param key - The key in the options to be updated.
   * @param value - The value to set for the given key.
   * @returns This instance of AdapterBuilder for method chaining.
   */
  add (key: keyof V, value: unknown): this {
    Reflect.set(this.options, key, value)
    return this
  }

  /**
   * Builds the final object by using the resolver function with the current options.
   *
   * @returns The final object of type `R`.
   */
  build (): R {
    return this.resolver(this.options)
  }
}

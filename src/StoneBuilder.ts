import { Config } from '@stone-js/config'
import { mergeBlueprints } from './utils'
import { StoneFactory } from './StoneFactory'
import { ConfigBuilder } from './ConfigBuilder'
import { IncomingEvent } from './events/IncomingEvent'
import { StoneBlueprint } from './options/StoneBlueprint'
import { OutgoingResponse } from './events/OutgoingResponse'
import { AdapterHookListener, EventListenerType, HookName, IBlueprint, KernelHookListener, MetaEventListener, MixedEventHandler } from './declarations'

/**
 * Stone builder options.
 */
export interface StoneBuilderOptions {
  modules?: unknown[]
}

/**
 * Stone builder.
 *
 * This class provides a fluent interface for building Stone applications.
 * It allows you to configure the application using a builder pattern,
 * with options for adding modules, plugins, and custom configurations.
 *
 * @template TEvent, UResponse
 */
export class StoneBuilder<TEvent extends IncomingEvent, UResponse extends OutgoingResponse> {
  private readonly modules: unknown[]
  private readonly blueprint: Config<StoneBlueprint<TEvent, UResponse>>

  /**
   * Create a new StoneBuilder instance.
   *
   * @param options - The options to create the StoneBuilder.
   * @returns A new StoneBuilder instance.
   *
   * @example
   * ```typescript
   * const builder = StoneBuilder.create();
   * ```
   */
  public static create<TEvent extends IncomingEvent, UResponse extends OutgoingResponse>(
    options: StoneBuilderOptions = {}
  ): StoneBuilder<TEvent, UResponse> {
    return new this(options)
  }

  /**
   * Create a new StoneBuilder instance.
   *
   * @param options - The options to create the StoneBuilder.
   */
  private constructor ({ modules = [] }: StoneBuilderOptions = {}) {
    this.modules = modules
    this.blueprint = Config.create()
  }

  /**
   * Add Stone plugins's blueprint to the application.
   *
   * @param blueprints - The plugins's blueprint to add to the application.
   * @returns The current StoneBuilder instance.
   */
  use (
    ...blueprints: Array<Partial<StoneBlueprint<TEvent, UResponse>> | Record<string, unknown>>
  ): this {
    const mergedBlueprint = mergeBlueprints(
      this.blueprint.all(),
      ...blueprints as Array<StoneBlueprint<TEvent, UResponse>>
    )
    this.blueprint.setItems(mergedBlueprint)
    return this
  }

  /**
   * Configure the application using the blueprint resolver.
   * Use this method to add custom configurations to the application.
   *
   * @param resolver - The blueprint resolver function.
   * @returns The current StoneBuilder instance.
   */
  configure (resolver: (blueprint: IBlueprint) => void): this {
    resolver(this.blueprint)
    return this
  }

  /**
   * Set a value in the application blueprint.
   *
   * @param key - The key to set.
   * @param value - The value to set.
   * @returns The current StoneBuilder instance.
   */
  set (key: string, value: unknown): this {
    this.blueprint.set(key, value)
    return this
  }

  /**
   * Add a value to the application blueprint.
   *
   * @param key - The key to add.
   * @param value - The value to add.
   * @returns The current StoneBuilder instance.
   */
  add (key: string, value: unknown): this {
    this.blueprint.add(key, value)
    return this
  }

  /**
   * Add an event listener handler to the application.
   *
   * @param event - The event name to add.
   * @param handler - The listener handler to add.
   * @param options - The event listener options.
   * @returns The current StoneBuilder instance.
   */
  on (event: string, handler: EventListenerType, options?: Omit<MetaEventListener, 'event' | 'module'>): this {
    this.blueprint.add('stone.listeners', [{ ...options, event, module: handler }])
    return this
  }

  /**
   * Add a listener hook to the application.
   *
   * @param key - The hook name to add.
   * @param listener - The hook listener function to add.
   * @returns The current StoneBuilder instance.
   */
  hook (key: HookName, listener: KernelHookListener): this {
    this.blueprint.add(`stone.kernel.hooks.${key}`, [listener])
    return this
  }

  /**
   * Add an adapter listener hook to the application.
   * This hook is specific to the adapter and is called when the adapter is initialized.
   * Because the adapter is initialized before the application,
   *
   * @param listener - The hook function listener to add.
   * @returns The current StoneBuilder instance.
   */
  onInit (listener: AdapterHookListener): this {
    this.blueprint.add('stone.adapter.hooks.onInit', [listener])
    return this
  }

  /**
   * Hook to register modules to the service container.
   * This hook is called when the application is prepared.
   * Just after the onPrepare hook.
   * At this point, the application is ready to register modules to the service container.
   * And all third-party modules are already registered.
   * Usefull to register your own modules to the service container.
   *
   * @param listener - The hook function listener to add.
   * @returns The current StoneBuilder instance.
   */
  onRegister (listener: KernelHookListener): this {
    this.hook('onPrepare', listener)
    return this
  }

  /**
   * Hook to boot the application.
   * This hook is called when the application is booted.
   * At this point, the application is ready to handle events.
   * This hook is called after the onRegister hook.
   * And just before the handle method is called.
   * Usefull to boot stuffs at each event handling.
   *
   * @param listener - The hook function listener to add.
   * @returns The current StoneBuilder instance.
   */
  onBoot (listener: KernelHookListener): this {
    this.hook('beforeHandle', listener)
    return this
  }

  /**
   * Handle application events.
   * This method is a shorthand for running the application with the provided event handler.
   *
   * @param handler - The application event handler function.
   * @returns The platform-specific response.
   */
  async handle<ExecutionResultType = unknown>(handler: MixedEventHandler<TEvent, unknown>): Promise<ExecutionResultType> {
    this.blueprint.set('stone.handler', handler)
    return await this.run()
  }

  /**
   * Run the application.
   * Populates the blueprint via introspection and runs the application.
   *
   * @returns The platform-specific response.
   */
  async run<ExecutionResultType = unknown>(): Promise<ExecutionResultType> {
    const blueprint = await ConfigBuilder.create().build(this.modules, this.blueprint)
    return await StoneFactory.create({ blueprint }).run<ExecutionResultType>()
  }
}

/**
 * Create a new Stone instance with the given options.
 *
 * This function creates a new Stone instance with the provided options.
 * It allows you to configure the application using the StoneBuilder.
 *
 * @template U, V
 * @param options - The options to create the Stone instance.
 * @returns A new StoneBuilder instance.
 */
export function stoneApp<
  U extends IncomingEvent,
  V extends OutgoingResponse
> (options: StoneBuilderOptions = {}): StoneBuilder<U, V> {
  return StoneBuilder.create(options)
}

import { Config } from '@stone-js/config'
import { mergeBlueprints } from './utils'
import { StoneFactory } from './StoneFactory'
import { BlueprintBuilder } from './BlueprintBuilder'
import { IncomingEvent } from './events/IncomingEvent'
import { StoneBlueprint } from './options/StoneBlueprint'
import { OutgoingResponse } from './events/OutgoingResponse'
import {
  HookName,
  IBlueprint,
  EventListenerType,
  MetaEventListener,
  MixedEventHandler,
  KernelHookListener,
  AdapterHookListener
} from './declarations'

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
    return this.add('stone.listeners', [{ ...options, event, module: handler }])
  }

  /**
   * Add a listener hook to the application.
   *
   * @param key - The hook name to add.
   * @param listener - The hook listener function to add.
   * @returns The current StoneBuilder instance.
   */
  hook (key: HookName, listener: KernelHookListener): this {
    return this.add(`stone.kernel.hooks.${key}`, [listener])
  }

  /**
   * Registers a listener that runs when the adapter starts.
   * This hook is triggered when the adapter is initialized, before the application itself starts.
   *
   * @param listener - The hook function to execute on adapter start.
   * @returns The current StoneBuilder instance.
   */
  onStart (listener: AdapterHookListener): this {
    return this.add('stone.adapter.hooks.onStart', [listener])
  }

  /**
   * Registers a listener that runs when the adapter stops.
   * This hook is triggered before the adapter shuts down, allowing for cleanup operations.
   *
   * @param listener - The hook function to execute on adapter stop.
   * @returns The current StoneBuilder instance.
   */
  onStop (listener: AdapterHookListener): this {
    return this.add('stone.adapter.hooks.onStop', [listener])
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
    return this.hook('onPrepare', listener)
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
    return this.hook('beforeHandle', listener)
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
    const blueprint = await BlueprintBuilder.create().build(this.modules, this.blueprint)
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

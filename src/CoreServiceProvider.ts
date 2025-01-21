import { Event } from './events/Event'
import { EventEmitter } from './events/EventEmitter'
import { ServiceOptions } from './decorators/Service'
import { Container } from '@stone-js/service-container'
import { InitializationError } from './errors/InitializationError'
import { IBlueprint, IListener, ILogger, IProvider, ISubscriber, ClassType } from './declarations'

/**
 * CoreServiceProvider options.
 */
export interface CoreServiceProviderOptions {
  logger: ILogger
  blueprint: IBlueprint
  container: Container
  eventEmitter: EventEmitter
}

/**
 * Class representing a CoreServiceProvider.
 *
 * The CoreServiceProvider is responsible for managing the core services,
 * listeners, subscribers, and adapters required by the application.
 * It interacts with the service container to bind and resolve dependencies,
 * ensuring all components are available when needed.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class CoreServiceProvider implements IProvider {
  /**
   * Blueprint configuration used to retrieve app settings.
   */
  private readonly blueprint: IBlueprint

  /**
   * The service container that manages dependencies.
   */
  private readonly container: Container

  /**
   * The event emitter used for managing and firing events.
   */
  private readonly eventEmitter: EventEmitter

  /**
   * The logger
   */
  private readonly logger: ILogger

  /**
   * Create a new instance of CoreServiceProvider.
   *
   * @param container - The service container to manage dependencies.
   * @throws {InitializationError} If the Blueprint config or EventEmitter is not bound to the container.
   */
  constructor ({ container, blueprint, eventEmitter, logger }: CoreServiceProviderOptions) {
    if (logger === undefined) { throw new InitializationError('Logger is required to create a CoreServiceProvider instance.') }
    if (container === undefined) { throw new InitializationError('Container is required to create a CoreServiceProvider instance.') }
    if (blueprint === undefined) { throw new InitializationError('Blueprint is required to create a CoreServiceProvider instance.') }
    if (eventEmitter === undefined) { throw new InitializationError('EventEmitter is required to create a CoreServiceProvider instance.') }

    this.logger = logger
    this.container = container
    this.blueprint = blueprint
    this.eventEmitter = eventEmitter
  }

  /**
   * Get the list of services from the configuration.
   *
   * @returns A list of services or an array of service options.
   */
  private get services (): Function[] | Array<[Function, ServiceOptions]> {
    return this.blueprint.get<Function[] | Array<[Function, ServiceOptions]>>('stone.services', [])
  }

  /**
   * Get the list of listeners from the configuration.
   *
   * @returns A record of event listeners.
   */
  private get listeners (): Record<string, Function[]> {
    return this.blueprint.get<Record<string, Function[]>>('stone.listeners', {})
  }

  /**
   * Get the list of subscribers from the configuration.
   *
   * @returns A list of subscribers.
   */
  private get subscribers (): Function[] {
    return this.blueprint.get<Function[]>('stone.subscribers', [])
  }

  /**
   * Get the list of aliases from the configuration.
   *
   * @returns A record of class aliases.
   */
  private get aliases (): Record<string, ClassType> {
    return this.blueprint.get<Record<string, ClassType>>('stone.aliases', {})
  }

  /**
   * Register core components in the service container.
   *
   * This method registers services, listeners, adapters, and aliases in the container.
   */
  public register (): void {
    this.registerServices()
      .registerListeners()
      .registerAliases()
  }

  /**
   * Boot core components.
   *
   * This method is used to bootstrap subscribers.
   */
  public async boot (): Promise<void> {
    await this.bootSubscribers()
  }

  /**
   * Register decorated and imported services.
   *
   * @returns This CoreServiceProvider instance for chaining.
   */
  private registerServices (): this {
    this.services.forEach(service => {
      if (Array.isArray(service)) {
        const [Class, options] = service
        this.container.autoBinding(Class, Class, options.singleton, options.alias)
      } else {
        this.container.autoBinding(service, service, true)
      }
    })
    return this
  }

  /**
   * Register aliases in the service container.
   *
   * @returns This CoreServiceProvider instance for chaining.
   */
  private registerAliases (): this {
    Object.entries(this.aliases).forEach(([alias, Class]) => {
      if (typeof Class === 'function' && Object.prototype.hasOwnProperty.call(Class, 'prototype')) {
        this.container.alias(Class, alias)
      }
    })
    return this
  }

  /**
   * Register decorated and imported listeners in the event emitter.
   *
   * @returns This CoreServiceProvider instance for chaining.
   */
  private registerListeners (): this {
    for (const [eventName, listeners] of Object.entries(this.listeners)) {
      for (const listener of listeners) {
        const instance = this.container.resolve<IListener>(listener, true)
        if (instance?.handle !== undefined) {
          /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
          this.eventEmitter.on(eventName, async (event: Event) => {
            try {
              await instance.handle(event)
            } catch (error: any) {
              this.logger.error(`An error has occured with this listener (${String(listener)}) ${String(error.message)}`)
            }
          })
        }
      }
    }
    return this
  }

  /**
   * Bootstrap subscribers by resolving them from the container and subscribing to the event emitter.
   *
   * @returns This CoreServiceProvider instance for chaining.
   */
  private async bootSubscribers (): Promise<void> {
    for (const subscriber of this.subscribers) {
      const instance = this.container.resolve<ISubscriber>(subscriber, true)
      try {
        await instance?.subscribe(this.eventEmitter)
      } catch (error: any) {
        this.logger.error(`An error has occured with this subscriber (${String(subscriber)}) ${String(error.message)}`)
      }
    }
  }
}

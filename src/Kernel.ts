import { isConstructor } from './utils'
import { Config } from '@stone-js/config'
import { ConsoleLogger } from './ConsoleLogger'
import { KernelEvent } from './events/KernelEvent'
import { EventEmitter } from './events/EventEmitter'
import { IncomingEvent } from './events/IncomingEvent'
import { Container } from '@stone-js/service-container'
import { OutgoingResponse } from './events/OutgoingResponse'
import { KernelMiddlewareConfig } from './options/KernelConfig'
import { MixedPipe, Pipe, PipeInstance, Pipeline, PipelineOptions } from '@stone-js/pipeline'
import { EventHandlerFunction, IBlueprint, ILogger, IProvider, IRouter, KernelContext, KernelHandlerResolver, LifecycleEventHandler } from './definitions'

/**
 * KernelOptions.
 */
export interface KernelOptions<U extends IncomingEvent, V extends OutgoingResponse> {
  logger: ILogger
  container: Container
  blueprint: IBlueprint
  eventEmitter: EventEmitter
  handlerResolver: KernelHandlerResolver<U, V>
}

/**
 * Class representing a Kernel.
 *
 * The Kernel class is responsible for managing the main lifecycle of the application, including middleware
 * registration and provider management. It manages the initialization, registration, and booting of the
 * components required for a fully functional application.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class Kernel<U extends IncomingEvent, V extends OutgoingResponse> implements LifecycleEventHandler<U, V> {
  protected logger: ILogger
  protected currentEvent?: U
  protected currentResponse?: V
  protected readonly container: Container
  protected readonly blueprint: IBlueprint
  protected readonly providers: Set<IProvider>
  protected readonly eventEmitter: EventEmitter
  protected readonly registeredProviders: Set<string>
  protected readonly handlerResolver: KernelHandlerResolver<U, V>

  /**
   * Create a Kernel.
   *
   * @param options - Kernel configuration options.
   * @returns A new Kernel instance.
   */
  public static create<U extends IncomingEvent, V extends OutgoingResponse>(options: KernelOptions<U, V>): Kernel<U, V> {
    return new this(options)
  }

  /**
   * Create a Kernel.
   *
   * @param options - Kernel configuration options.
   */
  protected constructor ({ blueprint, container, eventEmitter, logger, handlerResolver }: KernelOptions<U, V>) {
    if (!(blueprint instanceof Config)) { throw new TypeError('Blueprint is required to create a Kernel instance.') }
    if (!(container instanceof Container)) { throw new TypeError('Container is required to create a Kernel instance.') }
    if (!(eventEmitter instanceof EventEmitter)) { throw new TypeError('EventEmitter is required to create a Kernel instance.') }
    if (typeof handlerResolver !== 'function') { throw new TypeError('HandlerResolver is required to create a Kernel instance.') }

    this.logger = logger
    this.providers = new Set()
    this.blueprint = blueprint
    this.container = container
    this.eventEmitter = eventEmitter
    this.registeredProviders = new Set()
    this.handlerResolver = handlerResolver

    this.registerBaseBindings()
  }

  /**
   * Check if middleware should be skipped.
   */
  protected get skipMiddleware (): boolean {
    return this.blueprint.get<boolean>('app.kernel.middleware.skip', false)
  }

  /**
   * Get all middleware.
   */
  protected get middleware (): KernelMiddlewareConfig {
    return (this.skipMiddleware ? {} : this.blueprint.get('app.kernel.middleware', {})) as KernelMiddlewareConfig
  }

  /**
   * Get event middleware.
   */
  protected get eventMiddleware (): MixedPipe[] {
    return this.middleware.event ?? []
  }

  /**
   * Get response middleware.
   */
  protected get responseMiddleware (): MixedPipe[] {
    return this.middleware.response ?? []
  }

  /**
   * Get terminate middleware.
   */
  protected get terminateMiddleware (): MixedPipe[] {
    return this.middleware.terminate ?? []
  }

  /**
   * Hook that runs before handling each event.
   * Useful to initialize things at each event.
   */
  public async beforeHandle (): Promise<void> {
    this.resolveProviders()

    for (const provider of this.providers) {
      await provider.beforeHandle?.()
    }

    await this.onRegister()
  }

  /**
   * Handle IncomingEvent.
   *
   * @param event - The incoming event to handle.
   * @returns The outgoing response.
   */
  public async handle (event: U): Promise<V> {
    await this.onBootstrap(event)
    await this.sendEventThroughDestination(event)
    return await this.prepareResponse(event)
  }

  /**
   * Hook that runs just before or just after returning the response.
   * Useful to perform cleanup.
   */
  public async onTerminate (): Promise<void> {
    for (const provider of this.providers) {
      await provider.onTerminate?.()
    }
    await Pipeline
      .create<KernelContext<U, V>, V>(this.makePipelineOptions())
      .send({ event: this.currentEvent as U, response: this.currentResponse })
      .through(this.terminateMiddleware)
      .thenReturn()
  }

  /**
   * Register services to the container.
   */
  protected async onRegister (): Promise<void> {
    await this.registerProviders()
  }

  /**
   * Hook that runs at each event and just before running the action handler.
   * Useful to bootstrap things at each event.
   *
   * @param event - The incoming event.
   * @throws {TypeError} If no event is provided.
   */
  protected async onBootstrap (event: U): Promise<void> {
    if (event === undefined) { throw new TypeError('No IncomingEvent provided.') }
    if (typeof event.clone === 'function') { this.container.instance('originalEvent', event.clone()) }
    await this.bootProviders()
  }

  /**
   * Send event to the destination.
   *
   * @param event - The incoming event.
   */
  protected async sendEventThroughDestination (event: U): Promise<void> {
    this.currentResponse = await Pipeline
      .create<KernelContext<U, V>, V>(this.makePipelineOptions())
      .send({ event })
      .through(this.eventMiddleware)
      .then(async (v) => await this.prepareDestination(v.event))
  }

  /**
   * Prepare event destination.
   *
   * @param event - The incoming event.
   * @returns The prepared response.
   * @throws {TypeError} If no router or handler has been provided.
   */
  protected async prepareDestination (event: U): Promise<V> {
    this.currentEvent = event
    this.container.instance('event', this.currentEvent)
    this.container.instance('request', this.currentEvent)

    if (this.container.has('router')) {
      const router = this.container.make<IRouter<U, V>>('router')
      if (typeof router?.dispatch === 'function') {
        return await router.dispatch(this.currentEvent)
      }
    }

    const handler = this.handlerResolver(this.container)

    if (handler !== undefined) {
      return typeof (handler as LifecycleEventHandler<U, V>).handle === 'function'
        ? await (handler as LifecycleEventHandler<U, V>).handle(this.currentEvent)
        : await (handler as EventHandlerFunction<U, V>)(this.currentEvent)
    }

    throw new TypeError('No routers nor handlers has been provided.')
  }

  /**
   * Prepare response before sending
   *
   * @protected
   * @param event - The incoming event.
   * @returns The prepared response.
   */
  protected async prepareResponse (event: U): Promise<V> {
    if (this.currentResponse === undefined) {
      throw new TypeError('No response was returned')
    }

    if (typeof this.currentResponse.prepare !== 'function') {
      throw new TypeError('Return response must be an instance of `OutgoingResponse` or a subclass of it.')
    }

    this.container.instance('response', this.currentResponse)
    const metadata = { event, response: this.currentResponse }
    this.eventEmitter.emit(KernelEvent.create({ type: KernelEvent.PREPARING_RESPONSE, source: this, metadata }))
    this.currentResponse = await this.currentResponse.prepare(event, this.blueprint)
    this.eventEmitter.emit(KernelEvent.create({ type: KernelEvent.RESPONSE_PREPARED, source: this, metadata }))

    this.currentResponse = await Pipeline
      .create<KernelContext<U, V>, V>(this.makePipelineOptions())
      .send({ event, response: this.currentResponse })
      .through(this.responseMiddleware)
      .then(({ response }) => response as V)

    this.eventEmitter.emit(KernelEvent.create({ type: KernelEvent.EVENT_HANDLED, source: this, metadata }))

    return this.currentResponse
  }

  /**
   * Creates pipeline options for the Kernel.
   *
   * @protected
   * @returns The pipeline options for configuring middleware.
   */
  protected makePipelineOptions (): PipelineOptions<KernelContext<U, V>, V> {
    return {
      resolver: (middleware: Pipe) => {
        if (isConstructor(middleware)) {
          return this.container.resolve<PipeInstance<KernelContext<U, V>, V>>(middleware, true)
        }
      }
    }
  }

  /**
   * Registers the base bindings into the container.
   *
   * @private
   * @returns The Kernel instance.
   */
  private registerBaseBindings (): this {
    this.container
      .instance(ConsoleLogger, this.logger)
      .instance(Config, this.blueprint)
      .instance(Container, this.container)
      .instance(EventEmitter, this.eventEmitter)
      .alias(ConsoleLogger, 'logger')
      .alias(Config, 'config')
      .alias(Config, 'blueprint')
      .alias(Container, 'container')
      .alias(EventEmitter, 'events')
      .alias(EventEmitter, 'eventEmitter')

    return this
  }

  /**
   * Resolves all providers defined in the blueprint.
   *
   * @private
   * @returns The Kernel instance.
   */
  private resolveProviders (): this {
    (this.blueprint.get('app.providers', []) as Function[])
      .map((provider) => this.container.resolve(provider, true) as IProvider)
      .filter((provider) => provider.mustSkip === undefined || !(provider.mustSkip?.()))
      .forEach((provider) => this.providers.add(provider))

    return this
  }

  /**
   * Registers the providers.
   *
   * @private
   * @returns A promise that resolves when all providers are registered.
   */
  private async registerProviders (): Promise<void> {
    for (const provider of this.providers) {
      if (provider.register === undefined || this.registeredProviders.has(provider.constructor.name)) {
        continue
      }

      await provider.register()

      this.registeredProviders.add(provider.constructor.name)
    }
  }

  /**
   * Boots the providers.
   *
   * @private
   * @returns A promise that resolves when all providers have been booted.
   */
  private async bootProviders (): Promise<void> {
    for (const provider of this.providers) {
      await provider.boot?.()
    }
  }
}

import { isConstructor } from './utils'
import { Config } from '@stone-js/config'
import { ConsoleLogger } from './ConsoleLogger'
import { KernelEvent } from './events/KernelEvent'
import { EventEmitter } from './events/EventEmitter'
import { IncomingEvent } from './events/IncomingEvent'
import { Container } from '@stone-js/service-container'
import { OutgoingResponse } from './events/OutgoingResponse'
import { InitializationError } from './errors/InitializationError'
import { IBlueprint, ILogger, IProvider, KernelContext, LifecycleEventHandler } from './definitions'
import { MetaPipe, MixedPipe, Pipe, PipeInstance, Pipeline, PipelineOptions } from '@stone-js/pipeline'

/**
 * KernelOptions.
 */
export interface KernelOptions {
  logger: ILogger
  container: Container
  blueprint: IBlueprint
  eventEmitter: EventEmitter
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
export class Kernel<IncomingEventType extends IncomingEvent, OutgoingResponseType extends OutgoingResponse> implements LifecycleEventHandler<IncomingEventType, OutgoingResponseType> {
  protected readonly logger: ILogger
  protected readonly container: Container
  protected readonly blueprint: IBlueprint
  protected readonly providers: Set<IProvider>
  protected readonly eventEmitter: EventEmitter
  protected readonly registeredProviders: Set<string>

  /**
   * Create a Kernel.
   *
   * @param options - Kernel configuration options.
   * @returns A new Kernel instance.
   */
  public static create<IncomingEventType extends IncomingEvent, OutgoingResponseType extends OutgoingResponse>(options: KernelOptions): Kernel<IncomingEventType, OutgoingResponseType> {
    return new this(options)
  }

  /**
   * Create a Kernel.
   *
   * @param options - Kernel configuration options.
   */
  protected constructor ({ blueprint, container, eventEmitter, logger }: KernelOptions) {
    if (!(blueprint instanceof Config)) { throw new InitializationError('Blueprint is required to create a Kernel instance.') }
    if (!(container instanceof Container)) { throw new InitializationError('Container is required to create a Kernel instance.') }
    if (!(eventEmitter instanceof EventEmitter)) { throw new InitializationError('EventEmitter is required to create a Kernel instance.') }

    this.logger = logger
    this.providers = new Set()
    this.blueprint = blueprint
    this.container = container
    this.eventEmitter = eventEmitter
    this.registeredProviders = new Set()

    this.registerBaseBindings()
  }

  /**
   * Get all middleware.
   */
  protected get middleware (): MixedPipe[] {
    return this.blueprint.get<MixedPipe[]>('stone.kernel.middleware', [])
  }

  /**
   * Get terminate middleware.
   */
  protected get terminateMiddleware (): MixedPipe[] {
    return this.middleware.filter((middleware) => {
      const pipe: Function | undefined = typeof (middleware as MetaPipe).pipe === 'function'
        ? (middleware as MetaPipe).pipe as Function
        : (typeof middleware === 'function' ? middleware : undefined)
      return typeof pipe?.prototype?.terminate === 'function'
    })
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
  public async handle (event: IncomingEventType): Promise<OutgoingResponseType> {
    await this.onBootstrap(event)
    return await this.sendEventThroughDestination(event)
  }

  /**
   * Hook that runs just before or just after returning the response.
   * Useful to perform cleanup.
   */
  public async onTerminate (): Promise<void> {
    for (const provider of this.providers) {
      await provider.onTerminate?.()
    }

    const event = this.container.has('event') ? this.container.make('event') as IncomingEventType : undefined
    const response = this.container.has('response') ? this.container.make('response') as OutgoingResponseType : undefined
    const pipelineOptions = this.makePipelineOptions() as PipelineOptions<Partial<KernelContext<IncomingEventType, OutgoingResponseType>>, OutgoingResponseType>

    await Pipeline
      .create<Partial<KernelContext<IncomingEventType, OutgoingResponseType>>, OutgoingResponseType>(pipelineOptions)
      .send({ event, response })
      .via('terminate')
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
   * @throws {InitializationError} If no event is provided.
   */
  protected async onBootstrap (event: IncomingEventType): Promise<void> {
    if (event === undefined) { throw new InitializationError('No IncomingEvent provided.') }

    this.container.instance('event', event).instance('request', event)

    if (typeof event.clone === 'function') { this.container.instance('originalEvent', event.clone()) }

    await this.bootProviders()
  }

  /**
   * Send event to the destination.
   *
   * @param event - The incoming event.
   * @returns The prepared response.
   */
  protected async sendEventThroughDestination (event: IncomingEventType): Promise<OutgoingResponseType> {
    return await Pipeline
      .create<KernelContext<IncomingEventType, OutgoingResponseType>, OutgoingResponseType>(this.makePipelineOptions())
      .send({ event })
      .through(this.middleware)
      .then(async (context) => await this.prepareResponse(context))
  }

  /**
   * Prepare response before sending
   *
   * @protected
   * @param context - The Kernel event context.
   * @returns The prepared response.
   */
  protected async prepareResponse (context: KernelContext<IncomingEventType, OutgoingResponseType>): Promise<OutgoingResponseType> {
    if (context.response === undefined) {
      throw new InitializationError('No response was returned')
    }

    if (typeof context.response.prepare !== 'function') {
      throw new InitializationError('Return response must be an instance of `OutgoingResponse` or a subclass of it.')
    }

    const metadata = { ...context }
    this.container.instance('response', context.response)
    this.eventEmitter.emit(KernelEvent.create({ type: KernelEvent.PREPARING_RESPONSE, source: this, metadata }))
    context.response = await context.response.prepare(context.event, this.blueprint)
    this.eventEmitter.emit(KernelEvent.create({ type: KernelEvent.RESPONSE_PREPARED, source: this, metadata }))

    return context.response
  }

  /**
   * Creates pipeline options for the Kernel.
   *
   * @protected
   * @returns The pipeline options for configuring middleware.
   */
  protected makePipelineOptions (): PipelineOptions<KernelContext<IncomingEventType, OutgoingResponseType>, OutgoingResponseType> {
    return {
      resolver: (middleware: Pipe) => {
        if (isConstructor(middleware)) {
          return this.container.resolve<PipeInstance<KernelContext<IncomingEventType, OutgoingResponseType>, OutgoingResponseType>>(middleware, true)
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
      .instance(Config, this.blueprint)
      .instance(Container, this.container)
      .instance(ConsoleLogger, this.logger)
      .instance(EventEmitter, this.eventEmitter)
      .alias(Config, 'config')
      .alias(Config, 'blueprint')
      .alias(Container, 'container')
      .alias(EventEmitter, 'events')
      .alias(ConsoleLogger, 'logger')
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
    (this.blueprint.get('stone.providers', []) as Function[])
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

import { Config } from '@stone-js/config'
import { ConsoleLogger } from './ConsoleLogger'
import { KernelEvent } from './events/KernelEvent'
import { EventEmitter } from './events/EventEmitter'
import { IncomingEvent } from './events/IncomingEvent'
import { Container } from '@stone-js/service-container'
import { OutgoingResponse } from './events/OutgoingResponse'
import { InitializationError } from './errors/InitializationError'
import { isMetaClassModule, isMetaFactoryModule, isFunctionModule, isMetaFunctionModule } from './utils'
import {
  MetaPipe,
  Pipeline,
  MixedPipe,
  isClassPipe,
  isAliasPipe,
  PipeInstance,
  isConstructor,
  isFactoryPipe,
  PipelineOptions
} from '@stone-js/pipeline'
import {
  ILogger,
  HookName,
  KernelHook,
  IBlueprint,
  HookContext,
  IApplication,
  IErrorHandler,
  IEventHandler,
  IConfiguration,
  MetaApplication,
  IServiceProvider,
  ApplicationClass,
  ResponseResolver,
  MetaErrorHandler,
  MixedEventHandler,
  EventHandlerClass,
  ConfigurationClass,
  IErrorHandlerClass,
  MixedConfiguration,
  FactoryEventHandler,
  FactoryErrorHandler,
  MixedServiceProvider,
  IServiceProviderClass,
  FunctionalEventHandler,
  FunctionalErrorHandler,
  FactoryServiceProvider,
  ResponseResolverOptions,
  FunctionalConfiguration,
  LifecycleAdapterEventHandler
} from './declarations'

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
export class Kernel<
  IncomingEventType extends IncomingEvent,
  OutgoingResponseType extends OutgoingResponse
> implements LifecycleAdapterEventHandler<IncomingEventType, OutgoingResponseType> {
  protected readonly logger: ILogger
  protected readonly hooks: KernelHook
  protected readonly container: Container
  protected readonly blueprint: IBlueprint
  protected readonly eventEmitter: EventEmitter
  protected readonly registeredProviders: Set<string>
  protected readonly providers: Set<IServiceProvider<IncomingEventType, OutgoingResponseType>>
  protected readonly resolvedErrorHandlers: Record<string, IErrorHandler<IncomingEventType, OutgoingResponseType>>

  protected resolvedApplication?: IApplication<IncomingEventType, OutgoingResponseType>
  protected resolvedEventHandler?: IEventHandler<IncomingEventType, OutgoingResponseType>

  /**
   * Create a Kernel.
   *
   * @param options - Kernel configuration options.
   * @returns A new Kernel instance.
   */
  public static create<
    IncomingEventType extends IncomingEvent,
    OutgoingResponseType extends OutgoingResponse
  >(options: KernelOptions): Kernel<IncomingEventType, OutgoingResponseType> {
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
    this.container = container
    this.blueprint = blueprint
    this.resolvedErrorHandlers = {}
    this.eventEmitter = eventEmitter
    this.registeredProviders = new Set()
    this.hooks = blueprint.get<KernelHook>('stone.kernel.hooks', {} as unknown as KernelHook)
  }

  /**
   * Populate the context with the given bindings.
   * The context here is the service container.
   * Invoke subsequent hooks.
   * Resolve the app event handler.
   * Execution order is important here, never change it.
   */
  public async onPrepare (): Promise<void> {
    this.registerBaseBindings()

    await this.runLiveConfigurations()
    await this.resolveProviders()

    for (const provider of this.providers) {
      await provider.onPrepare?.()
    }

    await this.registerProviders()
    await this.executeHooks('onPrepare')
    await this.resolveApplication()?.onPrepare?.()
  }

  /**
   * Boot the providers.
   * Invoke subsequent hooks.
   * Execution order is important here, never change it.
   */
  public async beforeHandle (): Promise<void> {
    for (const provider of this.providers) {
      await provider.beforeHandle?.()
    }

    await this.bootProviders()
    await this.executeHooks('beforeHandle')
    await this.resolveApplication()?.beforeHandle?.()
  }

  /**
   * Handle Stone IncomingEvent.
   *
   * @param event - The Stone incoming event to handle.
   * @returns The Stone outgoing response.
   */
  public async handle (event: IncomingEventType): Promise<OutgoingResponseType> {
    return await this.sendEventThroughDestination(event)
  }

  /**
   * Invoke subsequent hooks after handling the event.
   * Execution order is important here, never change it.
   */
  public async afterHandle (context: HookContext<IncomingEventType, OutgoingResponseType>): Promise<void> {
    for (const provider of this.providers) {
      await provider.afterHandle?.(context)
    }

    await this.executeHooks('afterHandle')
    await this.resolveApplication()?.afterHandle?.(context)
  }

  /**
   * Invoke subsequent hooks on termination.
   * Execution order is important here, never change it.
   */
  public async onTerminate (context: Partial<HookContext<IncomingEventType, OutgoingResponseType>>): Promise<void> {
    for (const provider of this.providers) {
      await provider.onTerminate?.(context)
    }

    await this.executeHooks('onTerminate')
    await this.resolveApplication()?.onTerminate?.(context)
  }

  /**
   * Send event to the destination.
   *
   * @param event - The incoming event.
   * @returns The prepared response.
   * @throws InitializationError if no IncomingEvent is provided.
   */
  protected async sendEventThroughDestination (event: IncomingEventType): Promise<OutgoingResponseType> {
    if (event === undefined) { throw new InitializationError('No IncomingEvent provided.') }
    if (typeof event.clone === 'function') { this.container.instance('originalEvent', event.clone()) }

    this.container.instance('event', event).instance('request', event)

    const middleware = this.blueprint.get<Array<MixedPipe<IncomingEventType, OutgoingResponseType>>>('stone.kernel.middleware', [])

    try {
      return await Pipeline
        .create<IncomingEventType, OutgoingResponseType>(this.makePipelineOptions())
        .send(event)
        .through(...middleware)
        .then(async (ev) => await this.prepareResponse(ev))
    } catch (error: any) {
      return await this.handleErrors(error, event)
    }
  }

  /**
   * Prepare response before sending
   *
   * @protected
   * @param event - The Kernel event.
   * @returns The prepared response.
   */
  protected async prepareResponse (event: IncomingEventType): Promise<OutgoingResponseType> {
    await this.eventEmitter.emit(KernelEvent.create({ type: KernelEvent.DISPATCHING_EVENT, source: this, metadata: { event } }))

    const response = await this.resolveEventHandler().handle(event)
    const validatedResponse = await this.validateAndResolveResponse(response)

    await this.eventEmitter.emit(KernelEvent.create({ type: KernelEvent.PREPARING_RESPONSE, source: this, metadata: { event, response: validatedResponse } }))
    const preparedResponse = await validatedResponse.prepare(event, this.container)
    await this.eventEmitter.emit(KernelEvent.create({ type: KernelEvent.RESPONSE_PREPARED, source: this, metadata: { event, response: preparedResponse } }))

    this.container.instance('response', preparedResponse)

    return preparedResponse
  }

  /**
   * Creates pipeline options for the Kernel.
   *
   * @protected
   * @returns The pipeline options for configuring middleware.
   */
  protected makePipelineOptions (): PipelineOptions<IncomingEventType, OutgoingResponseType> {
    return {
      resolver: (metaPipe: MetaPipe<IncomingEventType, OutgoingResponseType>) => {
        if (isClassPipe(metaPipe) || isAliasPipe(metaPipe)) {
          return this.container.resolve<PipeInstance<IncomingEventType, OutgoingResponseType>>(metaPipe.module, true)
        } else if (isFactoryPipe(metaPipe)) {
          return metaPipe.module(this.container)
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
   * Resolves the application from the container.
   * This application is the main entry point for the Stone.js framework in declarative context.
   * It is the class decorated with the @StoneApp() decorator.
   * Note: It does not exist in imperative context.
   * It is used here to instantiate the it after resolving the providers
   * And to execute the lifecycle hooks.
   * So the user can get benefit of destructuring DI in the constructor.
   *
   * @returns The resolved application or undefined if not found.
   */
  private resolveApplication (): IApplication<IncomingEventType, OutgoingResponseType> | undefined {
    if (this.resolvedApplication === undefined) {
      const metaApp = this.blueprint.get<MetaApplication<IncomingEventType, OutgoingResponseType>>('stone.application')

      if (isMetaClassModule<ApplicationClass<IncomingEventType, OutgoingResponseType>>(metaApp)) {
        this.resolvedApplication = this.container.resolve(metaApp.module, true)
      }
    }

    return this.resolvedApplication
  }

  /**
   * Resolves the app event handler from the container.
   *
   * @returns The resolved event handler or undefined if not found.
   * @throws InitializationError if no event handler is found.
   */
  private resolveEventHandler (): IEventHandler<IncomingEventType, OutgoingResponseType> {
    if (this.resolvedEventHandler === undefined) {
      const mixedEventHandler = this.blueprint.get<MixedEventHandler<IncomingEventType, OutgoingResponseType>>('stone.handler')

      if (isMetaClassModule<EventHandlerClass<IncomingEventType, OutgoingResponseType>>(mixedEventHandler)) {
        this.resolvedEventHandler = this.container.resolve(mixedEventHandler.module, true)
      } else if (isMetaFactoryModule<FactoryEventHandler<IncomingEventType, OutgoingResponseType>>(mixedEventHandler)) {
        this.resolvedEventHandler = { handle: mixedEventHandler.module(this.container) }
      } else if (isMetaFunctionModule<FunctionalEventHandler<IncomingEventType, OutgoingResponseType>>(mixedEventHandler)) {
        this.resolvedEventHandler = { handle: mixedEventHandler.module }
      } else if (isFunctionModule<FunctionalEventHandler<IncomingEventType, OutgoingResponseType>>(mixedEventHandler)) {
        this.resolvedEventHandler = { handle: mixedEventHandler }
      } else {
        throw new InitializationError('No event handler has been provided.')
      }
    }

    return this.resolvedEventHandler
  }

  /**
   * Get the error handler for the given error.
   *
   * @param error - The error to get the handler for.
   * @returns The error handler.
   * @throws Error if no error handler is found.
   */
  private resolveErrorHandler (error: Error): IErrorHandler<IncomingEventType, OutgoingResponseType> {
    if (this.resolvedErrorHandlers[error.name] === undefined) {
      const metaErrorHandler = this.blueprint.get<MetaErrorHandler<IncomingEventType, OutgoingResponseType>>(
        `stone.kernel.errorHandlers.${error.name}`,
        this.blueprint.get<MetaErrorHandler<IncomingEventType, OutgoingResponseType>>(
          'stone.kernel.errorHandlers.default',
          {} as any
        )
      )

      if (isMetaClassModule<IErrorHandlerClass>(metaErrorHandler)) {
        this.resolvedErrorHandlers[error.name] = this.container.resolve<IErrorHandler<IncomingEventType, OutgoingResponseType>>(metaErrorHandler.module, true)
      } else if (isMetaFactoryModule<FactoryErrorHandler<IncomingEventType, OutgoingResponseType>>(metaErrorHandler)) {
        this.resolvedErrorHandlers[error.name] = { handle: metaErrorHandler.module(this.container) }
      } else if (isMetaFunctionModule<FunctionalErrorHandler<IncomingEventType, OutgoingResponseType>>(metaErrorHandler)) {
        this.resolvedErrorHandlers[error.name] = { handle: metaErrorHandler.module }
      } else {
        throw error
      }
    }

    return this.resolvedErrorHandlers[error.name]
  }

  /**
   * Resolves all providers defined in the blueprint.
   *
   * @private
   * @returns The Kernel instance.
   */
  private async resolveProviders (): Promise<void> {
    const providers = this.blueprint.get<Array<MixedServiceProvider<IncomingEventType, OutgoingResponseType>>>('stone.providers', [])

    for (const provider of providers) {
      let resolvedProvider: IServiceProvider<IncomingEventType, OutgoingResponseType> | undefined

      if (isMetaClassModule<IServiceProviderClass<IncomingEventType, OutgoingResponseType>>(provider)) {
        resolvedProvider = this.container.resolve<IServiceProvider<IncomingEventType, OutgoingResponseType>>(provider.module, true)
      } else if (isMetaFactoryModule<FactoryServiceProvider<IncomingEventType, OutgoingResponseType>>(provider)) {
        resolvedProvider = provider.module(this.container)
      } else if (isConstructor<IServiceProviderClass<IncomingEventType, OutgoingResponseType>>(provider)) {
        resolvedProvider = this.container.resolve<IServiceProvider<IncomingEventType, OutgoingResponseType>>(provider, true)
      }

      if (resolvedProvider !== undefined && (resolvedProvider.mustSkip === undefined || !(await resolvedProvider.mustSkip()))) {
        this.providers.add(resolvedProvider)
      }
    }
  }

  /**
   * Registers the providers.
   *
   * @private
   * @returns A promise that resolves when all providers are registered.
   */
  private async registerProviders (): Promise<void> {
    for (const provider of this.providers) {
      if (provider.register === undefined || this.registeredProviders.has(provider.constructor.name)) { continue }
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

  /**
   * Handle errors.
   *
   * @param error - The error to handle.
   * @param event - The incoming event.
   * @returns The outgoing response.
   */
  private async handleErrors (error: Error, event: IncomingEventType): Promise<OutgoingResponseType> {
    const errorHandler = this.resolveErrorHandler(error)
    const response = await errorHandler.handle(error, event)
    const validatedResponse = await this.validateAndResolveResponse(response)
    return await validatedResponse.prepare(event, this.container)
  }

  /**
   * Validate and resolve the response.
   *
   * @param returnedValue - The returned value that might be a response.
   * @returns The validated and resolved response.
   * @throws InitializationError if the response is invalid or undefined.
   */
  private async validateAndResolveResponse (returnedValue: unknown): Promise<OutgoingResponseType> {
    const responseResolver = this.blueprint.get<ResponseResolver<OutgoingResponseType>>('stone.kernel.responseResolver')

    if (returnedValue === undefined) {
      if (responseResolver === undefined) {
        throw new InitializationError('No response was returned')
      }
      return await responseResolver({})
    }

    if (!(returnedValue instanceof OutgoingResponse)) {
      if (responseResolver === undefined) {
        throw new InitializationError('Returned response must be an instance of `OutgoingResponse` or a subclass of it.')
      }
      const valueOptions = returnedValue as ResponseResolverOptions
      const options = (
        valueOptions?.content === undefined && valueOptions?.statusCode === undefined
          ? { content: returnedValue, statusCode: 200 }
          : returnedValue
      ) as ResponseResolverOptions
      return await responseResolver(options)
    }

    return returnedValue as OutgoingResponseType
  }

  /**
   * Run live configurations.
   * Live configurations are loaded at each request.
   */
  private async runLiveConfigurations (): Promise<void> {
    const liveConfigurations = this.blueprint.get<MixedConfiguration[]>('stone.liveConfigurations', [])

    for (const configuration of liveConfigurations) {
      if (isMetaClassModule<ConfigurationClass>(configuration)) {
        await this.container.resolve<IConfiguration>(configuration.module).configure(this.blueprint)
      } else if (isFunctionModule<FunctionalConfiguration>(configuration)) {
        await configuration(this.blueprint)
      }
    }
  }

  /**
   * Execute lifecycle hooks.
   *
   * @param name - The hook's name.
   */
  private async executeHooks (name: HookName): Promise<void> {
    if (Array.isArray(this.hooks[name])) {
      for (const listener of this.hooks[name]) {
        await listener(this.container)
      }
    }
  }
}

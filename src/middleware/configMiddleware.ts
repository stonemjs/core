import { SetupError } from '../errors/SetupError'
import { ServiceOptions } from '../decorators/Service'
import { AdapterConfig } from '../options/AdapterConfig'
import { ListenerOptions } from '../decorators/Listener'
import { StoneBlueprint } from '../options/StoneBlueprint'
import { MiddlewareOptions } from '../decorators/Middleware'
import { ErrorHandlerOptions } from '../decorators/ErrorHandler'
import { AdapterMiddlewareOptions } from '../decorators/AdapterMiddleware'
import { isConstructor, MetaPipe, NextPipe, PipeClass } from '@stone-js/pipeline'
import { isFunctionModule, isNotEmpty, isStoneBlueprint, mergeBlueprints } from '../utils'
import { getBlueprint, getMetadata, hasBlueprint, hasMetadata } from '../decorators/Metadata'
import { IBlueprint, ClassType, ConfigContext, IConfiguration, AdapterStaticHookListener } from '../declarations'
import {
  SERVICE_KEY,
  LISTENER_KEY,
  PROVIDER_KEY,
  STONE_APP_KEY,
  MIDDLEWARE_KEY,
  SUBSCRIBER_KEY,
  ERROR_HANDLER_KEY,
  CONFIGURATION_KEY,
  ADAPTER_MIDDLEWARE_KEY,
  ADAPTER_ERROR_HANDLER_KEY
} from '../decorators/constants'

/**
 * Middleware to build a blueprint from provided modules and pass it to the next pipeline step.
 *
 * This middleware processes each module to extract its blueprint or configuration metadata, merges
 * them into a single meta blueprint, and sets the resulting blueprint in the provided context.
 * It uses `Promise.all()` to execute the module processing concurrently for better performance.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns A promise that resolves to the updated blueprint.
 *
 * @example
 * ```typescript
 * await BlueprintMiddleware({ modules, blueprint }, next);
 * ```
 */
export const BlueprintMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  let blueprints: StoneBlueprint[] = []

  for (const module of context.modules) {
    if (isStoneBlueprint(module)) { // Blueprint configuration
      blueprints = blueprints.concat(module)
    } else if (hasBlueprint(module)) { // Declarative configuration
      blueprints = blueprints.concat(getBlueprint(module, { stone: {} }))
    } else if (hasMetadata(module, CONFIGURATION_KEY) && isConstructor<IConfiguration>(module)) { // Imperative configuration
      const options = getMetadata(module, CONFIGURATION_KEY, { live: false })

      if (!options.live) {
        await (new module.prototype.constructor()).configure(context.blueprint)
      } else {
        context.blueprint.add('stone.liveConfigurations', [{ ...options, module }])
      }
    }
  }

  // Imperative configuration takes precedence over declarative configuration
  context.blueprint.setItems(mergeBlueprints(...blueprints, context.blueprint.all()))

  return await next(context)
}

/**
 * Middleware to set the application entry point in the blueprint.
 *
 * This middleware identifies the module marked as the main application entry point and sets it in the
 * blueprint as the handler. If no entry point is found, an error is thrown.
 *
 * Note: This middleware is executed in a way to set a default event handler
 * if none is provided by third-party modules.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * ApplicationEntryPointMiddleware({ modules, blueprint }, next);
 * ```
 */
export const ApplicationEntryPointMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  const blueprint = await next(context)
  const module = context.modules.find(module => hasMetadata(module, STONE_APP_KEY))

  // Set the application entry point as the fallback
  // main handler in the blueprint if not already set
  if (module !== undefined) {
    const metaApp = { ...getMetadata(module, STONE_APP_KEY, {}), module }
    blueprint.set('stone.application', metaApp)
    !blueprint.has('stone.handler.module') && blueprint.set('stone.handler', metaApp)
  }

  if (!blueprint.has('stone.handler.module')) {
    throw new SetupError(
      'No main event handler found. Every Stone.js app must define one main event handler.'
    )
  }

  return blueprint
}

/**
 * Middleware to set the current adapter configuration in the blueprint.
 *
 * This middleware checks if there is only one adapter in the list, if yes return it,
 * otherwise it looks for the preferred adapter, followed by the adapter with the matching alias,
 * and finally the default adapter. The selected adapter is then set in the blueprint.
 *
 * @param context - The configuration context containing the modules and blueprint.
 * @param next - The next function in the pipeline to continue processing.
 * @returns The updated blueprint or a promise resolving to the updated blueprint.
 *
 * @example
 * ```typescript
 * await SetCurrentAdapterMiddleware({ modules, blueprint }, next);
 * ```
 */
export const SetCurrentAdapterMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  const current = context.blueprint.get<AdapterConfig>('stone.adapter')
  const adapters = context.blueprint.get<AdapterConfig[]>('stone.adapters', [])
  const adapter = (
    adapters.length === 1
      ? adapters[0]
      : (
          adapters.find(v => v.current === true) ??
          adapters.find(v => isNotEmpty(current?.alias) && v.alias === current?.alias) ??
          adapters.find(v => isNotEmpty(current?.platform) && v.platform === current?.platform) ??
          adapters.find(v => v.default === true) ??
          {}
        )
  )

  context.blueprint.set('stone.adapter', adapter)

  return await next(context)
}

/**
 * Middleware to add service providers to the blueprint.
 *
 * This middleware identifies modules marked as service providers and adds them to the blueprint's
 * list of providers.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * ProviderMiddleware({ modules, blueprint }, next);
 * ```
 */
export const ProviderMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  const providers = context.modules
    .filter(module => hasMetadata(module, PROVIDER_KEY))
    .map(module => ({ ...getMetadata(module, PROVIDER_KEY, {}), module }))

  context.blueprint.add('stone.providers', providers)

  return await next(context)
}

/**
 * Middleware to register service providers to the `onStart` hook of the current adapter.
 *
 * This middleware filters modules to identify service providers that implement the `onStart` hook,
 * and adds them to the `onStart` lifecycle event of the current adapter.
 *
 * @param {ConfigContext} context - The configuration context containing the modules and blueprint.
 * @param {NextPipe<ConfigContext, IBlueprint>} next - The next function in the middleware pipeline.
 * @returns {IBlueprint | Promise<IBlueprint>} - Returns the updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * await RegisterProviderOnStartOnStopHooksMiddleware({ modules, blueprint }, next);
 * ```
 */
export const RegisterOnStartOnStopHooksMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  const adapter = context.blueprint.get<AdapterConfig>('stone.adapter')
  const mainApp = context.modules.find(module => hasMetadata(module, STONE_APP_KEY))
  const providers = context.modules.filter(module => hasMetadata(module, PROVIDER_KEY)) as unknown[]

  if (isNotEmpty<AdapterConfig>(adapter)) {
    adapter.hooks ??= {}
    adapter.hooks.onStop ??= []
    adapter.hooks.onStart ??= []

    if (isNotEmpty<AdapterStaticHookListener>(mainApp)) {
      if (isFunctionModule(mainApp.onStart)) {
        adapter.hooks.onStart.push(async (v: IBlueprint) => await mainApp.onStart(v))
      }

      if (isFunctionModule(mainApp.onStop)) {
        adapter.hooks.onStop.push(async (v: IBlueprint) => await mainApp.onStop(v))
      }
    }

    if (isNotEmpty<AdapterStaticHookListener[]>(providers)) {
      providers
        .filter((provider) => isNotEmpty(provider.onStart) || isNotEmpty(provider.onStop))
        .forEach((provider) => {
          if (isFunctionModule(provider.onStart)) {
            adapter.hooks?.onStart?.push(async (v: IBlueprint) => await provider.onStart(v))
          }

          if (isFunctionModule(provider.onStop)) {
            adapter.hooks?.onStop?.push(async (v: IBlueprint) => await provider.onStop(v))
          }
        })
    }
  }

  return await next(context)
}

/**
 * Middleware to add error handlers to the blueprint.
 *
 * This middleware identifies modules marked as error handlers and adds them to the blueprint's list
 * of kernel.errorhandlers.
 *
 * Note: User defined error handlers take precedence over built-in and third-party error handlers.
 * So the users can override the default error handlers.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * ErrorHandlerMiddleware({ modules, blueprint }, next);
 * ```
 */
export const ErrorHandlerMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  const blueprint = await next(context)
  context.modules
    .filter(module => hasMetadata(module, ERROR_HANDLER_KEY))
    .forEach(module => {
      const options: ErrorHandlerOptions = getMetadata(module, ERROR_HANDLER_KEY, { error: 'default' })
      Array(options.error)
        .flat()
        .forEach(error => blueprint.set(`stone.kernel.errorHandlers.${error}`, { ...options, error, module }))
    })

  return blueprint
}

/**
 * Middleware to add adapter error handlers to the blueprint.
 *
 * This middleware identifies modules marked as adapter error handlers and adds them to the blueprint's list
 * of adapter.errorhandlers.
 *
 * Note: User defined error handlers take precedence over built-in and third-party error handlers.
 * So the users can override the default error handlers.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * AdapterErrorHandlerMiddleware({ modules, blueprint }, next);
 * ```
 */
export const AdapterErrorHandlerMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  const blueprint = await next(context)
  context.modules
    .filter(module => hasMetadata(module, ADAPTER_ERROR_HANDLER_KEY))
    .forEach(module => {
      const options: ErrorHandlerOptions = getMetadata(module, ADAPTER_ERROR_HANDLER_KEY, { error: 'default' })
      Array(options.error)
        .flat()
        .forEach(error => blueprint.set(`stone.adapter.errorHandlers.${error}}`, { ...options, error, module }))
    })

  return blueprint
}

/**
 * Middleware to add services to the blueprint.
 *
 * This middleware identifies modules marked as services and adds them to the blueprint's list
 * of services.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * ServiceMiddleware({ modules, blueprint }, next);
 * ```
 */
export const ServiceMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  context.modules
    .filter(module => hasMetadata(module, SERVICE_KEY))
    .forEach(module => {
      const options: ServiceOptions = getMetadata(module, SERVICE_KEY, { alias: '' })
      context.blueprint.add('stone.services', [{ ...options, module }])
    })

  return await next(context)
}

/**
 * Middleware to add listeners to the blueprint.
 *
 * This middleware processes modules marked as listeners and associates them with the relevant
 * events within the blueprint. Throws an error if no event name is provided for a listener.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * ListenerMiddleware({ modules, blueprint }, next);
 * ```
 */
export const ListenerMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  context.modules
    .filter(module => hasMetadata(module, LISTENER_KEY))
    .forEach(module => {
      const options: ListenerOptions = getMetadata(module, LISTENER_KEY, { event: '' })
      if (options.event === undefined || options.event.length === 0) { throw new SetupError(`No event name provided for this listener ${String(typeof module)}`) }
      context.blueprint.add('stone.listeners', [{ ...options, module }])
    })

  return await next(context)
}

/**
 * Middleware to add subscribers to the blueprint.
 *
 * This middleware identifies modules marked as subscribers and adds them to the blueprint's
 * list of subscribers.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * SubscriberMiddleware({ modules, blueprint }, next);
 * ```
 */
export const SubscriberMiddleware = async (
  context: ConfigContext<IBlueprint, ClassType>,
  next: NextPipe<ConfigContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  const subscribers = context.modules
    .filter(module => hasMetadata(module, SUBSCRIBER_KEY))
    .map(module => ({ ...getMetadata(module, SUBSCRIBER_KEY, {}), module }))

  context.blueprint.add('stone.subscribers', subscribers)

  return await next(context)
}

/**
 * Middleware to add adapter-specific middleware to the blueprint.
 *
 * This middleware processes modules marked as adapter middleware and associates them with the
 * appropriate adapter configuration in the blueprint.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * AdapterMiddlewareMiddleware({ modules, blueprint }, next);
 * ```
 */
export const AdapterMiddlewareMiddleware = async (
  context: ConfigContext<IBlueprint, PipeClass>,
  next: NextPipe<ConfigContext<IBlueprint, PipeClass>, IBlueprint>
): Promise<IBlueprint> => {
  context.modules
    .filter(module => hasMetadata(module, ADAPTER_MIDDLEWARE_KEY))
    .forEach(module => {
      const options: AdapterMiddlewareOptions = getMetadata(module, ADAPTER_MIDDLEWARE_KEY, {})
      const middleware: MetaPipe = { ...options, module }
      context.blueprint
        .get<AdapterConfig[]>('stone.adapters', [])
        .forEach(adapter => {
          adapter.middleware ??= []
          if (options.platform === undefined) {
            adapter.middleware.push(middleware)
          } else if (options.alias === adapter.alias) {
            adapter.middleware.push(middleware)
          } else if (options.platform === adapter.platform) {
            adapter.middleware.push(middleware)
          }
        })
    })

  return await next(context)
}

/**
 * Middleware to add global and specific middleware to the kernel blueprint.
 *
 * This middleware processes modules marked as general middleware and associates them with the
 * kernel's configuration in the blueprint.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * MiddlewareMiddleware({ modules, blueprint }, next);
 * ```
 */
export const MiddlewareMiddleware = async (
  context: ConfigContext<IBlueprint, PipeClass>,
  next: NextPipe<ConfigContext<IBlueprint, PipeClass>, IBlueprint>
): Promise<IBlueprint> => {
  context.modules
    .filter(module => hasMetadata(module, MIDDLEWARE_KEY))
    .forEach(module => {
      const options: MiddlewareOptions = getMetadata(module, MIDDLEWARE_KEY, {})
      const middleware: MetaPipe = { ...options, module }
      options.global === true && context.blueprint.add('stone.kernel.middleware', [middleware])
    })

  return await next(context)
}

/**
 * Array representing the core configuration middleware for the application.
 *
 * This array contains the list of core middleware functions that are used to process the application
 * configuration in a specific order. Each middleware is associated with a priority that determines
 * the sequence in which it is executed. Middleware functions are used to build the application's blueprint,
 * set up the adapter, register providers, and handle other essential configuration steps.
 *
 * @type {MetaPipe[]}
 * @example
 * ```typescript
 * import { coreConfigMiddleware } from './coreConfigMiddleware';
 *
 * // The middleware will be used to configure the application's settings before it starts.
 * ```
 */
export const coreConfigMiddleware: Array<MetaPipe<ConfigContext<IBlueprint, ClassType | PipeClass>, IBlueprint>> = [
  { module: BlueprintMiddleware, priority: 0 },
  { module: ApplicationEntryPointMiddleware, priority: 0.1 },
  { module: SetCurrentAdapterMiddleware, priority: 0.5 },
  { module: ProviderMiddleware, priority: 0.6 },
  { module: ServiceMiddleware, priority: 0.7 },
  { module: ListenerMiddleware, priority: 0.7 },
  { module: SubscriberMiddleware, priority: 0.7 },
  { module: ErrorHandlerMiddleware, priority: 0.7 },
  { module: AdapterErrorHandlerMiddleware, priority: 0.7 },
  { module: RegisterOnStartOnStopHooksMiddleware, priority: 0.7 },
  { module: AdapterMiddlewareMiddleware, priority: 3 },
  { module: MiddlewareMiddleware, priority: 3 }
]

import { mergeBlueprints } from '../utils'
import { SetupError } from '../errors/SetupError'
import { ServiceOptions } from '../decorators/Service'
import { AdapterConfig } from '../options/AdapterConfig'
import { ListenerOptions } from '../decorators/Listener'
import { StoneBlueprint } from '../options/StoneBlueprint'
import { MiddlewareOptions } from '../decorators/Middleware'
import { ErrorHandlerOptions } from '../decorators/ErrorHandler'
import { MetaPipe, MixedPipe, NextPipe } from '@stone-js/pipeline'
import { AdapterMiddlewareOptions } from '../decorators/AdapterMiddleware'
import { IBlueprint, ClassType, ConfigContext, IConfiguration } from '../declarations'
import { getBlueprint, getMetadata, hasBlueprint, hasMetadata } from '../decorators/Metadata'
import { MAIN_HANDLER_KEY, MIDDLEWARE_KEY, ADAPTER_MIDDLEWARE_KEY, SUBSCRIBER_KEY, CONFIGURATION_KEY, PROVIDER_KEY, SERVICE_KEY, LISTENER_KEY, ERROR_HANDLER_KEY, ADAPTER_ERROR_HANDLER_KEY } from '../decorators/constants'

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
export const BlueprintMiddleware = async ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): Promise<IBlueprint> => {
  const classModules = modules as ClassType[]
  const declarativeBlueprints = classModules.filter((module) => hasBlueprint(module)).map((module) => getBlueprint(module, { stone: {} }))
  const imperativeBlueprints = classModules.filter((module) => hasMetadata(module, CONFIGURATION_KEY)).map(async (module) => await extractImperativeBlueprintFromModule(module))
  const resolvedImperativeBlueprints = await Promise.all(imperativeBlueprints)

  blueprint.set(mergeBlueprints(...declarativeBlueprints, ...resolvedImperativeBlueprints) as Record<PropertyKey, any>)

  return await next({ modules, blueprint })
}

/**
 * Middleware to assign the main handler for the application from the provided modules.
 *
 * This middleware finds a module marked as the main application entry point and assigns it as
 * the handler in the blueprint. Throws an error if no main handler is found.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * MainHandlerMiddleware({ modules, blueprint }, next);
 * ```
 */
export const MainHandlerMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  const mainHandler = (modules as ClassType[]).find(module => hasMetadata(module, MAIN_HANDLER_KEY))
  if (mainHandler === undefined) { throw new SetupError('No Main handler provided') }
  blueprint.set('stone.handler', mainHandler)
  return next({ modules, blueprint })
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
export const SetCurrentAdapterMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  const current = blueprint.get<AdapterConfig>('stone.adapter')
  const adapters = blueprint.get<AdapterConfig[]>('stone.adapters', [])
  const adapter = (
    adapters.find(v => v.current === true) ??
    adapters.find(v => v.alias === current?.alias) ??
    adapters.find(v => v.platform === current?.platform) ??
    adapters.find(v => v.default === true) ??
    {}
  )
  blueprint.set('stone.adapter', adapter)
  return next({ modules, blueprint })
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
export const ProviderMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  const providers = (modules as ClassType[]).filter(module => hasMetadata(module, PROVIDER_KEY))
  blueprint.add('stone.providers', providers)
  return next({ modules, blueprint })
}

/**
 * Middleware to register service providers to the `onInit` hook of the current adapter.
 *
 * This middleware filters modules to identify service providers that implement the `onInit` hook,
 * and adds them to the `onInit` lifecycle event of the current adapter.
 *
 * @param {ConfigContext} context - The configuration context containing the modules and blueprint.
 * @param {NextPipe<ConfigContext, IBlueprint>} next - The next function in the middleware pipeline.
 * @returns {IBlueprint | Promise<IBlueprint>} - Returns the updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * await RegisterProviderToOnInitHookMiddleware({ modules, blueprint }, next);
 * ```
 */
export const RegisterProviderToOnInitHookMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  const adapter = blueprint.get<AdapterConfig>('stone.adapter')
  const providers = modules.filter(module => hasMetadata(module as ClassType, PROVIDER_KEY))
  if (adapter?.hooks !== undefined) {
    providers
      .map(provider => provider as { onInit: Function })
      .filter((provider) => provider.onInit !== undefined)
      .forEach((provider) => {
        adapter.hooks.onInit = [...(adapter.hooks.onInit ?? []), (v: IBlueprint) => provider.onInit(v)]
      })
  }
  return next({ modules, blueprint })
}

/**
 * Middleware to add error handlers to the blueprint.
 *
 * This middleware identifies modules marked as error handlers and adds them to the blueprint's list
 * of kernel.errorhandlers.
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
export const ErrorHandlerMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  (modules as ClassType[])
    .filter(module => hasMetadata(module, ERROR_HANDLER_KEY))
    .forEach(module => {
      const options: ErrorHandlerOptions = getMetadata(module, ERROR_HANDLER_KEY, { error: 'default' })
      const errorHandlers = Array(options.error).flat().reduce((prev, error) => ({ ...prev, [error]: module }), {})
      blueprint.add('stone.kernel.errorHandlers', errorHandlers)
    })
  return next({ modules, blueprint })
}

/**
 * Middleware to add adapter error handlers to the blueprint.
 *
 * This middleware identifies modules marked as adapter error handlers and adds them to the blueprint's list
 * of adapter.errorhandlers.
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
export const AdapterErrorHandlerMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  (modules as ClassType[])
    .filter(module => hasMetadata(module, ADAPTER_ERROR_HANDLER_KEY))
    .forEach(module => {
      const options: ErrorHandlerOptions = getMetadata(module, ADAPTER_ERROR_HANDLER_KEY, { error: 'default' })
      const errorHandlers = Array(options.error).flat().reduce((prev, error) => ({ ...prev, [error]: module }), {})
      blueprint.add('stone.adapter.errorHandlers', errorHandlers)
    })
  return next({ modules, blueprint })
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
export const ServiceMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  (modules as ClassType[])
    .filter(module => hasMetadata(module, SERVICE_KEY))
    .forEach(module => {
      const options: ServiceOptions = getMetadata(module, SERVICE_KEY, { alias: '' })
      blueprint.add('stone.services', [[module, options]])
    })
  return next({ modules, blueprint })
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
export const ListenerMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  (modules as ClassType[])
    .filter(module => hasMetadata(module, LISTENER_KEY))
    .forEach(module => {
      const { event }: ListenerOptions = getMetadata(module, LISTENER_KEY, { event: '' })
      if (event === undefined || event.length === 0) { throw new SetupError(`No event name provided for this listener ${String(typeof module)}`) }
      blueprint.add(`stone.listeners.${event}`, [module])
    })

  return next({ modules, blueprint })
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
export const SubscriberMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  const subscribers = (modules as ClassType[]).filter(module => hasMetadata(module, SUBSCRIBER_KEY))
  blueprint.add('stone.subscribers', subscribers)
  return next({ modules, blueprint })
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
export const AdapterMiddlewareMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  (modules as ClassType[])
    .filter(module => hasMetadata(module, ADAPTER_MIDDLEWARE_KEY))
    .map(module => module)
    .forEach(module => {
      const { platform, priority, params }: AdapterMiddlewareOptions = getMetadata(module, ADAPTER_MIDDLEWARE_KEY, {})
      const middleware: MixedPipe = { priority, params, pipe: module }
      const adapters = blueprint.get<AdapterConfig[]>('stone.adapters', [])
      adapters?.forEach(adapter => {
        adapter.middleware ??= []
        if (platform === undefined) {
          adapter.middleware.push(middleware)
        } else if (platform === adapter.alias) {
          adapter.middleware.push(middleware)
        }
      })
    })
  return next({ modules, blueprint })
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
export const MiddlewareMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  (modules as ClassType[])
    .filter(module => hasMetadata(module, MIDDLEWARE_KEY))
    .map(module => module)
    .forEach(module => {
      const { global = false, priority, params }: MiddlewareOptions = getMetadata(module, MIDDLEWARE_KEY, {})
      const middleware: MetaPipe = { priority, params, pipe: module }
      global && blueprint.add<MetaPipe[]>('stone.kernel.middleware', [middleware])
    })
  return next({ modules, blueprint })
}

/**
 * Processes a module to extract its imperative blueprint.
 *
 * @param module - The module to be processed.
 * @returns A promise that resolves to the updated meta blueprint.
 *
 * @example
 * ```typescript
 * const updatedBlueprint = await extractImperativeBlueprintFromModule(myModule);
 * ```
 */
async function extractImperativeBlueprintFromModule (module: ClassType): Promise<StoneBlueprint> {
  try {
    const loadedOptions = await (module as IConfiguration<StoneBlueprint>).load?.()
    const moduleOptions = Object.fromEntries(Object.entries(module)) as StoneBlueprint
    return mergeBlueprints(moduleOptions, loadedOptions ?? { stone: {} })
  } catch (error) {
    console.error(`Error loading options from module: ${String(module)}`, error)
    return { stone: {} }
  }
}

/**
 * Array representing the core configuration middleware for the application.
 *
 * This array contains the list of core middleware functions that are used to process the application
 * configuration in a specific order. Each middleware is associated with a priority that determines
 * the sequence in which it is executed. Middleware functions are used to build the application's blueprint,
 * set up the adapter, register providers, and handle other essential configuration steps.
 *
 * @type {MixedPipe[]}
 * @example
 * ```typescript
 * import { coreConfigMiddleware } from './coreConfigMiddleware';
 *
 * // The middleware will be used to configure the application's settings before it starts.
 * ```
 */
export const coreConfigMiddleware: MixedPipe[] = [
  { pipe: BlueprintMiddleware, priority: 0 },
  { pipe: MainHandlerMiddleware, priority: 0.1 },
  { pipe: SetCurrentAdapterMiddleware, priority: 0.5 },
  { pipe: ProviderMiddleware, priority: 0.6 },
  { pipe: ServiceMiddleware, priority: 0.7 },
  { pipe: ListenerMiddleware, priority: 0.7 },
  { pipe: SubscriberMiddleware, priority: 0.7 },
  { pipe: ErrorHandlerMiddleware, priority: 0.7 },
  { pipe: AdapterErrorHandlerMiddleware, priority: 0.7 },
  { pipe: RegisterProviderToOnInitHookMiddleware, priority: 0.7 },
  { pipe: AdapterMiddlewareMiddleware, priority: 3 },
  { pipe: MiddlewareMiddleware, priority: 3 }
]

import { ServiceOptions } from '../decorators/Service'
import { AdapterConfig } from '../options/AdapterConfig'
import { ListenerOptions } from '../decorators/Listener'
import { isConstructor, mergeBlueprints } from '../utils'
import { StoneBlueprint } from '../options/StoneBlueprint'
import { MiddlewareOptions } from '../decorators/Middleware'
import { MetaPipe, MixedPipe, NextPipe } from '@stone-js/pipeline'
import { IBlueprint, ClassType, ConfigContext, IConfiguration } from '../definitions'
import { AdapterMiddlewareOptions } from '../decorators/AdapterMiddleware'
import { getBlueprint, getMetadata, hasBlueprint, hasMetadata } from '../decorators/Metadata'
import { MAIN_HANDLER_KEY, MIDDLEWARE_KEY, ADAPTER_MIDDLEWARE_KEY, SUBSCRIBER_KEY, CONFIGURATION_KEY, PROVIDER_KEY, SERVICE_KEY, LISTENER_KEY } from '../decorators/constants'

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
  const declarativeBlueprints = (modules as ClassType[]).map((module) => hasBlueprint(module) ? getBlueprint(module) : ({ app: {} }))
  const imperativeBlueprints = await Promise.all((modules as ClassType[]).map(async (module) => await extractImperativeBlueprintFromModule(module)))

  blueprint.set(mergeBlueprints(...declarativeBlueprints, ...imperativeBlueprints))

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
  const mainHandler = (modules as ClassType[]).find(module => typeof module === 'function' && hasMetadata(module, MAIN_HANDLER_KEY))
  if (mainHandler === undefined) { throw new TypeError('No Main handler provided') }
  blueprint.set('app.handler', mainHandler)
  return next({ modules, blueprint })
}

/**
 * Middleware to set the current adapter configuration in the blueprint.
 *
 * This middleware looks for the preferred adapter, followed by the adapter with the matching alias,
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
  const adapters = blueprint.get<AdapterConfig[]>('app.adapters', [])
  const currentAlias = blueprint.get<string>('app.adapter.alias')
  const adapter = adapters?.find(v => v.preferred === true) ?? adapters?.find(v => v.alias === currentAlias) ?? adapters?.find(v => v.default === true)
  blueprint.set('app.adapter', adapter)
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
  const providers = (modules as ClassType[]).filter(module => typeof module === 'function' && hasMetadata(module, PROVIDER_KEY))
  blueprint.add('app.providers', providers)
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
  const adapter = blueprint.get<AdapterConfig>('app.adapter')
  const providers = modules.filter(module => typeof module === 'function' && hasMetadata(module as ClassType, PROVIDER_KEY))
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
    .filter(module => typeof module === 'function' && hasMetadata(module, SERVICE_KEY))
    .forEach(module => {
      const options: ServiceOptions = getMetadata(module, SERVICE_KEY, { alias: '' })
      blueprint.add('app.services', [[module, options]])
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
    .filter(module => typeof module === 'function' && hasMetadata(module, LISTENER_KEY))
    .forEach(module => {
      const { event }: ListenerOptions = getMetadata(module, LISTENER_KEY, { event: '' })
      if (event === undefined || event.length === 0) { throw new TypeError(`No event name provided for this listener ${String(typeof module)}`) }
      blueprint.add(`app.listeners.${event}`, [module])
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
  const subscribers = (modules as ClassType[]).filter(module => typeof module === 'function' && hasMetadata(module, SUBSCRIBER_KEY))
  blueprint.add('app.subscribers', subscribers)
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
    .filter(module => typeof module === 'function' && hasMetadata(module, ADAPTER_MIDDLEWARE_KEY))
    .map(module => module)
    .forEach(module => {
      const { type = 'input', platform, priority, params }: AdapterMiddlewareOptions = getMetadata(module, ADAPTER_MIDDLEWARE_KEY, {})
      const middleware: MixedPipe = { priority, params, pipe: module }
      const adapters = blueprint.get<AdapterConfig[]>('app.adapters', [])
      adapters?.forEach(adapter => {
        if (platform === undefined) {
          adapter.middleware[type].push(middleware)
        } else if (platform === adapter.alias) {
          adapter.middleware[type].push(middleware)
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
    .filter(module => typeof module === 'function' && hasMetadata(module, MIDDLEWARE_KEY))
    .map(module => module)
    .forEach(module => {
      const { type = 'event', global = false, priority, params }: MiddlewareOptions = getMetadata(module, MIDDLEWARE_KEY, {})
      const middleware: MetaPipe = { priority, params, pipe: module }
      global && blueprint.add<MetaPipe[]>(`app.kernel.middleware.${type}`, [middleware])
    })
  return next({ modules, blueprint })
}

/**
 * Processes a module to extract its imperative blueprint.
 *
 * @param
 module - The module to be processed.
 * @returns A promise that resolves to the updated meta blueprint.
 *
 * @example
 * ```typescript
 * const updatedBlueprint = await extractImperativeBlueprintFromModule(myModule);
 * ```
 */
async function extractImperativeBlueprintFromModule (module: ClassType): Promise<StoneBlueprint> {
  if (isConstructor(module) && hasMetadata(module, CONFIGURATION_KEY)) {
    try {
      const loadedOptions = (await (module as IConfiguration<StoneBlueprint>).load?.()) ?? { app: {} }
      const moduleOptions = Object.fromEntries(Object.entries(module).filter(([key]) => key !== 'load')) as StoneBlueprint
      return mergeBlueprints(moduleOptions, loadedOptions)
    } catch (error) {
      console.error(`Error loading options from module: ${String(module)}`, error)
    }
  }
  return { app: {} }
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
  { pipe: RegisterProviderToOnInitHookMiddleware, priority: 0.7 },
  { pipe: AdapterMiddlewareMiddleware, priority: 3 },
  { pipe: MiddlewareMiddleware, priority: 3 }
]

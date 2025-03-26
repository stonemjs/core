import {
  isNotEmpty,
  mergeBlueprints,
  isStoneBlueprint
} from '../utils'
import {
  ClassType,
  IBlueprint,
  HookOptions,
  IConfiguration,
  BlueprintContext,
  AdapterMixedPipeType
} from '../declarations'
import {
  getMetadata,
  hasMetadata,
  getBlueprint,
  hasBlueprint
} from '../decorators/Metadata'
import {
  SERVICE_KEY,
  LISTENER_KEY,
  PROVIDER_KEY,
  STONE_APP_KEY,
  MIDDLEWARE_KEY,
  SUBSCRIBER_KEY,
  ERROR_HANDLER_KEY,
  CONFIGURATION_KEY,
  LIFECYCLE_HOOK_KEY,
  ADAPTER_MIDDLEWARE_KEY,
  ADAPTER_ERROR_HANDLER_KEY
} from '../decorators/constants'
import { SetupError } from '../errors/SetupError'
import { ServiceOptions } from '../decorators/Service'
import { AdapterConfig } from '../options/AdapterConfig'
import { ListenerOptions } from '../decorators/Listener'
import { StoneBlueprint } from '../options/StoneBlueprint'
import { MiddlewareOptions } from '../decorators/Middleware'
import { ErrorHandlerOptions } from '../decorators/ErrorHandler'
import { AdapterMiddlewareOptions } from '../decorators/AdapterMiddleware'
import { isConstructor, MetaPipe, NextPipe, PipeClass } from '@stone-js/pipeline'

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
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  let blueprints: StoneBlueprint[] = []

  for (const module of context.modules) {
    if (isStoneBlueprint(module)) { // Blueprint configuration (Plain object)
      blueprints = blueprints.concat(module)
    } else if (hasBlueprint(module)) { // Implicit configuration (Decorator)
      blueprints = blueprints.concat(getBlueprint(module, { stone: {} }))
    } else if (hasMetadata(module, CONFIGURATION_KEY) && isConstructor<IConfiguration>(module)) { // Explicit configuration (Class)
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
 * Middleware to register lifecycle hooks to the blueprint.
 *
 * This middleware identifies modules marked as lifecycle hooks
 * and adds them to the blueprint's list of stone.lifecycleHooks.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next function in the pipeline.
 * @returns The updated blueprint.
 *
 * @example
 * ```typescript
 * await RegisterLifecycleHooksMiddleware({ modules, blueprint }, next);
 * ```
 */
export const RegisterLifecycleHooksMiddleware = async (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  context.modules
    .filter(module => hasMetadata(module, LIFECYCLE_HOOK_KEY))
    .forEach(module => {
      getMetadata<ClassType, HookOptions[]>(module, LIFECYCLE_HOOK_KEY, []).forEach(options => {
        if (isNotEmpty<HookOptions>(options)) {
          context.blueprint.add(
            `stone.lifecycleHooks.${options.name}`,
            [module.prototype[options.method].bind(module.prototype)]
          )
        }
      })
    })

  return await next(context)
}

/**
 * Middleware to set the main event handler in the blueprint.
 *
 * This middleware identifies the module marked as the main application and sets it in the
 * blueprint as the main event handler. If no entry point is found, an error is thrown.
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
 * MainEventHandlerMiddleware({ modules, blueprint }, next);
 * ```
 */
export const MainEventHandlerMiddleware = async (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  const blueprint = await next(context)
  const module = context.modules.find(module => hasMetadata(module, STONE_APP_KEY))

  if (isNotEmpty<ClassType>(module) && !blueprint.has('stone.kernel.eventHandler.module')) {
    blueprint.set('stone.kernel.eventHandler', { ...getMetadata(module, STONE_APP_KEY, {}), module })
  }

  if (!blueprint.has('stone.kernel.eventHandler.module')) {
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
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
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
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  const providers = context.modules
    .filter(module => hasMetadata(module, PROVIDER_KEY))
    .map(module => ({ ...getMetadata(module, PROVIDER_KEY, {}), module }))

  context.blueprint.add('stone.providers', providers)

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
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
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
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
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
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
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
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
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
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
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
  context: BlueprintContext<IBlueprint, PipeClass>,
  next: NextPipe<BlueprintContext<IBlueprint, PipeClass>, IBlueprint>
): Promise<IBlueprint> => {
  context.modules
    .filter(module => hasMetadata(module, ADAPTER_MIDDLEWARE_KEY))
    .forEach(module => {
      const options: AdapterMiddlewareOptions = getMetadata(module, ADAPTER_MIDDLEWARE_KEY, {})
      const middleware: AdapterMixedPipeType<any, any> = { ...options, module }

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
  context: BlueprintContext<IBlueprint, PipeClass>,
  next: NextPipe<BlueprintContext<IBlueprint, PipeClass>, IBlueprint>
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
 * import { coreBlueprintMiddleware } from './BlueprintMiddleware';
 *
 * // The middleware will be used to configure the application's settings before it starts.
 * ```
 */
export const metaCoreBlueprintMiddleware: Array<MetaPipe<BlueprintContext<IBlueprint, ClassType | PipeClass>, IBlueprint>> = [
  { module: BlueprintMiddleware, priority: 0 },
  { module: RegisterLifecycleHooksMiddleware, priority: 0.1 },
  { module: MainEventHandlerMiddleware, priority: 0.2 },
  { module: SetCurrentAdapterMiddleware, priority: 0.5 },
  { module: ProviderMiddleware, priority: 0.6 },
  { module: ServiceMiddleware, priority: 0.7 },
  { module: ListenerMiddleware, priority: 0.7 },
  { module: SubscriberMiddleware, priority: 0.7 },
  { module: ErrorHandlerMiddleware, priority: 0.7 },
  { module: AdapterErrorHandlerMiddleware, priority: 0.7 },
  { module: AdapterMiddlewareMiddleware, priority: 3 },
  { module: MiddlewareMiddleware, priority: 3 }
]

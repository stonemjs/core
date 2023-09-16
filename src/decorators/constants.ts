/**
 * Constants are defined here to prevent Circular dependency between modules
 * This pattern must be applied to all Stone libraries or third party libraries.
 */

/**
 * A unique symbol key to mark classes as the main application entry point.
 */
export const MAIN_HANDLER_KEY = Symbol('MainHandler')

/**
 * A unique symbol key to mark classes as middleware.
 */
export const ADAPTER_MIDDLEWARE_KEY = Symbol('AdapterMiddleware')

/**
 * A unique symbol key to mark classes as middleware.
 */
export const CONFIG_MIDDLEWARE_KEY = Symbol('ConfigMiddleware')

/**
 * A unique symbol used as a key for the configuration metadata.
 */
export const CONFIGURATION_KEY = Symbol('Configuration')

/**
 * A unique symbol key to mark classes as listeners.
 */
export const LISTENER_KEY = Symbol('Listener')

/**
 * A unique symbol key to mark classes as middleware.
 */
export const MIDDLEWARE_KEY = Symbol('Middleware')

/**
 * A unique symbol key to mark classes as providers.
 */
export const PROVIDER_KEY = Symbol('Provider')

/**
 * A unique symbol key to mark classes as services.
 */
export const SERVICE_KEY = Symbol('Service')

/**
 * A unique symbol key to mark classes as subscribers.
 */
export const SUBSCRIBER_KEY = Symbol('Subscriber')

/**
 * A unique symbol key to mark classes as the blueprint container.
 */
export const BLUEPRINT_KEY = Symbol('blueprint')

import { MixedPipe } from '@stone-js/pipeline'
import { AdapterHooks, AdapterResolver } from '../definitions'

/**
 * AdapterConfig Interface.
 *
 * This interface defines the configuration options for an adapter within the Stone.js framework.
 * It includes settings for the adapter's alias, resolver, middleware, and hooks, among other properties.
 * The AdapterConfig allows developers to manage how the adapter behaves and how it integrates with the application.
 */
export interface AdapterConfig {
  /**
   * The alias name for the adapter.
   * This is a unique identifier used to reference the adapter.
   */
  alias: string

  /**
   * The class type resolver used to create instances of the adapter.
   */
  resolver: AdapterResolver

  /**
   * The middleware used for processing incoming or outgoing data in the adapter.
   * Middleware can modify or handle events at different stages of the adapter's lifecycle.
   */
  middleware: MixedPipe[]

  /**
   * Hooks that provide additional behavior during specific lifecycle events of the adapter.
   * These hooks can be used to extend the adapter's functionality at various points.
   */
  hooks: AdapterHooks

  /**
   * The current status identifier for the adapter.
   * Used to indicate if this adapter instance is active or currently in use.
   * Optional property.
   */
  current?: boolean

  /**
   * Defines whether this adapter is the default adapter used by the application.
   * Optional property.
   */
  default?: boolean

  /**
   * Indicates if this adapter is preferred over others.
   * Useful for prioritizing adapters in environments where multiple are available.
   * Optional property.
   */
  preferred?: boolean
}

/**
 * Common adapters settings.
 *
 * This array defines the collection of adapters and their respective configurations.
 */
export const adapters: AdapterConfig[] = []

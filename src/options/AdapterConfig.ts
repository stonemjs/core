import { MixedPipe } from '@stone-js/pipeline'
import { AdapterHooks, AdapterResolver } from '../definitions'

/**
 * Mapper configuration.
 *
 * This interface defines the input and output configurations for the adapter's mappers.
 */
export interface AdapterMiddlewareConfig {
  /**
   * Configuration for the input mapper.
   */
  input: MixedPipe[]

  /**
   * Configuration for the output mapper.
   */
  output: MixedPipe[]
}

/**
 * Adapter config.
 *
 * This object defines the configuration options for the adapter.
 * It includes settings for the adapter's URL, alias, current status, server configuration,
 * and other related properties for managing the adapter's behavior.
 */
export interface AdapterConfig {
  /**
   * The alias name for the adapter.
   * This is a unique identifier for the adapter.
   */
  alias: string

  /**
   * The class type of the adapter, used to create instances.
   */
  resolver: AdapterResolver

  /**
   * The middleware used for processing data in the mapper.
   */
  middleware: AdapterMiddlewareConfig

  hooks: AdapterHooks

  /**
   * The current version or status identifier for the adapter.
   */
  current?: boolean

  /**
   * Defines if this is the default adapter.
   * Optional property.
   */
  default?: boolean

  /**
   * Indicates if the adapter is preferred over others.
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

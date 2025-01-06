import { Config } from '@stone-js/config'
import { MixedPipe, Pipeline } from '@stone-js/pipeline'
import { StoneBlueprint } from './options/StoneBlueprint'
import { ConfigMiddlewareOptions } from './decorators/ConfigMiddleware'
import { CONFIGURATION_KEY, CONFIG_MIDDLEWARE_KEY } from './decorators/constants'
import { ConfigRawModules, IBlueprint, ClassType, ConfigContext } from './definitions'
import { getBlueprint, getMetadata, hasBlueprint, hasMetadata } from './decorators/Metadata'

/**
 * ConfigBuilderOptions.
 */
export interface ConfigBuilderOptions {
  middleware: MixedPipe[]
  defaultMiddlewarePriority?: number
}

/**
 * Class representing a ConfigBuilder for the Stone.js framework.
 *
 * The ConfigBuilder is responsible for constructing and configuring the dynamic, complex structured options required by the Stone.js framework.
 * It inspects various modules, extracts metadata, and builds the "blueprint" object which serves as the primary configuration for the Stone.js application.
 * This class also manages middleware used to process and populate the configuration during the application setup.
 *
 * The ConfigBuilder allows users to create a unified configuration that is used to initialize and bootstrap the Stone.js application,
 * ensuring all necessary metadata is aggregated into a blueprint that can be used consistently throughout the application lifecycle.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class ConfigBuilder {
  /**
   * The configuration options.
   */
  private readonly options: ConfigBuilderOptions

  /**
   * Create a ConfigBuilder.
   *
   * @param options - The options to create a ConfigBuilder.
   * @returns A new ConfigBuilder instance.
   */
  static create (options?: ConfigBuilderOptions): ConfigBuilder {
    return new this(options)
  }

  /**
   * Create a ConfigBuilder.
   *
   * @param options - The options to create a ConfigBuilder.
   */
  protected constructor (options: ConfigBuilderOptions = { middleware: [], defaultMiddlewarePriority: 0 }) {
    this.options = options
  }

  /**
   * Build the configuration blueprint by extracting metadata from the provided modules.
   *
   * This method processes the given raw modules, extracts metadata to populate the blueprint,
   * and returns the resulting configuration blueprint. It allows users to pass a custom blueprint
   * or use a default one if none is provided.
   *
   * @param rawModules - The modules to build the configuration from, organized by module names.
   * @param blueprint - The initial blueprint to populate, defaults to a newly created Config instance.
   * @returns A promise that resolves to the populated Blueprint object.
   *
   * @example
   * ```typescript
   * const configBuilder = ConfigBuilder.create();
   * const blueprint = await configBuilder.build(rawModules);
   * ```
   */
  async build (rawModules: ConfigRawModules, blueprint: IBlueprint = Config.create()): Promise<IBlueprint> {
    const modules = this.extractModulesFromRawInput(rawModules)
    const context: ConfigContext = { modules, blueprint }
    const { middleware, defaultMiddlewarePriority = 10 } = this.extractOptionsFromModules(modules)

    return await Pipeline
      .create<ConfigContext, IBlueprint>()
      .defaultPriority(defaultMiddlewarePriority)
      .send(context)
      .through(middleware)
      .then((v) => v.blueprint)
  }

  /**
   * Extract the modules from raw input.
   *
   * @param rawModules - The modules to extract.
   * @returns The list of modules extracted.
   */
  private extractModulesFromRawInput (rawModules: ConfigRawModules): unknown[] {
    return Object.values(rawModules).reduce<unknown[]>((modules, value) => {
      return modules.concat(Object.values(value))
    }, [])
  }

  /**
   * Extract the configuration options from the modules.
   *
   * @param modules - The modules to extract options from.
   * @returns The configuration options.
   */
  private extractOptionsFromModules (modules: unknown[]): ConfigBuilderOptions {
    return modules.reduce<ConfigBuilderOptions>((options, module) => {
      if (typeof module === 'function') {
        this.applyMetadata(module as ClassType, options)
      } else {
        this.populateOptions(options, (module as StoneBlueprint).stone?.builder)
      }
      return options
    }, { ...this.options })
  }

  /**
   * Apply metadata from a class to the options.
   *
   * @param module - The class to extract metadata from.
   * @param options - The options to populate.
   */
  private applyMetadata (module: ClassType, options: ConfigBuilderOptions): void {
    if (hasBlueprint(module)) {
      const blueprint = getBlueprint(module)
      blueprint !== undefined && this.populateOptions(options, blueprint.stone?.builder)
    } else if (hasMetadata(module, CONFIG_MIDDLEWARE_KEY)) {
      const metadata: ConfigMiddlewareOptions = getMetadata(module, CONFIG_MIDDLEWARE_KEY, {})
      this.populateOptions(options, { middleware: [{ ...metadata, pipe: module }] })
    } else if (hasMetadata(module, CONFIGURATION_KEY)) {
      this.populateOptions(options, (module as unknown as StoneBlueprint).stone?.builder)
    }
  }

  /**
   * Populate the configuration options with metadata.
   *
   * @param options - The options to populate.
   * @param metadataOptions - The metadata to use for populating options.
   * @returns The updated configuration options.
   */
  private populateOptions (options: ConfigBuilderOptions, metadataOptions?: ConfigBuilderOptions): ConfigBuilderOptions {
    if (Array.isArray(metadataOptions?.middleware)) {
      options.middleware = [...options.middleware, ...metadataOptions.middleware]
      options.defaultMiddlewarePriority = metadataOptions.defaultMiddlewarePriority ?? options.defaultMiddlewarePriority
    }
    return options
  }
}

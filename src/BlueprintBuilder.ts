import { Config } from '@stone-js/config'
import { isObjectLikeModule, isStoneBlueprint } from './utils'
import { isConstructor, MixedPipe, Pipeline } from '@stone-js/pipeline'
import { CONFIGURATION_KEY, CONFIG_MIDDLEWARE_KEY } from './decorators/constants'
import { IBlueprint, ClassType, ConfigContext, IConfiguration } from './declarations'
import { getBlueprint, getMetadata, hasBlueprint, hasMetadata } from './decorators/Metadata'

/**
 * BlueprintBuilderOptions.
 */
export interface BlueprintBuilderOptions<
  BlueprintType extends IBlueprint = IBlueprint,
  ContextType extends ConfigContext<BlueprintType> = ConfigContext<BlueprintType>
> {
  defaultMiddlewarePriority?: number
  middleware: Array<MixedPipe<ContextType, BlueprintType>>
}

/**
 * Class representing a BlueprintBuilder for the Stone.js framework.
 *
 * The BlueprintBuilder is responsible for constructing and configuring the dynamic, complex structured options required by the Stone.js framework.
 * It introspects various modules, extracts metadata, and builds the "blueprint" object which serves as the primary configuration for the Stone.js application.
 * This class also manages middleware used to process and populate the configuration during the application setup.
 *
 * The BlueprintBuilder allows users to create a unified configuration that is used to initialize and bootstrap the Stone.js application,
 * ensuring all necessary metadata is aggregated into a blueprint that can be used consistently throughout the application lifecycle.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class BlueprintBuilder<
  BlueprintType extends IBlueprint = IBlueprint,
  ContextType extends ConfigContext<BlueprintType> = ConfigContext<BlueprintType>
> {
  /**
   * Create a BlueprintBuilder.
   *
   * @param options - The options to create a BlueprintBuilder.
   * @returns A new BlueprintBuilder instance.
   */
  static create<BlueprintType extends IBlueprint = IBlueprint, ContextType extends ConfigContext<BlueprintType> = ConfigContext<BlueprintType>>(
    options?: BlueprintBuilderOptions<BlueprintType, ContextType>
  ): BlueprintBuilder<BlueprintType, ContextType> {
    return new this(options)
  }

  /**
   * Create a BlueprintBuilder.
   *
   * @param options - The options to create a BlueprintBuilder.
   */
  protected constructor (
    private readonly options: BlueprintBuilderOptions<BlueprintType, ContextType> = { middleware: [], defaultMiddlewarePriority: 0 }
  ) {}

  /**
   * Build the configuration blueprint by extracting metadata from the provided modules.
   *
   * This method processes the given raw modules, extracts metadata to populate the blueprint,
   * and returns the resulting configuration blueprint. It allows users to pass a custom blueprint
   * or use a default one if none is provided.
   *
   * @param modules - The modules to build the configuration from.
   * @param blueprint - The initial blueprint to populate, defaults to a newly created Config instance.
   * @returns A promise that resolves to the populated Blueprint object.
   *
   * @example
   * ```typescript
   * const BlueprintBuilder = BlueprintBuilder.create();
   * const blueprint = await BlueprintBuilder.build(rawModules);
   * ```
   */
  async build (modules: unknown[], blueprint: BlueprintType = Config.create() as BlueprintType): Promise<BlueprintType> {
    const context = { modules, blueprint } as unknown as ContextType
    const { middleware, defaultMiddlewarePriority } = await this.extractOptionsFromModules(modules, blueprint)

    return await Pipeline
      .create<ContextType, BlueprintType>()
      .send(context)
      .through(...middleware)
      .defaultPriority(defaultMiddlewarePriority ?? 0)
      .then((v) => v.blueprint)
  }

  /**
   * Extract the configuration options from the modules.
   *
   * @param modules - The modules to extract options from.
   * @returns The configuration options.
   */
  private async extractOptionsFromModules (modules: unknown[], blueprint: BlueprintType): Promise<BlueprintBuilderOptions<BlueprintType, ContextType>> {
    const {
      middleware,
      defaultMiddlewarePriority
    } = blueprint.get<BlueprintBuilderOptions<BlueprintType, ContextType>>('stone.builder', { middleware: [] })

    this.options.middleware = this.options.middleware.concat(middleware)
    this.options.defaultMiddlewarePriority ??= defaultMiddlewarePriority

    for (const module of modules) {
      if (isConstructor(module)) {
        await this.applyMetadata(module)
      } else if (isStoneBlueprint(module)) {
        this.populateOptions(module.stone.builder)
      }
    }

    return this.options
  }

  /**
   * Apply metadata from a class to the options.
   *
   * @param module - The class to extract metadata from.
   */
  private async applyMetadata (module: ClassType): Promise<void> {
    if (hasBlueprint(module)) {
      const blueprint = getBlueprint(module)
      this.populateOptions(blueprint?.stone?.builder)
    } else if (hasMetadata(module, CONFIG_MIDDLEWARE_KEY)) {
      const metadata = getMetadata(module, CONFIG_MIDDLEWARE_KEY, {})
      this.populateOptions({ middleware: [{ ...metadata, pipe: module }] })
    } else if (hasMetadata(module, CONFIGURATION_KEY) && isConstructor<IConfiguration>(module)) {
      const options = getMetadata(module, CONFIGURATION_KEY, { live: false })

      if (!options.live) {
        const blueprint = Config.create()
        await (new module.prototype.constructor()).configure(blueprint)
        this.populateOptions(blueprint.get('stone.builder'))
      }
    }
  }

  /**
   * Populate the configuration options with metadata.
   *
   * @param builder - The metadata to use for populating options.
   */
  private populateOptions (builder: unknown): void {
    if (isObjectLikeModule<BlueprintBuilderOptions<BlueprintType, ContextType>>(builder)) {
      const { middleware, defaultMiddlewarePriority } = builder

      if (Array.isArray(middleware)) {
        this.options.middleware = this.options.middleware.concat(middleware)
        this.options.defaultMiddlewarePriority = defaultMiddlewarePriority ?? this.options.defaultMiddlewarePriority
      }
    }
  }
}

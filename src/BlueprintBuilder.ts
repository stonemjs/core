import deepmerge from 'deepmerge'
import { Config } from '@stone-js/config'
import { AppConfig } from './options/StoneBlueprint'
import { BuilderConfig } from './options/BuilderConfig'
import { isEmpty, isObjectLikeModule, isStoneBlueprint, isNotEmpty } from './utils'
import { isConstructor, MixedPipe, Pipeline, PipelineOptions } from '@stone-js/pipeline'
import { getBlueprint, getMetadata, hasBlueprint, hasMetadata } from './decorators/Metadata'
import { CONFIGURATION_KEY, CONFIG_MIDDLEWARE_KEY, LIFECYCLE_HOOK_KEY } from './decorators/constants'
import { IBlueprint, ClassType, BlueprintContext, BlueprintHookType, IBlueprintBuilder, BlueprintHookName, BlueprintHookOptions } from './declarations'

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
  ContextType extends BlueprintContext<BlueprintType> = BlueprintContext<BlueprintType>
> implements IBlueprintBuilder<BlueprintType> {
  private defaultMiddlewarePriority: number
  private hooks: BlueprintHookType<BlueprintType, ContextType>
  private middleware: Array<MixedPipe<ContextType, BlueprintType>>

  /**
   * Create a BlueprintBuilder.
   *
   * @param blueprint - The blueprint to create a BlueprintBuilder.
   * @returns A new BlueprintBuilder instance.
   */
  static create<
    BlueprintType extends IBlueprint = IBlueprint,
    ContextType extends BlueprintContext<BlueprintType> = BlueprintContext<BlueprintType>
  >(blueprint: BlueprintType): BlueprintBuilder<BlueprintType, ContextType> {
    return new this(blueprint)
  }

  /**
   * Create a BlueprintBuilder.
   *
   * @param blueprint - The blueprint to create a BlueprintBuilder.
   */
  protected constructor (protected readonly blueprint: BlueprintType) {
    this.hooks = blueprint.get('stone.lifecycleHooks', {})
    this.middleware = blueprint.get('stone.builder.middleware', [])
    this.defaultMiddlewarePriority = blueprint.get('stone.builder.defaultMiddlewarePriority', 0)
  }

  /**
   * Build the configuration blueprint by extracting metadata from the provided modules.
   *
   * This method processes the given raw modules, extracts metadata to populate the blueprint,
   * and returns the resulting configuration blueprint.
   *
   * @param modules - The modules to build the configuration from.
   * @returns The configuration blueprint.
   *
   * @example
   * ```typescript
   * const BlueprintBuilder = BlueprintBuilder.create(Config.create());
   * const blueprint = await BlueprintBuilder.build(rawModules);
   * ```
   */
  async build (modules: unknown[]): Promise<BlueprintType> {
    const context = await this.discoverOptionsAndMakeContext(modules)

    await this.executeHooks('onPreparingBlueprint', context)

    const blueprint = await Pipeline
      .create(this.makePipelineOptions())
      .send(context)
      .through(...this.middleware)
      .defaultPriority(this.defaultMiddlewarePriority)
      .then((v) => v.blueprint)

    await this.executeHooks('onBlueprintPrepared', context)

    return blueprint
  }

  /**
   * Discover options and make the context for the BlueprintBuilder.
   *
   * @param modules - The modules to build the context from.
   * @returns The context for the BlueprintBuilder.
   */
  private async discoverOptionsAndMakeContext (modules: unknown[]): Promise<ContextType> {
    for (const module of modules) {
      if (isConstructor(module)) {
        await this.applyMetadata(module)
      } else if (isStoneBlueprint(module)) {
        this.populateOptions(module.stone)
      }
    }

    return { modules, blueprint: this.blueprint } as unknown as ContextType
  }

  /**
   * Creates pipeline options for the BlueprintBuilder.
   *
   * @returns The pipeline options for configuring middleware.
   */
  private makePipelineOptions (): PipelineOptions<ContextType, BlueprintType> {
    return {
      hooks: {
        onPipeProcessed: this.hooks.onBlueprintMiddlewareProcessed ?? [],
        onProcessingPipe: this.hooks.onProcessingBlueprintMiddleware ?? []
      }
    }
  }

  /**
   * Apply metadata from a class to the options.
   *
   * @param module - The class to extract metadata from.
   */
  private async applyMetadata (module: ClassType): Promise<void> {
    if (hasMetadata(module, LIFECYCLE_HOOK_KEY)) {
      this.discoverHooks(module)
    }

    if (hasBlueprint(module)) {
      this.populateOptions(getBlueprint(module)?.stone)
    } else if (hasMetadata(module, CONFIG_MIDDLEWARE_KEY)) {
      const metadata = getMetadata(module, CONFIG_MIDDLEWARE_KEY, {})
      this.populateOptions({ builder: { middleware: [{ ...metadata, module }] } })
    } else if (
      hasMetadata(module, CONFIGURATION_KEY) &&
      !getMetadata(module, CONFIGURATION_KEY, { live: false }).live
    ) {
      const blueprint = Config.create()
      await (new module.prototype.constructor()).configure(blueprint)
      this.populateOptions(blueprint.get('stone'))
    }
  }

  /**
   * Populate the configuration options with metadata.
   *
   * @param builder - The builder to populate the options with.
   */
  private populateOptions (stone?: Partial<AppConfig<any, any>>): void {
    if (isObjectLikeModule<BuilderConfig<BlueprintType, ContextType>>(stone?.builder)) {
      this.middleware = this.middleware.concat(stone.builder.middleware ?? [])
      this.hooks = isEmpty(stone.lifecycleHooks) ? this.hooks : deepmerge(this.hooks, stone.lifecycleHooks)
      this.defaultMiddlewarePriority = stone.builder.defaultMiddlewarePriority ?? this.defaultMiddlewarePriority
    }
  }

  /**
   * Discover hooks from a module.
   *
   * @param module - The module to discover hooks from.
   */
  private discoverHooks (module: any): void {
    getMetadata<ClassType, BlueprintHookOptions[]>(module, LIFECYCLE_HOOK_KEY, []).forEach(options => {
      if (isNotEmpty<BlueprintHookOptions>(options)) {
        const listener = module.prototype[options.method].bind(module.prototype)
        this.hooks[options.name] = [listener].concat(this.hooks[options.name] ?? [])
      }
    })
  }

  /**
   * Execute lifecycle hooks.
   *
   * @param name - The name of the hook to
   * @param context - The context to pass to the hook.
   */
  private async executeHooks (name: BlueprintHookName, context: ContextType): Promise<void> {
    if (
      Array.isArray(this.hooks[name]) &&
      name !== 'onBlueprintMiddlewareProcessed' &&
      name !== 'onProcessingBlueprintMiddleware'
    ) {
      for (const listener of this.hooks[name]) {
        await listener(context)
      }
    }
  }
}

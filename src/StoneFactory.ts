import { RuntimeError } from './errors/RuntimeError'
import { IntegrationError } from './errors/IntegrationError'
import { AdapterResolver, IAdapter, IBlueprint } from './definitions'

/**
 * StoneFactoryOptions interface.
 *
 * This interface defines the configuration options for creating an instance of `StoneFactory`.
 * The options must include a `blueprint` that defines the core settings and configurations
 * required by the Stone.js framework.
 *
 * @property {IBlueprint} blueprint - The core configuration object for the Stone.js framework.
 *
 * @example
 * ```typescript
 * const factoryOptions: StoneFactoryOptions = {
 *   blueprint: {
 *     get: (key: string) => { ... },
 *     set: (key: string, value: any) => { ... }
 *   }
 * };
 *
 * const stoneFactory = StoneFactory.create(factoryOptions);
 * ```
 */
export interface StoneFactoryOptions {
  /**
   * The blueprint configuration used by StoneFactory.
   */
  blueprint: IBlueprint
}

/**
 * Class representing StoneFactory.
 *
 * The StoneFactory is responsible for creating and running the main application by resolving
 * the appropriate adapter from the provided blueprint. It handles the core setup of the application.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class StoneFactory {
  /**
   * The blueprint configuration for the application.
   */
  private readonly blueprint: IBlueprint

  /**
   * Create a new StoneFactory instance.
   *
   * @param options - The options to create the StoneFactory.
   * @returns A new StoneFactory instance.
   *
   * @example
   * ```typescript
   * const factory = StoneFactory.create({ blueprint });
   * ```
   */
  public static create (options: StoneFactoryOptions): StoneFactory {
    return new this(options)
  }

  /**
   * Create a new instance of StoneFactory.
   *
   * @param options - The options to create the StoneFactory.
   */
  private constructor ({ blueprint }: StoneFactoryOptions) {
    if (blueprint === undefined) { throw new RuntimeError('Blueprint is required to create a StoneFactory instance.') }
    this.blueprint = blueprint
  }

  /**
   * Run the application by resolving and executing the adapter.
   *
   * @returns A promise that resolves to the result of the adapter's `run` method.
   * @throws {IntegrationError} If no adapter resolver or adapter is provided in the blueprint.
   *
   * @example
   * ```typescript
   * await factory.run();
   * ```
   */
  public async run<ExecutionResultType = unknown>(): Promise<ExecutionResultType> {
    return await this.makeAdapter().run<ExecutionResultType>()
  }

  /**
   * Resolve and create the appropriate adapter from the blueprint.
   *
   * @returns The resolved adapter instance.
   * @throws {IntegrationError} If no adapter resolver or adapter is provided in the blueprint.
   */
  private makeAdapter (): IAdapter {
    const resolver = this.blueprint.get<AdapterResolver>('stone.adapter.resolver')

    if (resolver === undefined) {
      throw new IntegrationError('No adapter resolver provided. Ensure that a valid adapter resolver is configured under "stone.adapter.resolver" in the blueprint configuration.')
    }

    const adapter = resolver(this.blueprint)

    if (adapter === undefined) {
      throw new IntegrationError('No adapters provided. Stone.js needs at least one adapter to run.')
    }

    return adapter
  }
}

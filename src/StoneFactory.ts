import { isEmpty } from './utils'
import { IntegrationError } from './errors/IntegrationError'
import { AdapterResolver, IAdapter, IBlueprint } from './declarations'

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
   * Create a new StoneFactory instance.
   *
   * @param blueprint - The blueprint object that contains the configuration for the application.
   * @returns A new StoneFactory instance.
   *
   * @example
   * ```typescript
   * const factory = StoneFactory.create(blueprint);
   * ```
   */
  public static create (blueprint: IBlueprint): StoneFactory {
    return new this(blueprint)
  }

  /**
   * Create a new instance of StoneFactory.
   *
   * @param blueprint - The blueprint object that contains the configuration for the application.
   */
  private constructor (private readonly blueprint: IBlueprint) {}

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
    return await this.resolveAdapter().run<ExecutionResultType>()
  }

  /**
   * Resolve the adapter instance from the blueprint.
   *
   * @returns The resolved adapter instance.
   * @throws {IntegrationError} If no adapter resolver or adapter is provided in the blueprint.
   */
  private resolveAdapter (): IAdapter {
    const resolver = this.blueprint.get<AdapterResolver>('stone.adapter.resolver')

    if (isEmpty(resolver)) {
      throw new IntegrationError(
        'No adapter resolver provided. Ensure that a valid adapter resolver is configured under "stone.adapter.resolver" in the blueprint configuration.'
      )
    }

    const adapter = resolver(this.blueprint)

    if (isEmpty(adapter)) {
      throw new IntegrationError('No adapters provided. Stone.js needs at least one adapter to run.')
    }

    return adapter
  }
}

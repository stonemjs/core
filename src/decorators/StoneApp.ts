import { ClassType } from '../definitions'
import { addBlueprint, setMetadata } from './Metadata'
import { MAIN_HANDLER_KEY, PROVIDER_KEY } from './constants'
import { AppConfig, StoneBlueprint, stoneBlueprint } from '../options/StoneBlueprint'

/**
 * StoneApp options.
 *
 * This interface defines the configuration options for marking a class as the main application entry point.
 */
export interface StoneAppOptions extends Partial<AppConfig> {}

/**
 * StoneApp decorator to mark a class as the main application entry point.
 *
 * This decorator is useful for customizing classes that should be treated as the primary entry point for the Stone.js framework.
 * It allows for configuring the main application settings via the provided options.
 *
 * @param options - The configuration options for the application, based on StoneOptions.
 * @returns A decorator function to set metadata on the target class.
 *
 * @example
 * ```typescript
 * @StoneApp({ name: 'MyApplication', env: Environment.Development })
 * class MyApp {
 *   // Application logic here.
 * }
 * ```
 */
export const StoneApp = <T extends ClassType = ClassType>(options: StoneAppOptions = {}, blueprints: StoneBlueprint[] = []): ((target: T, context: ClassDecoratorContext<T>) => void) => {
  return (target: T, context: ClassDecoratorContext<T>) => {
    setMetadata(context, PROVIDER_KEY, {})
    setMetadata(context, MAIN_HANDLER_KEY, {})
    addBlueprint(target, context, stoneBlueprint, ...blueprints, { stone: options })
  }
}

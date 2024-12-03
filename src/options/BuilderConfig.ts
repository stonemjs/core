import { MixedPipe } from '@stone-js/pipeline'
import { coreConfigMiddleware } from '../middleware/configMiddleware'

/**
 * Builder options.
 *
 * This interface defines the configuration options for the builder.
 * It includes middleware for building the blueprint and the default priority for pipes.
 */
export interface BuilderConfig {
  /**
   * Middleware used for processing data during the blueprint construction.
   * The middleware array can include core pipes and any additional custom pipes.
   */
  middleware: MixedPipe[]

  /**
   * The default priority for pipes, used when a specific pipe does not have an explicitly set priority.
   * This value helps to determine the order in which middleware pipes are executed.
   * Default value is set to 10.
   */
  defaultMiddlewarePriority?: number
}

/**
 * Options builder namespace.
 *
 * This object defines the main builder options for constructing the blueprint.
 * It includes middleware definitions and the default priority for those pipes.
 */
export const builder: BuilderConfig = {
  // Here you can define middleware to build the Blueprint.
  // Middleware consists of core pipes and custom pipes used in the blueprint construction process.
  middleware: [
    ...coreConfigMiddleware
  ],

  // Here you can define the default priority for pipes.
  // It will be used when a pipe does not have a priority.
  defaultMiddlewarePriority: 10
}

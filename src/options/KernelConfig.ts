import { MixedPipe } from '@stone-js/pipeline'
import { KernelResolver } from '../definitions'
import { defaultKernelResolver } from '../resolvers'
import { IncomingEvent } from '../events/IncomingEvent'
import { OutgoingResponse } from '../events/OutgoingResponse'

/**
 * Middleware options.
 *
 * This interface defines the configuration for middleware used at different stages of the application.
 * It includes options for event processing, response handling, and termination.
 */
export interface KernelMiddlewareConfig {
  /**
   * Determines whether to skip all kernel middleware.
   * If set to true, all middleware defined in the kernel will be bypassed.
   */
  skip: boolean

  /**
   * Middleware to be applied during event processing.
   * This array can include classes or aliases for middleware functions.
   * Example: event: [MyCustomMiddleware, 'aliasForMiddleware']
   */
  event: MixedPipe[]

  /**
   * Middleware to be applied during response processing.
   * This array can include classes or aliases for middleware functions.
   */
  response: MixedPipe[]

  /**
   * Middleware to be applied during the termination phase.
   * This array can include classes or aliases for middleware functions.
   */
  terminate: MixedPipe[]
}

/**
 * Kernel options.
 *
 * This interface defines the configuration for kernel-level options, specifically the middleware settings
 * to be used across all adapters.
 */
export interface KernelConfig {
  /**
   * Middleware configuration options for different stages of the kernel's lifecycle.
   */
  middleware: KernelMiddlewareConfig

  /**
   * The class type of the adapter, used to create instances.
   */
  resolver?: KernelResolver<IncomingEvent, OutgoingResponse>
}

/**
 * Global app-level settings for all adapters.
 *
 * This object defines the kernel-level settings for middleware, which apply to all adapters.
 * It allows you to configure middleware behavior, including event processing, response handling,
 * and termination processing.
 */
export const kernel: KernelConfig = {
  // Global middleware settings for all adapters.
  middleware: {
    // Whether to skip all kernel middleware.
    skip: false,

    // Event middleware. Can be a class constructor or alias.
    // Example:
    // event: [MyCustomMiddleware, 'aliasForMiddleware'],
    event: [],

    // Response middleware. Can be a class constructor or alias.
    response: [],

    // Terminate mapper middleware. Can be a class constructor or alias.
    terminate: []
  },

  // The default kernel resolver
  resolver: defaultKernelResolver
}

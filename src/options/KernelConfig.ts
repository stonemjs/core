import { MixedPipe } from '@stone-js/pipeline'
import { KernelResolver } from '../definitions'
import { defaultKernelResolver } from '../resolvers'
import { IncomingEvent } from '../events/IncomingEvent'
import { OutgoingResponse } from '../events/OutgoingResponse'

/**
 * Kernel options.
 *
 * This interface defines the configuration for kernel-level options.
 */
export interface KernelConfig<U extends IncomingEvent = IncomingEvent, V extends OutgoingResponse = OutgoingResponse> {
  /**
   * Middleware configuration options for different stages of the kernel's lifecycle.
   */
  middleware: MixedPipe[]
  /**
   * The class type of the adapter, used to create instances.
   */
  resolver?: KernelResolver<U, V>
}

/**
 * Global app-level settings for all adapters.
 *
 * This object defines the kernel-level settings for middleware, which apply to all adapters.
 * It allows you to configure middleware behavior, including event processing, response handling,
 * and termination processing.
 */
export const kernel: KernelConfig = {
  // Global middleware settings for all adapters.// Example:
  // Example:
  // event: [MyCustomMiddleware, (...) => ...],
  middleware: [],

  // The default kernel resolver
  resolver: defaultKernelResolver
}

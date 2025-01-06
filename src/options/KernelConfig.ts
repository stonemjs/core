import { MixedPipe } from '@stone-js/pipeline'
import { defaultKernelResolver } from '../resolvers'
import { IncomingEvent } from '../events/IncomingEvent'
import { OutgoingResponse } from '../events/OutgoingResponse'
import { IErrorHandler, KernelResolver, RouterResolver } from '../definitions'

/**
 * Kernel options.
 *
 * This interface defines the configuration for kernel-level options.
 */
export interface KernelConfig<TEvent extends IncomingEvent = IncomingEvent, UResponse extends OutgoingResponse = OutgoingResponse> {
  /**
   * Middleware configuration options for different stages of the kernel's lifecycle.
   */
  middleware?: MixedPipe[]

  /**
   * The kernel resolver, used to create instances.
   */
  resolver?: KernelResolver<TEvent, UResponse>

  /**
   * The router resolver, used to create instances.
   */
  routerResolver?: RouterResolver<TEvent, UResponse>

  /**
   * Error handlers used to manage and report errors that occur within the kernel.
   * These handlers can be used to customize error handling behavior and logging.
   */
  errorHandlers?: Record<string, new (...args: any[]) => IErrorHandler<TEvent, UResponse>>
}

/**
 * Global app-level settings for all adapters.
 *
 * This object defines the kernel-level settings for middleware, which apply to all adapters.
 * It allows you to configure middleware behavior, including event processing, response handling,
 * and termination processing.
 */
export const kernel: KernelConfig = {
  middleware: [],
  resolver: defaultKernelResolver
}

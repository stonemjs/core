import { MixedPipe } from '@stone-js/pipeline'
import { IncomingEvent } from '../events/IncomingEvent'
import { OutgoingResponse } from '../events/OutgoingResponse'
import { defaultKernelResolver, defaultResponseResolver } from '../resolvers'
import { KernelHook, KernelResolver, ResponseResolver, MetaErrorHandler } from '../declarations'

/**
 * Kernel options.
 *
 * This interface defines the configuration for kernel-level options.
 */
export interface KernelConfig<TEvent extends IncomingEvent = IncomingEvent, UResponse extends OutgoingResponse = OutgoingResponse> {
  /**
   * Hooks used to manage the kernel's lifecycle.
   */
  hooks?: KernelHook

  /**
   * Middleware configuration options for different stages of the kernel's lifecycle.
   */
  middleware?: Array<MixedPipe<TEvent, UResponse>>

  /**
   * The kernel resolver, used to create instances.
   */
  resolver?: KernelResolver<TEvent, UResponse>

  /**
   * The response resolver, used to create instances.
   */
  responseResolver?: ResponseResolver<UResponse>

  /**
   * Error handlers used to manage and report errors that occur within the kernel.
   * These handlers can be used to customize error handling behavior and logging.
   */
  errorHandlers?: Record<string, MetaErrorHandler<TEvent, UResponse>>
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
  resolver: defaultKernelResolver,
  responseResolver: defaultResponseResolver
}

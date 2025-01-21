import { Kernel } from './Kernel'
import { ConsoleLogger } from './ConsoleLogger'
import { EventEmitter } from './events/EventEmitter'
import { IncomingEvent } from './events/IncomingEvent'
import { Container } from '@stone-js/service-container'
import { OutgoingResponse } from './events/OutgoingResponse'
import { IBlueprint, ResponseResolverOptions } from './declarations'

/**
 * Default logger resolver function.
 *
 * This function resolves the logger for the application, using the blueprint configuration.
 * By default, it creates a `ConsoleLogger` instance with the provided blueprint.
 *
 * @param {IBlueprint} blueprint - The blueprint configuration to use for the logger.
 * @returns {ConsoleLogger} - A `ConsoleLogger` instance.
 */
export function defaultLoggerResolver (blueprint: IBlueprint): ConsoleLogger {
  return ConsoleLogger.create({ blueprint })
}

/**
 * Default response resolver function.
 *
 * This function resolves the response for the application, using the options provided.
 * By default, it creates an `OutgoingResponse` instance with the provided options.
 *
 * @returns {OutgoingResponse} - An outgoing response instance.
 */
export function defaultResponseResolver (options: ResponseResolverOptions): OutgoingResponse {
  return OutgoingResponse.create(options)
}

/**
 * Default kernel resolver function.
 *
 * This function resolves the kernel for the application, using the blueprint configuration.
 * It creates a `Kernel` instance with the given blueprint, logger, container, and an event emitter.
 *
 * @template U, V
 * @param {IBlueprint} blueprint - The blueprint configuration to use for the kernel.
 * @returns {Kernel<U extends IncomingEvent, V extends OutgoingResponse>} - A `Kernel` instance configured with the provided blueprint.
 */
export function defaultKernelResolver<U extends IncomingEvent, V extends OutgoingResponse> (blueprint: IBlueprint): Kernel<U, V> {
  const loggerResolver = blueprint.get('stone.logger.resolver', defaultLoggerResolver)
  return Kernel.create({ blueprint, logger: loggerResolver(blueprint), container: Container.create(), eventEmitter: new EventEmitter() })
}

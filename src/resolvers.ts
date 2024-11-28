import { Kernel } from './Kernel'
import { ErrorHandler } from './ErrorHandler'
import { ConsoleLogger } from './ConsoleLogger'
import { EventEmitter } from './events/EventEmitter'
import { IncomingEvent } from './events/IncomingEvent'
import { Container } from '@stone-js/service-container'
import { OutgoingResponse } from './events/OutgoingResponse'
import { ErrorHandlerResolver, IBlueprint, KernelResolver, LoggerResolver } from './definitions'

/**
 * Default logger resolver function.
 *
 * This function resolves the logger for the application, using the blueprint configuration.
 * By default, it creates a `ConsoleLogger` instance with the provided blueprint.
 *
 * @param {IBlueprint} blueprint - The blueprint configuration to use for the logger.
 * @returns {ConsoleLogger} - A `ConsoleLogger` instance.
 */
export const defaultLoggerResolver: LoggerResolver = (blueprint: IBlueprint): ConsoleLogger => ConsoleLogger.create({ blueprint })

/**
 * Default error handler resolver function.
 *
 * This function resolves the error handler for the application, using the blueprint configuration.
 * It creates an `ErrorHandler` instance with the given blueprint, logger, and a response rendering resolver.
 *
 * @param {IBlueprint} blueprint - The blueprint configuration to use for the error handler.
 * @returns {ErrorHandler<string>} - An `ErrorHandler` instance configured to handle errors.
 */
export const defaultErrorHandlerResolver: ErrorHandlerResolver<string> = (blueprint: IBlueprint): ErrorHandler<string> => {
  const renderResponseResolver = (error: Error): string => error.message
  const loggerResolver = blueprint.get('stone.logger.resolver', defaultLoggerResolver)
  return ErrorHandler.create({ blueprint, logger: loggerResolver(blueprint), renderResponseResolver })
}

/**
 * Default kernel resolver function.
 *
 * This function resolves the kernel for the application, using the blueprint configuration.
 * It creates a `Kernel` instance with the given blueprint, logger, container, and an event emitter.
 *
 * @param {IBlueprint} blueprint - The blueprint configuration to use for the kernel.
 * @returns {Kernel<IncomingEvent, OutgoingResponse>} - A `Kernel` instance configured with the provided blueprint.
 */
export const defaultKernelResolver: KernelResolver<IncomingEvent, OutgoingResponse> = (blueprint: IBlueprint): Kernel<IncomingEvent, OutgoingResponse> => {
  const loggerResolver = blueprint.get('stone.logger.resolver', defaultLoggerResolver)
  return Kernel.create({ blueprint, logger: loggerResolver(blueprint), container: Container.create(), eventEmitter: new EventEmitter() })
}

import { isConstructor } from '../utils'
import { NextPipe } from '@stone-js/pipeline'
import { Container } from '@stone-js/service-container'
import { IncomingEvent } from '../events/IncomingEvent'
import { OutgoingResponse } from '../events/OutgoingResponse'
import { InitializationError } from '../errors/InitializationError'
import { EventHandler, EventHandlerFunction, IBlueprint, IRouter, KernelContext, LifecycleEventHandler } from '../definitions'

/**
 * Class representing the KernelHandlerMiddleware.
 *
 * This middleware is responsible for handling routing and event processing within the kernel context.
 * It uses routers and event handlers to process incoming events and generate responses.
 *
 * @template IncomingEventType - The type of incoming event, extending IncomingEvent.
 * @template OutgoingResponseType - The type of outgoing response, extending OutgoingResponse.
 * @template KernelContextType - The type of kernel context, default is KernelContext.
 */
export class KernelHandlerMiddleware<
  IncomingEventType extends IncomingEvent,
  OutgoingResponseType extends OutgoingResponse,
  KernelContextType extends KernelContext<IncomingEventType, OutgoingResponseType> = KernelContext<IncomingEventType, OutgoingResponseType>
> {
  /**
   * The service container for dependency injection.
   */
  private readonly container: Container

  /**
   * The blueprint for resolving configuration and dependencies.
   */
  private readonly blueprint: IBlueprint

  /**
   * Constructor for the KernelHandlerMiddleware.
   *
   * @param {container, blueprint} options - The container used for dependency injection.
   */
  constructor ({ container, blueprint }: { container: Container, blueprint: IBlueprint }) {
    this.container = container
    this.blueprint = blueprint
  }

  /**
   * Handles the incoming event, processes it, and invokes the next middleware in the pipeline.
   *
   * @param context - The kernel context containing the incoming event and other data.
   * @param next - The next middleware in the pipeline.
   * @returns A promise that resolves to the outgoing response after processing.
   *
   * @throws {InitializationError} If no router or event handler is provided.
   */
  async handle (context: KernelContextType, next: NextPipe<KernelContextType, OutgoingResponseType>): Promise<OutgoingResponseType> {
    const router = this.getRouter()
    if (router !== undefined) {
      context.response = await router.dispatch(context.event)
      return await next(context)
    }

    const handler = this.resolveHandler()
    if (handler !== undefined) {
      context.response = await this.executeHandler(handler, context.event)
      return await next(context)
    }

    throw new InitializationError('No routers nor handlers have been provided.')
  }

  /**
   * Retrieves the router instance from the container.
   *
   * @returns The router instance if available, otherwise undefined.
   */
  private getRouter (): IRouter<IncomingEventType, OutgoingResponseType> | undefined {
    if (this.container.has('router')) {
      return this.container.make<IRouter<IncomingEventType, OutgoingResponseType>>('router')
    }
    return undefined
  }

  /**
   * Resolves the event handler from the blueprint.
   *
   * @returns The resolved event handler or undefined if not found.
   */
  private resolveHandler (): EventHandler<IncomingEventType, OutgoingResponseType> | undefined {
    const handler = this.blueprint.get<EventHandler<IncomingEventType, OutgoingResponseType>>('stone.handler')
    if (isConstructor(handler)) {
      return this.container.resolve(handler, true)
    }
    return handler
  }

  /**
   * Executes the resolved event handler for the given event.
   *
   * @param handler - The event handler to execute.
   * @param event - The incoming event to be processed.
   * @returns A promise that resolves to the outgoing response.
   */
  private async executeHandler (handler: EventHandler<IncomingEventType, OutgoingResponseType>, event: IncomingEventType): Promise<OutgoingResponseType> {
    if (typeof (handler as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>).handle === 'function') {
      return await (handler as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>).handle(event)
    }
    return await (handler as EventHandlerFunction<IncomingEventType, OutgoingResponseType>)(event)
  }
}

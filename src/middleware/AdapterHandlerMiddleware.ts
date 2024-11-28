import { NextPipe } from '@stone-js/pipeline'
import { OutgoingResponse } from '../events/OutgoingResponse'
import { IntegrationError } from '../errors/IntegrationError'
import { IncomingEvent, IncomingEventOptions } from '../events/IncomingEvent'
import { AdapterContext, EventHandler, EventHandlerFunction, IRawResponseWrapper, LifecycleEventHandler } from '../definitions'

/**
 * Class representing the AdapterHandlerMiddleware.
 *
 * This middleware is responsible for processing incoming events and generating outgoing responses.
 * It interacts with the lifecycle event handlers and manages the flow of incoming and outgoing events.
 *
 * @template RawEventType - The type of the raw event.
 * @template RawResponseType - The type of the raw response.
 * @template ExecutionContextType - The type of the execution context.
 * @template IncomingEventType - The type of the incoming event, extending IncomingEvent.
 * @template IncomingEventOptionsType - The type of incoming event options, extending IncomingEventOptions.
 * @template OutgoingResponseType - The type of the outgoing response, extending OutgoingResponse.
 * @template DestinationType - The type of the destination response wrapper, default is IRawResponseWrapper.
 * @template AdapterContextType - The type of adapter context, default is AdapterContext.
 */
export class AdapterHandlerMiddleware<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType extends IncomingEvent,
  IncomingEventOptionsType extends IncomingEventOptions,
  OutgoingResponseType extends OutgoingResponse,
  DestinationType extends IRawResponseWrapper<RawResponseType> = IRawResponseWrapper<RawResponseType>,
  AdapterContextType extends AdapterContext<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType> = AdapterContext<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType>
> {
  /**
   * The event handler responsible for handling incoming events and generating responses.
   */
  private readonly eventHandler: EventHandler<IncomingEventType, OutgoingResponseType>

  /**
   * Constructor for the AdapterHandlerMiddleware.
   *
   * @param {LoggerOptions} options - Options for creating the AdapterHandlerMiddleware.
   */
  constructor ({ eventHandler }: { eventHandler: EventHandler<IncomingEventType, OutgoingResponseType> }) {
    this.eventHandler = eventHandler
  }

  /**
   * Handles the incoming event, processes it, and invokes the next middleware in the pipeline.
   *
   * @param context - The adapter context containing the raw event, execution context, and other data.
   * @param next - The next middleware to be invoked in the pipeline.
   * @returns A promise that resolves to the destination type after processing.
   *
   * @throws {IntegrationError} If required components such as the incomingEventResolver or IncomingEventBuilder are not provided.
   */
  async handle (context: AdapterContextType, next: NextPipe<AdapterContextType, DestinationType>): Promise<DestinationType> {
    const lifecycleHandler = this.eventHandler as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>

    if (context.incomingEventBuilder?.build === undefined) {
      throw new IntegrationError('No IncomingEventBuilder provided')
    }

    const incomingEvent = context.incomingEventBuilder.build()

    if (incomingEvent === undefined) {
      throw new IntegrationError('No IncomingEvent provided')
    }

    const outgoingResponse = typeof lifecycleHandler.handle === 'function'
      ? await lifecycleHandler.handle(incomingEvent)
      : await (this.eventHandler as EventHandlerFunction<IncomingEventType, OutgoingResponseType>)(incomingEvent)

    return await next({ ...context, incomingEvent, outgoingResponse })
  }
}

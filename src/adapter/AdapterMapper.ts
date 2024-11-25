import { isConstructor } from '../utils'
import { OutgoingResponse } from '../events/OutgoingResponse'
import { IntegrationError } from '../errors/IntegrationError'
import { IncomingEvent, IncomingEventOptions } from '../events/IncomingEvent'
import { Pipeline, MixedPipe, PipelineOptions, Pipe } from '@stone-js/pipeline'
import { AdapterMapperDestinationResolver, IBlueprint, IRawResponseWrapper, AdapterContext } from '../definitions'

/**
 * AdapterMapperOptions.
 *
 * @template RawEventType
 * @template RawResponseType
 * @template ExecutionContextType
 * @template IncomingEventType
 * @template IncomingEventOptionsType
 * @template OutgoingResponseType
 * @template DestinationType
 */
export interface AdapterMapperOptions<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType extends IncomingEvent,
  IncomingEventOptionsType extends IncomingEventOptions,
  OutgoingResponseType extends OutgoingResponse,
  DestinationType extends IncomingEventType | IRawResponseWrapper<RawResponseType> = IncomingEventType
> {
  blueprint: IBlueprint
  middleware: MixedPipe[]
  destinationResolver: AdapterMapperDestinationResolver<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType,
  IncomingEventOptionsType,
  OutgoingResponseType,
  DestinationType
  >
}

/**
 * Class representing an AdapterMapper.
 *
 * @template RawEventType
 * @template RawResponseType
 * @template ExecutionContextType
 * @template IncomingEventType
 * @template IncomingEventOptionsType
 * @template OutgoingResponseType
 * @template DestinationType
 */
export class AdapterMapper<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType extends IncomingEvent,
  IncomingEventOptionsType extends IncomingEventOptions,
  OutgoingResponseType extends OutgoingResponse,
  DestinationType extends IncomingEventType | IRawResponseWrapper<RawResponseType> = IncomingEventType
> {
  /**
   * The blueprint configuration used for resolving dependencies.
   */
  private readonly blueprint: IBlueprint

  /**
   * Middleware to transform data. Must be a class, function, or alias.
   */
  private readonly middleware: MixedPipe[]

  /**
   * Function to resolve destination data.
   */
  private readonly destinationResolver: AdapterMapperDestinationResolver<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType,
  IncomingEventOptionsType,
  OutgoingResponseType,
  DestinationType
  >

  /**
   * Create an AdapterMapper.
   *
   * @param options - The options to create an AdapterMapper.
   * @returns A new AdapterMapper instance.
   */
  static create<
    RawEventType,
    RawResponseType,
    ExecutionContextType,
    IncomingEventType extends IncomingEvent,
    IncomingEventOptionsType extends IncomingEventOptions,
    OutgoingResponseType extends OutgoingResponse,
    DestinationType extends IncomingEventType | IRawResponseWrapper<RawResponseType> = IncomingEventType
  >(
    options: AdapterMapperOptions<
    RawEventType,
    RawResponseType,
    ExecutionContextType,
    IncomingEventType,
    IncomingEventOptionsType,
    OutgoingResponseType,
    DestinationType
    >
  ): AdapterMapper<
    RawEventType,
    RawResponseType,
    ExecutionContextType,
    IncomingEventType,
    IncomingEventOptionsType,
    OutgoingResponseType,
    DestinationType
    > {
    return new this(options)
  }

  /**
   * Create an AdapterMapper.
   *
   * @param options - The options to create an AdapterMapper.
   */
  private constructor ({
    blueprint,
    middleware,
    destinationResolver
  }: AdapterMapperOptions<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType,
  IncomingEventOptionsType,
  OutgoingResponseType,
  DestinationType
  >) {
    if (blueprint === undefined) { throw new IntegrationError('Blueprint is required to create a AdapterMapper instance.') }
    if (typeof destinationResolver !== 'function') { throw new IntegrationError('DestinationResolver is required to create a AdapterMapper instance.') }
    this.blueprint = blueprint
    this.middleware = middleware
    this.destinationResolver = destinationResolver
  }

  /**
   * Transform platform-specific input into IncomingEvent
   * or OutgoingResponse to platform-specific output.
   *
   * @param eventContext - Input data to transform via middleware.
   * @returns The transformed output of type DestinationType.
   */
  public map (
    eventContext: AdapterContext<
    RawEventType,
    RawResponseType,
    ExecutionContextType,
    IncomingEventType,
    IncomingEventOptionsType,
    OutgoingResponseType
    >
  ): DestinationType | Promise<DestinationType> {
    return Pipeline.create<
    AdapterContext<
    RawEventType,
    RawResponseType,
    ExecutionContextType,
    IncomingEventType,
    IncomingEventOptionsType,
    OutgoingResponseType
    >,
    DestinationType
    >(this.makePipelineOptions())
      .send(eventContext)
      .through(this.middleware)
      .then(this.destinationResolver)
  }

  /**
   * Create pipeline options for the AdapterMapper.
   *
   * @returns The pipeline options for transforming the event.
   */
  private makePipelineOptions ():
  | PipelineOptions<
  AdapterContext<
  RawEventType,
  RawResponseType,
  ExecutionContextType,
  IncomingEventType,
  IncomingEventOptionsType,
  OutgoingResponseType
  >,
  DestinationType
  > {
    return {
      resolver: (middleware: Pipe) => {
        if (isConstructor(middleware)) {
          return Reflect.construct(middleware as Function, [{ blueprint: this.blueprint }])
        }
      }
    }
  }
}

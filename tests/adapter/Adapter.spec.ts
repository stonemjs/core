import { Config } from '@stone-js/config'
import { NextPipe } from '@stone-js/pipeline'
import { AdapterMapper } from '../../src/adapter/AdapterMapper'
import { AdapterBuilder } from '../../src/adapter/AdapterBuilder'
import { Adapter, AdapterOptions } from '../../src/adapter/Adapter'
import { OutgoingResponse } from '../../src/events/OutgoingResponse'
import { IncomingEvent, IncomingEventOptions } from '../../src/events/IncomingEvent'
import { ILogger, IBlueprint, IErrorHandler, AdapterContext, AdapterHandlerResolver, AdapterHooks, IRawResponseWrapper, LifecycleEventHandler, RawResponseOptions } from '../../src/definitions'

// Incoming platform event
type MockRawEvent = Record<string, unknown>

// Outgoing platform response
type MockRawResponse = string

// Adapter context
type MockAdapterContext = AdapterContext<
MockRawEvent,
MockRawResponse,
any,
IncomingEvent,
IncomingEventOptions,
OutgoingResponse
>

// Send response Spy
const rawResponseWrapperRespondSpy = vi.fn()

// Outgoing platform response wrapper
// The final response return to end user
class MockRawResponseWrapper<T = MockRawResponse> implements IRawResponseWrapper<T> {
  constructor (public readonly options: RawResponseOptions = {}) {}

  respond (): T {
    rawResponseWrapperRespondSpy()
    return this.options.name as T
  }
}

// Mock Adapter
class MockAdapter extends Adapter<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> {
  private done: boolean
  constructor (adapterOptions: AdapterOptions<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse>) {
    super(adapterOptions)
    this.done = false
  }

  public async run (): Promise<any> {
    this.done = this.done || false
    await this.onInit()
    const eventHandler = this.handlerResolver(this.blueprint)
    await this.beforeHandle(eventHandler as LifecycleEventHandler<IncomingEvent, OutgoingResponse>)
    const rawEvent: MockRawEvent = { name: 'Stone.js' }
    const context: AdapterContext<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> = {
      rawEvent,
      incomingEventBuilder: AdapterBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: v => IncomingEvent.create(v) }),
      rawResponseBuilder: AdapterBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: v => new MockRawResponseWrapper(v) })
    }
    return await this.onRawEventReceived(eventHandler, context)
  }
}

// Create mock logger
const createMockLogger = (): ILogger => ({
  info: vi.fn(),
  debug: vi.fn(),
  warn: vi.fn(),
  error: vi.fn()
})

// Mock Error handler instance
const mockErrorHandlerInstance = {
  render: vi.fn(() => 'error'),
  report: vi.fn(() => mockErrorHandlerInstance)
}

// Create mock error handler
const createMockErrorHandler = (): IErrorHandler<string> => (mockErrorHandlerInstance)

// App Hooks
const appBeforeHandleHookSpy = vi.fn()
const appOnTerminateHookSpy = vi.fn()

// Create Lifecycle App Event handler
class MockAppEventHandler implements LifecycleEventHandler<IncomingEvent, OutgoingResponse> {
  constructor (private readonly blueprint: IBlueprint) {}

  beforeHandle (): void | Promise<void> { appBeforeHandleHookSpy() }
  handle (event: IncomingEvent): OutgoingResponse | Promise<OutgoingResponse> {
    return OutgoingResponse.create({ content: { version: this.blueprint.get('version'), name: event.getMetadataValue('name') }, type: '' })
  }

  onTerminate (): void | Promise<void> { appOnTerminateHookSpy() }
}

// Create function app event handler
const MockFunctionEventHandler = (event: IncomingEvent): OutgoingResponse | Promise<OutgoingResponse> => OutgoingResponse.create({ content: { name: event.getMetadataValue('name') }, type: '' })

// Input class Middleware
class InputMiddleware {
  private readonly blueprint: IBlueprint
  constructor ({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint
  }

  handle (context: MockAdapterContext, next: NextPipe<MockAdapterContext>): MockAdapterContext | Promise<MockAdapterContext> {
    context.incomingEventBuilder?.add('metadata', { version: this.blueprint.get('version'), name: context.rawEvent?.name })
    return next(context)
  }
}

// Output function Middleware
const outputMiddleware = (context: MockAdapterContext, next: NextPipe<MockAdapterContext>): MockAdapterContext | Promise<MockAdapterContext> => {
  const content: { name: string, version: string } = context.outgoingResponse?.content as any
  context.rawResponseBuilder?.add('name', content.name)?.add('version', content.version)
  return next(context)
}

// Global Adapter hooks spies
const globalOnInitSpy = vi.fn()
const globalBeforeHandleSpy = vi.fn()
const globalOnTerminateSpy = vi.fn()

describe('Adapter', () => {
  let logger: ILogger
  let hooks: AdapterHooks
  let adapter: MockAdapter
  let blueprint: IBlueprint
  let errorHandler: IErrorHandler<string>
  let handlerResolver: AdapterHandlerResolver<IncomingEvent, OutgoingResponse>
  let inputMapper: AdapterMapper<any, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse, IncomingEvent>
  let outputMapper: AdapterMapper<any, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse, MockRawResponseWrapper>

  beforeEach(() => {
    logger = createMockLogger()
    errorHandler = createMockErrorHandler()
    blueprint = Config.create({ version: '1.0.0' })
    inputMapper = AdapterMapper.create({
      blueprint,
      middleware: [InputMiddleware],
      destinationResolver: (context) => ({ ...context, incomingEvent: IncomingEvent.create({ locale: 'en', type: '' }) }).incomingEventBuilder?.build() as IncomingEvent
    })
    outputMapper = AdapterMapper.create({
      blueprint,
      middleware: [outputMiddleware],
      destinationResolver: (context) => context.rawResponseBuilder?.build() as MockRawResponseWrapper
    })
    handlerResolver = (blueprint: IBlueprint) => new MockAppEventHandler(blueprint)
    hooks = {
      onInit: [globalOnInitSpy],
      beforeHandle: [globalBeforeHandleSpy],
      onTerminate: [globalOnTerminateSpy]
    }

    adapter = new MockAdapter({
      logger,
      errorHandler,
      blueprint,
      inputMapper,
      outputMapper,
      handlerResolver,
      hooks
    })
  })

  it('should throw errors on invalid handlerResolver', () => {
    expect(() => {
      Reflect.construct(MockAdapter, [{
        logger,
        errorHandler,
        blueprint,
        inputMapper,
        outputMapper,
        handlerResolver: 'undefined' as any,
        hooks
      }])
    }).toThrow(TypeError)
  })

  it('should throw errors on invalid logger', () => {
    expect(() => {
      Reflect.construct(MockAdapter, [{
        logger: undefined as any,
        errorHandler,
        blueprint,
        inputMapper,
        outputMapper,
        handlerResolver,
        hooks
      }])
    }).toThrow(TypeError)
  })

  it('should throw errors on invalid errorHandler', () => {
    expect(() => {
      Reflect.construct(MockAdapter, [{
        logger,
        errorHandler: undefined as any,
        blueprint,
        inputMapper,
        outputMapper,
        handlerResolver,
        hooks
      }])
    }).toThrow(TypeError)
  })

  it('should throw errors on invalid blueprint', () => {
    expect(() => {
      Reflect.construct(MockAdapter, [{
        logger,
        errorHandler,
        blueprint: {} as any,
        inputMapper,
        outputMapper,
        handlerResolver,
        hooks
      }])
    }).toThrow(TypeError)
  })

  it('should throw errors on invalid inputMapper', () => {
    expect(() => {
      Reflect.construct(MockAdapter, [{
        logger,
        errorHandler,
        blueprint,
        inputMapper: {} as any,
        outputMapper,
        handlerResolver,
        hooks
      }])
    }).toThrow(TypeError)
  })

  it('should throw errors on invalid outputMapper', () => {
    expect(() => {
      Reflect.construct(MockAdapter, [{
        logger,
        errorHandler,
        blueprint,
        inputMapper,
        outputMapper: {} as any,
        handlerResolver,
        hooks: undefined as any
      }])
    }).toThrow(TypeError)
  })

  // Test AdapterBuilder here for simplicity
  it('should throw an error if resolver is not provided to AdapterBuilder', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => AdapterBuilder.create({ resolver: undefined })).toThrow(TypeError)
  })

  // Test AdapterMapper here for simplicity
  it('should throw an error if blueprint is not provided to AdapterMapper', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => AdapterMapper.create({ blueprint: undefined })).toThrow(TypeError)
  })

  // Test AdapterMapper here for simplicity
  it('should throw an error if destinationResolver is not provided to AdapterMapper', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => AdapterMapper.create({ blueprint, destinationResolver: undefined })).toThrow(TypeError)
  })

  it('should throw errors on invalid AdapterBuilder resolver', async () => {
    class MockAdapter2 extends Adapter<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> {
      private done: boolean
      constructor (adapterOptions: AdapterOptions<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse>) {
        super(adapterOptions)
        this.done = false
      }

      public async run (): Promise<any> {
        this.done = this.done || false
        await this.onInit()
        const eventHandler = this.handlerResolver(this.blueprint)
        await this.beforeHandle(eventHandler as LifecycleEventHandler<IncomingEvent, OutgoingResponse>)
        const rawEvent: MockRawEvent = { name: 'Stone.js' }
        const context: AdapterContext<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> = {
          rawEvent,
          // @ts-expect-error - invalid value for test purposes
          incomingEventBuilder: AdapterBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: () => undefined }),
          // @ts-expect-error - invalid value for test purposes
          rawResponseBuilder: AdapterBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: () => undefined })
        }
        return await this.onRawEventReceived(eventHandler, context)
      }
    }

    const adapter = Reflect.construct(MockAdapter2, [{
      logger,
      errorHandler,
      blueprint,
      inputMapper,
      outputMapper,
      handlerResolver,
      hooks
    }])
    const res = await adapter.run()
    expect(res).toBe('error')
  })

  it('should execute the run method with lifecycle handler', async () => {
    const result = await adapter.run()
    expect(result).toBe('Stone.js')
    expect(appBeforeHandleHookSpy).toHaveBeenCalled()
    expect(appOnTerminateHookSpy).toHaveBeenCalled()
    expect(globalOnInitSpy).toHaveBeenCalled()
    expect(globalBeforeHandleSpy).toHaveBeenCalled()
    expect(globalOnTerminateSpy).toHaveBeenCalled()
    expect(rawResponseWrapperRespondSpy).toHaveBeenCalled()
  })

  it('should execute the run method with function handler', async () => {
    handlerResolver = (_blueprint: IBlueprint) => MockFunctionEventHandler
    adapter = new MockAdapter({
      logger,
      errorHandler,
      blueprint,
      inputMapper,
      outputMapper,
      handlerResolver,
      hooks: undefined as any
    })
    const result = await adapter.run()
    expect(result).toBe('Stone.js')
  })

  it('must call report and render when handler throw an error', async () => {
    const handler = (_event: IncomingEvent): OutgoingResponse | Promise<OutgoingResponse> => {
      throw new TypeError('Error')
    }
    handlerResolver = (_blueprint: IBlueprint) => handler
    adapter = new MockAdapter({
      logger,
      errorHandler,
      blueprint,
      inputMapper,
      outputMapper,
      handlerResolver,
      hooks: undefined as any
    })
    await adapter.run()
    expect(errorHandler.render).toHaveBeenCalled()
    expect(errorHandler.report).toHaveBeenCalled()
  })

  it('must call report and render when incomingEvent is undefined', async () => {
    const handler = (event: IncomingEvent): OutgoingResponse | Promise<OutgoingResponse> => {
      throw new TypeError('Error')
    }
    handlerResolver = (_blueprint: IBlueprint) => handler
    inputMapper = AdapterMapper.create({
      blueprint,
      middleware: [],
      destinationResolver: vi.fn()
    })
    adapter = new MockAdapter({
      logger,
      errorHandler,
      blueprint,
      inputMapper,
      outputMapper,
      handlerResolver,
      hooks: undefined as any
    })
    const result = await adapter.run()
    expect(result).toBe('error')
    expect(errorHandler.render).toHaveBeenCalled()
    expect(errorHandler.report).toHaveBeenCalled()
  })
})

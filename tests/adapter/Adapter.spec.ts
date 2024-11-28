import { Config } from '@stone-js/config'
import { NextPipe } from '@stone-js/pipeline'
import { AdapterBuilder } from '../../src/adapter/AdapterBuilder'
import { Adapter, AdapterOptions } from '../../src/adapter/Adapter'
import { OutgoingResponse } from '../../src/events/OutgoingResponse'
import { IntegrationError } from '../../src/errors/IntegrationError'
import { IncomingEvent, IncomingEventOptions } from '../../src/events/IncomingEvent'
import { AdapterHandlerMiddleware } from '../../src/middleware/AdapterHandlerMiddleware'
import { ILogger, IBlueprint, IErrorHandler, AdapterContext, AdapterHandlerResolver, AdapterHooks, IRawResponseWrapper, LifecycleEventHandler, RawResponseOptions } from '../../src/definitions'

/* eslint-disable @typescript-eslint/no-useless-constructor */

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
// Implement the run method to send event through destination
class MockAdapter extends Adapter<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> {
  constructor (adapterOptions: AdapterOptions<MockRawResponse, IncomingEvent, OutgoingResponse>) {
    super(adapterOptions)
  }

  public async run (): Promise<any> {
    await this.onInit()
    const rawEvent: MockRawEvent = { name: 'Stone.js' }
    const context: AdapterContext<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> = {
      rawEvent,
      incomingEventBuilder: AdapterBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: v => IncomingEvent.create(v) }),
      rawResponseBuilder: AdapterBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: v => new MockRawResponseWrapper(v) })
    }
    return await this.sendEventThroughDestination(context)
  }
}

// MockAdapter2 resolver
const mockAdapter2Resolver = (incomingEventBuilder: any, rawResponseBuilder: any): Function => class extends Adapter<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> {
  constructor (adapterOptions: AdapterOptions<MockRawResponse, IncomingEvent, OutgoingResponse>) {
    super(adapterOptions)
  }

  public async run (): Promise<any> {
    await this.onInit()
    const rawEvent: MockRawEvent = { name: 'Stone.js' }
    const context: AdapterContext<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> = {
      rawEvent,
      incomingEventBuilder,
      rawResponseBuilder
    }
    return await this.sendEventThroughDestination(context)
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
    return OutgoingResponse.create({ content: { version: this.blueprint.get('version'), name: event.getMetadataValue('name') } })
  }

  onTerminate (): void | Promise<void> { appOnTerminateHookSpy() }
}

// Create function app event handler
const MockFunctionEventHandler = (event: IncomingEvent): OutgoingResponse | Promise<OutgoingResponse> => OutgoingResponse.create({ content: { name: event.getMetadataValue('name') } })

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
  context.rawResponseBuilder
    ?.add('name', content.name)
    ?.add('version', content.version)
    ?.add('status', context.outgoingResponse?.statusCode)
    ?.add('statusMessage', context.outgoingResponse?.statusMessage)
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

  beforeEach(() => {
    logger = createMockLogger()
    errorHandler = createMockErrorHandler()
    blueprint = Config.create({
      stone: {
        version: '1.0.0',
        adapter: {
          middleware: [
            { priority: 0, pipe: InputMiddleware },
            { priority: 100, pipe: AdapterHandlerMiddleware },
            { priority: 200, pipe: outputMiddleware }
          ]
        }
      }
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
        handlerResolver: 'undefined' as any,
        hooks
      }])
    }).toThrow(IntegrationError)
  })

  it('should throw errors on invalid logger', () => {
    expect(() => {
      Reflect.construct(MockAdapter, [{
        logger: undefined as any,
        errorHandler,
        blueprint,
        handlerResolver,
        hooks
      }])
    }).toThrow(IntegrationError)
  })

  it('should throw errors on invalid errorHandler', () => {
    expect(() => {
      Reflect.construct(MockAdapter, [{
        logger,
        errorHandler: undefined as any,
        blueprint,
        handlerResolver,
        hooks
      }])
    }).toThrow(IntegrationError)
  })

  it('should throw errors on invalid blueprint', () => {
    expect(() => {
      Reflect.construct(MockAdapter, [{
        logger,
        errorHandler,
        blueprint: {} as any,
        handlerResolver,
        hooks
      }])
    }).toThrow(IntegrationError)
  })

  it('should throw errors on invalid eventHandler', async () => {
    const adapter = Reflect.construct(MockAdapter, [{
      logger,
      errorHandler,
      blueprint,
      handlerResolver: (_blueprint: IBlueprint) => undefined,
      hooks
    }])
    const res = await adapter.run()
    expect(res).toBe('error')
  })

  // Test AdapterBuilder here for simplicity
  it('should throw an error if resolver is not provided to AdapterBuilder', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => AdapterBuilder.create({ resolver: undefined })).toThrow(IntegrationError)
  })

  it('should throw errors on invalid AdapterBuilder resolver', async () => {
    const MockAdapter2 = mockAdapter2Resolver(
      // @ts-expect-error - invalid value for test purposes
      AdapterBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: () => undefined }),
      // @ts-expect-error - invalid value for test purposes
      AdapterBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: () => undefined })
    )

    const adapter = Reflect.construct(MockAdapter2, [{
      logger,
      errorHandler,
      blueprint,
      handlerResolver,
      hooks
    }])
    const res = await adapter.run()
    expect(res).toBe('error')
  })

  it('should throw errors on invalid rawResponseBuilder', async () => {
    const MockAdapter2 = mockAdapter2Resolver(
      AdapterBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: v => IncomingEvent.create(v) }),
      AdapterBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: v => ({} as any) })
    )

    const adapter = Reflect.construct(MockAdapter2, [{
      logger,
      errorHandler,
      blueprint,
      handlerResolver,
      hooks
    }])
    const res = await adapter.run()
    expect(res).toBe('error')
  })

  it('should throw errors on invalid rawResponseWrapper', async () => {
    const MockAdapter2 = mockAdapter2Resolver(
      AdapterBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: v => IncomingEvent.create(v) }),
      null as any
    )

    const adapter = Reflect.construct(MockAdapter2, [{
      logger,
      errorHandler,
      blueprint,
      handlerResolver,
      hooks
    }])
    const res = await adapter.run()
    expect(res).toBe('error')
  })

  it('should throw errors on invalid incomingEventBuilder', async () => {
    const MockAdapter2 = mockAdapter2Resolver(undefined, {})

    const adapter = Reflect.construct(MockAdapter2, [{
      logger,
      errorHandler,
      blueprint,
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
      handlerResolver,
      hooks: undefined as any
    })
    const result = await adapter.run()
    expect(result).toBe('Stone.js')
  })

  it('must call report and render when handler throw an error', async () => {
    const handler = (_event: IncomingEvent): OutgoingResponse | Promise<OutgoingResponse> => {
      throw new IntegrationError('Error')
    }
    handlerResolver = (_blueprint: IBlueprint) => handler
    adapter = new MockAdapter({
      logger,
      errorHandler,
      blueprint,
      handlerResolver,
      hooks: undefined as any
    })
    await adapter.run()
    expect(errorHandler.render).toHaveBeenCalled()
    expect(errorHandler.report).toHaveBeenCalled()
  })

  it('must call report and render when incomingEvent is undefined', async () => {
    const handler = (event: IncomingEvent): OutgoingResponse | Promise<OutgoingResponse> => {
      throw new IntegrationError('Error')
    }
    handlerResolver = (_blueprint: IBlueprint) => handler
    adapter = new MockAdapter({
      logger,
      errorHandler,
      blueprint,
      handlerResolver,
      hooks: undefined as any
    })
    const result = await adapter.run()
    expect(result).toBe('error')
    expect(errorHandler.render).toHaveBeenCalled()
    expect(errorHandler.report).toHaveBeenCalled()
  })
})

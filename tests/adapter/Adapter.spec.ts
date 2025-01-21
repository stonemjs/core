import { Config } from '@stone-js/config'
import { NextPipe } from '@stone-js/pipeline'
import { RuntimeError } from '../../src/errors/RuntimeError'
import { Adapter, AdapterOptions } from '../../src/adapter/Adapter'
import { OutgoingResponse } from '../../src/events/OutgoingResponse'
import { IntegrationError } from '../../src/errors/IntegrationError'
import { AdapterEventBuilder } from '../../src/adapter/AdapterEventBuilder'
import { IncomingEvent, IncomingEventOptions } from '../../src/events/IncomingEvent'
import { ILogger, IBlueprint, AdapterContext, AdapterHandlerResolver, AdapterHooks, IRawResponseWrapper, LifecycleEventHandler, RawResponseOptions, IAdapterEventBuilder, IAdapterErrorHandler, AdapterErrorContext } from '../../src/declarations'

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

// Adapter ResponseBuilder
type MockAdapterResponseBuilder = IAdapterEventBuilder<RawResponseOptions, MockRawResponse>

// Send response Spy
const rawResponseWrapperRespondSpy = vi.fn()

// Outgoing platform response wrapper
// Return the final response return to end user
class MockRawResponseWrapper<T = MockRawResponse> implements IRawResponseWrapper<T> {
  constructor (public readonly options: RawResponseOptions = {}) {}

  respond (): T {
    rawResponseWrapperRespondSpy()
    return this.options.name as T
  }
}

// Mock Adapter
// Implement the run method to send event through destination
class MockAdapter extends Adapter<MockRawEvent, MockRawResponse, MockRawResponse, IncomingEvent, IncomingEventOptions, OutgoingResponse> {
  constructor (adapterOptions: AdapterOptions<IncomingEvent, OutgoingResponse>) {
    super(adapterOptions)
  }

  public async run<ExecutionResultType = MockRawResponse> (): Promise<ExecutionResultType> {
    await this.onInit()
    const eventHandler = this.handlerResolver(this.blueprint) as LifecycleEventHandler<IncomingEvent, OutgoingResponse>
    await this.onPrepare(eventHandler)
    const rawEvent: MockRawEvent = { name: 'Stone.js' }
    const context: AdapterContext<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> = {
      rawEvent,
      executionContext: {},
      incomingEventBuilder: AdapterEventBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: v => IncomingEvent.create(v) }),
      rawResponseBuilder: AdapterEventBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: v => new MockRawResponseWrapper(v) })
    }
    return await this.sendEventThroughDestination(eventHandler, context) as ExecutionResultType
  }
}

// MockAdapter2 resolver
const mockAdapter2Resolver = (incomingEventBuilder: any, rawResponseBuilder: any): Function => class extends Adapter<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> {
  constructor (adapterOptions: AdapterOptions<IncomingEvent, OutgoingResponse>) {
    super(adapterOptions)
  }

  public async run (): Promise<any> {
    await this.onInit()
    const eventHandler = this.handlerResolver(this.blueprint) as LifecycleEventHandler<IncomingEvent, OutgoingResponse>
    await this.onPrepare(eventHandler)
    const rawEvent: MockRawEvent = { name: 'Stone.js' }
    const context: AdapterContext<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> = {
      rawEvent,
      executionContext: {},
      incomingEventBuilder,
      rawResponseBuilder
    }
    return await this.sendEventThroughDestination(eventHandler, context)
  }
}

// Create mock logger
const createMockLogger = (): ILogger => ({
  info: vi.fn(),
  debug: vi.fn(),
  warn: vi.fn(),
  error: vi.fn()
})

// App Hooks
const appOnPrepareHookSpy = vi.fn()
const appBeforeHandleHookSpy = vi.fn()
const appAfterHandleHookSpy = vi.fn()
const appOnTerminateHookSpy = vi.fn()

// Create Lifecycle App Event handler
class MockAppEventHandler implements LifecycleEventHandler<IncomingEvent, OutgoingResponse> {
  constructor (private readonly blueprint: IBlueprint) {}

  onPrepare (): void | Promise<void> { appOnPrepareHookSpy() }
  beforeHandle (): void | Promise<void> { appBeforeHandleHookSpy() }
  handle (event: IncomingEvent): OutgoingResponse | Promise<OutgoingResponse> {
    return OutgoingResponse.create({ content: { version: this.blueprint.get('version'), name: event.get('name') } })
  }

  afterHandle (): void | Promise<void> { appAfterHandleHookSpy() }
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

  handle (context: MockAdapterContext, next: NextPipe<MockAdapterContext, MockAdapterResponseBuilder>): MockAdapterResponseBuilder | Promise<MockAdapterResponseBuilder> {
    context.incomingEventBuilder?.add('metadata', { version: this.blueprint.get('version'), name: context.rawEvent?.name })
    return next(context)
  }
}

// Output function Middleware
const outputMiddleware = async (context: MockAdapterContext, next: NextPipe<MockAdapterContext, MockAdapterResponseBuilder>): Promise<MockAdapterResponseBuilder> => {
  const rawResponseBuilder = await next(context)
  const content: { name: string, version: string } = context.outgoingResponse?.content as any

  rawResponseBuilder
    .add('name', content.name)
    .add('version', content.version)
    .add('status', context.outgoingResponse?.statusCode)
    .add('statusMessage', context.outgoingResponse?.statusMessage)

  return rawResponseBuilder
}

// Error handler spies
const MockErrorHandlerSpy = vi.fn()

// Error handler
class MockErrorHandler implements IAdapterErrorHandler<MockRawEvent, MockRawResponse, unknown> {
  handle (error: any, context: AdapterErrorContext<MockRawEvent, MockRawResponse, unknown>): MockRawResponse | Promise<MockRawResponse> {
    MockErrorHandlerSpy()
    return context.rawResponseBuilder.add('name', error.name).build().respond()
  }
}

// Global Adapter hooks spies
const globalOnInitSpy = vi.fn()
const globalOnPrepareSpy = vi.fn()
const globalBeforeHandleSpy = vi.fn()
const globalAfterHandleSpy = vi.fn()
const globalOnTerminateSpy = vi.fn()

describe('Adapter', () => {
  let logger: ILogger
  let hooks: AdapterHooks
  let adapter: MockAdapter
  let blueprint: IBlueprint
  let handlerResolver: AdapterHandlerResolver<IncomingEvent, OutgoingResponse>

  beforeEach(() => {
    logger = createMockLogger()
    blueprint = Config.create({
      stone: {
        version: '1.0.0',
        adapter: {
          middleware: [
            { priority: 0, pipe: InputMiddleware },
            { priority: 200, pipe: outputMiddleware }
          ]
        }
      }
    })
    handlerResolver = (blueprint: IBlueprint) => new MockAppEventHandler(blueprint)
    hooks = {
      onInit: [globalOnInitSpy],
      onPrepare: [globalOnPrepareSpy],
      beforeHandle: [globalBeforeHandleSpy],
      afterHandle: [globalAfterHandleSpy],
      onTerminate: [globalOnTerminateSpy]
    }

    adapter = new MockAdapter({
      logger,
      blueprint,
      handlerResolver,
      hooks
    })
  })

  it('should throw errors on invalid handlerResolver', () => {
    expect(() => {
      Reflect.construct(MockAdapter, [{
        logger,
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
        blueprint: {} as any,
        handlerResolver,
        hooks
      }])
    }).toThrow(IntegrationError)
  })

  it('should throw errors on invalid eventHandler', async () => {
    const adapter = Reflect.construct(MockAdapter, [{
      logger,
      blueprint,
      handlerResolver: (_blueprint: IBlueprint) => undefined,
      hooks
    }])

    await expect(async () => { await adapter.run() }).rejects.toThrow(IntegrationError)
  })

  // Test AdapterBuilder here for simplicity
  it('should throw an error if resolver is not provided to AdapterBuilder', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => AdapterEventBuilder.create({ resolver: undefined })).toThrow(IntegrationError)
  })

  it('should throw errors on invalid incomingEventBuilder', async () => {
    const MockAdapter2 = mockAdapter2Resolver(
      undefined,
      AdapterEventBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: v => new MockRawResponseWrapper(v) })
    )

    const adapter = Reflect.construct(MockAdapter2, [{
      logger,
      blueprint,
      handlerResolver,
      hooks
    }])

    await expect(async () => { await adapter.run() }).rejects.toThrow(IntegrationError)
  })

  it('should throw errors on invalid rawResponseBuilder', async () => {
    const MockAdapter2 = mockAdapter2Resolver(
      AdapterEventBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: v => IncomingEvent.create(v) }),
      null as any
    )

    const adapter = Reflect.construct(MockAdapter2, [{
      logger,
      blueprint,
      handlerResolver,
      hooks
    }])

    await expect(async () => { await adapter.run() }).rejects.toThrow(IntegrationError)
  })

  it('should throw errors on invalid AdapterBuilder resolver', async () => {
    const MockAdapter2 = mockAdapter2Resolver(
      // @ts-expect-error - invalid value for test purposes
      AdapterEventBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: () => undefined }),
      // @ts-expect-error - invalid value for test purposes
      AdapterEventBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: () => undefined })
    )

    const adapter = Reflect.construct(MockAdapter2, [{
      logger,
      blueprint,
      handlerResolver,
      hooks
    }])

    await expect(async () => { await adapter.run() }).rejects.toThrow(IntegrationError)
  })

  it('should throw errors on invalid rawResponseWrapper', async () => {
    const MockAdapter2 = mockAdapter2Resolver(
      AdapterEventBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: v => IncomingEvent.create(v) }),
      AdapterEventBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: v => ({} as any) })
    )

    const adapter = Reflect.construct(MockAdapter2, [{
      logger,
      blueprint,
      handlerResolver,
      hooks
    }])

    await expect(async () => { await adapter.run() }).rejects.toThrow(IntegrationError)
  })

  it('should not handle error when no default nor specific error handler is defined', async () => {
    blueprint.set('stone.adapter.errorHandlers', { TypeError: MockErrorHandler })
    handlerResolver = (_blueprint: IBlueprint) => () => { throw new RuntimeError('Test Error') }
    adapter = new MockAdapter({
      logger,
      blueprint,
      handlerResolver,
      hooks: undefined as any
    })

    await expect(async () => { await adapter.run() }).rejects.toThrow(IntegrationError)
  })

  it('should handle error when default error handler is defined', async () => {
    blueprint.set('stone.adapter.errorHandlers', { default: MockErrorHandler })
    handlerResolver = (_blueprint: IBlueprint) => () => { throw new RuntimeError('Test Error') }
    adapter = new MockAdapter({
      logger,
      blueprint,
      handlerResolver,
      hooks: undefined as any
    })

    const result = await adapter.run()
    expect(result).toBe('RuntimeError')
  })

  it('should handle error when specific error handler is defined', async () => {
    blueprint.set('stone.adapter.errorHandlers', { RuntimeError: MockErrorHandler })
    handlerResolver = (_blueprint: IBlueprint) => () => { throw new RuntimeError('Test Error') }
    adapter = new MockAdapter({
      logger,
      blueprint,
      handlerResolver,
      hooks: undefined as any
    })

    const result = await adapter.run()
    expect(result).toBe('RuntimeError')
  })

  it('should catch and log errors thrown by onTerminate hook', async () => {
    handlerResolver = (_blueprint: IBlueprint) => MockFunctionEventHandler
    adapter = new MockAdapter({
      logger,
      blueprint,
      handlerResolver,
      hooks: { onTerminate: [() => { throw new Error('Test Error') }] }
    })
    const result = await adapter.run()
    expect(result).toBe('Stone.js')
    expect(logger.error).toHaveBeenCalled()
  })

  it('should execute the run method with lifecycle handler', async () => {
    const result = await adapter.run()

    expect(result).toBe('Stone.js')

    expect(appOnPrepareHookSpy).toHaveBeenCalled()
    expect(appBeforeHandleHookSpy).toHaveBeenCalled()
    expect(appAfterHandleHookSpy).toHaveBeenCalled()
    expect(appOnTerminateHookSpy).toHaveBeenCalled()

    expect(globalOnInitSpy).toHaveBeenCalled()
    expect(globalOnPrepareSpy).toHaveBeenCalled()
    expect(globalBeforeHandleSpy).toHaveBeenCalled()
    expect(globalAfterHandleSpy).toHaveBeenCalled()
    expect(globalOnTerminateSpy).toHaveBeenCalled()

    expect(rawResponseWrapperRespondSpy).toHaveBeenCalled()
  })

  it('should execute the run method with function handler', async () => {
    handlerResolver = (_blueprint: IBlueprint) => MockFunctionEventHandler
    adapter = new MockAdapter({
      logger,
      blueprint,
      handlerResolver,
      hooks: undefined as any
    })
    const result = await adapter.run()
    expect(result).toBe('Stone.js')
  })
})

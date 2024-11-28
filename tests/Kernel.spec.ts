import { Mock } from 'vitest'
import { Config } from '@stone-js/config'
import { MixedPipe } from '@stone-js/pipeline'
import { ConsoleLogger } from '../src/ConsoleLogger'
import { Kernel, KernelOptions } from '../src/Kernel'
import { Container } from '@stone-js/service-container'
import { EventEmitter } from '../src/events/EventEmitter'
import { IncomingEvent } from '../src/events/IncomingEvent'
import { OutgoingResponse } from '../src/events/OutgoingResponse'
import { InitializationError } from '../src/errors/InitializationError'
import { KernelHandlerMiddleware } from '../src/middleware/KernelHandlerMiddleware'
import { EventHandlerFunction, IBlueprint, IProvider, IRouter, LifecycleEventHandler } from '../src/definitions'

/* eslint-disable @typescript-eslint/no-extraneous-class */

class MockIncomingEvent extends IncomingEvent {}
class MockOutgoingResponse extends OutgoingResponse {}

// Mock providers
const MockProviderbootSpy = vi.fn()
const MockProviderRegisterSpy = vi.fn()
const MockProviderOnTerminateSpy = vi.fn()
const MockProviderBeforeHandleSpy = vi.fn()
class MockProvider implements IProvider {}
class MockProvider2 implements IProvider { mustSkip = (): boolean => true }
class MockProvider3 implements IProvider {
  boot = (): void => { MockProviderbootSpy() }
  register = (): void => { MockProviderRegisterSpy() }
  beforeHandle = (): void => { MockProviderBeforeHandleSpy() }
  onTerminate = (): void => { MockProviderOnTerminateSpy() }
}

// Mock middleware
const MockEventMiddlewareSpy: Mock = vi.fn()
const MockResponseMiddlewareSpy: Mock = vi.fn()
const MockOnTerminateMiddlewareSpy: Mock = vi.fn()
const MockResponseMiddleware = (context: any, next: any): any => {
  MockResponseMiddlewareSpy()
  return next(context)
}
class MockEventMiddleware {
  handle (context: any, next: any): any {
    MockEventMiddlewareSpy()
    return next(context)
  }

  terminate (context: any, next: any): any {
    MockOnTerminateMiddlewareSpy()
    return next(context)
  }
}

// App handler
const MockAppFunctionHandler: EventHandlerFunction<MockIncomingEvent, MockOutgoingResponse> = (event: IncomingEvent) => MockOutgoingResponse.create({ content: event.metadata, type: '' })
class MockAppClassHandler implements LifecycleEventHandler<MockIncomingEvent, MockOutgoingResponse> {
  handle = MockAppFunctionHandler
}

// App router
class MockRouter implements IRouter<MockIncomingEvent, MockOutgoingResponse> {
  dispatch (event: MockIncomingEvent): MockOutgoingResponse | Promise<MockOutgoingResponse> {
    return MockOutgoingResponse.create({ content: event.metadata, type: '' })
  }
}

describe('Kernel', () => {
  let options: KernelOptions
  let blueprint: IBlueprint
  let kernel: Kernel<MockIncomingEvent, MockOutgoingResponse>

  beforeEach(() => {
    blueprint = Config.create()
    MockOnTerminateMiddlewareSpy.mockRestore()
    MockEventMiddlewareSpy.mockRestore()
    blueprint.set('stone.kernel.middleware', [
      { priority: 0, pipe: MockEventMiddleware },
      { priority: 100, pipe: KernelHandlerMiddleware },
      { priority: 200, pipe: MockResponseMiddleware },
      MockEventMiddleware
    ])
    blueprint.set('stone.providers', [MockProvider, MockProvider2, MockProvider3, MockProvider3])
    options = {
      blueprint,
      container: Container.create(),
      eventEmitter: new EventEmitter(),
      logger: ConsoleLogger.create({ blueprint })
    }
    kernel = Kernel.create<MockIncomingEvent, MockOutgoingResponse>(options)
  })

  it('should create an instance of Kernel', () => {
    expect(kernel).toBeInstanceOf(Kernel)
  })

  it('should throw InitializationError if blueprint is not a valid Config instance', () => {
    expect(() =>
      Kernel.create({
        ...options,
        // @ts-expect-error - invalid value for test purposes
        blueprint: {}
      })
    ).toThrowError('Blueprint is required to create a Kernel instance.')
  })

  it('should throw InitializationError if container is not a valid Container instance', () => {
    expect(() =>
      Kernel.create({
        ...options,
        // @ts-expect-error - invalid value for test purposes
        container: {}
      })
    ).toThrowError('Container is required to create a Kernel instance.')
  })

  it('should throw InitializationError if eventEmitter is not a valid EventEmitter instance', () => {
    expect(() =>
      Kernel.create({
        ...options,
        // @ts-expect-error - invalid value for test purposes
        eventEmitter: {}
      })
    ).toThrowError('EventEmitter is required to create a Kernel instance.')
  })

  it('should call beforeHandle to resolve providers and invoke beforeHandle hooks', async () => {
    await kernel.beforeHandle()

    expect(MockProviderRegisterSpy).toHaveBeenCalled()
    expect(MockProviderBeforeHandleSpy).toHaveBeenCalled()
  })

  it('should send event through handle and receive a response in function app handler context', async () => {
    const metadata = { name: 'Stone.js' }
    const mockEvent = MockIncomingEvent.create({ metadata, type: '' })
    blueprint.set('stone.handler', MockAppFunctionHandler)

    await kernel.beforeHandle()
    const response = await kernel.handle(mockEvent)
    await kernel.onTerminate()

    expect(response.content).toEqual(metadata)
    expect(MockEventMiddlewareSpy).toHaveBeenCalled()
    expect(MockResponseMiddlewareSpy).toHaveBeenCalled()
  })

  it('should send event through handle and receive a response in class app handler context', async () => {
    const metadata = { name: 'Stone.js' }
    blueprint.set('stone.handler', MockAppClassHandler)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '' })

    await kernel.beforeHandle()
    const response = await kernel.handle(mockEvent)
    await kernel.onTerminate()

    expect(response.content).toEqual(metadata)
    expect(MockEventMiddlewareSpy).toHaveBeenCalled()
    expect(MockResponseMiddlewareSpy).toHaveBeenCalled()
  })

  it('should send event through handle and receive a response in router context', async () => {
    const metadata = { name: 'Stone.js' }
    options.container.autoBinding('router', MockRouter)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '' })

    await kernel.beforeHandle()
    const response = await kernel.handle(mockEvent)
    await kernel.onTerminate()

    expect(response.content).toEqual(metadata)
    expect(MockEventMiddlewareSpy).toHaveBeenCalled()
    expect(MockResponseMiddlewareSpy).toHaveBeenCalled()
  })

  it('should throw an error when handler is not provided', async () => {
    const metadata = { name: 'Stone.js' }
    const mockEvent = MockIncomingEvent.create({ metadata, type: '' })

    await expect(async () => await kernel.handle(mockEvent)).rejects.toBeInstanceOf(InitializationError)
  })

  it('should throw an error when response not returned', async () => {
    const metadata = { name: 'Stone.js' }
    blueprint.set('stone.handler', () => undefined)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '' })

    await expect(async () => await kernel.handle(mockEvent)).rejects.toBeInstanceOf(InitializationError)
  })

  it('should throw an error when response is not a subclass of OutgoingResponse', async () => {
    const metadata = { name: 'Stone.js' }
    blueprint.set('stone.handler', () => ({}))
    // @ts-expect-error - invalid value for test purposes
    const mockEvent = MockIncomingEvent.create({ metadata: 12, type: '' }).setMetadataValue(metadata)

    await expect(async () => await kernel.handle(mockEvent)).rejects.toBeInstanceOf(InitializationError)
  })

  it('should call onTerminate and invoke onTerminate hooks on providers and middleware', async () => {
    options.container
      .instance('event', MockIncomingEvent.create({ metadata: {}, type: '' }))
      .instance('response', MockOutgoingResponse.create({ content: {}, type: '' }))
    const middleware = blueprint.get<MixedPipe[]>('stone.kernel.middleware', []).concat(['onTerminate'])
    blueprint.set('stone.kernel.middleware', middleware)
    await kernel.beforeHandle()
    await kernel.onTerminate()

    expect(MockProviderOnTerminateSpy).toHaveBeenCalled()
    expect(MockOnTerminateMiddlewareSpy).toHaveBeenCalled()
  })

  it('should throw an error if no IncomingEvent is provided in onBootstrap', async () => {
    // @ts-expect-error - access private method for test purposes
    await expect(kernel.onBootstrap(undefined as unknown as MockIncomingEvent)).rejects.toThrow(
      'No IncomingEvent provided.'
    )
  })
})

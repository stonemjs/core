import { Mock } from 'vitest'
import { Config } from '@stone-js/config'
import { NextPipe } from '@stone-js/pipeline'
import { ConsoleLogger } from '../src/ConsoleLogger'
import { Kernel, KernelOptions } from '../src/Kernel'
import { Container } from '@stone-js/service-container'
import { EventEmitter } from '../src/events/EventEmitter'
import { IncomingEvent } from '../src/events/IncomingEvent'
import { OutgoingResponse } from '../src/events/OutgoingResponse'
import { InitializationError } from '../src/errors/InitializationError'
import { EventHandlerFunction, IBlueprint, IErrorHandler, IProvider, IRouter, LifecycleEventHandler } from '../src/declarations'

/* eslint-disable @typescript-eslint/no-extraneous-class */

// Mock Event and Response classes
class MockIncomingEvent extends IncomingEvent {}
class MockOutgoingResponse extends OutgoingResponse {}

// Providers's hooks spies
const MockProviderbootSpy = vi.fn()
const MockProviderRegisterSpy = vi.fn()
const MockProviderOnPrepareSpy = vi.fn()
const MockProviderOnTerminateSpy = vi.fn()
const MockProviderAfterHandleSpy = vi.fn()
const MockProviderBeforeHandleSpy = vi.fn()

// Mock providers
class MockProvider implements IProvider {}
class MockProvider2 implements IProvider { mustSkip = (): boolean => true }
class MockProvider3 implements IProvider {
  boot = (): void => { MockProviderbootSpy() }
  register = (): void => { MockProviderRegisterSpy() }
  onPrepare = (): void => { MockProviderOnPrepareSpy() }
  afterHandle = (): void => { MockProviderAfterHandleSpy() }
  beforeHandle = (): void => { MockProviderBeforeHandleSpy() }
  onTerminate = (): void => { MockProviderOnTerminateSpy() }
}

// Middleware spies
const MockEventMiddlewareSpy: Mock = vi.fn()
const MockResponseMiddlewareSpy: Mock = vi.fn()

// Mock middleware
class MockEventMiddleware {
  async handle (event: MockIncomingEvent, next: NextPipe<MockIncomingEvent, MockOutgoingResponse>): Promise<MockOutgoingResponse> {
    MockEventMiddlewareSpy()
    return await next(event)
  }
}
const MockResponseMiddleware = async (event: MockIncomingEvent, next: NextPipe<MockIncomingEvent, MockOutgoingResponse>): Promise<MockOutgoingResponse> => {
  const response = await next(event)
  MockResponseMiddlewareSpy()
  return response
}

// App handler
const MockAppFunctionHandler: EventHandlerFunction<MockIncomingEvent, MockOutgoingResponse> = (event: IncomingEvent) => MockOutgoingResponse.create({ content: event.metadata, type: '' })
class MockAppClassHandler implements LifecycleEventHandler<MockIncomingEvent, MockOutgoingResponse> {
  handle = MockAppFunctionHandler
  onPrepare = (): void => { MockProviderOnPrepareSpy() }
  afterHandle = (): void => { MockProviderAfterHandleSpy() }
  beforeHandle = (): void => { MockProviderBeforeHandleSpy() }
  onTerminate = (): void => { MockProviderOnTerminateSpy() }
}

// App router
class MockRouter implements IRouter<MockIncomingEvent, MockOutgoingResponse> {
  dispatch (event: MockIncomingEvent): MockOutgoingResponse | Promise<MockOutgoingResponse> {
    return MockOutgoingResponse.create({ content: event.metadata, type: '' })
  }
}

// Error handler spies
const MockErrorHandlerSpy: Mock = vi.fn()

// Error handler
class MockErrorHandler implements IErrorHandler<MockIncomingEvent, MockOutgoingResponse> {
  handle (error: Error, event: MockIncomingEvent): MockOutgoingResponse {
    MockErrorHandlerSpy()
    return MockOutgoingResponse.create({ content: error, type: '' })
  }
}

describe('Kernel', () => {
  let blueprint: IBlueprint
  let options: KernelOptions
  let kernel: Kernel<MockIncomingEvent, MockOutgoingResponse>

  beforeEach(() => {
    blueprint = Config.create()

    MockEventMiddlewareSpy.mockRestore()
    MockResponseMiddlewareSpy.mockRestore()
    MockProviderOnPrepareSpy.mockRestore()
    MockProviderBeforeHandleSpy.mockRestore()
    MockProviderAfterHandleSpy.mockRestore()
    MockProviderAfterHandleSpy.mockRestore()

    blueprint.set('stone.kernel.middleware', [
      { priority: 0, pipe: MockEventMiddleware },
      { priority: 10, pipe: MockResponseMiddleware },
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

  it('should call onPrepare to resolve providers and invoke onPrepare hooks', async () => {
    await kernel.onPrepare()

    expect(MockProviderRegisterSpy).toHaveBeenCalled()
    expect(MockProviderOnPrepareSpy).toHaveBeenCalled()
  })

  it('should call beforeHandle to boot providers and invoke beforeHandle hooks', async () => {
    await kernel.onPrepare()
    await kernel.beforeHandle()

    expect(MockProviderbootSpy).toHaveBeenCalled()
    expect(MockProviderBeforeHandleSpy).toHaveBeenCalled()
  })

  it('should send event through handle and receive a response in class app handler context', async () => {
    const metadata = { name: 'Stone.js' }
    blueprint.set('stone.handler', MockAppClassHandler)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })

    await kernel.onPrepare()
    await kernel.beforeHandle()
    const response = await kernel.handle(mockEvent)
    await kernel.afterHandle({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toEqual(metadata)
    expect(MockEventMiddlewareSpy).toHaveBeenCalledTimes(2)
    expect(MockResponseMiddlewareSpy).toHaveBeenCalledOnce()
    expect(MockProviderOnPrepareSpy).toHaveBeenCalledTimes(2)
    expect(MockProviderBeforeHandleSpy).toHaveBeenCalledTimes(2)
    expect(MockProviderAfterHandleSpy).toHaveBeenCalledTimes(2)
    expect(MockProviderOnTerminateSpy).toHaveBeenCalledTimes(2)
  })

  it('should send event through handle and receive a response in router context', async () => {
    const metadata = { name: 'Stone.js' }
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.routerResolver', (_container: Container) => new MockRouter())

    await kernel.onPrepare()
    await kernel.beforeHandle()
    const response = await kernel.handle(mockEvent)
    await kernel.afterHandle({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toEqual(metadata)
    expect(MockEventMiddlewareSpy).toHaveBeenCalled()
    expect(MockResponseMiddlewareSpy).toHaveBeenCalled()
  })

  it('should handle error when default error handler is defined', async () => {
    const metadata = { name: 'Stone.js' }
    blueprint.set('stone.handler', () => undefined)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.errorHandlers', { default: MockErrorHandler })

    await kernel.onPrepare()
    await kernel.beforeHandle()
    const response = await kernel.handle(mockEvent)
    await kernel.afterHandle({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toBeInstanceOf(Error)
    expect(MockErrorHandlerSpy).toHaveBeenCalled()
  })

  it('should handle InitializationError when specific error handler is defined', async () => {
    const metadata = { name: 'Stone.js' }
    blueprint.set('stone.handler', () => undefined)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.errorHandlers', { InitializationError: MockErrorHandler })

    await kernel.onPrepare()
    await kernel.beforeHandle()
    const response = await kernel.handle(mockEvent)
    await kernel.afterHandle({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toBeInstanceOf(InitializationError)
    expect(MockErrorHandlerSpy).toHaveBeenCalled()
  })

  it('should return the resolved response when the handler does not return a response and the response resolver is defined', async () => {
    const metadata = { name: 'Stone.js' }
    class MockMainApp { handle = (): unknown => undefined }
    blueprint.set('stone.handler', MockMainApp)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.responseResolver', () => OutgoingResponse.create({ content: metadata }))

    await kernel.onPrepare()
    await kernel.beforeHandle()
    const response = await kernel.handle(mockEvent)
    await kernel.afterHandle({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toEqual(metadata)
    expect(response).toBeInstanceOf(OutgoingResponse)
    expect(MockEventMiddlewareSpy).toHaveBeenCalled()
    expect(MockResponseMiddlewareSpy).toHaveBeenCalled()
  })

  it('should return the resolved response when the handler does not return an outgoing response and the response resolver is defined', async () => {
    const metadata = { name: 'Stone.js' }
    class MockMainApp { handle = (): unknown => metadata }
    blueprint.set('stone.handler', MockMainApp)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.responseResolver', (options: any) => OutgoingResponse.create(options))

    await kernel.onPrepare()
    await kernel.beforeHandle()
    const response = await kernel.handle(mockEvent)
    await kernel.afterHandle({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toEqual(metadata)
    expect(response).toBeInstanceOf(OutgoingResponse)
    expect(MockEventMiddlewareSpy).toHaveBeenCalled()
    expect(MockResponseMiddlewareSpy).toHaveBeenCalled()
  })

  it('should return the resolved response when the handler return response options and the response resolver is defined', async () => {
    const metadata = { name: 'Stone.js' }
    class MockMainApp { handle = (): unknown => ({ content: metadata }) }
    blueprint.set('stone.handler', MockMainApp)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.responseResolver', (options: any) => OutgoingResponse.create(options))

    await kernel.onPrepare()
    await kernel.beforeHandle()
    const response = await kernel.handle(mockEvent)
    await kernel.afterHandle({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toEqual(metadata)
    expect(response).toBeInstanceOf(OutgoingResponse)
    expect(MockEventMiddlewareSpy).toHaveBeenCalled()
    expect(MockResponseMiddlewareSpy).toHaveBeenCalled()
  })

  it('should throw an error when handler is not provided and no specific nor default error handler is provided', async () => {
    const metadata = { name: 'Stone.js' }
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.errorHandlers', { TypeError: MockErrorHandler })

    await kernel.onPrepare()
    await kernel.beforeHandle()
    await expect(async () => await kernel.handle(mockEvent)).rejects.toBeInstanceOf(InitializationError)
  })

  it('should throw an error when event is not provided', async () => {
    await kernel.onPrepare()
    await kernel.beforeHandle()
    // @ts-expect-error - invalid value for test purposes
    await expect(async () => await kernel.handle(undefined)).rejects.toBeInstanceOf(InitializationError)
  })

  it('should throw an error when response not returned', async () => {
    const metadata = { name: 'Stone.js' }
    class MockMainApp { handle = (): unknown => undefined }
    blueprint.set('stone.handler', MockMainApp)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })

    await kernel.onPrepare()
    await kernel.beforeHandle()
    await expect(async () => await kernel.handle(mockEvent)).rejects.toBeInstanceOf(InitializationError)
  })

  it('should throw an error when response is not a subclass of OutgoingResponse', async () => {
    const metadata = { name: 'Stone.js' }
    class MockMainApp { handle = (): unknown => ({}) }
    blueprint.set('stone.handler', MockMainApp)
    // @ts-expect-error - invalid value for test purposes
    const mockEvent = MockIncomingEvent.create({ metadata: 12, type: '' }).setMetadataValue(metadata)

    await kernel.onPrepare()
    await kernel.beforeHandle()
    await expect(async () => await kernel.handle(mockEvent)).rejects.toBeInstanceOf(InitializationError)
  })
})

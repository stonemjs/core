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
import { FunctionalAdapterEventHandler, IBlueprint, IErrorHandler, IServiceProvider, ILifecycleAdapterEventHandler } from '../src/declarations'

/* eslint-disable @typescript-eslint/no-extraneous-class */

// Mock Event and Response classes
class MockIncomingEvent extends IncomingEvent {}
class MockOutgoingResponse extends OutgoingResponse {}

// Providers's hooks spies
const MockProviderbootSpy = vi.fn()
const MockProviderRegisterSpy = vi.fn()
const MockProviderOnInitSpy = vi.fn()
const MockProviderOnTerminateSpy = vi.fn()
const MockProviderOnEventHandledSpy = vi.fn()
const MockProviderOnHandlingEventSpy = vi.fn()

// Mock providers
class MockProvider implements IServiceProvider {}
class MockProvider2 implements IServiceProvider { mustSkip = (): boolean => true }
class MockProvider3 implements IServiceProvider {
  boot = (): void => { MockProviderbootSpy() }
  register = (): void => { MockProviderRegisterSpy() }
  onInit = (): void => { MockProviderOnInitSpy() }
  onEventHandled = (): void => { MockProviderOnEventHandledSpy() }
  onHandlingEvent = (): void => { MockProviderOnHandlingEventSpy() }
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
const MockAppFunctionHandler: FunctionalAdapterEventHandler<MockIncomingEvent, MockOutgoingResponse> = (event: IncomingEvent) => MockOutgoingResponse.create({ content: event.metadata, type: '' })
class MockAppClassHandler implements ILifecycleAdapterEventHandler<MockIncomingEvent, MockOutgoingResponse> {
  handle = MockAppFunctionHandler
  onInit = (): void => { MockProviderOnInitSpy() }
  onEventHandled = (): void => { MockProviderOnEventHandledSpy() }
  onHandlingEvent = (): void => { MockProviderOnHandlingEventSpy() }
  onTerminate = (): void => { MockProviderOnTerminateSpy() }
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
    MockProviderOnInitSpy.mockRestore()
    MockProviderOnHandlingEventSpy.mockRestore()
    MockProviderOnEventHandledSpy.mockRestore()
    MockProviderOnEventHandledSpy.mockRestore()

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

  it('should call onInit to resolve providers and invoke onInit hooks', async () => {
    await kernel.onInit()

    expect(MockProviderRegisterSpy).toHaveBeenCalled()
    expect(MockProviderOnInitSpy).toHaveBeenCalled()
  })

  it('should call onHandlingEvent to boot providers and invoke onHandlingEvent hooks', async () => {
    await kernel.onInit()
    await kernel.onHandlingEvent()

    expect(MockProviderbootSpy).toHaveBeenCalled()
    expect(MockProviderOnHandlingEventSpy).toHaveBeenCalled()
  })

  it('should send event through handle and receive a response in class app handler context', async () => {
    const metadata = { name: 'Stone.js' }
    blueprint.set('stone.kernel.eventHandler', MockAppClassHandler)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })

    await kernel.onInit()
    await kernel.onHandlingEvent()
    const response = await kernel.handle(mockEvent)
    await kernel.onEventHandled({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toEqual(metadata)
    expect(MockEventMiddlewareSpy).toHaveBeenCalledTimes(2)
    expect(MockResponseMiddlewareSpy).toHaveBeenCalledOnce()
    expect(MockProviderOnInitSpy).toHaveBeenCalledTimes(2)
    expect(MockProviderOnHandlingEventSpy).toHaveBeenCalledTimes(2)
    expect(MockProviderOnEventHandledSpy).toHaveBeenCalledTimes(2)
    expect(MockProviderOnTerminateSpy).toHaveBeenCalledTimes(2)
  })

  it('should handle error when default error handler is defined', async () => {
    const metadata = { name: 'Stone.js' }
    blueprint.set('stone.kernel.eventHandler', () => undefined)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.errorHandlers', { default: MockErrorHandler })

    await kernel.onInit()
    await kernel.onHandlingEvent()
    const response = await kernel.handle(mockEvent)
    await kernel.onEventHandled({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toBeInstanceOf(Error)
    expect(MockErrorHandlerSpy).toHaveBeenCalled()
  })

  it('should handle InitializationError when specific error handler is defined', async () => {
    const metadata = { name: 'Stone.js' }
    blueprint.set('stone.kernel.eventHandler', () => undefined)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.errorHandlers', { InitializationError: MockErrorHandler })

    await kernel.onInit()
    await kernel.onHandlingEvent()
    const response = await kernel.handle(mockEvent)
    await kernel.onEventHandled({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toBeInstanceOf(InitializationError)
    expect(MockErrorHandlerSpy).toHaveBeenCalled()
  })

  it('should return the resolved response when the handler does not return a response and the response resolver is defined', async () => {
    const metadata = { name: 'Stone.js' }
    class MockMainApp { handle = (): unknown => undefined }
    blueprint.set('stone.kernel.eventHandler', MockMainApp)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.responseResolver', () => OutgoingResponse.create({ content: metadata }))

    await kernel.onInit()
    await kernel.onHandlingEvent()
    const response = await kernel.handle(mockEvent)
    await kernel.onEventHandled({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toEqual(metadata)
    expect(response).toBeInstanceOf(OutgoingResponse)
    expect(MockEventMiddlewareSpy).toHaveBeenCalled()
    expect(MockResponseMiddlewareSpy).toHaveBeenCalled()
  })

  it('should return the resolved response when the handler does not return an outgoing response and the response resolver is defined', async () => {
    const metadata = { name: 'Stone.js' }
    class MockMainApp { handle = (): unknown => metadata }
    blueprint.set('stone.kernel.eventHandler', MockMainApp)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.responseResolver', (options: any) => OutgoingResponse.create(options))

    await kernel.onInit()
    await kernel.onHandlingEvent()
    const response = await kernel.handle(mockEvent)
    await kernel.onEventHandled({ event: mockEvent, response })
    await kernel.onTerminate({ event: mockEvent, response })

    expect(response.content).toEqual(metadata)
    expect(response).toBeInstanceOf(OutgoingResponse)
    expect(MockEventMiddlewareSpy).toHaveBeenCalled()
    expect(MockResponseMiddlewareSpy).toHaveBeenCalled()
  })

  it('should return the resolved response when the handler return response options and the response resolver is defined', async () => {
    const metadata = { name: 'Stone.js' }
    class MockMainApp { handle = (): unknown => ({ content: metadata }) }
    blueprint.set('stone.kernel.eventHandler', MockMainApp)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })
    blueprint.set('stone.kernel.responseResolver', (options: any) => OutgoingResponse.create(options))

    await kernel.onInit()
    await kernel.onHandlingEvent()
    const response = await kernel.handle(mockEvent)
    await kernel.onEventHandled({ event: mockEvent, response })
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

    await kernel.onInit()
    await kernel.onHandlingEvent()
    await expect(async () => await kernel.handle(mockEvent)).rejects.toBeInstanceOf(InitializationError)
  })

  it('should throw an error when event is not provided', async () => {
    await kernel.onInit()
    await kernel.onHandlingEvent()
    // @ts-expect-error - invalid value for test purposes
    await expect(async () => await kernel.handle(undefined)).rejects.toBeInstanceOf(InitializationError)
  })

  it('should throw an error when response not returned', async () => {
    const metadata = { name: 'Stone.js' }
    class MockMainApp { handle = (): unknown => undefined }
    blueprint.set('stone.kernel.eventHandler', MockMainApp)
    const mockEvent = MockIncomingEvent.create({ metadata, type: '', source: {} as any })

    await kernel.onInit()
    await kernel.onHandlingEvent()
    await expect(async () => await kernel.handle(mockEvent)).rejects.toBeInstanceOf(InitializationError)
  })

  it('should throw an error when response is not a subclass of OutgoingResponse', async () => {
    const metadata = { name: 'Stone.js' }
    class MockMainApp { handle = (): unknown => ({}) }
    blueprint.set('stone.kernel.eventHandler', MockMainApp)
    // @ts-expect-error - invalid value for test purposes
    const mockEvent = MockIncomingEvent.create({ metadata: 12, type: '' }).setMetadataValue(metadata)

    await kernel.onInit()
    await kernel.onHandlingEvent()
    await expect(async () => await kernel.handle(mockEvent)).rejects.toBeInstanceOf(InitializationError)
  })
})

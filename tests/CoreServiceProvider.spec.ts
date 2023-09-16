import { Config } from '@stone-js/config'
import { Container } from '@stone-js/service-container'
import { KernelEvent } from '../src/events/KernelEvent'
import { EventEmitter } from '../src/events/EventEmitter'
import { IBlueprint, IListener, ILogger, ISubscriber } from '../src/definitions'
import { CoreServiceProvider, CoreServiceProviderOptions } from '../src/CoreServiceProvider'

/* eslint-disable-next-line @typescript-eslint/no-extraneous-class */
class MockService {}

const mockListenerHandleSpy = vi.fn()
const mockListenerHandleSpyError = vi.fn(async () => await Promise.reject(new TypeError('something bad happened')))
class MockListener implements IListener {
  handle = mockListenerHandleSpy
}

class MockListenerError implements IListener {
  handle = mockListenerHandleSpyError
}

class MockSubscriber implements ISubscriber {
  subscribe = vi.fn()
}

class MockSubscriberError implements ISubscriber {
  subscribe = vi.fn(async () => await Promise.reject(new TypeError('something bad happened')))
}

describe('CoreServiceProvider', () => {
  let logger: ILogger
  let container: Container
  let blueprint: IBlueprint
  let eventEmitter: EventEmitter
  let coreServiceProvider: CoreServiceProvider
  let coreServiceProviderOptions: CoreServiceProviderOptions

  beforeEach(() => {
    blueprint = Config.create()
    container = Container.create()
    eventEmitter = new EventEmitter()
    logger = { error: vi.fn() } as unknown as ILogger
    coreServiceProviderOptions = { container, blueprint, eventEmitter, logger }
    coreServiceProvider = new CoreServiceProvider(coreServiceProviderOptions)
  })

  it('should throw an error if logger is not provided', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => new CoreServiceProvider({ container: undefined, blueprint, eventEmitter })).toThrow(TypeError)
  })

  it('should throw an error if container is not provided', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => new CoreServiceProvider({ logger, container: undefined, blueprint, eventEmitter })).toThrow(TypeError)
  })

  it('should throw an error if blueprint is not provided', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => new CoreServiceProvider({ logger, container, blueprint: undefined, eventEmitter })).toThrow(TypeError)
  })

  it('should throw an error if eventEmitter is not provided', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => new CoreServiceProvider({ logger, container, blueprint, eventEmitter: undefined })).toThrow(TypeError)
  })

  it('should register services', () => {
    blueprint.set('app.services', [MockService])
    const autoBindingSpy = vi.spyOn(container, 'autoBinding')

    coreServiceProvider.register()

    expect(autoBindingSpy).toHaveBeenCalledWith(MockService, MockService, true)
  })

  it('should register listeners', () => {
    blueprint.set('app.listeners', { 'test:event': [MockListener] })

    coreServiceProvider.register()
    eventEmitter.emit('test:event')

    expect(mockListenerHandleSpy).toHaveBeenCalled()
  })

  it('should log error when listeners in is error', () => {
    blueprint.set('app.listeners', { [KernelEvent.RESPONSE_PREPARED]: [MockListenerError] })
    const event = KernelEvent.create({ type: KernelEvent.RESPONSE_PREPARED, source: this, metadata: {} }).setMetadataValue('name', 'Stone.js')
    coreServiceProvider.register()

    eventEmitter.emit(event)

    expect(mockListenerHandleSpyError).toHaveBeenCalled()
    expect(event).toEqual(event.clone())
    expect(event.getMetadataValue('name')).toBe('Stone.js')
  })

  it('should register aliases', () => {
    blueprint.set('app.services', [[MockService, { singleton: true }]])
    blueprint.set('app.aliases', { mockService: MockService })
    const aliasSpy = vi.spyOn(container, 'alias')
    const autoBindingSpy = vi.spyOn(container, 'autoBinding')

    coreServiceProvider.register()

    expect(aliasSpy).toHaveBeenCalledWith(MockService, 'mockService')
    expect(autoBindingSpy).toHaveBeenCalledWith(MockService, MockService, true, undefined)
  })

  it('should boot subscribers', async () => {
    blueprint.set('app.subscribers', [MockSubscriber])
    const resolveSpy = vi.spyOn(container, 'resolve')

    await coreServiceProvider.boot()

    expect(resolveSpy).toHaveBeenCalledWith(MockSubscriber, true)
  })

  it('should log error on booting subscribers', async () => {
    blueprint.set('app.subscribers', [MockSubscriberError])
    const resolveSpy = vi.spyOn(container, 'resolve')
    const loggerSpy = vi.spyOn(logger, 'error').mockImplementation(() => {})

    await coreServiceProvider.boot()

    expect(resolveSpy).toHaveBeenCalledWith(MockSubscriberError, true)
    expect(loggerSpy).toHaveBeenCalledWith(expect.stringContaining('An error has occured'))
    loggerSpy.mockRestore()
  })
})

import { Logger } from '../src/Logger'
import { Kernel } from '../src/Kernel'
import { Config } from '@stone-js/config'
import { ConsoleLogger } from '../src/ConsoleLogger'
import { Container } from '@stone-js/service-container'
import { EventEmitter } from '../src/events/EventEmitter'
import { RuntimeError } from '../src/errors/RuntimeError'
import { IncomingEvent } from '../src/events/IncomingEvent'
import { OutgoingResponse } from '../src/events/OutgoingResponse'
import { InitializationError } from '../src/errors/InitializationError'

describe('Kernel - create & validateOptions', () => {
  const validBlueprint = new Config()
  const validContainer = new Container()
  const validEventEmitter = new EventEmitter()

  it('should create a Kernel instance with valid options', () => {
    const kernel = Kernel.create({
      blueprint: validBlueprint,
      container: validContainer,
      eventEmitter: validEventEmitter
    })

    expect(kernel).toBeInstanceOf(Kernel)
  })

  it('should throw if blueprint is missing or invalid', () => {
    expect(() => {
      Kernel.create({
        // @ts-expect-error
        blueprint: {},
        container: validContainer,
        eventEmitter: validEventEmitter
      })
    }).toThrow(InitializationError)
  })

  it('should throw if container is missing or invalid', () => {
    expect(() => {
      Kernel.create({
        blueprint: validBlueprint,
        // @ts-expect-error
        container: {},
        eventEmitter: validEventEmitter
      })
    }).toThrow(InitializationError)
  })

  it('should throw if eventEmitter is missing or invalid', () => {
    expect(() => {
      Kernel.create({
        blueprint: validBlueprint,
        container: validContainer,
        // @ts-expect-error
        eventEmitter: {}
      })
    }).toThrow(InitializationError)
  })
})

describe('Kernel - lifecycle hooks', () => {
  let kernel: Kernel<any, any>

  beforeEach(() => {
    kernel = Kernel.create({
      blueprint: new Config(),
      container: new Container(),
      eventEmitter: new EventEmitter()
    })
  })

  it('should call all internal methods on onInit()', async () => {
    const spyRegister = vi.spyOn(kernel as any, 'registerBaseBindings').mockReturnValue(kernel)
    const spyRunLive = vi.spyOn(kernel as any, 'runLiveConfigurations').mockResolvedValue()
    const spyResolve = vi.spyOn(kernel as any, 'resolveProviders').mockResolvedValue()
    const spyRegisterProviders = vi.spyOn(kernel as any, 'registerProviders').mockResolvedValue()
    const spyHooks = vi.spyOn(kernel as any, 'executeHooks').mockResolvedValue()

    await kernel.onInit()

    expect(spyRegister).toHaveBeenCalled()
    expect(spyRunLive).toHaveBeenCalled()
    expect(spyResolve).toHaveBeenCalled()
    expect(spyRegisterProviders).toHaveBeenCalled()
    expect(spyHooks).toHaveBeenCalledWith('onInit')
  })

  it('should call bootProviders and hook on onHandlingEvent()', async () => {
    const spyBoot = vi.spyOn(kernel as any, 'bootProviders').mockResolvedValue()
    const spyHooks = vi.spyOn(kernel as any, 'executeHooks').mockResolvedValue()

    await kernel.onHandlingEvent()

    expect(spyBoot).toHaveBeenCalled()
    expect(spyHooks).toHaveBeenCalledWith('onHandlingEvent')
  })

  it('should execute hook on onEventHandled()', async () => {
    const spyHooks = vi.spyOn(kernel as any, 'executeHooks').mockResolvedValue()

    await kernel.onEventHandled()

    expect(spyHooks).toHaveBeenCalledWith('onEventHandled')
  })

  it('should execute hook on onTerminate()', async () => {
    const spyHooks = vi.spyOn(kernel as any, 'executeHooks').mockResolvedValue()

    await kernel.onTerminate()

    expect(spyHooks).toHaveBeenCalledWith('onTerminate')
  })
})

describe('Kernel - registerBaseBindings', () => {
  it('should bind core components and aliases correctly', () => {
    const blueprint = new Config()
    const container = new Container()
    const emitter = new EventEmitter()
    Logger.init(blueprint)

    const kernel = Kernel.create({
      container,
      blueprint,
      eventEmitter: emitter
    })

    kernel.registerBaseBindings()

    expect(container.resolve(Config)).toBe(blueprint)
    expect(container.resolve(Container)).toBe(container)
    expect(container.resolve(EventEmitter)).toBe(emitter)
    expect(container.resolve('config')).toBe(blueprint)
    expect(container.resolve('logger')).toBeInstanceOf(ConsoleLogger)
    expect(container.resolve('blueprint')).toBe(blueprint)
    expect(container.resolve('events')).toBe(emitter)
    expect(container.resolve('eventEmitter')).toBe(emitter)
  })
})

describe('Kernel - runLiveConfigurations', () => {
  it('should run class-based configurations', async () => {
    const configureSpy = vi.fn()

    class LiveConfig {
      configure = configureSpy
    }

    const blueprint = new Config()
    const container = new Container()
    blueprint.set('stone.liveConfigurations', [
      { module: LiveConfig, isClass: true }
    ])

    const kernel = Kernel.create({
      container,
      blueprint,
      eventEmitter: new EventEmitter()
    })

    await kernel.runLiveConfigurations()

    expect(configureSpy).toHaveBeenCalledWith(blueprint)
  })

  it('should run function-based configuration directly', async () => {
    const fn = vi.fn()
    const blueprint = new Config()
    blueprint.set('stone.liveConfigurations', [fn])

    const kernel = Kernel.create({
      container: new Container(),
      blueprint,
      eventEmitter: new EventEmitter()
    })

    await kernel.runLiveConfigurations()

    expect(fn).toHaveBeenCalledWith(blueprint)
  })
})

describe('Kernel - Provider Lifecycle', () => {
  let container: Container
  let blueprint: Config
  let kernel: Kernel<any, any>

  beforeEach(() => {
    container = new Container()
    blueprint = new Config()
    kernel = Kernel.create({
      container,
      blueprint,
      eventEmitter: new EventEmitter()
    })
  })

  it('should resolve class-based providers and call mustSkip()', async () => {
    const skipSpy = vi.fn().mockResolvedValue(false)
    class MyProvider {
      mustSkip = skipSpy
    }

    blueprint.set('stone.providers', [{ module: MyProvider, isClass: true }])

    await kernel.resolveProviders()

    expect(skipSpy).toHaveBeenCalled()
    expect([...kernel.providers].length).toBe(1)
  })

  it('should resolve factory-based providers and include them', async () => {
    const mockProvider = { mustSkip: vi.fn().mockResolvedValue(false) }
    const factory = () => mockProvider

    blueprint.set('stone.providers', [{ module: factory, isFactory: true }])

    await kernel.resolveProviders()

    expect([...kernel.providers]).toContain(mockProvider)
  })

  it('should resolve raw constructor providers', async () => {
    class RawProvider {}

    blueprint.set('stone.providers', [RawProvider])

    await kernel.resolveProviders()

    expect([...kernel.providers].some(p => p instanceof RawProvider)).toBe(true)
  })

  it('should register all resolved providers once', async () => {
    const register = vi.fn()
    class Service {
      register = register
    }

    blueprint.set('stone.providers', [{ module: Service, isClass: true }])

    await kernel.resolveProviders()
    await kernel.registerProviders()
    await kernel.registerProviders() // should skip already registered

    expect(register).toHaveBeenCalledTimes(1)
  })

  it('should boot all resolved providers', async () => {
    const boot = vi.fn()
    class Booter {
      boot = boot
    }

    blueprint.set('stone.providers', [{ module: Booter, isClass: true }])

    await kernel.resolveProviders()
    await kernel.bootProviders()

    expect(boot).toHaveBeenCalledTimes(1)
  })
})

describe('Kernel - handle event', () => {
  let blueprint: Config
  let container: Container
  let kernel: Kernel<any, any>

  class MyEvent extends IncomingEvent {}
  class MyResponse extends OutgoingResponse {}

  beforeEach(() => {
    blueprint = new Config()
    container = new Container()
    kernel = Kernel.create({ container, blueprint, eventEmitter: new EventEmitter() })
  })

  it('should call sendEventThroughDestination when handle is called', async () => {
    const spy = vi.spyOn(kernel as any, 'sendEventThroughDestination').mockResolvedValue(new MyResponse({ source: {} }))

    const result = await kernel.handle(new MyEvent({ source: {} }))

    expect(spy).toHaveBeenCalled()
    expect(result).toBeInstanceOf(MyResponse)
  })

  it('should throw if event is missing', async () => {
    await expect(kernel.sendEventThroughDestination(undefined as any)).rejects.toThrow()
  })

  it('should clone original event if clone method is available', async () => {
    const cloneSpy = vi.fn()
    class ClonableEvent extends MyEvent {
      clone = cloneSpy
    }

    const event = new ClonableEvent({})
    vi.spyOn(kernel as any, 'handleEvent').mockResolvedValue(new MyResponse({ source: {} }))
    vi.spyOn(kernel as any, 'prepareResponse').mockResolvedValue(new MyResponse({ source: {} }))

    await kernel.sendEventThroughDestination(event)

    expect(cloneSpy).toHaveBeenCalled()
  })

  it('should execute handleEvent and prepare the response', async () => {
    const response = new MyResponse({ source: {} })
    const event = new MyEvent({ source: {} })

    const handler = { handle: vi.fn().mockResolvedValue(response) }
    blueprint.set('stone.kernel.eventHandler', handler.handle)

    const prepareSpy = vi.spyOn(kernel as any, 'prepareResponse').mockResolvedValue(response)

    const result = await kernel.handleEvent(event)

    expect(handler.handle).toHaveBeenCalledWith(event)
    expect(prepareSpy).toHaveBeenCalledWith(event, response)
    expect(result).toBe(response)
  })

  it('should handle error during handleEvent and delegate to handleError', async () => {
    const error = new Error('boom')
    const event = new MyEvent({ source: {} })
    const handler = { handle: vi.fn().mockRejectedValue(error) }

    blueprint.set('stone.kernel.eventHandler', handler.handle)

    const handleErrorSpy = vi.spyOn(kernel as any, 'handleError').mockResolvedValue(new MyResponse({ source: {} }))

    await kernel.handleEvent(event)

    expect(handleErrorSpy).toHaveBeenCalledWith(error, event)
  })
})

describe('Kernel - error handling', () => {
  let container: Container
  let blueprint: Config
  let kernel: Kernel<any, any>

  class MyEvent extends IncomingEvent {}
  class MyResponse extends OutgoingResponse {}

  beforeEach(() => {
    container = new Container()
    blueprint = new Config()
    kernel = Kernel.create({ container, blueprint, eventEmitter: new EventEmitter() })
  })

  it('should call resolveErrorHandler and prepareResponse', async () => {
    const err = new RuntimeError('fail')
    const event = new MyEvent({ source: {} })
    const response = new MyResponse({ source: {} })
    const handlerSpy = vi.fn().mockResolvedValue(response)

    blueprint.set('stone.kernel.errorHandlers.RuntimeError', {
      module: () => handlerSpy, isFactory: true
    })

    const prepareSpy = vi.spyOn(kernel as any, 'prepareResponse').mockResolvedValue(response)
    const hookSpy = vi.spyOn(kernel as any, 'executeHooks').mockResolvedValue()

    const result = await kernel.handleError(err, event)

    expect(hookSpy).toHaveBeenCalledWith('onExecutingErrorHandler')
    expect(handlerSpy).toHaveBeenCalledWith(err, event)
    expect(prepareSpy).toHaveBeenCalledWith(event, response)
    expect(result).toBe(response)
  })

  it('should resolve class-based error handler', () => {
    class MyHandler {
      handle = vi.fn()
    }

    blueprint.set('stone.kernel.errorHandlers.TypeError', {
      module: MyHandler, isClass: true
    })

    const handler = kernel.resolveErrorHandler(new TypeError('x'))

    expect(handler.handle).toBeInstanceOf(Function)
  })

  it('should resolve factory-based error handler', () => {
    const handle = vi.fn()
    const factory = () => handle

    blueprint.set('stone.kernel.errorHandlers.SyntaxError', {
      module: factory, isFactory: true
    })

    const handler = kernel.resolveErrorHandler(new SyntaxError('y'))

    expect(handler.handle).toBe(handle)
  })

  it('should resolve functional error handler', () => {
    const handle = vi.fn()

    blueprint.set('stone.kernel.errorHandlers.ReferenceError', {
      module: handle
    })

    const handler = kernel.resolveErrorHandler(new ReferenceError('z'))

    expect(handler.handle).toBe(handle)
  })

  it('should throw if no handler is provided at all', () => {
    expect(() => {
      kernel.resolveErrorHandler(new URIError('oops'))
    }).toThrow(URIError)
  })
})

describe('Kernel - prepare & validate response', () => {
  let container: Container
  let blueprint: Config
  let kernel: Kernel<any, any>

  class MyEvent extends IncomingEvent {}
  class MyResponse extends OutgoingResponse {}

  beforeEach(() => {
    container = new Container()
    blueprint = new Config()
    kernel = Kernel.create({ container, blueprint, eventEmitter: new EventEmitter() })
  })

  it('should skip preparation if response is already prepared', async () => {
    const event = new MyEvent({ source: {} })
    const prepared = new MyResponse({ source: {} })
    prepared.prepared = true

    const result = await kernel.prepareResponse(event, prepared)

    expect(result).toBe(prepared)
  })

  it('should prepare response if not prepared and bind it in container', async () => {
    const event = new MyEvent({ source: {} })
    const unprepared = new MyResponse({ source: {} })
    unprepared.prepare = vi.fn(() => unprepared)

    const hookSpy = vi.spyOn(kernel as any, 'executeHooks').mockResolvedValue()

    const result = await kernel.prepareResponse(event, unprepared)

    expect(hookSpy).toHaveBeenCalledWith('onPreparingResponse')
    expect(unprepared.prepare).toHaveBeenCalled()
    expect(hookSpy).toHaveBeenCalledWith('onResponsePrepared')
    expect(result).toBe(unprepared)
  })

  it('should return response as-is if it is an instance of OutgoingResponse', async () => {
    const response = new MyResponse({ source: {} })
    const result = await kernel.validateAndResolveResponse(response)

    expect(result).toBe(response)
  })

  it('should resolve empty return value using responseResolver', async () => {
    const resolver = vi.fn().mockResolvedValue(new MyResponse({ source: {} }))

    blueprint.set('stone.kernel.responseResolver', resolver)

    const result = await kernel.validateAndResolveResponse(undefined)

    expect(resolver).toHaveBeenCalledWith({})
    expect(result).toBeInstanceOf(MyResponse)
  })

  it('should resolve non-OutgoingResponse using responseResolver', async () => {
    const resolver = vi.fn().mockResolvedValue(new MyResponse({ source: {} }))
    blueprint.set('stone.kernel.responseResolver', resolver)

    const result = await kernel.validateAndResolveResponse({ name: 'Stone' })

    expect(resolver).toHaveBeenCalledWith({ content: { name: 'Stone' }, statusCode: 200 })
    expect(result).toBeInstanceOf(MyResponse)
  })

  it('should throw error if no responseResolver and value is missing', async () => {
    await expect(kernel.validateAndResolveResponse(undefined)).rejects.toThrow(InitializationError)
  })

  it('should throw error if no responseResolver and value is not an OutgoingResponse', async () => {
    await expect(kernel.validateAndResolveResponse({ msg: 'fail' })).rejects.toThrow(InitializationError)
  })
})

describe('Kernel - makePipelineOptions', () => {
  let container: Container
  let blueprint: Config
  let kernel: Kernel<any, any>

  beforeEach(() => {
    container = new Container()
    blueprint = new Config()
    kernel = Kernel.create({ container, blueprint, eventEmitter: new EventEmitter() })
  })

  it('should include middleware hook callbacks if defined', () => {
    const onProcess = [vi.fn()]
    const onProcessed = [vi.fn()]

    blueprint.set('stone.lifecycleHooks', {
      onProcessingKernelMiddleware: onProcess,
      onKernelMiddlewareProcessed: onProcessed
    }).set('stone.kernel.skipMiddleware', true)

    kernel = Kernel.create({ container, blueprint, eventEmitter: new EventEmitter() })

    const opts = kernel.makePipelineOptions()

    expect(opts.hooks.onProcessingPipe).toBe(onProcess)
    expect(opts.hooks.onPipeProcessed).toBe(onProcessed)
  })

  it('should resolve class pipe using container', () => {
    class MyPipe { handle = vi.fn() }

    const opts = kernel.makePipelineOptions()
    const resolved = opts.resolver({ module: MyPipe, isClass: true, priority: 1 })

    expect(resolved).toBeInstanceOf(MyPipe)
  })

  it('should resolve alias pipe using container', () => {
    class AliasPipe { handle = vi.fn() }

    container.singleton(AliasPipe, () => new AliasPipe()).alias(AliasPipe, 'MyAlias')

    const opts = kernel.makePipelineOptions()
    const resolved = opts.resolver({ module: 'MyAlias', isAlias: true, priority: 1 })

    expect(resolved).toBeInstanceOf(AliasPipe)
  })

  it('should resolve factory pipe using container', () => {
    const instance = { handle: vi.fn() }
    const factory = (c: any) => {
      expect(c).toBe(container)
      return instance
    }

    const opts = kernel.makePipelineOptions()
    const resolved = opts.resolver({ module: factory, isFactory: true, priority: 1 })

    expect(resolved).toBe(instance)
  })
})

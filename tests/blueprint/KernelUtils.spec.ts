import { EventEmitter } from '../../src/events/EventEmitter'
import { IncomingEvent } from '../../src/events/IncomingEvent'
import { StoneBlueprint } from '../../src/options/StoneBlueprint'
import { IBlueprint, IEventSubscriber, ILogger, IServiceProvider, LogLevel, NextMiddleware, Promiseable } from '../../src/declarations'
import { defineErrorHandler, defineEventHandler, defineEventListener, defineEventSubscriber, defineHookListener, defineLogger, defineMiddleware, defineService, defineServiceProvider, defineStone } from '../../src/blueprint/KernelUtils'

// Mock handlers
const functionalHandler = vi.fn()
const factoryHandler = vi.fn(() => functionalHandler)
class ClassHandler {
  handle = vi.fn()
}

describe('defineEventHandler', () => {
  it('should define a functional event handler', () => {
    const blueprint = defineEventHandler(functionalHandler)

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        kernel: {
          eventHandler: {
            module: functionalHandler,
            isClass: false,
            isFactory: false
          }
        }
      }
    })
  })

  it('should define a factory-based event handler', () => {
    const blueprint = defineEventHandler(factoryHandler, { isFactory: true })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        kernel: {
          eventHandler: {
            module: factoryHandler,
            isClass: false,
            isFactory: true
          }
        }
      }
    })
  })

  it('should define a class-based event handler', () => {
    const blueprint = defineEventHandler(ClassHandler, { isFactory: false })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        kernel: {
          eventHandler: {
            module: ClassHandler,
            isClass: true,
            isFactory: false
          }
        }
      }
    })
  })
})

describe('defineErrorHandler', () => {
  it('should define a functional error handler with single error', () => {
    const blueprint = defineErrorHandler(functionalHandler, {
      error: 'MyError'
    })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        kernel: {
          errorHandlers: {
            MyError: {
              module: functionalHandler,
              isClass: false,
              isFactory: false
            }
          }
        }
      }
    })
  })

  it('should define a factory error handler with multiple errors', () => {
    const blueprint = defineErrorHandler(factoryHandler, {
      error: ['MyError', 'OtherError'],
      isFactory: true
    })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        kernel: {
          errorHandlers: {
            MyError: {
              module: factoryHandler,
              isClass: false,
              isFactory: true
            },
            OtherError: {
              module: factoryHandler,
              isClass: false,
              isFactory: true
            }
          }
        }
      }
    })
  })

  it('should define a class-based error handler with single error', () => {
    const blueprint = defineErrorHandler(ClassHandler, {
      error: 'FatalError',
      isFactory: false
    })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        kernel: {
          errorHandlers: {
            FatalError: {
              module: ClassHandler,
              isClass: true,
              isFactory: false
            }
          }
        }
      }
    })
  })
})

describe('defineHookListener', () => {
  it('should register a lifecycle hook under the given name', () => {
    const hook = (): Promiseable<void> => {}
    const blueprint = defineHookListener(hook, { name: 'onInit' })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        lifecycleHooks: {
          onInit: [hook]
        }
      }
    })
  })
})

describe('defineEventListener', () => {
  const eventName = 'stonejs@user.created'

  it('should define a functional event listener', () => {
    const fn = vi.fn()
    const blueprint = defineEventListener(fn, { event: eventName })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        listeners: [{
          module: fn,
          event: eventName,
          isClass: false,
          isFactory: false
        }]
      }
    })
  })

  it('should define a factory-based event listener', () => {
    const factory = vi.fn()
    const blueprint = defineEventListener(factory, { event: eventName, isFactory: true })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        listeners: [{
          module: factory,
          event: eventName,
          isClass: false,
          isFactory: true
        }]
      }
    })
  })

  it('should define a class-based event listener', () => {
    class MyListener { handle () {} }
    const blueprint = defineEventListener(MyListener, { event: eventName, isFactory: false })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        listeners: [{
          module: MyListener,
          event: eventName,
          isClass: true,
          isFactory: false
        }]
      }
    })
  })
})

describe('defineMiddleware', () => {
  const dummyMiddleware = vi.fn()

  it('should define a functional middleware', () => {
    const blueprint = defineMiddleware(dummyMiddleware)

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        kernel: {
          middleware: [{
            module: dummyMiddleware,
            isClass: false,
            isFactory: false
          }]
        }
      }
    })
  })

  it('should define a factory-based middleware', () => {
    const factory = vi.fn()
    const blueprint = defineMiddleware(factory, { isFactory: true })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        kernel: {
          middleware: [{
            module: factory,
            isClass: false,
            isFactory: true
          }]
        }
      }
    })
  })

  it('should define a class-based middleware', () => {
    class MyMiddleware {
      handle (_event: IncomingEvent, _next: NextMiddleware<IncomingEvent>) {}
    }

    const blueprint = defineMiddleware(MyMiddleware, { isFactory: false })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        kernel: {
          middleware: [{
            module: MyMiddleware,
            isClass: true,
            isFactory: false
          }]
        }
      }
    })
  })
})

describe('defineServiceProvider', () => {
  it('should define a factory-based service provider', () => {
    const factory = vi.fn()

    const blueprint = defineServiceProvider(factory, { isFactory: true })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        providers: [{
          module: factory,
          isFactory: true,
          isClass: false
        }]
      }
    })
  })

  it('should define a class-based service provider', () => {
    class MyProvider implements IServiceProvider {
      register () {}
      async boot () {}
    }

    const blueprint = defineServiceProvider(MyProvider, { isFactory: false })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        providers: [{
          module: MyProvider,
          isFactory: false,
          isClass: true
        }]
      }
    })
  })

  it('should fallback to factory when no flag is provided', () => {
    const fn = vi.fn()
    const blueprint = defineServiceProvider(fn)

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        providers: [{
          module: fn,
          isFactory: true,
          isClass: false
        }]
      }
    })
  })
})

describe('defineService', () => {
  it('should define a factory-based service', () => {
    const factory = vi.fn()
    const alias = 'my-service'

    const blueprint = defineService(factory, {
      alias,
      isFactory: true
    })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        services: [{
          alias,
          module: factory,
          isFactory: true,
          isClass: false
        }]
      }
    })
  })

  it('should define a class-based service', () => {
    class MyService {}
    const blueprint = defineService(MyService, {
      alias: 'MyService',
      isFactory: false
    })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        services: [{
          alias: 'MyService',
          module: MyService,
          isFactory: false,
          isClass: true
        }]
      }
    })
  })

  it('should fallback to factory=true when isFactory is not provided', () => {
    const factory = vi.fn()
    const blueprint = defineService(factory, {
      alias: 'AutoFactory',
      isFactory: true
    })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        services: [{
          alias: 'AutoFactory',
          module: factory,
          isFactory: true,
          isClass: false
        }]
      }
    })
  })
})

describe('defineStone', () => {
  it('should define a factory-based stone service', () => {
    const factory = vi.fn()
    const blueprint = defineStone(factory, { alias: 'core.service', isFactory: true })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        services: [{
          alias: 'core.service',
          module: factory,
          isFactory: true,
          isClass: false
        }]
      }
    })
  })

  it('should define a class-based stone service', () => {
    class CoreService {}
    const blueprint = defineStone(CoreService, { alias: 'core', isFactory: false })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        services: [{
          alias: 'core',
          module: CoreService,
          isFactory: false,
          isClass: true
        }]
      }
    })
  })

  it('should default to isFactory: true when omitted', () => {
    const factory = vi.fn()
    const blueprint = defineStone(factory, { alias: 'auto.factory', isFactory: true })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        services: [{
          alias: 'auto.factory',
          module: factory,
          isFactory: true,
          isClass: false
        }]
      }
    })
  })
})

describe('defineEventSubscriber', () => {
  it('should define a functional event subscriber', () => {
    const subscriber = vi.fn()
    const blueprint = defineEventSubscriber(subscriber)

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        subscribers: [{
          module: subscriber,
          isClass: false,
          isFactory: false
        }]
      }
    })
  })

  it('should define a factory-based event subscriber', () => {
    const factory = () => vi.fn()
    const blueprint = defineEventSubscriber(factory, { isFactory: true })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        subscribers: [{
          module: factory,
          isClass: false,
          isFactory: true
        }]
      }
    })
  })

  it('should define a class-based event subscriber', () => {
    class Subscriber implements IEventSubscriber {
      subscribe (eventEmitter: EventEmitter): Promiseable<void> {}
    }
    const blueprint = defineEventSubscriber(Subscriber, { isFactory: false })

    expect(blueprint).toEqual<Partial<StoneBlueprint>>({
      stone: {
        subscribers: [{
          module: Subscriber,
          isClass: true,
          isFactory: false
        }]
      }
    })
  })
})

describe('defineLogger', () => {
  const fakeBlueprint = {
    set: vi.fn(),
    get: vi.fn()
  } as unknown as IBlueprint

  it('should define a factory-based logger', () => {
    const factory = vi.fn().mockReturnValue({ log: vi.fn() })
    const blueprint = defineLogger(factory, { isFactory: true, level: LogLevel.INFO, custom: 'yes' })

    expect(blueprint).toMatchObject({
      stone: {
        logger: expect.objectContaining({
          level: 'info',
          custom: 'yes',
          resolver: expect.any(Function)
        })
      }
    })

    const resolved = blueprint.stone?.logger?.resolver?.(fakeBlueprint)
    expect(factory).toHaveBeenCalledWith({ blueprint: fakeBlueprint })
    expect(resolved).toEqual(factory.mock.results[0].value)
  })

  it('should define a class-based logger', () => {
    class Logger implements ILogger {
      constructor (public ctx: any) {}
      info (message: string, ...optionalParams: unknown[]) {}
      debug (message: string, ...optionalParams: unknown[]) {}
      warn (message: string, ...optionalParams: unknown[]) {}
      error (message: string, ...optionalParams: unknown[]) {}
    }

    const blueprint = defineLogger(Logger, { isFactory: false, level: LogLevel.DEBUG })
    expect(blueprint.stone?.logger?.level).toBe('debug')

    const resolved = blueprint.stone?.logger?.resolver?.(fakeBlueprint)
    expect(resolved).toBeInstanceOf(Logger)
  })
})

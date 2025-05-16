import { Logger } from '../src/logger/Logger'
import { MetadataSymbol } from '../src/decorators/Metadata'
import { StoneFactory, stoneApp } from '../src/StoneFactory'
import { defineConfig } from '../src/blueprint/BlueprintUtils'
import { IntegrationError } from '../src/errors/IntegrationError'
import { BlueprintBuilder } from '../src/blueprint/BlueprintBuilder'
import { CONFIGURATION_KEY, CONFIG_MIDDLEWARE_KEY, LIFECYCLE_HOOK_KEY, BLUEPRINT_KEY } from '../src/decorators/constants'

vi.mock('../src/blueprint/BlueprintUtils', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    defineConfig: vi.fn(actual.defineConfig)
  }
})

vi.mock('../src/logger/Logger', () => ({
  Logger: {
    init: vi.fn(),
    getInstance: vi.fn(() => ({ info: vi.fn() }))
  }
}))

vi.mock('../src/blueprint/BlueprintBuilder', () => {
  return {
    BlueprintBuilder: {
      create: vi.fn().mockReturnValue({
        build: vi.fn().mockResolvedValue({}) // returns mock blueprint
      })
    }
  }
})

describe('StoneFactory - create & configure', () => {
  it('should create an instance with default empty modules', () => {
    const factory = StoneFactory.create()
    // @ts-expect-error access private
    expect(factory.modules).toEqual([])
  })

  it('should create an instance with provided modules', () => {
    const modules = [{ test: true }]
    const factory = StoneFactory.create({ modules })
    // @ts-expect-error access private
    expect(factory.modules).toEqual(modules)
  })

  it('should push config middleware via .configure()', () => {
    const configFn = vi.fn()
    const factory = StoneFactory.create()
    factory.configure(configFn)

    // @ts-expect-error access private
    expect(factory.modules.length).toBe(1)
    expect(defineConfig).toHaveBeenCalledWith(configFn)
  })

  it('should support chainable configure()', () => {
    const factory = StoneFactory.create().configure(() => {}).configure(() => {})
    // @ts-expect-error access private
    expect(factory.modules.length).toBe(2)
  })
})

describe('StoneFactory - handle()', () => {
  it('should store the handler and delegate to run()', async () => {
    const handler = vi.fn()
    const runSpy = vi.fn().mockResolvedValue('mock-result')

    const factory = StoneFactory.create<IncomingEvent, any>()

    // Inject mocked .run method
    // @ts-expect-error accessing private
    factory.run = runSpy

    const result = await factory.handle(handler)

    // Handler should be stored in blueprint
    // @ts-expect-error accessing private
    const stored = factory.blueprint.get('stone.kernel.eventHandler')
    expect(stored).toBe(handler)

    expect(runSpy).toHaveBeenCalled()
    expect(result).toBe('mock-result')
  })
})

describe('StoneFactory - run()', () => {
  it('should run blueprint + logger + builder + adapter lifecycle', async () => {
    const runMock = vi.fn().mockResolvedValue('mock-response')

    const adapterMock = {
      run: runMock
    }

    const factory = StoneFactory.create()

    // Inject a fake adapter resolver
    // @ts-expect-error access private
    factory.blueprint.set('stone.adapter.resolver', () => adapterMock)

    const result = await factory.run()

    expect(Logger.init).toHaveBeenCalledWith(factory.blueprint)
    expect(BlueprintBuilder.create).toHaveBeenCalledWith(factory.blueprint)
    expect(result).toBe('mock-response')
  })
})

describe('StoneFactory - resolveAdapter()', () => {
  it('should throw if resolver is missing from blueprint', () => {
    const factory = StoneFactory.create()

    expect(() => {
      // @ts-expect-error
      factory.resolveAdapter()
    }).toThrow(IntegrationError)
  })

  it('should throw if resolver returns undefined', () => {
    const factory = StoneFactory.create()
    // @ts-expect-error
    factory.blueprint.set('stone.adapter.resolver', () => undefined)

    expect(() => {
      // @ts-expect-error
      factory.resolveAdapter()
    }).toThrow(IntegrationError)
  })

  it('should return adapter if resolver resolves correctly', () => {
    const adapterMock = { run: vi.fn() }
    const factory = StoneFactory.create()

    // @ts-expect-error
    factory.blueprint.set('stone.adapter.resolver', () => adapterMock)

    // @ts-expect-error
    const resolved = factory.resolveAdapter()

    expect(resolved).toBe(adapterMock)
  })
})

describe('StoneFactory - initBlueprint()', () => {
  it('should inject plain blueprint objects', async () => {
    const factory = StoneFactory.create()
    const plainBlueprint = { stone: { foo: 'bar' } }

    // @ts-expect-error private
    factory.modules = [plainBlueprint]
    await factory.initBlueprint()

    expect(factory.blueprint.get('stone.foo')).toBe('bar')
  })

  it('should register blueprint via @StoneApp metadata', async () => {
    const AppClass = class {}
    AppClass[MetadataSymbol] = { [BLUEPRINT_KEY]: { stone: { name: 'world' } } }

    const factory = stoneApp({ modules: [AppClass] })

    await factory.initBlueprint()
    expect(factory.blueprint.get('stone.name')).toBe('world')
  })

  it('should register lifecycle hooks via @Hook metadata', async () => {
    const methodSpy = vi.fn()
    class MyHook {
      methodRef () {
        methodSpy()
      }
    }
    MyHook[MetadataSymbol] = {
      [LIFECYCLE_HOOK_KEY]: [
        { name: 'onInit', method: 'methodRef' }
      ]
    }

    const factory = stoneApp({ modules: [MyHook] })
    await factory.initBlueprint()

    const hooks = factory.blueprint.get('stone.lifecycleHooks.onInit')
    expect(hooks.length).toBe(1)
    expect(typeof hooks[0]).toBe('function')
  })

  it('should register blueprint middleware via @ConfigMiddleware', async () => {
    const MiddlewareClass = class {}
    MiddlewareClass[MetadataSymbol] = {
      [CONFIG_MIDDLEWARE_KEY]: { priority: 1 }
    }

    const factory = StoneFactory.create()
    // @ts-expect-error
    factory.modules = [MiddlewareClass]
    await factory.initBlueprint()

    const middleware = factory.blueprint.get('stone.blueprint.middleware')
    expect(middleware[0]).toEqual(expect.objectContaining({
      module: MiddlewareClass,
      priority: 1
    }))
  })

  it('should run configure and afterConfigure from @Configuration', async () => {
    const configure = vi.fn()
    const afterConfigure = vi.fn()

    class ConfigClass {
      configure = configure
      afterConfigure = afterConfigure
    }

    ConfigClass[MetadataSymbol] = {
      [CONFIGURATION_KEY]: { live: false }
    }

    const factory = StoneFactory.create()
    // @ts-expect-error
    factory.modules = [ConfigClass]

    await factory.initBlueprint()
    expect(configure).toHaveBeenCalled()
    const hook = factory.blueprint.get('stone.lifecycleHooks.onBlueprintPrepared')
    expect(hook[0]).toBeDefined()
  })

  it('should register live configs if live: true', async () => {
    const LiveConfig = class {}
    LiveConfig[MetadataSymbol] = {
      [CONFIGURATION_KEY]: { live: true }
    }

    const factory = StoneFactory.create()
    // @ts-expect-error
    factory.modules = [LiveConfig]

    await factory.initBlueprint()
    const live = factory.blueprint.get('stone.liveConfigurations')
    expect(live[0]).toEqual(expect.objectContaining({ module: LiveConfig }))
  })
})

import { Config } from '@stone-js/config'
import { SetupError } from '../../src/errors/SetupError'
import { ClassType, ConfigContext } from '../../src/definitions'
import { stoneBlueprint } from '../../src/options/StoneBlueprint'
import { MAIN_HANDLER_KEY, MIDDLEWARE_KEY, BLUEPRINT_KEY, ADAPTER_MIDDLEWARE_KEY, SUBSCRIBER_KEY, CONFIGURATION_KEY, PROVIDER_KEY, SERVICE_KEY, LISTENER_KEY } from '../../src/decorators/constants'
import { AdapterMiddlewareMiddleware, BlueprintMiddleware, ListenerMiddleware, MainHandlerMiddleware, MiddlewareMiddleware, ProviderMiddleware, RegisterProviderToOnInitHookMiddleware, ServiceMiddleware, SetCurrentAdapterMiddleware, SubscriberMiddleware } from '../../src/middleware/configMiddleware'

// Mock dependencies
vi.mock('@stone-js/pipeline')
const mockNext = vi.fn()

// Utility functions
const createMockContext = (modules: unknown[]): ConfigContext => ({ modules, blueprint: Config.create() })
const createMockModule = (key: PropertyKey, metadata: Record<any, any>): ClassType => {
  /* eslint-disable-next-line @typescript-eslint/no-extraneous-class */
  class MyClass {
    static readonly app = {
      builder: {
        middleware: []
      }
    }

    static onInit (): void {}

    static async load (): Promise<unknown> {
      return await Promise.resolve({ stone: { name: 'Test Stone.js' } })
    }
  }
  MyClass[Symbol.metadata] = { [key]: metadata }
  return MyClass
}
const createMockModule2 = (key: PropertyKey, metadata: Record<any, any>): ClassType => {
  /* eslint-disable-next-line @typescript-eslint/no-extraneous-class */
  class MyClass {
    static readonly stone = {
      env: 'test',
      adapters: [{ alias: 'node', middleware: [] }]
    }

    static onInit (): void {}
  }
  MyClass[Symbol.metadata] = { [key]: metadata }
  return MyClass
}

describe('configMiddleware', () => {
  let mockModules: ClassType[]
  let mockContext: ConfigContext

  beforeEach(async () => {
    const mockModule: any = {}
    mockModules = [
      createMockModule(BLUEPRINT_KEY, { ...stoneBlueprint }),
      createMockModule(CONFIGURATION_KEY, {}),
      createMockModule2(CONFIGURATION_KEY, {}),
      createMockModule(MAIN_HANDLER_KEY, {}),
      createMockModule(ADAPTER_MIDDLEWARE_KEY, {}),
      createMockModule(ADAPTER_MIDDLEWARE_KEY, { type: 'output', platform: 'node', priority: 1, params: [] }),
      createMockModule(PROVIDER_KEY, {}),
      createMockModule(SERVICE_KEY, { alias: 'Service' }),
      createMockModule(SUBSCRIBER_KEY, {}),
      createMockModule(LISTENER_KEY, { event: 'onLoad' }),
      createMockModule(MIDDLEWARE_KEY, { type: 'response' }),
      createMockModule(MIDDLEWARE_KEY, { type: 'event', global: true, priority: 1, params: [] }),
      mockModule
    ]
    mockContext = createMockContext(mockModules)
    mockNext.mockResolvedValue(mockContext.blueprint)
    await BlueprintMiddleware(mockContext, mockNext)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('BlueprintMiddleware', () => {
    it('should call next with updated blueprint', async () => {
      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(mockContext.blueprint.get('stone.name')).toBe('Test Stone.js')
      expect(mockContext.blueprint.get('stone.env')).toBe('test')
    })

    it('should throw an error when configuration loader failed', async () => {
      /* eslint-disable-next-line @typescript-eslint/no-extraneous-class */
      class MyClass {
        static async load (): Promise<unknown> {
          throw new Error('Error')
        }
      }
      MyClass[Symbol.metadata] = { [CONFIGURATION_KEY]: {} }
      console.error = vi.fn()

      await BlueprintMiddleware(createMockContext([MyClass]), mockNext)

      expect(console.error).toHaveBeenCalled()
      expect(mockContext.blueprint.get('stone.env')).toBe('test')
    })
  })

  describe('MainHandlerMiddleware', () => {
    it('should call next with updated blueprint', async () => {
      const result = await MainHandlerMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.handler')).toBeTruthy()
    })

    it('should throw an error when main handler is not defined', async () => {
      await expect(async () => {
        await MainHandlerMiddleware(createMockContext([createMockModule(LISTENER_KEY, {})]), mockNext)
      }).rejects.toThrow(SetupError)
    })
  })

  describe('SetCurrentAdapterMiddleware', () => {
    it('should call next with preferred adapter selected', async () => {
      mockContext.blueprint.set('stone.adapter.alias', 'adapter')
      mockContext.blueprint.set('stone.adapters', [{ preferred: true, alias: 'adapter', default: true }])
      const result = await SetCurrentAdapterMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.adapter.alias')).toBe('adapter')
    })

    it('should call next with alias adapter selected', async () => {
      mockContext.blueprint.set('stone.adapter.alias', 'adapter')
      mockContext.blueprint.set('stone.adapters', [{ preferred: false, alias: 'adapter', default: true }])
      const result = await SetCurrentAdapterMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.adapter.alias')).toBe('adapter')
    })

    it('should call next with default adapter selected', async () => {
      mockContext.blueprint.set('stone.adapter.alias', 'adapter')
      mockContext.blueprint.set('stone.adapters', [{ preferred: false, alias: 'mini', default: true }])
      const result = await SetCurrentAdapterMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.adapter.alias')).toBe('mini')
    })
  })

  describe('ProviderMiddleware', () => {
    it('should call next with updated blueprint', async () => {
      const result = await ProviderMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.providers')).length(1)
    })
  })

  describe('RegisterProviderToOnInitHookMiddleware', () => {
    it('should call next with onInit providers added to adapter hooks', async () => {
      mockContext.blueprint.set('stone.adapter', { alias: 'adapter', hooks: {} })
      await ProviderMiddleware(mockContext, mockNext)
      const result = await RegisterProviderToOnInitHookMiddleware(mockContext, mockNext)
      const OnInitFn: Function = mockContext.blueprint.get('stone.adapter.hooks.onInit.0')
      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.adapter.hooks.onInit')).length(1)
      expect(OnInitFn()).toBe(undefined)
    })
  })

  describe('ServiceMiddleware', () => {
    it('should call next with updated blueprint', async () => {
      const result = await ServiceMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.services')).length(1)
      expect((mockContext.blueprint.get<Function[]>('stone.services'))[0]).length(2)
    })
  })

  describe('ListenerMiddleware', () => {
    it('should call next with updated blueprint', async () => {
      const result = await ListenerMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.listeners.onLoad')).length(1)
    })

    it('should throw an error when event name is not defined', async () => {
      await expect(async () => {
        await ListenerMiddleware(createMockContext([createMockModule(LISTENER_KEY, {})]), mockNext)
      }).rejects.toThrow(SetupError)
    })
  })

  describe('SubscriberMiddleware', () => {
    it('should call next with updated blueprint', async () => {
      const result = await SubscriberMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.subscribers')).length(1)
    })
  })

  describe('AdapterMiddlewareMiddleware', () => {
    it('should call next with updated blueprint', async () => {
      const result = await AdapterMiddlewareMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.adapters[0].middleware', [])).length(2)
    })
  })

  describe('MiddlewareMiddleware', () => {
    it('should call next with updated blueprint', async () => {
      const result = await MiddlewareMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.kernel.middleware', [])).length(1)
    })
  })
})

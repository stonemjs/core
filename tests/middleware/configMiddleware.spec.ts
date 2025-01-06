import { Config } from '@stone-js/config'
import { SetupError } from '../../src/errors/SetupError'
import { MetadataSymbol } from '../../src/decorators/Metadata'
import { stoneBlueprint } from '../../src/options/StoneBlueprint'
import { ClassType, ConfigContext, MetadataHolder } from '../../src/definitions'
import { MAIN_HANDLER_KEY, MIDDLEWARE_KEY, BLUEPRINT_KEY, ADAPTER_MIDDLEWARE_KEY, SUBSCRIBER_KEY, CONFIGURATION_KEY, PROVIDER_KEY, SERVICE_KEY, LISTENER_KEY, ERROR_HANDLER_KEY, ADAPTER_ERROR_HANDLER_KEY } from '../../src/decorators/constants'
import { AdapterErrorHandlerMiddleware, AdapterMiddlewareMiddleware, BlueprintMiddleware, ErrorHandlerMiddleware, ListenerMiddleware, MainHandlerMiddleware, MiddlewareMiddleware, ProviderMiddleware, RegisterProviderToOnInitHookMiddleware, ServiceMiddleware, SetCurrentAdapterMiddleware, SubscriberMiddleware } from '../../src/middleware/configMiddleware'

// Mock dependencies
vi.mock('@stone-js/pipeline')
const mockNext = vi.fn()

// Utility functions
const createMockContext = (modules: unknown[]): ConfigContext => ({ modules, blueprint: Config.create() })
const createMockModule = (key: PropertyKey, metadata: Record<any, any>): ClassType => {
  /* eslint-disable-next-line @typescript-eslint/no-extraneous-class */
  const MyClass: ClassType & Partial<MetadataHolder> = class {
    static readonly stone = {
      builder: {
        middleware: []
      }
    }

    static onInit (): void {}

    static async load (): Promise<unknown> {
      return await Promise.resolve({ stone: { name: 'Test Stone.js' } })
    }
  }
  MyClass[MetadataSymbol] = { [key]: metadata }
  return MyClass as ClassType
}
const createMockModule2 = (key: PropertyKey, metadata: Record<any, any>): ClassType => {
  /* eslint-disable-next-line @typescript-eslint/no-extraneous-class */
  const MyClass: ClassType & Partial<MetadataHolder> = class {
    static readonly stone = {
      env: 'test',
      adapters: [{ alias: 'node', middleware: [] }]
    }

    static onInit (): void {}
  }
  MyClass[MetadataSymbol] = { [key]: metadata }
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
      createMockModule(ERROR_HANDLER_KEY, { error: 'default' }),
      createMockModule(ADAPTER_ERROR_HANDLER_KEY, { error: 'default' }),
      createMockModule(SUBSCRIBER_KEY, {}),
      createMockModule(LISTENER_KEY, { event: 'onLoad' }),
      createMockModule(MIDDLEWARE_KEY, { type: 'response' }),
      createMockModule(MIDDLEWARE_KEY, { type: 'event', global: true, priority: 1, params: [] }),
      mockModule
    ]
    mockContext = createMockContext(mockModules)
    mockNext.mockResolvedValue(mockContext.blueprint)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('BlueprintMiddleware', () => {
    it('should call next with updated blueprint', async () => {
      await BlueprintMiddleware(mockContext, mockNext)
      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(mockContext.blueprint.get('stone.name')).toBe('Test Stone.js')
      expect(mockContext.blueprint.get('stone.env')).toBe('test')
    })

    it('should throw an error when configuration loader failed', async () => {
      await BlueprintMiddleware(mockContext, mockNext)
      /* eslint-disable-next-line @typescript-eslint/no-extraneous-class */
      const MyClass: ClassType & Partial<MetadataHolder> = class {
        static async load (): Promise<unknown> {
          throw new Error('Error')
        }
      }
      MyClass[MetadataSymbol] = { [CONFIGURATION_KEY]: {} }
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
    it('should call next with current adapter selected', async () => {
      mockContext.blueprint.set('stone.adapter.alias', 'adapter')
      mockContext.blueprint.set('stone.adapters', [{ current: true, platform: 'adapter', alias: 'adapter', default: true }])
      const result = await SetCurrentAdapterMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.adapter.alias')).toBe('adapter')
    })

    it('should call next with alias adapter selected', async () => {
      mockContext.blueprint.set('stone.adapter.alias', 'adapter')
      mockContext.blueprint.set('stone.adapters', [{ current: false, platform: 'adapter', alias: 'adapter', default: true }])
      const result = await SetCurrentAdapterMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.adapter.alias')).toBe('adapter')
    })

    it('should call next with platform adapter selected', async () => {
      mockContext.blueprint.set('stone.adapter.platform', 'adapter')
      mockContext.blueprint.set('stone.adapters', [{ current: false, platform: 'adapter', alias: 'adapter', default: true }])
      const result = await SetCurrentAdapterMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.adapter.alias')).toBe('adapter')
    })

    it('should call next with default adapter selected', async () => {
      mockContext.blueprint.set('stone.adapter.alias', 'adapter')
      mockContext.blueprint.set('stone.adapters', [{ current: false, platform: 'adapter', alias: 'mini', default: true }])
      const result = await SetCurrentAdapterMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.adapter.alias')).toBe('mini')
    })

    it('should call next with no adapter selected', async () => {
      mockContext.blueprint.set('stone.adapter.alias', 'adapter')
      mockContext.blueprint.set('stone.adapters', [{ current: false, platform: 'adapter', alias: 'mini', default: false }])
      const result = await SetCurrentAdapterMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(mockContext.blueprint.get('stone.adapter.alias')).toBeUndefined()
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
      const OnInitFn: Function = mockContext.blueprint.get('stone.adapter.hooks.onInit.0', () => {})
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
      expect((mockContext.blueprint.get<Function[]>('stone.services', []))[0]).length(2)
    })
  })

  describe('ErrorHandlerMiddleware', () => {
    it('should call next with updated blueprint', async () => {
      const result = await ErrorHandlerMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(Object.entries(mockContext.blueprint.get('stone.kernel.errorHandlers', {}))).length(1)
    })
  })

  describe('AdapterErrorHandlerMiddleware', () => {
    it('should call next with updated blueprint', async () => {
      const result = await AdapterErrorHandlerMiddleware(mockContext, mockNext)

      expect(mockNext).toHaveBeenCalledWith({ modules: mockContext.modules, blueprint: mockContext.blueprint })
      expect(result).toBe(mockContext.blueprint)
      expect(Object.entries(mockContext.blueprint.get('stone.adapter.errorHandlers', {}))).length(1)
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
      await BlueprintMiddleware(mockContext, mockNext)
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

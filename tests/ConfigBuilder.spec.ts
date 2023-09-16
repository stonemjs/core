import { Config } from '@stone-js/config'
import { Pipeline } from '@stone-js/pipeline'
import { ConfigRawModules } from '../src/definitions'
import { ConfigBuilder, ConfigBuilderOptions } from '../src/ConfigBuilder'
import { CONFIG_MIDDLEWARE_KEY, CONFIGURATION_KEY, BLUEPRINT_KEY } from '../src/decorators/constants'

/**
 * Unit tests for ConfigBuilder.
 */
describe('ConfigBuilder', () => {
  const mockMiddleware = vi.fn()
  const mockModule = { middleware: [mockMiddleware], defaultMiddlewarePriority: 5 }
  const rawModules: ConfigRawModules = {
    app: {
      module1: mockModule
    },
    commands: {}
  }

  let configBuilder: ConfigBuilder

  beforeEach(() => {
    configBuilder = ConfigBuilder.create({ middleware: [], defaultMiddlewarePriority: 0 })
  })

  it('should create a ConfigBuilder instance with default options', () => {
    const defaultConfigBuilder = ConfigBuilder.create()
    expect(defaultConfigBuilder).toBeInstanceOf(ConfigBuilder)
  })

  it('should build config with given raw modules', async () => {
    vi.spyOn(Config, 'create').mockReturnValue({} as any)
    vi.spyOn(Pipeline, 'create').mockReturnValue({
      defaultPriority: vi.fn().mockReturnThis(),
      send: vi.fn().mockReturnThis(),
      through: vi.fn().mockReturnThis(),
      then: vi.fn((v) => v({ blueprint: {} }))
    } as any)

    const blueprint = await configBuilder.build(rawModules)

    expect(blueprint).toEqual({})
    expect(Config.create).toHaveBeenCalledTimes(1)
    expect(Pipeline.create).toHaveBeenCalledTimes(1)
  })

  it('should populate options correctly from modules', () => {
    const options: ConfigBuilderOptions = { middleware: [], defaultMiddlewarePriority: 0 }
    const populatedOptions = (configBuilder as any).populateOptions(options, mockModule)

    expect(populatedOptions.middleware).toContain(mockMiddleware)
    expect(populatedOptions.defaultMiddlewarePriority).toBe(5)
  })

  it('should extract modules from raw input correctly', () => {
    const extractedModules = (configBuilder as any).extractModulesFromRaw(rawModules)
    expect(extractedModules).toContain(mockModule)
  })

  it('should extract options from class modules correctly', () => {
    const mockMiddleware2 = vi.fn()
    /* eslint-disable-next-line @typescript-eslint/no-extraneous-class */
    class MockClass {
      static readonly app = { builder: { middleware: [mockMiddleware2] } }
    }
    /* eslint-disable-next-line @typescript-eslint/no-extraneous-class */
    class MockClass2 {}
    /* eslint-disable-next-line @typescript-eslint/no-extraneous-class */
    class MockClass3 {}
    MockClass[Symbol.metadata] = { [CONFIGURATION_KEY]: {} }
    MockClass2[Symbol.metadata] = { [CONFIG_MIDDLEWARE_KEY]: {} }
    MockClass3[Symbol.metadata] = { [BLUEPRINT_KEY]: { app: { builder: { middleware: [mockMiddleware], defaultMiddlewarePriority: 5 } } } }
    const extractedOptions = (configBuilder as any).extractOptionsFromModules([MockClass, MockClass2, MockClass3])
    expect(extractedOptions.middleware).toContain(mockMiddleware)
    expect(extractedOptions.middleware).toContain(mockMiddleware2)
    expect(extractedOptions.defaultMiddlewarePriority).toBe(5)
  })

  it('should extract options from modules correctly', () => {
    const mockModule2 = { app: { builder: { middleware: [mockMiddleware] } } }
    const extractedOptions = (configBuilder as any).extractOptionsFromModules([mockModule, mockModule2])
    expect(extractedOptions.middleware).toContain(mockMiddleware)
    expect(extractedOptions.defaultMiddlewarePriority).toBe(0)
  })
})

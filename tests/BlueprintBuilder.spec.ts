import { Logger } from '../src/Logger'
import { Pipeline } from '@stone-js/pipeline'
import { BlueprintBuilder } from '../src/BlueprintBuilder'

vi.mock('@stone-js/pipeline', async () => {
  const actual = await vi.importActual('@stone-js/pipeline')
  return {
    ...actual,
    Pipeline: {
      create: vi.fn().mockReturnThis(),
      send: vi.fn().mockReturnThis(),
      through: vi.fn().mockReturnThis(),
      defaultPriority: vi.fn().mockReturnThis(),
      then: vi.fn().mockImplementation(async (cb) => {
        return cb({ blueprint: 'final-blueprint' })
      })
    }
  }
})

describe('BlueprintBuilder', () => {
  let blueprint: any
  let builder: BlueprintBuilder<any, any>

  beforeEach(() => {
    blueprint = {
      get: vi.fn((key, fallback) => {
        if (key === 'stone.lifecycleHooks') return {}
        if (key === 'stone.blueprint.middleware') return []
        if (key === 'stone.blueprint.defaultMiddlewarePriority') return 0
        return fallback
      })
    }

    Logger.getInstance = vi.fn()

    builder = BlueprintBuilder.create(blueprint)
  })

  it('should create a builder with provided blueprint', () => {
    expect(builder).toBeInstanceOf(BlueprintBuilder)
  })

  it('should build the blueprint and call pipeline correctly', async () => {
    const result = await builder.build(['SomeModule'])

    expect(result).toBe('final-blueprint')
    expect(Pipeline.create).toHaveBeenCalled()
    expect(Pipeline.send).toHaveBeenCalledWith(expect.objectContaining({
      modules: ['SomeModule'],
      blueprint
    }))
    expect(Pipeline.through).toHaveBeenCalled()
    expect(Pipeline.defaultPriority).toHaveBeenCalledWith(0)
  })

  it('should execute lifecycle hooks if present', async () => {
    const hookSpy = vi.fn()

    blueprint.get = vi.fn((key, fallback) => {
      if (key === 'stone.lifecycleHooks') {
        return {
          onPreparingBlueprint: [hookSpy],
          onBlueprintPrepared: [hookSpy]
        }
      }
      return fallback
    })

    builder = BlueprintBuilder.create(blueprint)
    await builder.build([])

    expect(hookSpy).toHaveBeenCalledTimes(2)
    expect(hookSpy).toHaveBeenCalledWith(expect.objectContaining({ blueprint }))
  })

  it('makePipelineOptions should resolve class and factory pipes', () => {
    const mockClassPipe = { module: class Test {}, isClass: true }
    const mockFactoryPipe = { module: () => () => 'created', isFactory: true }

    const opts = builder.makePipelineOptions()

    const classInstance = opts.resolver(mockClassPipe as any)
    const factoryInstance = opts.resolver(mockFactoryPipe as any)

    expect(classInstance).toBeInstanceOf(mockClassPipe.module)
    expect(factoryInstance()).toBe('created')
    expect(typeof opts.hooks).toBe('object')
  })
})

import { RuntimeError } from '../src/errors/RuntimeError'
import { StoneFactory, StoneFactoryOptions } from '../src/StoneFactory'
import { IBlueprint, IAdapter, AdapterResolver } from '../src/definitions'

// Mock implementations for IBlueprint and IAdapter
class MockAdapter implements IAdapter<string> {
  async run (): Promise<string> {
    return 'Adapter Run Successfully'
  }
}

// Mock Blueprint
const mockBlueprint = (resolver?: AdapterResolver<string>): IBlueprint => ({
  get: vi.fn((key: string) => {
    if (key === 'stone.adapter.resolver') {
      return resolver
    }
    return undefined
  })
}) as any

describe('StoneFactory', () => {
  it('should throw an error if blueprint is not provided', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => StoneFactory.create<string>({ blueprint: undefined })).toThrow(RuntimeError)
  })

  it('should create a StoneFactory instance', () => {
    const blueprint = mockBlueprint()
    const options: StoneFactoryOptions = { blueprint }

    const factory = StoneFactory.create(options)

    expect(factory).toBeInstanceOf(StoneFactory)
  })

  it('should throw an error if no adapter resolver is provided in the blueprint', async () => {
    const blueprint = mockBlueprint()
    const options: StoneFactoryOptions = { blueprint }
    const factory = StoneFactory.create(options)

    await expect(factory.run()).rejects.toThrow(
      'No adapter resolver provided. Ensure that a valid adapter resolver is configured under "stone.adapter.resolver" in the blueprint configuration.'
    )
  })

  it('should throw an error if the adapter resolver returns undefined', async () => {
    // @ts-expect-error - invalid value for test purposes
    const resolver: AdapterResolver<string> = () => undefined
    const blueprint = mockBlueprint(resolver)
    const options: StoneFactoryOptions = { blueprint }
    const factory = StoneFactory.create(options)

    await expect(factory.run()).rejects.toThrow(
      'No adapters provided. Stone.js needs at least one adapter to run.'
    )
  })

  it('should run the adapter successfully when a valid adapter is provided', async () => {
    const resolver: AdapterResolver<string> = () => new MockAdapter()
    const blueprint = mockBlueprint(resolver)
    const options: StoneFactoryOptions = { blueprint }
    const factory = StoneFactory.create(options)

    const result = await factory.run()

    expect(result).toBe('Adapter Run Successfully')
  })
})

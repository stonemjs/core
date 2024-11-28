import { SetupError } from '../src/errors/SetupError'
import { mergeBlueprints, defineAppBlueprint } from '../src/utils'
import { StoneBlueprint, Environment, stoneBlueprint } from '../src/options/StoneBlueprint'

// Mock data for blueprints
const mockBlueprint1: StoneBlueprint = {
  stone: {
    name: 'App1',
    env: Environment.Production
  }
}

const mockBlueprint2: StoneBlueprint = {
  stone: {
    name: 'App2',
    debug: true
  }
}

const mockUserBlueprint: StoneBlueprint = {
  stone: {
    timezone: 'PST'
  }
}

const invalidBlueprint = 'This is not a blueprint'

// Unit tests
describe('mergeBlueprints', () => {
  it('should merge multiple blueprints into one', () => {
    const mergedBlueprint = mergeBlueprints(mockBlueprint1, mockBlueprint2)

    expect(mergedBlueprint.stone?.name).toBe('App2') // Last merged wins
    expect(mergedBlueprint.stone?.env).toBe('production')
    expect(mergedBlueprint.stone?.debug).toBe(true)
  })

  it('should handle empty blueprints gracefully', () => {
    const mergedBlueprint = mergeBlueprints({ stone: {} }, mockBlueprint1)
    expect(mergedBlueprint.stone?.name).toBe('App1')
  })

  it('should throw SetupError if any blueprint is not a valid object', () => {
    expect(() => mergeBlueprints(mockBlueprint1, invalidBlueprint as any)).toThrow(SetupError)
  })
})

describe('defineAppBlueprint', () => {
  it('should merge user-defined blueprints with default blueprint', () => {
    const appBlueprint = defineAppBlueprint(stoneBlueprint, mockUserBlueprint)

    expect(appBlueprint.stone?.name).toBe('Stone.js') // Default blueprint name
    expect(appBlueprint.stone?.timezone).toBe('PST') // User-defined value
  })

  it('should override default properties with user-defined ones', () => {
    const customBlueprint = { stone: { name: 'CustomApp' } }
    const appBlueprint = defineAppBlueprint(stoneBlueprint, customBlueprint)

    expect(appBlueprint.stone?.name).toBe('CustomApp')
  })

  it('should throw SetupError if any user-defined blueprint is invalid', () => {
    expect(() => defineAppBlueprint(invalidBlueprint as any)).toThrow(SetupError)
  })
})

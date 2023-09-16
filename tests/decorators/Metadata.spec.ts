import {
  setMetadata,
  hasMetadata,
  getMetadata,
  getAllMetadata,
  removeMetadata,
  setClassMetadata,
  setMethodMetadata,
  setFieldMetadata,
  addBlueprint,
  hasBlueprint,
  getBlueprint
} from '../../src/decorators/Metadata'
import { BLUEPRINT_KEY } from '../../src/decorators/constants'
import { StoneBlueprint } from '../../src/options/StoneBlueprint'

/* eslint-disable @typescript-eslint/no-extraneous-class */

// Mock Class for testing purposes
class MockClass {}
MockClass[Symbol.metadata] = {}

// Mock context
const mockContext = { metadata: {} } as any

// Mock metadata key and value
const metadataKey = 'testKey'
const metadataValue = 'testValue'

// Mock blueprint
const mockBlueprint: StoneBlueprint = { app: { name: 'testApp' } }

// Tests for metadata functions
describe('Metadata Utilities', () => {
  it('should set metadata on context', () => {
    setMetadata(mockContext, metadataKey, metadataValue)
    expect(mockContext.metadata[metadataKey]).toBe(metadataValue)
  })

  it('should check if a class has specific metadata', () => {
    MockClass[Symbol.metadata] = { [metadataKey]: metadataValue }
    const result = hasMetadata(MockClass, metadataKey)
    expect(result).toBe(true)
  })

  it('should return metadata value for a given key', () => {
    const result = getMetadata(MockClass, metadataKey)
    const result2 = getMetadata(class {}, metadataKey, 'fallback')
    expect(result).toBe(metadataValue)
    expect(result2).toBe('fallback')
  })

  it('should return all metadata for a given class', () => {
    const result = getAllMetadata(MockClass, {})
    const result2 = getAllMetadata(class {}, { name: 'fallback' })
    expect(result).toBe(MockClass[Symbol.metadata])
    expect(result2).toEqual({ name: 'fallback' })
  })

  it('should remove specific metadata from a class', () => {
    removeMetadata(MockClass, metadataKey)
    expect(MockClass[Symbol.metadata]?.[metadataKey]).toBeUndefined()
  })

  it('should set class metadata using setClassMetadata', () => {
    const context = { metadata: {} } as any
    setClassMetadata(metadataKey, metadataValue)(class {}, context)
    expect(context.metadata).toEqual({ [metadataKey]: metadataValue })
  })

  it('should set method metadata using setMethodMetadata', () => {
    const context = { metadata: {} } as any
    setMethodMetadata(metadataKey, metadataValue)(() => {}, context)
    expect(context.metadata).toEqual({ [metadataKey]: metadataValue })
  })

  it('should set field metadata using setFieldMetadata', () => {
    const context = { metadata: {} } as any
    setFieldMetadata(metadataKey, metadataValue)(class {}, context)
    expect(context.metadata).toEqual({ [metadataKey]: metadataValue })
  })

  it('should add blueprint to a class context', () => {
    MockClass[Symbol.metadata] = { [BLUEPRINT_KEY]: {} }
    addBlueprint(MockClass, mockContext, mockBlueprint)
    expect(mockContext.metadata[BLUEPRINT_KEY]).toEqual(mockBlueprint)
  })

  it('should check if a class has blueprint', () => {
    MockClass[Symbol.metadata] = { [BLUEPRINT_KEY]: mockBlueprint }
    const result = hasBlueprint(MockClass)
    expect(result).toBe(true)
  })

  it('should get blueprint from a class', () => {
    const result = getBlueprint(MockClass)
    const result2 = getBlueprint(class {}, { name: 'Stone.js' } as any)
    expect(result).toEqual(mockBlueprint)
    expect(result2).toEqual({ name: 'Stone.js' })
  })
})

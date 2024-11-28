import { ErrorHandler } from '../src/ErrorHandler'
import { IntegrationError } from '../src/errors/IntegrationError'
import { ILogger, IBlueprint, LogLevel } from '../src/definitions'

const mockBlueprint: IBlueprint = {
  get: vi.fn((key: string, defaultValue: any) => {
    const mockValues: Record<string, unknown> = {
      'stone.errorHandler.dontReport': new Set(),
      'stone.errorHandler.levels': { debug: [], info: [], warn: [], error: [], trace: [] }
    }
    return key in mockValues ? mockValues[key] : defaultValue
  })
} as any

const mockRenderResponseResolver = vi.fn((error: Error) => error.message)

// Sample error classes
class SampleError extends Error {}

let mockLogger: ILogger

// Helper function to create an ErrorHandler instance
const createErrorHandler = (): ErrorHandler<string> =>
  ErrorHandler.create<string>({
    logger: mockLogger,
    blueprint: mockBlueprint,
    renderResponseResolver: mockRenderResponseResolver
  })

describe('ErrorHandler', () => {
  beforeEach(() => {
    // Mock implementations for ILogger and IBlueprint
    mockLogger = {
      error: vi.fn(),
      info: vi.fn(),
      debug: vi.fn(),
      warn: vi.fn(),
      trace: vi.fn()
    }
  })

  it('should throw an error if logger is not provided', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => ErrorHandler.create<string>({ logger: undefined, blueprint: mockBlueprint, renderResponseResolver: mockRenderResponseResolver })).toThrow(IntegrationError)
  })

  it('should throw an error if blueprint is not provided', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => ErrorHandler.create<string>({ logger: mockLogger, blueprint: undefined, renderResponseResolver: mockRenderResponseResolver })).toThrow(IntegrationError)
  })

  it('should throw an error if blueprint is not provided', () => {
    // @ts-expect-error - invalid value for test purposes
    expect(() => ErrorHandler.create<string>({ logger: mockLogger, blueprint: mockBlueprint, renderResponseResolver: undefined })).toThrow(IntegrationError)
  })

  it('should create an instance of ErrorHandler', () => {
    const errorHandler = createErrorHandler()
    expect(errorHandler).toBeInstanceOf(ErrorHandler)
  })

  it('should report an error if it should be reported', () => {
    const errorHandler = createErrorHandler()
    const error = new SampleError('Test error')

    // @ts-expect-error - invalid value for test purposes
    errorHandler.level(SampleError, 'patate').report(error)

    expect(mockLogger.error).toHaveBeenCalledWith('Test error', expect.any(Array))
  })

  it('should not report an error if it is ignored', () => {
    const errorHandler = createErrorHandler()
    errorHandler.ignore(SampleError)
    const error = new SampleError('Ignored error')

    errorHandler.report(error)

    expect(mockLogger.error).not.toHaveBeenCalled()
  })

  it('should report an error only once if duplicates are not allowed', () => {
    const errorHandler = createErrorHandler()
    errorHandler.dontReportDuplicates()
    const error = new SampleError('Duplicate error')

    errorHandler.report(error)
    errorHandler.report(error)

    expect(mockLogger.error).toHaveBeenCalledTimes(1)
  })

  it('should report an error multiple times if duplicates are allowed', () => {
    const errorHandler = createErrorHandler()
    errorHandler.reportDuplicates()
    const error = new SampleError('Duplicate error')

    errorHandler.report(error)
    errorHandler.report(error)

    expect(mockLogger.error).toHaveBeenCalledTimes(2)
  })

  it('should set log level for a specific error class', () => {
    const errorHandler = createErrorHandler()
    class SampleError2 extends Error {
      context = { name: 'Stone.js' }
      metadata = { name: 'Stone.js' }
    }
    errorHandler.level(SampleError2, LogLevel.WARN)
    const error = new SampleError2('Warning level error')

    errorHandler.report(error)

    expect(mockLogger.warn).toHaveBeenCalledWith('Warning level error', expect.any(Array))
  })

  it('should render an error response using the renderResponseResolver', () => {
    const errorHandler = createErrorHandler()
    const error = new SampleError('Render error')

    const response = errorHandler.render(error)

    expect(response).toBe('Render error')
    expect(mockRenderResponseResolver).toHaveBeenCalledWith(error)
  })

  it('should stop ignoring an error class', () => {
    const errorHandler = createErrorHandler()
    errorHandler.ignore(SampleError)
    errorHandler.stopIgnoring(SampleError)
    const error = new SampleError('Stopped ignoring error')

    errorHandler.report(error)

    expect(mockLogger.error).toHaveBeenCalledWith('Stopped ignoring error', expect.any(Array))
  })
})

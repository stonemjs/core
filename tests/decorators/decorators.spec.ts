import { Stone } from '../../src/decorators/Stone'
import { Provider } from '../../src/decorators/Provider'
import { Subscriber } from '../../src/decorators/Subscriber'
import { Configuration } from '../../src/decorators/Configuration'
import { Service, ServiceOptions } from '../../src/decorators/Service'
import { StoneApp, StoneAppOptions } from '../../src/decorators/StoneApp'
import { Listener, ListenerOptions } from '../../src/decorators/Listener'
import { Middleware, MiddlewareOptions } from '../../src/decorators/Middleware'
import { ErrorHandler, ErrorHandlerOptions } from '../../src/decorators/ErrorHandler'
import { addBlueprint, setClassMetadata, setMetadata } from '../../src/decorators/Metadata'
import { ConfigMiddleware, ConfigMiddlewareOptions } from '../../src/decorators/ConfigMiddleware'
import { AdapterMiddleware, AdapterMiddlewareOptions } from '../../src/decorators/AdapterMiddleware'
import { AdapterErrorHandler, AdapterErrorHandlerOptions } from '../../src/decorators/AdapterErrorHandler'
import { ADAPTER_ERROR_HANDLER_KEY, ADAPTER_MIDDLEWARE_KEY, CONFIG_MIDDLEWARE_KEY, CONFIGURATION_KEY, ERROR_HANDLER_KEY, LISTENER_KEY, STONE_APP_KEY, MIDDLEWARE_KEY, PROVIDER_KEY, SERVICE_KEY, SUBSCRIBER_KEY } from '../../src/decorators/constants'

/* eslint-disable @typescript-eslint/no-extraneous-class */

// Mock setClassMetadata
vi.mock('../../src/decorators/Metadata', () => ({
  setClassMetadata: vi.fn(),
  setMetadata: vi.fn(),
  addBlueprint: vi.fn(),
  classDecoratorLegacyWrapper: vi.fn((fn) => fn)
}))

describe('AdapterMiddleware', () => {
  it('should call setClassMetadata with correct parameters', () => {
    const options: AdapterMiddlewareOptions = { priority: 1, platform: 'testPlatform' }
    AdapterMiddleware(options)
    expect(setClassMetadata).toHaveBeenCalledWith(ADAPTER_MIDDLEWARE_KEY, options)
  })

  it('should call setClassMetadata with default options if none are provided', () => {
    AdapterMiddleware()
    expect(setClassMetadata).toHaveBeenCalledWith(ADAPTER_MIDDLEWARE_KEY, {})
  })
})

describe('ConfigMiddleware', () => {
  it('should call setClassMetadata with correct parameters', () => {
    const options: ConfigMiddlewareOptions = { priority: 1, params: ['input'] }
    ConfigMiddleware(options)
    expect(setClassMetadata).toHaveBeenCalledWith(CONFIG_MIDDLEWARE_KEY, options)
  })

  it('should call setClassMetadata with default options if none are provided', () => {
    ConfigMiddleware()
    expect(setClassMetadata).toHaveBeenCalledWith(CONFIG_MIDDLEWARE_KEY, {})
  })
})

describe('Configuration', () => {
  it('should call setClassMetadata with default options if none are provided', () => {
    Configuration()
    expect(setClassMetadata).toHaveBeenCalledWith(CONFIGURATION_KEY, {})
  })
})

describe('Service', () => {
  it('should call setClassMetadata with correct parameters', () => {
    const options: ServiceOptions = { singleton: true, alias: ['inputService'] }
    Service(options)
    expect(setClassMetadata).toHaveBeenCalledWith(SERVICE_KEY, options)
  })

  it('should call setClassMetadata with default options if none are provided', () => {
    Service()
    expect(setClassMetadata).toHaveBeenCalledWith(SERVICE_KEY, {})
  })
})

describe('Stone', () => {
  it('should call setClassMetadata with correct parameters', () => {
    const options: ServiceOptions = { singleton: true, alias: ['inputService'] }
    Stone(options)
    expect(setClassMetadata).toHaveBeenCalledWith(SERVICE_KEY, options)
  })

  it('should call setClassMetadata with default options if none are provided', () => {
    Stone()
    expect(setClassMetadata).toHaveBeenCalledWith(SERVICE_KEY, {})
  })
})

describe('ErrorHandler', () => {
  it('should call setClassMetadata with correct parameters', () => {
    const options: ErrorHandlerOptions = { error: 'Error' }
    ErrorHandler(options)
    expect(setClassMetadata).toHaveBeenCalledWith(ERROR_HANDLER_KEY, options)
  })
})

describe('AdapterErrorHandler', () => {
  it('should call setClassMetadata with correct parameters', () => {
    const options: AdapterErrorHandlerOptions = { error: 'Error' }
    AdapterErrorHandler(options)
    expect(setClassMetadata).toHaveBeenCalledWith(ADAPTER_ERROR_HANDLER_KEY, options)
  })
})

describe('Listener', () => {
  it('should call setClassMetadata with correct parameters', () => {
    const options: ListenerOptions = { event: 'inputService' }
    Listener(options)
    expect(setClassMetadata).toHaveBeenCalledWith(LISTENER_KEY, options)
  })
})

describe('Middleware', () => {
  it('should call setClassMetadata with correct parameters', () => {
    const options: MiddlewareOptions = {}
    Middleware(options)
    expect(setClassMetadata).toHaveBeenCalledWith(MIDDLEWARE_KEY, options)
  })

  it('should call setClassMetadata with default options if none are provided', () => {
    Middleware()
    expect(setClassMetadata).toHaveBeenCalledWith(MIDDLEWARE_KEY, {})
  })
})

describe('Provider', () => {
  it('should call setClassMetadata with default options if none are provided', () => {
    Provider()
    expect(setClassMetadata).toHaveBeenCalledWith(PROVIDER_KEY, {})
  })
})

describe('Subscriber', () => {
  it('should call setClassMetadata with default options if none are provided', () => {
    Subscriber()
    expect(setClassMetadata).toHaveBeenCalledWith(SUBSCRIBER_KEY, {})
  })
})

describe('StoneApp', () => {
  it('should call setClassMetadata with correct parameters', () => {
    const options: StoneAppOptions = { name: 'Stone.js' }
    // @ts-expect-error - Testing legacy decorator as 2023-11 proposal decorator
    StoneApp(options)(class {}, {} as any)
    expect(addBlueprint).toHaveBeenCalled()
    expect(setMetadata).toHaveBeenCalledWith({}, STONE_APP_KEY, {})
  })

  it('should call setClassMetadata with default options if none are provided', () => {
    // @ts-expect-error - Testing legacy decorator as 2023-11 proposal decorator
    StoneApp()(class {}, {} as any)
    expect(addBlueprint).toHaveBeenCalled()
    expect(setMetadata).toHaveBeenCalledWith({}, STONE_APP_KEY, {})
  })
})

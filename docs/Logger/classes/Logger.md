[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [Logger](../README.md) / Logger

# Class: Logger

Defined in: core/src/Logger.ts:13

Class representing a Logger for the Stone.js framework.

Any class that implements the ILogger interface can be used as a logger.
The Logger class provides static methods for logging messages at different levels (info, debug, warn, error).

## Constructors

### new Logger()

> **new Logger**(): [`Logger`](Logger.md)

#### Returns

[`Logger`](Logger.md)

## Methods

### debug()

> `static` **debug**(`message`, ...`optionalParams`): `void`

Defined in: core/src/Logger.ts:59

Logs debug-level messages, used for debugging purposes.

#### Parameters

##### message

`string`

The message to log.

##### optionalParams

...`unknown`[]

Optional parameters to log.

#### Returns

`void`

***

### error()

> `static` **error**(`message`, ...`optionalParams`): `void`

Defined in: core/src/Logger.ts:79

Logs errors, used to report errors or exceptions.

#### Parameters

##### message

`string`

The error message to log.

##### optionalParams

...`unknown`[]

Optional parameters to log.

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(): [`ILogger`](../../declarations/interfaces/ILogger.md)

Defined in: core/src/Logger.ts:36

Returns the current logger instance.

#### Returns

[`ILogger`](../../declarations/interfaces/ILogger.md)

- The current logger instance.

***

### info()

> `static` **info**(`message`, ...`optionalParams`): `void`

Defined in: core/src/Logger.ts:49

Logs informational messages.

#### Parameters

##### message

`string`

The message to log.

##### optionalParams

...`unknown`[]

Optional parameters to log.

#### Returns

`void`

***

### init()

> `static` **init**(`blueprint`): `void`

Defined in: core/src/Logger.ts:21

Initializes the logger instance.

#### Parameters

##### blueprint

[`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

The blueprint to initialize the logger with.

#### Returns

`void`

***

### log()

> `static` **log**(`message`, ...`optionalParams`): `void`

Defined in: core/src/Logger.ts:89

Logs general messages, similar to `info` but less specific.

#### Parameters

##### message

`string`

The message to log.

##### optionalParams

...`unknown`[]

Optional parameters to log.

#### Returns

`void`

***

### warn()

> `static` **warn**(`message`, ...`optionalParams`): `void`

Defined in: core/src/Logger.ts:69

Logs warnings, used to indicate potential issues.

#### Parameters

##### message

`string`

The warning message to log.

##### optionalParams

...`unknown`[]

Optional parameters to log.

#### Returns

`void`

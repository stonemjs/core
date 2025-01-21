[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [ConsoleLogger](../README.md) / ConsoleLogger

# Class: ConsoleLogger

Defined in: [ConsoleLogger.ts:26](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/ConsoleLogger.ts#L26)

Console Logger class.

This class implements the ILogger interface and uses either the native console object or a custom logging tool.

## Example

```typescript
const logger = ConsoleLogger.create({ blueprint });
logger.info('Application started');
```

## Implements

- [`ILogger`](../../declarations/interfaces/ILogger.md)

## Constructors

### new ConsoleLogger()

> **new ConsoleLogger**(`options`): [`ConsoleLogger`](ConsoleLogger.md)

Defined in: [ConsoleLogger.ts:44](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/ConsoleLogger.ts#L44)

Constructs a ConsoleLogger instance.

#### Parameters

##### options

[`LoggerOptions`](../interfaces/LoggerOptions.md)

Options for creating the ConsoleLogger.

#### Returns

[`ConsoleLogger`](ConsoleLogger.md)

## Methods

### debug()

> **debug**(`message`, ...`optionalParams`): `void`

Defined in: [ConsoleLogger.ts:67](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/ConsoleLogger.ts#L67)

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

#### Implementation of

[`ILogger`](../../declarations/interfaces/ILogger.md).[`debug`](../../declarations/interfaces/ILogger.md#debug)

***

### error()

> **error**(`message`, ...`optionalParams`): `void`

Defined in: [ConsoleLogger.ts:91](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/ConsoleLogger.ts#L91)

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

#### Implementation of

[`ILogger`](../../declarations/interfaces/ILogger.md).[`error`](../../declarations/interfaces/ILogger.md#error)

***

### info()

> **info**(`message`, ...`optionalParams`): `void`

Defined in: [ConsoleLogger.ts:55](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/ConsoleLogger.ts#L55)

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

#### Implementation of

[`ILogger`](../../declarations/interfaces/ILogger.md).[`info`](../../declarations/interfaces/ILogger.md#info)

***

### log()?

> `optional` **log**(`message`, ...`optionalParams`): `void`

Defined in: [ConsoleLogger.ts:103](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/ConsoleLogger.ts#L103)

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

#### Implementation of

[`ILogger`](../../declarations/interfaces/ILogger.md).[`log`](../../declarations/interfaces/ILogger.md#log)

***

### warn()

> **warn**(`message`, ...`optionalParams`): `void`

Defined in: [ConsoleLogger.ts:79](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/ConsoleLogger.ts#L79)

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

#### Implementation of

[`ILogger`](../../declarations/interfaces/ILogger.md).[`warn`](../../declarations/interfaces/ILogger.md#warn)

***

### create()

> `static` **create**(`options`): [`ConsoleLogger`](ConsoleLogger.md)

Defined in: [ConsoleLogger.ts:35](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/ConsoleLogger.ts#L35)

Create a new ConsoleLogger instance.

#### Parameters

##### options

[`LoggerOptions`](../interfaces/LoggerOptions.md)

Options for creating the ConsoleLogger.

#### Returns

[`ConsoleLogger`](ConsoleLogger.md)

- A new instance of ConsoleLogger.

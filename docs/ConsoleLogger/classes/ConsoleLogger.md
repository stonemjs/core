[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [ConsoleLogger](../README.md) / ConsoleLogger

# Class: ConsoleLogger

Console Logger class.

This class implements the ILogger interface and uses either the native console object or a custom logging tool.

## Example

```typescript
const logger = ConsoleLogger.create({ blueprint });
logger.info('Application started');
```

## Implements

- [`ILogger`](../../definitions/interfaces/ILogger.md)

## Constructors

### new ConsoleLogger()

> **new ConsoleLogger**(`options`): [`ConsoleLogger`](ConsoleLogger.md)

Constructs a ConsoleLogger instance.

#### Parameters

• **options**: [`LoggerOptions`](../interfaces/LoggerOptions.md)

Options for creating the ConsoleLogger.

#### Returns

[`ConsoleLogger`](ConsoleLogger.md)

#### Defined in

[src/ConsoleLogger.ts:44](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ConsoleLogger.ts#L44)

## Methods

### debug()

> **debug**(`message`, ...`optionalParams`): `void`

Logs debug-level messages, used for debugging purposes.

#### Parameters

• **message**: `string`

The message to log.

• ...**optionalParams**: `unknown`[]

Optional parameters to log.

#### Returns

`void`

#### Implementation of

[`ILogger`](../../definitions/interfaces/ILogger.md).[`debug`](../../definitions/interfaces/ILogger.md#debug)

#### Defined in

[src/ConsoleLogger.ts:67](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ConsoleLogger.ts#L67)

***

### error()

> **error**(`message`, ...`optionalParams`): `void`

Logs errors, used to report errors or exceptions.

#### Parameters

• **message**: `string`

The error message to log.

• ...**optionalParams**: `unknown`[]

Optional parameters to log.

#### Returns

`void`

#### Implementation of

[`ILogger`](../../definitions/interfaces/ILogger.md).[`error`](../../definitions/interfaces/ILogger.md#error)

#### Defined in

[src/ConsoleLogger.ts:91](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ConsoleLogger.ts#L91)

***

### info()

> **info**(`message`, ...`optionalParams`): `void`

Logs informational messages.

#### Parameters

• **message**: `string`

The message to log.

• ...**optionalParams**: `unknown`[]

Optional parameters to log.

#### Returns

`void`

#### Implementation of

[`ILogger`](../../definitions/interfaces/ILogger.md).[`info`](../../definitions/interfaces/ILogger.md#info)

#### Defined in

[src/ConsoleLogger.ts:55](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ConsoleLogger.ts#L55)

***

### log()?

> `optional` **log**(`message`, ...`optionalParams`): `void`

Logs general messages, similar to `info` but less specific.

#### Parameters

• **message**: `string`

The message to log.

• ...**optionalParams**: `unknown`[]

Optional parameters to log.

#### Returns

`void`

#### Implementation of

[`ILogger`](../../definitions/interfaces/ILogger.md).[`log`](../../definitions/interfaces/ILogger.md#log)

#### Defined in

[src/ConsoleLogger.ts:103](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ConsoleLogger.ts#L103)

***

### warn()

> **warn**(`message`, ...`optionalParams`): `void`

Logs warnings, used to indicate potential issues.

#### Parameters

• **message**: `string`

The warning message to log.

• ...**optionalParams**: `unknown`[]

Optional parameters to log.

#### Returns

`void`

#### Implementation of

[`ILogger`](../../definitions/interfaces/ILogger.md).[`warn`](../../definitions/interfaces/ILogger.md#warn)

#### Defined in

[src/ConsoleLogger.ts:79](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ConsoleLogger.ts#L79)

***

### create()

> `static` **create**(`options`): [`ConsoleLogger`](ConsoleLogger.md)

Create a new ConsoleLogger instance.

#### Parameters

• **options**: [`LoggerOptions`](../interfaces/LoggerOptions.md)

Options for creating the ConsoleLogger.

#### Returns

[`ConsoleLogger`](ConsoleLogger.md)

- A new instance of ConsoleLogger.

#### Defined in

[src/ConsoleLogger.ts:35](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ConsoleLogger.ts#L35)

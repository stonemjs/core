[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [logger/ConsoleLogger](../README.md) / ConsoleLogger

# Class: ConsoleLogger

Defined in: [logger/ConsoleLogger.ts:25](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/logger/ConsoleLogger.ts#L25)

Console Logger class.

This class implements the ILogger interface and uses either the native console object or a custom logging tool.

## Example

```typescript
const logger = ConsoleLogger.create({ blueprint });
logger.info('Application started');
```

## Implements

- [`ILogger`](../../../declarations/interfaces/ILogger.md)

## Constructors

### Constructor

> **new ConsoleLogger**(`options`): `ConsoleLogger`

Defined in: [logger/ConsoleLogger.ts:43](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/logger/ConsoleLogger.ts#L43)

Constructs a ConsoleLogger instance.

#### Parameters

##### options

[`LoggerOptions`](../interfaces/LoggerOptions.md)

Options for creating the ConsoleLogger.

#### Returns

`ConsoleLogger`

## Methods

### debug()

> **debug**(`message`, ...`optionalParams`): `void`

Defined in: [logger/ConsoleLogger.ts:65](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/logger/ConsoleLogger.ts#L65)

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

[`ILogger`](../../../declarations/interfaces/ILogger.md).[`debug`](../../../declarations/interfaces/ILogger.md#debug)

***

### error()

> **error**(`message`, ...`optionalParams`): `void`

Defined in: [logger/ConsoleLogger.ts:89](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/logger/ConsoleLogger.ts#L89)

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

[`ILogger`](../../../declarations/interfaces/ILogger.md).[`error`](../../../declarations/interfaces/ILogger.md#error)

***

### info()

> **info**(`message`, ...`optionalParams`): `void`

Defined in: [logger/ConsoleLogger.ts:53](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/logger/ConsoleLogger.ts#L53)

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

[`ILogger`](../../../declarations/interfaces/ILogger.md).[`info`](../../../declarations/interfaces/ILogger.md#info)

***

### log()?

> `optional` **log**(`message`, ...`optionalParams`): `void`

Defined in: [logger/ConsoleLogger.ts:101](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/logger/ConsoleLogger.ts#L101)

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

[`ILogger`](../../../declarations/interfaces/ILogger.md).[`log`](../../../declarations/interfaces/ILogger.md#log)

***

### warn()

> **warn**(`message`, ...`optionalParams`): `void`

Defined in: [logger/ConsoleLogger.ts:77](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/logger/ConsoleLogger.ts#L77)

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

[`ILogger`](../../../declarations/interfaces/ILogger.md).[`warn`](../../../declarations/interfaces/ILogger.md#warn)

***

### create()

> `static` **create**(`options`): `ConsoleLogger`

Defined in: [logger/ConsoleLogger.ts:34](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/logger/ConsoleLogger.ts#L34)

Create a new ConsoleLogger instance.

#### Parameters

##### options

[`LoggerOptions`](../interfaces/LoggerOptions.md)

Options for creating the ConsoleLogger.

#### Returns

`ConsoleLogger`

- A new instance of ConsoleLogger.

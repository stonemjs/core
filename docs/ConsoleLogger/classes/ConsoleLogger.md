[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [ConsoleLogger](../README.md) / ConsoleLogger

# Class: ConsoleLogger

Defined in: [core/src/ConsoleLogger.ts:25](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/ConsoleLogger.ts#L25)

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

Defined in: [core/src/ConsoleLogger.ts:43](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/ConsoleLogger.ts#L43)

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

Defined in: [core/src/ConsoleLogger.ts:65](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/ConsoleLogger.ts#L65)

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

Defined in: [core/src/ConsoleLogger.ts:89](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/ConsoleLogger.ts#L89)

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

Defined in: [core/src/ConsoleLogger.ts:53](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/ConsoleLogger.ts#L53)

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

Defined in: [core/src/ConsoleLogger.ts:101](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/ConsoleLogger.ts#L101)

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

Defined in: [core/src/ConsoleLogger.ts:77](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/ConsoleLogger.ts#L77)

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

Defined in: [core/src/ConsoleLogger.ts:34](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/ConsoleLogger.ts#L34)

Create a new ConsoleLogger instance.

#### Parameters

##### options

[`LoggerOptions`](../interfaces/LoggerOptions.md)

Options for creating the ConsoleLogger.

#### Returns

[`ConsoleLogger`](ConsoleLogger.md)

- A new instance of ConsoleLogger.

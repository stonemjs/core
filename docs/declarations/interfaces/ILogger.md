[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ILogger

# Interface: ILogger

Defined in: [declarations.ts:288](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L288)

Logger Interface.

Represents a generic logging interface, which can either be a native console object or a popular JavaScript logging library.

## Properties

### debug()

> **debug**: (`message`, ...`optionalParams`) => `void`

Defined in: [declarations.ts:303](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L303)

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

> **error**: (`message`, ...`optionalParams`) => `void`

Defined in: [declarations.ts:319](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L319)

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

### info()

> **info**: (`message`, ...`optionalParams`) => `void`

Defined in: [declarations.ts:295](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L295)

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

### log()?

> `optional` **log**: (`message`, ...`optionalParams`) => `void`

Defined in: [declarations.ts:327](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L327)

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

### trace()?

> `optional` **trace**: (`message`, ...`optionalParams`) => `void`

Defined in: [declarations.ts:335](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L335)

Logs trace-level messages, providing the most detailed information, usually for diagnostic purposes.

#### Parameters

##### message

`string`

The trace message to log.

##### optionalParams

...`unknown`[]

Optional parameters to log.

#### Returns

`void`

***

### warn()

> **warn**: (`message`, ...`optionalParams`) => `void`

Defined in: [declarations.ts:311](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L311)

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

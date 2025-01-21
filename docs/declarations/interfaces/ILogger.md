[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ILogger

# Interface: ILogger

Defined in: [declarations.ts:126](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L126)

Logger Interface.

Represents a generic logging interface, which can either be a native console object or a popular JavaScript logging library.

## Properties

### debug()

> **debug**: (`message`, ...`optionalParams`) => `void`

Defined in: [declarations.ts:141](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L141)

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

Defined in: [declarations.ts:157](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L157)

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

Defined in: [declarations.ts:133](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L133)

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

Defined in: [declarations.ts:165](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L165)

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

Defined in: [declarations.ts:173](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L173)

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

Defined in: [declarations.ts:149](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L149)

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

[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / ILogger

# Interface: ILogger

Logger Interface.

Represents a generic logging interface, which can either be a native console object or a popular JavaScript logging library.

## Properties

### debug()

> **debug**: (`message`, ...`optionalParams`) => `void`

Logs debug-level messages, used for debugging purposes.

#### Parameters

• **message**: `string`

The message to log.

• ...**optionalParams**: `unknown`[]

Optional parameters to log.

#### Returns

`void`

#### Defined in

[src/definitions.ts:102](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L102)

***

### error()

> **error**: (`message`, ...`optionalParams`) => `void`

Logs errors, used to report errors or exceptions.

#### Parameters

• **message**: `string`

The error message to log.

• ...**optionalParams**: `unknown`[]

Optional parameters to log.

#### Returns

`void`

#### Defined in

[src/definitions.ts:118](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L118)

***

### info()

> **info**: (`message`, ...`optionalParams`) => `void`

Logs informational messages.

#### Parameters

• **message**: `string`

The message to log.

• ...**optionalParams**: `unknown`[]

Optional parameters to log.

#### Returns

`void`

#### Defined in

[src/definitions.ts:94](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L94)

***

### log()?

> `optional` **log**: (`message`, ...`optionalParams`) => `void`

Logs general messages, similar to `info` but less specific.

#### Parameters

• **message**: `string`

The message to log.

• ...**optionalParams**: `unknown`[]

Optional parameters to log.

#### Returns

`void`

#### Defined in

[src/definitions.ts:126](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L126)

***

### trace()?

> `optional` **trace**: (`message`, ...`optionalParams`) => `void`

Logs trace-level messages, providing the most detailed information, usually for diagnostic purposes.

#### Parameters

• **message**: `string`

The trace message to log.

• ...**optionalParams**: `unknown`[]

Optional parameters to log.

#### Returns

`void`

#### Defined in

[src/definitions.ts:134](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L134)

***

### warn()

> **warn**: (`message`, ...`optionalParams`) => `void`

Logs warnings, used to indicate potential issues.

#### Parameters

• **message**: `string`

The warning message to log.

• ...**optionalParams**: `unknown`[]

Optional parameters to log.

#### Returns

`void`

#### Defined in

[src/definitions.ts:110](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L110)

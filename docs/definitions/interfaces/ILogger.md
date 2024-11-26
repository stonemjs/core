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

[src/definitions.ts:103](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L103)

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

[src/definitions.ts:119](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L119)

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

[src/definitions.ts:95](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L95)

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

[src/definitions.ts:127](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L127)

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

[src/definitions.ts:135](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L135)

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

[src/definitions.ts:111](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L111)

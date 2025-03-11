[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ILogger

# Interface: ILogger

Defined in: [core/src/declarations.ts:144](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L144)

Logger Interface.

Represents a generic logging interface, which can either be a native console object or a popular JavaScript logging library.

## Properties

### debug()

> **debug**: (`message`, ...`optionalParams`) => `void`

Defined in: [core/src/declarations.ts:159](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L159)

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

Defined in: [core/src/declarations.ts:175](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L175)

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

Defined in: [core/src/declarations.ts:151](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L151)

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

Defined in: [core/src/declarations.ts:183](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L183)

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

Defined in: [core/src/declarations.ts:191](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L191)

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

Defined in: [core/src/declarations.ts:167](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L167)

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

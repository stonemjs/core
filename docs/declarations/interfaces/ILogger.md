[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ILogger

# Interface: ILogger

Defined in: [core/src/declarations.ts:159](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L159)

Logger Interface.

Represents a generic logging interface, which can either be a native console object or a popular JavaScript logging library.

## Properties

### debug()

> **debug**: (`message`, ...`optionalParams`) => `void`

Defined in: [core/src/declarations.ts:174](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L174)

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

Defined in: [core/src/declarations.ts:190](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L190)

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

Defined in: [core/src/declarations.ts:166](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L166)

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

Defined in: [core/src/declarations.ts:198](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L198)

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

Defined in: [core/src/declarations.ts:206](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L206)

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

Defined in: [core/src/declarations.ts:182](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L182)

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

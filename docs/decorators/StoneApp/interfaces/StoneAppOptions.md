[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [decorators/StoneApp](../README.md) / StoneAppOptions

# Interface: StoneAppOptions

StoneApp options.

This interface defines the configuration options for marking a class as the main application entry point.

## Extends

- `Partial`\<[`AppConfig`](../../../options/StoneBlueprint/interfaces/AppConfig.md)\>

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<[`AdapterConfig`](../../../options/AdapterConfig/interfaces/AdapterConfig.md)\>

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

#### Inherited from

`Partial.adapter`

#### Defined in

[src/options/StoneBlueprint.ts:69](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L69)

***

### adapters?

> `optional` **adapters**: [`AdapterConfig`](../../../options/AdapterConfig/interfaces/AdapterConfig.md)[]

Adapter configurations for the application.

#### Inherited from

`Partial.adapters`

#### Defined in

[src/options/StoneBlueprint.ts:74](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L74)

***

### aliases?

> `optional` **aliases**: `Record`\<`string`, `unknown`\>

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Inherited from

`Partial.aliases`

#### Defined in

[src/options/StoneBlueprint.ts:117](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L117)

***

### builder?

> `optional` **builder**: [`BuilderConfig`](../../../options/BuilderConfig/interfaces/BuilderConfig.md)

Configuration options for building the application, including middleware and pipe priorities.

#### Inherited from

`Partial.builder`

#### Defined in

[src/options/StoneBlueprint.ts:63](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L63)

***

### debug?

> `optional` **debug**: `boolean`

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Inherited from

`Partial.debug`

#### Defined in

[src/options/StoneBlueprint.ts:43](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L43)

***

### env?

> `optional` **env**: [`Environment`](../../../options/StoneBlueprint/enumerations/Environment.md)

The current environment in which the application is running.
Possible values are development, production, and test.

#### Inherited from

`Partial.env`

#### Defined in

[src/options/StoneBlueprint.ts:37](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L37)

***

### errorHandler?

> `optional` **errorHandler**: [`ErrorHandlerConfig`](../../../options/ErrorHandlerConfig/interfaces/ErrorHandlerConfig.md)

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.errorHandler`

#### Defined in

[src/options/StoneBlueprint.ts:89](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L89)

***

### fallback\_locale?

> `optional` **fallback\_locale**: `string`

The fallback locale used when a translation for the default locale is unavailable.

#### Inherited from

`Partial.fallback_locale`

#### Defined in

[src/options/StoneBlueprint.ts:58](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L58)

***

### handler?

> `optional` **handler**: [`EventHandler`](../../../definitions/type-aliases/EventHandler.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

The entry point or handler function for the application.
This is the main function that handles incoming requests.

#### Inherited from

`Partial.handler`

#### Defined in

[src/options/StoneBlueprint.ts:129](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L129)

***

### kernel?

> `optional` **kernel**: [`KernelConfig`](../../../options/KernelConfig/interfaces/KernelConfig.md)

Global middleware settings for the application kernel.

#### Inherited from

`Partial.kernel`

#### Defined in

[src/options/StoneBlueprint.ts:79](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L79)

***

### listeners?

> `optional` **listeners**: `Record`\<`string`, (...`args`) => [`IListener`](../../../definitions/interfaces/IListener.md)[]\>

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Inherited from

`Partial.listeners`

#### Defined in

[src/options/StoneBlueprint.ts:100](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L100)

***

### locale?

> `optional` **locale**: `string`

The default locale for the application.

#### Inherited from

`Partial.locale`

#### Defined in

[src/options/StoneBlueprint.ts:53](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L53)

***

### logger?

> `optional` **logger**: [`LoggerConfig`](../../../options/LoggerConfig/interfaces/LoggerConfig.md)

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.logger`

#### Defined in

[src/options/StoneBlueprint.ts:84](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L84)

***

### name?

> `optional` **name**: `string`

The name of the application.

#### Inherited from

`Partial.name`

#### Defined in

[src/options/StoneBlueprint.ts:31](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L31)

***

### providers?

> `optional` **providers**: (...`args`) => [`IProvider`](../../../definitions/interfaces/IProvider.md)[]

Service providers to be automatically loaded for each request to the application.

#### Inherited from

`Partial.providers`

#### Defined in

[src/options/StoneBlueprint.ts:111](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L111)

***

### secret?

> `optional` **secret**: `string`

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Inherited from

`Partial.secret`

#### Defined in

[src/options/StoneBlueprint.ts:123](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L123)

***

### services?

> `optional` **services**: `Function`[] \| `Function`[][]

Services to be automatically registered when the application starts.

#### Inherited from

`Partial.services`

#### Defined in

[src/options/StoneBlueprint.ts:94](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L94)

***

### subscribers?

> `optional` **subscribers**: (...`args`) => [`ISubscriber`](../../../definitions/interfaces/ISubscriber.md)[]

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Inherited from

`Partial.subscribers`

#### Defined in

[src/options/StoneBlueprint.ts:106](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L106)

***

### timezone?

> `optional` **timezone**: `string`

The default timezone for the application.

#### Inherited from

`Partial.timezone`

#### Defined in

[src/options/StoneBlueprint.ts:48](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/options/StoneBlueprint.ts#L48)

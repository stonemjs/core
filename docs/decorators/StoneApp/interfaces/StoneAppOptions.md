[**Core Documentation v0.0.2**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../../modules.md) / [decorators/StoneApp](../README.md) / StoneAppOptions

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

[src/options/StoneBlueprint.ts:76](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L76)

***

### adapters?

> `optional` **adapters**: [`AdapterConfig`](../../../options/AdapterConfig/interfaces/AdapterConfig.md)[]

Adapter configurations for the application.

#### Inherited from

`Partial.adapters`

#### Defined in

[src/options/StoneBlueprint.ts:81](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L81)

***

### aliases?

> `optional` **aliases**: `Record`\<`string`, `unknown`\>

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Inherited from

`Partial.aliases`

#### Defined in

[src/options/StoneBlueprint.ts:124](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L124)

***

### builder?

> `optional` **builder**: [`BuilderConfig`](../../../options/BuilderConfig/interfaces/BuilderConfig.md)

Configuration options for building the application, including middleware and pipe priorities.

#### Inherited from

`Partial.builder`

#### Defined in

[src/options/StoneBlueprint.ts:70](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L70)

***

### debug?

> `optional` **debug**: `boolean`

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Inherited from

`Partial.debug`

#### Defined in

[src/options/StoneBlueprint.ts:50](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L50)

***

### env?

> `optional` **env**: [`Environment`](../../../options/StoneBlueprint/enumerations/Environment.md)

The current environment in which the application is running.
Possible values are development, production, and test.

#### Inherited from

`Partial.env`

#### Defined in

[src/options/StoneBlueprint.ts:44](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L44)

***

### errorHandler?

> `optional` **errorHandler**: [`ErrorHandlerConfig`](../../../options/ErrorHandlerConfig/interfaces/ErrorHandlerConfig.md)

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.errorHandler`

#### Defined in

[src/options/StoneBlueprint.ts:96](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L96)

***

### fallback\_locale?

> `optional` **fallback\_locale**: `string`

The fallback locale used when a translation for the default locale is unavailable.

#### Inherited from

`Partial.fallback_locale`

#### Defined in

[src/options/StoneBlueprint.ts:65](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L65)

***

### handler?

> `optional` **handler**: [`EventHandler`](../../../definitions/type-aliases/EventHandler.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

The entry point or handler function for the application.
This is the main function that handles incoming requests.

#### Inherited from

`Partial.handler`

#### Defined in

[src/options/StoneBlueprint.ts:136](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L136)

***

### kernel?

> `optional` **kernel**: [`KernelConfig`](../../../options/KernelConfig/interfaces/KernelConfig.md)

Global middleware settings for the application kernel.

#### Inherited from

`Partial.kernel`

#### Defined in

[src/options/StoneBlueprint.ts:86](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L86)

***

### listeners?

> `optional` **listeners**: `Record`\<`string`, (...`args`) => [`IListener`](../../../definitions/interfaces/IListener.md)[]\>

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Inherited from

`Partial.listeners`

#### Defined in

[src/options/StoneBlueprint.ts:107](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L107)

***

### locale?

> `optional` **locale**: `string`

The default locale for the application.

#### Inherited from

`Partial.locale`

#### Defined in

[src/options/StoneBlueprint.ts:60](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L60)

***

### logger?

> `optional` **logger**: [`LoggerConfig`](../../../options/LoggerConfig/interfaces/LoggerConfig.md)

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.logger`

#### Defined in

[src/options/StoneBlueprint.ts:91](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L91)

***

### name?

> `optional` **name**: `string`

The name of the application.

#### Inherited from

`Partial.name`

#### Defined in

[src/options/StoneBlueprint.ts:38](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L38)

***

### providers?

> `optional` **providers**: (...`args`) => [`IProvider`](../../../definitions/interfaces/IProvider.md)[]

Service providers to be automatically loaded for each request to the application.

#### Inherited from

`Partial.providers`

#### Defined in

[src/options/StoneBlueprint.ts:118](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L118)

***

### secret?

> `optional` **secret**: `string`

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Inherited from

`Partial.secret`

#### Defined in

[src/options/StoneBlueprint.ts:130](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L130)

***

### services?

> `optional` **services**: `Function`[] \| `Function`[][]

Services to be automatically registered when the application starts.

#### Inherited from

`Partial.services`

#### Defined in

[src/options/StoneBlueprint.ts:101](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L101)

***

### subscribers?

> `optional` **subscribers**: (...`args`) => [`ISubscriber`](../../../definitions/interfaces/ISubscriber.md)[]

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Inherited from

`Partial.subscribers`

#### Defined in

[src/options/StoneBlueprint.ts:113](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L113)

***

### timezone?

> `optional` **timezone**: `string`

The default timezone for the application.

#### Inherited from

`Partial.timezone`

#### Defined in

[src/options/StoneBlueprint.ts:55](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/StoneBlueprint.ts#L55)

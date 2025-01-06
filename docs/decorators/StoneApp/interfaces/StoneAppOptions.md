[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/StoneApp](../README.md) / StoneAppOptions

# Interface: StoneAppOptions

Defined in: [src/decorators/StoneApp.ts:11](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/decorators/StoneApp.ts#L11)

StoneApp options.

This interface defines the configuration options for marking a class as the main application entry point.

## Extends

- `Partial`\<[`AppConfig`](../../../options/StoneBlueprint/interfaces/AppConfig.md)\>

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<[`AdapterConfig`](../../../options/AdapterConfig/interfaces/AdapterConfig.md)\>

Defined in: [src/options/StoneBlueprint.ts:68](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L68)

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

#### Inherited from

`Partial.adapter`

***

### adapters?

> `optional` **adapters**: [`AdapterConfig`](../../../options/AdapterConfig/interfaces/AdapterConfig.md)[]

Defined in: [src/options/StoneBlueprint.ts:73](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L73)

Adapter configurations for the application.

#### Inherited from

`Partial.adapters`

***

### aliases?

> `optional` **aliases**: `Record`\<`string`, `unknown`\>

Defined in: [src/options/StoneBlueprint.ts:111](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L111)

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Inherited from

`Partial.aliases`

***

### builder?

> `optional` **builder**: [`BuilderConfig`](../../../options/BuilderConfig/interfaces/BuilderConfig.md)

Defined in: [src/options/StoneBlueprint.ts:62](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L62)

Configuration options for building the application, including middleware and pipe priorities.

#### Inherited from

`Partial.builder`

***

### debug?

> `optional` **debug**: `boolean`

Defined in: [src/options/StoneBlueprint.ts:42](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L42)

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Inherited from

`Partial.debug`

***

### env?

> `optional` **env**: [`Environment`](../../../options/StoneBlueprint/enumerations/Environment.md)

Defined in: [src/options/StoneBlueprint.ts:36](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L36)

The current environment in which the application is running.
Possible values are development, production, and test.

#### Inherited from

`Partial.env`

***

### fallback\_locale?

> `optional` **fallback\_locale**: `string`

Defined in: [src/options/StoneBlueprint.ts:57](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L57)

The fallback locale used when a translation for the default locale is unavailable.

#### Inherited from

`Partial.fallback_locale`

***

### handler?

> `optional` **handler**: [`EventHandler`](../../../definitions/type-aliases/EventHandler.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

Defined in: [src/options/StoneBlueprint.ts:123](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L123)

The entry point or handler function for the application.
This is the main function that handles incoming requests.

#### Inherited from

`Partial.handler`

***

### kernel?

> `optional` **kernel**: [`KernelConfig`](../../../options/KernelConfig/interfaces/KernelConfig.md)

Defined in: [src/options/StoneBlueprint.ts:78](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L78)

Global middleware settings for the application kernel.

#### Inherited from

`Partial.kernel`

***

### listeners?

> `optional` **listeners**: `Record`\<`string`, (...`args`) => [`IListener`](../../../definitions/interfaces/IListener.md)[]\>

Defined in: [src/options/StoneBlueprint.ts:94](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L94)

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Inherited from

`Partial.listeners`

***

### locale?

> `optional` **locale**: `string`

Defined in: [src/options/StoneBlueprint.ts:52](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L52)

The default locale for the application.

#### Inherited from

`Partial.locale`

***

### logger?

> `optional` **logger**: [`LoggerConfig`](../../../options/LoggerConfig/interfaces/LoggerConfig.md)

Defined in: [src/options/StoneBlueprint.ts:83](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L83)

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.logger`

***

### name?

> `optional` **name**: `string`

Defined in: [src/options/StoneBlueprint.ts:30](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L30)

The name of the application.

#### Inherited from

`Partial.name`

***

### providers?

> `optional` **providers**: (...`args`) => [`IProvider`](../../../definitions/interfaces/IProvider.md)[]

Defined in: [src/options/StoneBlueprint.ts:105](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L105)

Service providers to be automatically loaded for each request to the application.

#### Parameters

##### args

...`any`[]

#### Returns

[`IProvider`](../../../definitions/interfaces/IProvider.md)

#### Inherited from

`Partial.providers`

***

### secret?

> `optional` **secret**: `string`

Defined in: [src/options/StoneBlueprint.ts:117](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L117)

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Inherited from

`Partial.secret`

***

### services?

> `optional` **services**: `Function`[] \| `Function`[][]

Defined in: [src/options/StoneBlueprint.ts:88](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L88)

Services to be automatically registered when the application starts.

#### Inherited from

`Partial.services`

***

### subscribers?

> `optional` **subscribers**: (...`args`) => [`ISubscriber`](../../../definitions/interfaces/ISubscriber.md)[]

Defined in: [src/options/StoneBlueprint.ts:100](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L100)

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Parameters

##### args

...`any`[]

#### Returns

[`ISubscriber`](../../../definitions/interfaces/ISubscriber.md)

#### Inherited from

`Partial.subscribers`

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [src/options/StoneBlueprint.ts:47](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/StoneBlueprint.ts#L47)

The default timezone for the application.

#### Inherited from

`Partial.timezone`

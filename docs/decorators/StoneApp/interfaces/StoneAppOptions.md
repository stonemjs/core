[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [decorators/StoneApp](../README.md) / StoneAppOptions

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

[src/options/StoneBlueprint.ts:68](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L68)

***

### adapters?

> `optional` **adapters**: [`AdapterConfig`](../../../options/AdapterConfig/interfaces/AdapterConfig.md)[]

Adapter configurations for the application.

#### Inherited from

`Partial.adapters`

#### Defined in

[src/options/StoneBlueprint.ts:73](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L73)

***

### aliases?

> `optional` **aliases**: `Record`\<`string`, `unknown`\>

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Inherited from

`Partial.aliases`

#### Defined in

[src/options/StoneBlueprint.ts:111](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L111)

***

### builder?

> `optional` **builder**: [`BuilderConfig`](../../../options/BuilderConfig/interfaces/BuilderConfig.md)

Configuration options for building the application, including middleware and pipe priorities.

#### Inherited from

`Partial.builder`

#### Defined in

[src/options/StoneBlueprint.ts:62](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L62)

***

### debug?

> `optional` **debug**: `boolean`

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Inherited from

`Partial.debug`

#### Defined in

[src/options/StoneBlueprint.ts:42](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L42)

***

### env?

> `optional` **env**: [`Environment`](../../../options/StoneBlueprint/enumerations/Environment.md)

The current environment in which the application is running.
Possible values are development, production, and test.

#### Inherited from

`Partial.env`

#### Defined in

[src/options/StoneBlueprint.ts:36](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L36)

***

### fallback\_locale?

> `optional` **fallback\_locale**: `string`

The fallback locale used when a translation for the default locale is unavailable.

#### Inherited from

`Partial.fallback_locale`

#### Defined in

[src/options/StoneBlueprint.ts:57](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L57)

***

### handler?

> `optional` **handler**: [`EventHandler`](../../../definitions/type-aliases/EventHandler.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

The entry point or handler function for the application.
This is the main function that handles incoming requests.

#### Inherited from

`Partial.handler`

#### Defined in

[src/options/StoneBlueprint.ts:123](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L123)

***

### kernel?

> `optional` **kernel**: [`KernelConfig`](../../../options/KernelConfig/interfaces/KernelConfig.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

Global middleware settings for the application kernel.

#### Inherited from

`Partial.kernel`

#### Defined in

[src/options/StoneBlueprint.ts:78](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L78)

***

### listeners?

> `optional` **listeners**: `Record`\<`string`, (...`args`) => [`IListener`](../../../definitions/interfaces/IListener.md)[]\>

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Inherited from

`Partial.listeners`

#### Defined in

[src/options/StoneBlueprint.ts:94](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L94)

***

### locale?

> `optional` **locale**: `string`

The default locale for the application.

#### Inherited from

`Partial.locale`

#### Defined in

[src/options/StoneBlueprint.ts:52](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L52)

***

### logger?

> `optional` **logger**: [`LoggerConfig`](../../../options/LoggerConfig/interfaces/LoggerConfig.md)

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.logger`

#### Defined in

[src/options/StoneBlueprint.ts:83](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L83)

***

### name?

> `optional` **name**: `string`

The name of the application.

#### Inherited from

`Partial.name`

#### Defined in

[src/options/StoneBlueprint.ts:30](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L30)

***

### providers?

> `optional` **providers**: (...`args`) => [`IProvider`](../../../definitions/interfaces/IProvider.md)[]

Service providers to be automatically loaded for each request to the application.

#### Inherited from

`Partial.providers`

#### Defined in

[src/options/StoneBlueprint.ts:105](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L105)

***

### secret?

> `optional` **secret**: `string`

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Inherited from

`Partial.secret`

#### Defined in

[src/options/StoneBlueprint.ts:117](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L117)

***

### services?

> `optional` **services**: `Function`[] \| `Function`[][]

Services to be automatically registered when the application starts.

#### Inherited from

`Partial.services`

#### Defined in

[src/options/StoneBlueprint.ts:88](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L88)

***

### subscribers?

> `optional` **subscribers**: (...`args`) => [`ISubscriber`](../../../definitions/interfaces/ISubscriber.md)[]

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Inherited from

`Partial.subscribers`

#### Defined in

[src/options/StoneBlueprint.ts:100](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L100)

***

### timezone?

> `optional` **timezone**: `string`

The default timezone for the application.

#### Inherited from

`Partial.timezone`

#### Defined in

[src/options/StoneBlueprint.ts:47](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/StoneBlueprint.ts#L47)

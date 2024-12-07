[**Core Documentation v0.0.34**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../../modules.md) / [options/StoneBlueprint](../README.md) / AppConfig

# Interface: AppConfig\<U, V\>

Application settings.

This interface defines the main configuration settings for the Stone.js application,
including general application information, environment settings, adapter configurations,
middleware options, logging settings, and service registration.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<[`AdapterConfig`](../../AdapterConfig/interfaces/AdapterConfig.md)\>

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

#### Defined in

[src/options/StoneBlueprint.ts:68](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L68)

***

### adapters

> **adapters**: [`AdapterConfig`](../../AdapterConfig/interfaces/AdapterConfig.md)[]

Adapter configurations for the application.

#### Defined in

[src/options/StoneBlueprint.ts:73](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L73)

***

### aliases

> **aliases**: `Record`\<`string`, `unknown`\>

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Defined in

[src/options/StoneBlueprint.ts:111](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L111)

***

### builder

> **builder**: [`BuilderConfig`](../../BuilderConfig/interfaces/BuilderConfig.md)

Configuration options for building the application, including middleware and pipe priorities.

#### Defined in

[src/options/StoneBlueprint.ts:62](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L62)

***

### debug

> **debug**: `boolean`

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Defined in

[src/options/StoneBlueprint.ts:42](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L42)

***

### env

> **env**: [`Environment`](../enumerations/Environment.md)

The current environment in which the application is running.
Possible values are development, production, and test.

#### Defined in

[src/options/StoneBlueprint.ts:36](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L36)

***

### fallback\_locale

> **fallback\_locale**: `string`

The fallback locale used when a translation for the default locale is unavailable.

#### Defined in

[src/options/StoneBlueprint.ts:57](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L57)

***

### handler?

> `optional` **handler**: [`EventHandler`](../../../definitions/type-aliases/EventHandler.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

The entry point or handler function for the application.
This is the main function that handles incoming requests.

#### Defined in

[src/options/StoneBlueprint.ts:123](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L123)

***

### kernel

> **kernel**: [`KernelConfig`](../../KernelConfig/interfaces/KernelConfig.md)\<`U`, `V`\>

Global middleware settings for the application kernel.

#### Defined in

[src/options/StoneBlueprint.ts:78](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L78)

***

### listeners

> **listeners**: `Record`\<`string`, (...`args`) => [`IListener`](../../../definitions/interfaces/IListener.md)[]\>

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Defined in

[src/options/StoneBlueprint.ts:94](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L94)

***

### locale

> **locale**: `string`

The default locale for the application.

#### Defined in

[src/options/StoneBlueprint.ts:52](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L52)

***

### logger

> **logger**: [`LoggerConfig`](../../LoggerConfig/interfaces/LoggerConfig.md)

Logging settings, including the logger instance and error reporting configurations.

#### Defined in

[src/options/StoneBlueprint.ts:83](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L83)

***

### name

> **name**: `string`

The name of the application.

#### Defined in

[src/options/StoneBlueprint.ts:30](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L30)

***

### providers

> **providers**: (...`args`) => [`IProvider`](../../../definitions/interfaces/IProvider.md)[]

Service providers to be automatically loaded for each request to the application.

#### Defined in

[src/options/StoneBlueprint.ts:105](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L105)

***

### secret?

> `optional` **secret**: `string`

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Defined in

[src/options/StoneBlueprint.ts:117](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L117)

***

### services

> **services**: `Function`[] \| `Function`[][]

Services to be automatically registered when the application starts.

#### Defined in

[src/options/StoneBlueprint.ts:88](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L88)

***

### subscribers

> **subscribers**: (...`args`) => [`ISubscriber`](../../../definitions/interfaces/ISubscriber.md)[]

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Defined in

[src/options/StoneBlueprint.ts:100](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L100)

***

### timezone

> **timezone**: `string`

The default timezone for the application.

#### Defined in

[src/options/StoneBlueprint.ts:47](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/StoneBlueprint.ts#L47)

[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/StoneBlueprint](../README.md) / AppConfig

# Interface: AppConfig\<U, V\>

Defined in: [src/options/StoneBlueprint.ts:26](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L26)

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

Defined in: [src/options/StoneBlueprint.ts:68](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L68)

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

***

### adapters

> **adapters**: [`AdapterConfig`](../../AdapterConfig/interfaces/AdapterConfig.md)[]

Defined in: [src/options/StoneBlueprint.ts:73](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L73)

Adapter configurations for the application.

***

### aliases

> **aliases**: `Record`\<`string`, `unknown`\>

Defined in: [src/options/StoneBlueprint.ts:111](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L111)

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

***

### builder

> **builder**: [`BuilderConfig`](../../BuilderConfig/interfaces/BuilderConfig.md)

Defined in: [src/options/StoneBlueprint.ts:62](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L62)

Configuration options for building the application, including middleware and pipe priorities.

***

### debug

> **debug**: `boolean`

Defined in: [src/options/StoneBlueprint.ts:42](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L42)

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

***

### env

> **env**: [`Environment`](../enumerations/Environment.md)

Defined in: [src/options/StoneBlueprint.ts:36](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L36)

The current environment in which the application is running.
Possible values are development, production, and test.

***

### fallback\_locale

> **fallback\_locale**: `string`

Defined in: [src/options/StoneBlueprint.ts:57](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L57)

The fallback locale used when a translation for the default locale is unavailable.

***

### handler?

> `optional` **handler**: [`EventHandler`](../../../definitions/type-aliases/EventHandler.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

Defined in: [src/options/StoneBlueprint.ts:123](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L123)

The entry point or handler function for the application.
This is the main function that handles incoming requests.

***

### kernel

> **kernel**: [`KernelConfig`](../../KernelConfig/interfaces/KernelConfig.md)\<`U`, `V`\>

Defined in: [src/options/StoneBlueprint.ts:78](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L78)

Global middleware settings for the application kernel.

***

### listeners

> **listeners**: `Record`\<`string`, (...`args`) => [`IListener`](../../../definitions/interfaces/IListener.md)[]\>

Defined in: [src/options/StoneBlueprint.ts:94](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L94)

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

***

### locale

> **locale**: `string`

Defined in: [src/options/StoneBlueprint.ts:52](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L52)

The default locale for the application.

***

### logger

> **logger**: [`LoggerConfig`](../../LoggerConfig/interfaces/LoggerConfig.md)

Defined in: [src/options/StoneBlueprint.ts:83](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L83)

Logging settings, including the logger instance and error reporting configurations.

***

### name

> **name**: `string`

Defined in: [src/options/StoneBlueprint.ts:30](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L30)

The name of the application.

***

### providers

> **providers**: (...`args`) => [`IProvider`](../../../definitions/interfaces/IProvider.md)[]

Defined in: [src/options/StoneBlueprint.ts:105](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L105)

Service providers to be automatically loaded for each request to the application.

#### Parameters

##### args

...`any`[]

#### Returns

[`IProvider`](../../../definitions/interfaces/IProvider.md)

***

### secret?

> `optional` **secret**: `string`

Defined in: [src/options/StoneBlueprint.ts:117](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L117)

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

***

### services

> **services**: `Function`[] \| `Function`[][]

Defined in: [src/options/StoneBlueprint.ts:88](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L88)

Services to be automatically registered when the application starts.

***

### subscribers

> **subscribers**: (...`args`) => [`ISubscriber`](../../../definitions/interfaces/ISubscriber.md)[]

Defined in: [src/options/StoneBlueprint.ts:100](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L100)

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Parameters

##### args

...`any`[]

#### Returns

[`ISubscriber`](../../../definitions/interfaces/ISubscriber.md)

***

### timezone

> **timezone**: `string`

Defined in: [src/options/StoneBlueprint.ts:47](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/StoneBlueprint.ts#L47)

The default timezone for the application.

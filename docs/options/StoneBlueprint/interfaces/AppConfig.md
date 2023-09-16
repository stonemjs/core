[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [options/StoneBlueprint](../README.md) / AppConfig

# Interface: AppConfig

Application settings.

This interface defines the main configuration settings for the Stone.js application,
including general application information, environment settings, adapter configurations,
middleware options, logging settings, and service registration.

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<[`AdapterConfig`](../../AdapterConfig/interfaces/AdapterConfig.md)\>

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

#### Defined in

[src/options/StoneBlueprint.ts:76](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L76)

***

### adapters

> **adapters**: [`AdapterConfig`](../../AdapterConfig/interfaces/AdapterConfig.md)[]

Adapter configurations for the application.

#### Defined in

[src/options/StoneBlueprint.ts:81](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L81)

***

### aliases

> **aliases**: `Record`\<`string`, `unknown`\>

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Defined in

[src/options/StoneBlueprint.ts:124](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L124)

***

### builder

> **builder**: [`BuilderConfig`](../../BuilderConfig/interfaces/BuilderConfig.md)

Configuration options for building the application, including middleware and pipe priorities.

#### Defined in

[src/options/StoneBlueprint.ts:70](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L70)

***

### debug

> **debug**: `boolean`

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Defined in

[src/options/StoneBlueprint.ts:50](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L50)

***

### env

> **env**: [`Environment`](../enumerations/Environment.md)

The current environment in which the application is running.
Possible values are development, production, and test.

#### Defined in

[src/options/StoneBlueprint.ts:44](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L44)

***

### errorHandler

> **errorHandler**: [`ErrorHandlerConfig`](../../ErrorHandlerConfig/interfaces/ErrorHandlerConfig.md)

Logging settings, including the logger instance and error reporting configurations.

#### Defined in

[src/options/StoneBlueprint.ts:96](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L96)

***

### fallback\_locale

> **fallback\_locale**: `string`

The fallback locale used when a translation for the default locale is unavailable.

#### Defined in

[src/options/StoneBlueprint.ts:65](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L65)

***

### handler?

> `optional` **handler**: [`EventHandler`](../../../definitions/type-aliases/EventHandler.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

The entry point or handler function for the application.
This is the main function that handles incoming requests.

#### Defined in

[src/options/StoneBlueprint.ts:136](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L136)

***

### kernel

> **kernel**: [`KernelConfig`](../../KernelConfig/interfaces/KernelConfig.md)

Global middleware settings for the application kernel.

#### Defined in

[src/options/StoneBlueprint.ts:86](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L86)

***

### listeners

> **listeners**: `Record`\<`string`, (...`args`) => [`IListener`](../../../definitions/interfaces/IListener.md)[]\>

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Defined in

[src/options/StoneBlueprint.ts:107](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L107)

***

### locale

> **locale**: `string`

The default locale for the application.

#### Defined in

[src/options/StoneBlueprint.ts:60](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L60)

***

### logger

> **logger**: [`LoggerConfig`](../../LoggerConfig/interfaces/LoggerConfig.md)

Logging settings, including the logger instance and error reporting configurations.

#### Defined in

[src/options/StoneBlueprint.ts:91](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L91)

***

### name

> **name**: `string`

The name of the application.

#### Defined in

[src/options/StoneBlueprint.ts:38](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L38)

***

### providers

> **providers**: (...`args`) => [`IProvider`](../../../definitions/interfaces/IProvider.md)[]

Service providers to be automatically loaded for each request to the application.

#### Defined in

[src/options/StoneBlueprint.ts:118](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L118)

***

### secret?

> `optional` **secret**: `string`

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Defined in

[src/options/StoneBlueprint.ts:130](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L130)

***

### services

> **services**: `Function`[] \| `Function`[][]

Services to be automatically registered when the application starts.

#### Defined in

[src/options/StoneBlueprint.ts:101](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L101)

***

### subscribers

> **subscribers**: (...`args`) => [`ISubscriber`](../../../definitions/interfaces/ISubscriber.md)[]

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Defined in

[src/options/StoneBlueprint.ts:113](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L113)

***

### timezone

> **timezone**: `string`

The default timezone for the application.

#### Defined in

[src/options/StoneBlueprint.ts:55](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/StoneBlueprint.ts#L55)

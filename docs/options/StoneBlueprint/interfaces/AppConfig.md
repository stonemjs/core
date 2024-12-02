[**Core Documentation v0.0.32**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../../modules.md) / [options/StoneBlueprint](../README.md) / AppConfig

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

[src/options/StoneBlueprint.ts:69](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L69)

***

### adapters

> **adapters**: [`AdapterConfig`](../../AdapterConfig/interfaces/AdapterConfig.md)[]

Adapter configurations for the application.

#### Defined in

[src/options/StoneBlueprint.ts:74](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L74)

***

### aliases

> **aliases**: `Record`\<`string`, `unknown`\>

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Defined in

[src/options/StoneBlueprint.ts:117](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L117)

***

### builder

> **builder**: [`BuilderConfig`](../../BuilderConfig/interfaces/BuilderConfig.md)

Configuration options for building the application, including middleware and pipe priorities.

#### Defined in

[src/options/StoneBlueprint.ts:63](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L63)

***

### debug

> **debug**: `boolean`

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Defined in

[src/options/StoneBlueprint.ts:43](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L43)

***

### env

> **env**: [`Environment`](../enumerations/Environment.md)

The current environment in which the application is running.
Possible values are development, production, and test.

#### Defined in

[src/options/StoneBlueprint.ts:37](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L37)

***

### errorHandler

> **errorHandler**: [`ErrorHandlerConfig`](../../ErrorHandlerConfig/interfaces/ErrorHandlerConfig.md)

Logging settings, including the logger instance and error reporting configurations.

#### Defined in

[src/options/StoneBlueprint.ts:89](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L89)

***

### fallback\_locale

> **fallback\_locale**: `string`

The fallback locale used when a translation for the default locale is unavailable.

#### Defined in

[src/options/StoneBlueprint.ts:58](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L58)

***

### handler?

> `optional` **handler**: [`EventHandler`](../../../definitions/type-aliases/EventHandler.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

The entry point or handler function for the application.
This is the main function that handles incoming requests.

#### Defined in

[src/options/StoneBlueprint.ts:129](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L129)

***

### kernel

> **kernel**: [`KernelConfig`](../../KernelConfig/interfaces/KernelConfig.md)\<`U`, `V`\>

Global middleware settings for the application kernel.

#### Defined in

[src/options/StoneBlueprint.ts:79](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L79)

***

### listeners

> **listeners**: `Record`\<`string`, (...`args`) => [`IListener`](../../../definitions/interfaces/IListener.md)[]\>

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Defined in

[src/options/StoneBlueprint.ts:100](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L100)

***

### locale

> **locale**: `string`

The default locale for the application.

#### Defined in

[src/options/StoneBlueprint.ts:53](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L53)

***

### logger

> **logger**: [`LoggerConfig`](../../LoggerConfig/interfaces/LoggerConfig.md)

Logging settings, including the logger instance and error reporting configurations.

#### Defined in

[src/options/StoneBlueprint.ts:84](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L84)

***

### name

> **name**: `string`

The name of the application.

#### Defined in

[src/options/StoneBlueprint.ts:31](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L31)

***

### providers

> **providers**: (...`args`) => [`IProvider`](../../../definitions/interfaces/IProvider.md)[]

Service providers to be automatically loaded for each request to the application.

#### Defined in

[src/options/StoneBlueprint.ts:111](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L111)

***

### secret?

> `optional` **secret**: `string`

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Defined in

[src/options/StoneBlueprint.ts:123](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L123)

***

### services

> **services**: `Function`[] \| `Function`[][]

Services to be automatically registered when the application starts.

#### Defined in

[src/options/StoneBlueprint.ts:94](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L94)

***

### subscribers

> **subscribers**: (...`args`) => [`ISubscriber`](../../../definitions/interfaces/ISubscriber.md)[]

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Defined in

[src/options/StoneBlueprint.ts:106](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L106)

***

### timezone

> **timezone**: `string`

The default timezone for the application.

#### Defined in

[src/options/StoneBlueprint.ts:48](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/StoneBlueprint.ts#L48)

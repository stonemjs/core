[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/StoneBlueprint](../README.md) / AppConfig

# Interface: AppConfig\<U, V\>

Defined in: [core/src/options/StoneBlueprint.ts:34](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L34)

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

Defined in: [core/src/options/StoneBlueprint.ts:76](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L76)

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

***

### adapters

> **adapters**: [`AdapterConfig`](../../AdapterConfig/interfaces/AdapterConfig.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:81](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L81)

Adapter configurations for the application.

***

### aliases

> **aliases**: `Record`\<`string`, `any`\>

Defined in: [core/src/options/StoneBlueprint.ts:119](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L119)

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

***

### application?

> `optional` **application**: [`MetaApplication`](../../../declarations/interfaces/MetaApplication.md)\<`U`, `V`\>

Defined in: [core/src/options/StoneBlueprint.ts:139](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L139)

The main application entry point module in declarative context.
It is the class decorated with the @StoneApp() decorator.
Note: It does not exist in imperative context.

***

### builder

> **builder**: [`BuilderConfig`](../../BuilderConfig/interfaces/BuilderConfig.md)

Defined in: [core/src/options/StoneBlueprint.ts:70](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L70)

Configuration options for building the application, including middleware and pipe priorities.

***

### debug

> **debug**: `boolean`

Defined in: [core/src/options/StoneBlueprint.ts:50](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L50)

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

***

### env

> **env**: [`Environment`](../enumerations/Environment.md)

Defined in: [core/src/options/StoneBlueprint.ts:44](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L44)

The current environment in which the application is running.
Possible values are development, production, and test.

***

### fallback\_locale

> **fallback\_locale**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:65](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L65)

The fallback locale used when a translation for the default locale is unavailable.

***

### handler?

> `optional` **handler**: [`MixedEventHandler`](../../../declarations/type-aliases/MixedEventHandler.md)\<`U`, `V`\>

Defined in: [core/src/options/StoneBlueprint.ts:132](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L132)

The main handler function for the application.
This is the main function that handles incoming requests.
Every Stone.js application must have an handler function.

***

### kernel

> **kernel**: [`KernelConfig`](../../KernelConfig/interfaces/KernelConfig.md)\<`U`, `V`\>

Defined in: [core/src/options/StoneBlueprint.ts:86](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L86)

Global middleware settings for the application kernel.

***

### listeners

> **listeners**: [`MetaEventListener`](../../../declarations/interfaces/MetaEventListener.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:102](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L102)

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

***

### liveConfigurations?

> `optional` **liveConfigurations**: [`MixedConfiguration`](../../../declarations/type-aliases/MixedConfiguration.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:146](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L146)

Live configurations are loaded at each request.
By default, configurations are loaded once when the application starts.
This is useful for defining dynamic configurations that do not require a restart to apply changes.

***

### locale

> **locale**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:60](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L60)

The default locale for the application.

***

### logger

> **logger**: [`LoggerConfig`](../../LoggerConfig/interfaces/LoggerConfig.md)

Defined in: [core/src/options/StoneBlueprint.ts:91](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L91)

Logging settings, including the logger instance and error reporting configurations.

***

### name

> **name**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:38](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L38)

The name of the application.

***

### providers

> **providers**: [`MixedServiceProvider`](../../../declarations/type-aliases/MixedServiceProvider.md)\<`U`, `V`\>[]

Defined in: [core/src/options/StoneBlueprint.ts:113](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L113)

Service providers to be automatically loaded for each request to the application.

***

### secret?

> `optional` **secret**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:125](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L125)

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

***

### services

> **services**: [`MetaService`](../../../declarations/interfaces/MetaService.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:96](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L96)

Services to be automatically registered when the application starts.

***

### subscribers

> **subscribers**: [`MixedEventSubscriber`](../../../declarations/type-aliases/MixedEventSubscriber.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:108](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L108)

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

***

### timezone

> **timezone**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:55](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/StoneBlueprint.ts#L55)

The default timezone for the application.

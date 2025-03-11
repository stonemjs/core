[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/StoneBlueprint](../README.md) / AppConfig

# Interface: AppConfig\<U, V\>

Defined in: [core/src/options/StoneBlueprint.ts:34](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L34)

Application settings.

This interface defines the main configuration settings for the Stone.js application,
including general application information, environment settings, adapter configurations,
middleware options, logging settings, and service registration.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<[`AdapterConfig`](../../AdapterConfig/interfaces/AdapterConfig.md)\<`U`, `V`\>\>

Defined in: [core/src/options/StoneBlueprint.ts:82](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L82)

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

***

### adapters

> **adapters**: [`AdapterConfig`](../../AdapterConfig/interfaces/AdapterConfig.md)\<`U`, `V`\>[]

Defined in: [core/src/options/StoneBlueprint.ts:87](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L87)

Adapter configurations for the application.

***

### aliases

> **aliases**: `Record`\<`string`, `any`\>

Defined in: [core/src/options/StoneBlueprint.ts:125](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L125)

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

***

### builder

> **builder**: [`BuilderConfig`](../../BuilderConfig/interfaces/BuilderConfig.md)\<`any`\>

Defined in: [core/src/options/StoneBlueprint.ts:76](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L76)

Configuration options for building the application, including middleware and pipe priorities.

***

### debug

> **debug**: `boolean`

Defined in: [core/src/options/StoneBlueprint.ts:50](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L50)

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

***

### env

> **env**: [`Environment`](../enumerations/Environment.md)

Defined in: [core/src/options/StoneBlueprint.ts:44](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L44)

The current environment in which the application is running.
Possible values are development, production, and test.

***

### fallback\_locale

> **fallback\_locale**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:65](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L65)

The fallback locale used when a translation for the default locale is unavailable.

***

### kernel

> **kernel**: [`KernelConfig`](../../KernelConfig/interfaces/KernelConfig.md)\<`U`, `V`\>

Defined in: [core/src/options/StoneBlueprint.ts:92](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L92)

Global middleware settings for the application kernel.

***

### lifecycleHooks?

> `optional` **lifecycleHooks**: [`LifecycleHookType`](../../../declarations/type-aliases/LifecycleHookType.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), `any`, `any`, `U`, `V`\>

Defined in: [core/src/options/StoneBlueprint.ts:131](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L131)

Lifecycle hooks for the application.
These hooks allow you to run custom code at different stages of the application lifecycle.

***

### listeners

> **listeners**: [`MetaEventListener`](../../../declarations/interfaces/MetaEventListener.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:108](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L108)

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

***

### liveConfigurations?

> `optional` **liveConfigurations**: [`MixedConfiguration`](../../../declarations/type-aliases/MixedConfiguration.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:138](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L138)

Live configurations are loaded at each request.
By default, configurations are loaded once when the application starts.
This is useful for defining dynamic configurations that do not require a restart to apply changes.

***

### locale

> **locale**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:60](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L60)

The default locale for the application.

***

### logger

> **logger**: [`LoggerConfig`](../../LoggerConfig/interfaces/LoggerConfig.md)

Defined in: [core/src/options/StoneBlueprint.ts:97](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L97)

Logging settings, including the logger instance and error reporting configurations.

***

### name

> **name**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:38](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L38)

The name of the application.

***

### providers

> **providers**: [`MixedServiceProvider`](../../../declarations/type-aliases/MixedServiceProvider.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:119](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L119)

Service providers to be automatically loaded for each request to the application.

***

### secret?

> `optional` **secret**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:71](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L71)

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

***

### services

> **services**: [`MetaService`](../../../declarations/interfaces/MetaService.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:102](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L102)

Services to be automatically registered when the application starts.

***

### subscribers

> **subscribers**: [`MixedEventSubscriber`](../../../declarations/type-aliases/MixedEventSubscriber.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:114](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L114)

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

***

### timezone

> **timezone**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:55](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/StoneBlueprint.ts#L55)

The default timezone for the application.

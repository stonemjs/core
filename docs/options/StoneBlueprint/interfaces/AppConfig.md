[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [options/StoneBlueprint](../README.md) / AppConfig

# Interface: AppConfig\<U, V\>

Defined in: [options/StoneBlueprint.ts:34](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L34)

Application settings.

This interface defines the main configuration settings for the Stone.js application,
including general application information, environment settings, adapter configurations,
middleware options, logging settings, and service registration.

## Type Parameters

### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

### V

`V` *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Indexable

\[`key`: `string`\]: `unknown`

Allow adding any additional custom properties.
The value of the custom properties can be of any type, depending on user requirements.

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<[`AdapterConfig`](../../AdapterConfig/interfaces/AdapterConfig.md)\<`any`, `any`, `any`, `U`, `any`, `V`\>\>

Defined in: [options/StoneBlueprint.ts:82](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L82)

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

***

### adapters

> **adapters**: [`AdapterConfig`](../../AdapterConfig/interfaces/AdapterConfig.md)\<`any`, `any`, `any`, `U`, `any`, `V`\>[]

Defined in: [options/StoneBlueprint.ts:88](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L88)

Adapter configurations for the application.
List of all adapters used in the application.

***

### aliases

> **aliases**: `Record`\<`string`, `any`\>

Defined in: [options/StoneBlueprint.ts:126](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L126)

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

***

### blueprint

> **blueprint**: [`BlueprintConfig`](../../BlueprintConfig/interfaces/BlueprintConfig.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), `any`\>

Defined in: [options/StoneBlueprint.ts:76](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L76)

Configuration options for building the application blueprint, including middleware and pipe priorities.

***

### debug

> **debug**: `boolean`

Defined in: [options/StoneBlueprint.ts:50](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L50)

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

***

### env

> **env**: [`Environment`](../enumerations/Environment.md)

Defined in: [options/StoneBlueprint.ts:44](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L44)

The current environment in which the application is running.
Possible values are development, production, and test.

***

### fallback\_locale

> **fallback\_locale**: `string`

Defined in: [options/StoneBlueprint.ts:65](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L65)

The fallback locale used when a translation for the default locale is unavailable.

***

### kernel

> **kernel**: [`KernelConfig`](../../KernelConfig/interfaces/KernelConfig.md)\<`U`, `V`\>

Defined in: [options/StoneBlueprint.ts:93](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L93)

Kernel configurations for the application.

***

### lifecycleHooks?

> `optional` **lifecycleHooks**: [`LifecycleHookType`](../../../declarations/type-aliases/LifecycleHookType.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), `any`, `any`, `U`, `V`\>

Defined in: [options/StoneBlueprint.ts:132](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L132)

Lifecycle hooks for the application.
These hooks allow you to run custom code at different stages of the application lifecycle.

***

### listeners

> **listeners**: [`MetaEventListener`](../../../declarations/interfaces/MetaEventListener.md)\<`any`\>[]

Defined in: [options/StoneBlueprint.ts:109](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L109)

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

***

### liveConfigurations?

> `optional` **liveConfigurations**: [`MixedConfiguration`](../../../declarations/type-aliases/MixedConfiguration.md)[]

Defined in: [options/StoneBlueprint.ts:139](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L139)

Live configurations are loaded at each request.
By default, configurations are loaded once when the application starts.
This is useful for defining dynamic configurations that do not require a restart to apply changes.

***

### locale

> **locale**: `string`

Defined in: [options/StoneBlueprint.ts:60](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L60)

The default locale for the application.

***

### logger

> **logger**: [`LoggerConfig`](../../LoggerConfig/interfaces/LoggerConfig.md)

Defined in: [options/StoneBlueprint.ts:98](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L98)

Logging settings, including the logger instance and error reporting configurations.

***

### name

> **name**: `string`

Defined in: [options/StoneBlueprint.ts:38](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L38)

The name of the application.

***

### providers

> **providers**: [`MixedServiceProvider`](../../../declarations/type-aliases/MixedServiceProvider.md)[]

Defined in: [options/StoneBlueprint.ts:120](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L120)

Service providers to be automatically loaded for each request to the application.

***

### secret?

> `optional` **secret**: `string`

Defined in: [options/StoneBlueprint.ts:71](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L71)

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

***

### services

> **services**: [`MetaService`](../../../declarations/interfaces/MetaService.md)[]

Defined in: [options/StoneBlueprint.ts:103](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L103)

Services to be automatically registered when the application starts.

***

### subscribers

> **subscribers**: [`MixedEventSubscriber`](../../../declarations/type-aliases/MixedEventSubscriber.md)[]

Defined in: [options/StoneBlueprint.ts:115](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L115)

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

***

### timezone

> **timezone**: `string`

Defined in: [options/StoneBlueprint.ts:55](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L55)

The default timezone for the application.

[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/StoneApp](../README.md) / StoneAppOptions

# Interface: StoneAppOptions

Defined in: [decorators/StoneApp.ts:11](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/StoneApp.ts#L11)

StoneApp options.

This interface defines the configuration options for marking a class as the main application entry point.

## Extends

- `Partial`\<[`AppConfig`](../../../options/StoneBlueprint/interfaces/AppConfig.md)\>

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<[`AdapterConfig`](../../../options/AdapterConfig/interfaces/AdapterConfig.md)\<`any`, `any`, `any`, [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), `any`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [options/StoneBlueprint.ts:82](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L82)

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

#### Inherited from

`Partial.adapter`

***

### adapters?

> `optional` **adapters**: [`AdapterConfig`](../../../options/AdapterConfig/interfaces/AdapterConfig.md)\<`any`, `any`, `any`, [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), `any`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>[]

Defined in: [options/StoneBlueprint.ts:88](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L88)

Adapter configurations for the application.
List of all adapters used in the application.

#### Inherited from

`Partial.adapters`

***

### aliases?

> `optional` **aliases**: `Record`\<`string`, `any`\>

Defined in: [options/StoneBlueprint.ts:126](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L126)

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Inherited from

`Partial.aliases`

***

### blueprint?

> `optional` **blueprint**: [`BlueprintConfig`](../../../options/BlueprintConfig/interfaces/BlueprintConfig.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), `any`\>

Defined in: [options/StoneBlueprint.ts:76](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L76)

Configuration options for building the application blueprint, including middleware and pipe priorities.

#### Inherited from

`Partial.blueprint`

***

### debug?

> `optional` **debug**: `boolean`

Defined in: [options/StoneBlueprint.ts:50](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L50)

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Inherited from

`Partial.debug`

***

### env?

> `optional` **env**: [`Environment`](../../../options/StoneBlueprint/enumerations/Environment.md)

Defined in: [options/StoneBlueprint.ts:44](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L44)

The current environment in which the application is running.
Possible values are development, production, and test.

#### Inherited from

`Partial.env`

***

### fallback\_locale?

> `optional` **fallback\_locale**: `string`

Defined in: [options/StoneBlueprint.ts:65](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L65)

The fallback locale used when a translation for the default locale is unavailable.

#### Inherited from

`Partial.fallback_locale`

***

### kernel?

> `optional` **kernel**: [`KernelConfig`](../../../options/KernelConfig/interfaces/KernelConfig.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

Defined in: [options/StoneBlueprint.ts:93](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L93)

Kernel configurations for the application.

#### Inherited from

`Partial.kernel`

***

### lifecycleHooks?

> `optional` **lifecycleHooks**: [`LifecycleHookType`](../../../declarations/type-aliases/LifecycleHookType.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), `any`, `any`, [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

Defined in: [options/StoneBlueprint.ts:132](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L132)

Lifecycle hooks for the application.
These hooks allow you to run custom code at different stages of the application lifecycle.

#### Inherited from

`Partial.lifecycleHooks`

***

### listeners?

> `optional` **listeners**: [`MetaEventListener`](../../../declarations/interfaces/MetaEventListener.md)\<`any`\>[]

Defined in: [options/StoneBlueprint.ts:109](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L109)

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Inherited from

`Partial.listeners`

***

### liveConfigurations?

> `optional` **liveConfigurations**: [`MixedConfiguration`](../../../declarations/type-aliases/MixedConfiguration.md)[]

Defined in: [options/StoneBlueprint.ts:139](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L139)

Live configurations are loaded at each request.
By default, configurations are loaded once when the application starts.
This is useful for defining dynamic configurations that do not require a restart to apply changes.

#### Inherited from

`Partial.liveConfigurations`

***

### locale?

> `optional` **locale**: `string`

Defined in: [options/StoneBlueprint.ts:60](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L60)

The default locale for the application.

#### Inherited from

`Partial.locale`

***

### logger?

> `optional` **logger**: [`LoggerConfig`](../../../options/LoggerConfig/interfaces/LoggerConfig.md)

Defined in: [options/StoneBlueprint.ts:98](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L98)

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.logger`

***

### name?

> `optional` **name**: `string`

Defined in: [options/StoneBlueprint.ts:38](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L38)

The name of the application.

#### Inherited from

`Partial.name`

***

### providers?

> `optional` **providers**: [`MixedServiceProvider`](../../../declarations/type-aliases/MixedServiceProvider.md)[]

Defined in: [options/StoneBlueprint.ts:120](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L120)

Service providers to be automatically loaded for each request to the application.

#### Inherited from

`Partial.providers`

***

### secret?

> `optional` **secret**: `string`

Defined in: [options/StoneBlueprint.ts:71](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L71)

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Inherited from

`Partial.secret`

***

### services?

> `optional` **services**: [`MetaService`](../../../declarations/interfaces/MetaService.md)[]

Defined in: [options/StoneBlueprint.ts:103](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L103)

Services to be automatically registered when the application starts.

#### Inherited from

`Partial.services`

***

### subscribers?

> `optional` **subscribers**: [`MixedEventSubscriber`](../../../declarations/type-aliases/MixedEventSubscriber.md)[]

Defined in: [options/StoneBlueprint.ts:115](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L115)

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Inherited from

`Partial.subscribers`

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [options/StoneBlueprint.ts:55](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L55)

The default timezone for the application.

#### Inherited from

`Partial.timezone`

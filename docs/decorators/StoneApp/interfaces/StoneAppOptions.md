[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/StoneApp](../README.md) / StoneAppOptions

# Interface: StoneAppOptions

Defined in: [core/src/decorators/StoneApp.ts:11](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/decorators/StoneApp.ts#L11)

StoneApp options.

This interface defines the configuration options for marking a class as the main application entry point.

## Extends

- `Partial`\<[`AppConfig`](../../../options/StoneBlueprint/interfaces/AppConfig.md)\>

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<[`AdapterConfig`](../../../options/AdapterConfig/interfaces/AdapterConfig.md)\>

Defined in: [core/src/options/StoneBlueprint.ts:76](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L76)

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

#### Inherited from

`Partial.adapter`

***

### adapters?

> `optional` **adapters**: [`AdapterConfig`](../../../options/AdapterConfig/interfaces/AdapterConfig.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:81](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L81)

Adapter configurations for the application.

#### Inherited from

`Partial.adapters`

***

### aliases?

> `optional` **aliases**: `Record`\<`string`, `any`\>

Defined in: [core/src/options/StoneBlueprint.ts:119](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L119)

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Inherited from

`Partial.aliases`

***

### application?

> `optional` **application**: [`MetaApplication`](../../../declarations/interfaces/MetaApplication.md)

Defined in: [core/src/options/StoneBlueprint.ts:139](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L139)

The main application entry point module in declarative context.
It is the class decorated with the @StoneApp() decorator.
Note: It does not exist in imperative context.

#### Inherited from

`Partial.application`

***

### builder?

> `optional` **builder**: [`BuilderConfig`](../../../options/BuilderConfig/interfaces/BuilderConfig.md)

Defined in: [core/src/options/StoneBlueprint.ts:70](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L70)

Configuration options for building the application, including middleware and pipe priorities.

#### Inherited from

`Partial.builder`

***

### debug?

> `optional` **debug**: `boolean`

Defined in: [core/src/options/StoneBlueprint.ts:50](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L50)

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Inherited from

`Partial.debug`

***

### env?

> `optional` **env**: [`Environment`](../../../options/StoneBlueprint/enumerations/Environment.md)

Defined in: [core/src/options/StoneBlueprint.ts:44](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L44)

The current environment in which the application is running.
Possible values are development, production, and test.

#### Inherited from

`Partial.env`

***

### fallback\_locale?

> `optional` **fallback\_locale**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:65](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L65)

The fallback locale used when a translation for the default locale is unavailable.

#### Inherited from

`Partial.fallback_locale`

***

### handler?

> `optional` **handler**: [`MixedEventHandler`](../../../declarations/type-aliases/MixedEventHandler.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

Defined in: [core/src/options/StoneBlueprint.ts:132](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L132)

The main handler function for the application.
This is the main function that handles incoming requests.
Every Stone.js application must have an handler function.

#### Inherited from

`Partial.handler`

***

### kernel?

> `optional` **kernel**: [`KernelConfig`](../../../options/KernelConfig/interfaces/KernelConfig.md)

Defined in: [core/src/options/StoneBlueprint.ts:86](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L86)

Global middleware settings for the application kernel.

#### Inherited from

`Partial.kernel`

***

### listeners?

> `optional` **listeners**: [`MetaEventListener`](../../../declarations/interfaces/MetaEventListener.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:102](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L102)

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Inherited from

`Partial.listeners`

***

### liveConfigurations?

> `optional` **liveConfigurations**: [`MixedConfiguration`](../../../declarations/type-aliases/MixedConfiguration.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:146](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L146)

Live configurations are loaded at each request.
By default, configurations are loaded once when the application starts.
This is useful for defining dynamic configurations that do not require a restart to apply changes.

#### Inherited from

`Partial.liveConfigurations`

***

### locale?

> `optional` **locale**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:60](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L60)

The default locale for the application.

#### Inherited from

`Partial.locale`

***

### logger?

> `optional` **logger**: [`LoggerConfig`](../../../options/LoggerConfig/interfaces/LoggerConfig.md)

Defined in: [core/src/options/StoneBlueprint.ts:91](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L91)

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.logger`

***

### name?

> `optional` **name**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:38](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L38)

The name of the application.

#### Inherited from

`Partial.name`

***

### providers?

> `optional` **providers**: [`MixedServiceProvider`](../../../declarations/type-aliases/MixedServiceProvider.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>[]

Defined in: [core/src/options/StoneBlueprint.ts:113](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L113)

Service providers to be automatically loaded for each request to the application.

#### Inherited from

`Partial.providers`

***

### secret?

> `optional` **secret**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:125](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L125)

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Inherited from

`Partial.secret`

***

### services?

> `optional` **services**: [`MetaService`](../../../declarations/interfaces/MetaService.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:96](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L96)

Services to be automatically registered when the application starts.

#### Inherited from

`Partial.services`

***

### subscribers?

> `optional` **subscribers**: [`MixedEventSubscriber`](../../../declarations/type-aliases/MixedEventSubscriber.md)[]

Defined in: [core/src/options/StoneBlueprint.ts:108](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L108)

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Inherited from

`Partial.subscribers`

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [core/src/options/StoneBlueprint.ts:55](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/StoneBlueprint.ts#L55)

The default timezone for the application.

#### Inherited from

`Partial.timezone`

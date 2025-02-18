[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [StoneBuilder](../README.md) / StoneBuilder

# Class: StoneBuilder\<TEvent, UResponse\>

Defined in: [core/src/StoneBuilder.ts:34](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L34)

Stone builder.

This class provides a fluent interface for building Stone applications.
It allows you to configure the application using a builder pattern,
with options for adding modules, plugins, and custom configurations.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Methods

### add()

> **add**(`key`, `value`): `this`

Defined in: [core/src/StoneBuilder.ts:113](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L113)

Add a value to the application blueprint.

#### Parameters

##### key

`string`

The key to add.

##### value

`unknown`

The value to add.

#### Returns

`this`

The current StoneBuilder instance.

***

### configure()

> **configure**(`resolver`): `this`

Defined in: [core/src/StoneBuilder.ts:89](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L89)

Configure the application using the blueprint resolver.
Use this method to add custom configurations to the application.

#### Parameters

##### resolver

(`blueprint`) => `void`

The blueprint resolver function.

#### Returns

`this`

The current StoneBuilder instance.

***

### handle()

> **handle**\<`ExecutionResultType`\>(`handler`): `Promise`\<`ExecutionResultType`\>

Defined in: [core/src/StoneBuilder.ts:200](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L200)

Handle application events.
This method is a shorthand for running the application with the provided event handler.

#### Type Parameters

• **ExecutionResultType** = `unknown`

#### Parameters

##### handler

[`MixedEventHandler`](../../declarations/type-aliases/MixedEventHandler.md)\<`TEvent`, `unknown`\>

The application event handler function.

#### Returns

`Promise`\<`ExecutionResultType`\>

The platform-specific response.

***

### hook()

> **hook**(`key`, `listener`): `this`

Defined in: [core/src/StoneBuilder.ts:137](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L137)

Add a listener hook to the application.

#### Parameters

##### key

[`HookName`](../../declarations/type-aliases/HookName.md)

The hook name to add.

##### listener

[`KernelHookListener`](../../declarations/type-aliases/KernelHookListener.md)

The hook listener function to add.

#### Returns

`this`

The current StoneBuilder instance.

***

### on()

> **on**(`event`, `handler`, `options`?): `this`

Defined in: [core/src/StoneBuilder.ts:126](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L126)

Add an event listener handler to the application.

#### Parameters

##### event

`string`

The event name to add.

##### handler

[`EventListenerType`](../../declarations/type-aliases/EventListenerType.md)

The listener handler to add.

##### options?

`Omit`\<[`MetaEventListener`](../../declarations/interfaces/MetaEventListener.md), `"event"` \| `"module"`\>

The event listener options.

#### Returns

`this`

The current StoneBuilder instance.

***

### onBoot()

> **onBoot**(`listener`): `this`

Defined in: [core/src/StoneBuilder.ts:189](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L189)

Hook to boot the application.
This hook is called when the application is booted.
At this point, the application is ready to handle events.
This hook is called after the onRegister hook.
And just before the handle method is called.
Usefull to boot stuffs at each event handling.

#### Parameters

##### listener

[`KernelHookListener`](../../declarations/type-aliases/KernelHookListener.md)

The hook function listener to add.

#### Returns

`this`

The current StoneBuilder instance.

***

### onRegister()

> **onRegister**(`listener`): `this`

Defined in: [core/src/StoneBuilder.ts:174](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L174)

Hook to register modules to the service container.
This hook is called when the application is prepared.
Just after the onPrepare hook.
At this point, the application is ready to register modules to the service container.
And all third-party modules are already registered.
Usefull to register your own modules to the service container.

#### Parameters

##### listener

[`KernelHookListener`](../../declarations/type-aliases/KernelHookListener.md)

The hook function listener to add.

#### Returns

`this`

The current StoneBuilder instance.

***

### onStart()

> **onStart**(`listener`): `this`

Defined in: [core/src/StoneBuilder.ts:148](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L148)

Registers a listener that runs when the adapter starts.
This hook is triggered when the adapter is initialized, before the application itself starts.

#### Parameters

##### listener

[`AdapterHookListener`](../../declarations/type-aliases/AdapterHookListener.md)

The hook function to execute on adapter start.

#### Returns

`this`

The current StoneBuilder instance.

***

### onStop()

> **onStop**(`listener`): `this`

Defined in: [core/src/StoneBuilder.ts:159](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L159)

Registers a listener that runs when the adapter stops.
This hook is triggered before the adapter shuts down, allowing for cleanup operations.

#### Parameters

##### listener

[`AdapterHookListener`](../../declarations/type-aliases/AdapterHookListener.md)

The hook function to execute on adapter stop.

#### Returns

`this`

The current StoneBuilder instance.

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [core/src/StoneBuilder.ts:211](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L211)

Run the application.
Populates the blueprint via introspection and runs the application.

#### Type Parameters

• **ExecutionResultType** = `unknown`

#### Returns

`Promise`\<`ExecutionResultType`\>

The platform-specific response.

***

### set()

> **set**(`key`, `value`): `this`

Defined in: [core/src/StoneBuilder.ts:101](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L101)

Set a value in the application blueprint.

#### Parameters

##### key

`string`

The key to set.

##### value

`unknown`

The value to set.

#### Returns

`this`

The current StoneBuilder instance.

***

### use()

> **use**(...`blueprints`): `this`

Defined in: [core/src/StoneBuilder.ts:71](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L71)

Add Stone plugins's blueprint to the application.

#### Parameters

##### blueprints

...(`Record`\<`string`, `unknown`\> \| `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`TEvent`, `UResponse`\>\>)[]

The plugins's blueprint to add to the application.

#### Returns

`this`

The current StoneBuilder instance.

***

### create()

> `static` **create**\<`TEvent`, `UResponse`\>(`options`): [`StoneBuilder`](StoneBuilder.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/StoneBuilder.ts:49](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L49)

Create a new StoneBuilder instance.

#### Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

#### Parameters

##### options

[`StoneBuilderOptions`](../interfaces/StoneBuilderOptions.md) = `{}`

The options to create the StoneBuilder.

#### Returns

[`StoneBuilder`](StoneBuilder.md)\<`TEvent`, `UResponse`\>

A new StoneBuilder instance.

#### Example

```typescript
const builder = StoneBuilder.create();
```

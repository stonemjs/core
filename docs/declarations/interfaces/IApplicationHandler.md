[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IApplicationHandler

# Interface: IApplicationHandler\<TEvent, UResponse, UserResponse\>

Defined in: [core/src/declarations.ts:243](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L243)

Interface representing a Stone Application entry point.

This interface provides lifecycle hooks for managing the registration.
This is an alias for IServiceProvider.
This interface is used for single event handler applications.

## Template

UResponse, UserResponse

## Extends

- [`IApplication`](IApplication.md)\<`TEvent`, `UResponse`\>

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

• **UserResponse** = `unknown`

## Properties

### afterHandle()?

> `optional` **afterHandle**: (`context`) => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:199](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L199)

Hook that runs after the main handler is invoked. This can be used for cleanup tasks.

#### Parameters

##### context

[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IApplication`](IApplication.md).[`afterHandle`](IApplication.md#afterhandle)

***

### beforeHandle()?

> `optional` **beforeHandle**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:184](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L184)

Hook that runs before the main handler is invoked. This can be used for setup or validation purposes.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IApplication`](IApplication.md).[`beforeHandle`](IApplication.md#beforehandle)

***

### boot()?

> `optional` **boot**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:194](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L194)

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IApplication`](IApplication.md).[`boot`](IApplication.md#boot)

***

### handle

> **handle**: [`FunctionalEventHandler`](../type-aliases/FunctionalEventHandler.md)\<`TEvent`, `UserResponse`\>

Defined in: [core/src/declarations.ts:248](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L248)

***

### mustSkip()?

> `optional` **mustSkip**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

Defined in: [core/src/declarations.ts:209](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L209)

Skip this provider.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

#### Inherited from

[`IApplication`](IApplication.md).[`mustSkip`](IApplication.md#mustskip)

***

### onPrepare()?

> `optional` **onPrepare**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:179](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L179)

Hook that runs before the context is created. This can be used for setup or validation purposes.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IApplication`](IApplication.md).[`onPrepare`](IApplication.md#onprepare)

***

### onTerminate()?

> `optional` **onTerminate**: (`context`) => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:204](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L204)

Hook that runs after the main handler completes. This can be used for cleanup tasks.

#### Parameters

##### context

`Partial`\<[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>\>

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IApplication`](IApplication.md).[`onTerminate`](IApplication.md#onterminate)

***

### register()?

> `optional` **register**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:189](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L189)

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IApplication`](IApplication.md).[`register`](IApplication.md#register)

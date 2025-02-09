[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IApplication

# Interface: IApplication\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:229](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L229)

Interface representing a Stone Application entry point.

This interface provides lifecycle hooks for managing the registration.
This is an alias for IServiceProvider.

## Template

UResponse

## Extends

- [`IServiceProvider`](IServiceProvider.md)\<`TEvent`, `UResponse`\>

## Extended by

- [`IApplicationHandler`](IApplicationHandler.md)

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### afterHandle()?

> `optional` **afterHandle**: (`context`) => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:199](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L199)

Hook that runs after the main handler is invoked. This can be used for cleanup tasks.

#### Parameters

##### context

[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IServiceProvider`](IServiceProvider.md).[`afterHandle`](IServiceProvider.md#afterhandle)

***

### beforeHandle()?

> `optional` **beforeHandle**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:184](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L184)

Hook that runs before the main handler is invoked. This can be used for setup or validation purposes.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IServiceProvider`](IServiceProvider.md).[`beforeHandle`](IServiceProvider.md#beforehandle)

***

### boot()?

> `optional` **boot**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:194](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L194)

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IServiceProvider`](IServiceProvider.md).[`boot`](IServiceProvider.md#boot)

***

### mustSkip()?

> `optional` **mustSkip**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

Defined in: [core/src/declarations.ts:209](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L209)

Skip this provider.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

#### Inherited from

[`IServiceProvider`](IServiceProvider.md).[`mustSkip`](IServiceProvider.md#mustskip)

***

### onPrepare()?

> `optional` **onPrepare**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:179](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L179)

Hook that runs before the context is created. This can be used for setup or validation purposes.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IServiceProvider`](IServiceProvider.md).[`onPrepare`](IServiceProvider.md#onprepare)

***

### onTerminate()?

> `optional` **onTerminate**: (`context`) => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:204](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L204)

Hook that runs after the main handler completes. This can be used for cleanup tasks.

#### Parameters

##### context

`Partial`\<[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>\>

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IServiceProvider`](IServiceProvider.md).[`onTerminate`](IServiceProvider.md#onterminate)

***

### register()?

> `optional` **register**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:189](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L189)

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

#### Inherited from

[`IServiceProvider`](IServiceProvider.md).[`register`](IServiceProvider.md#register)

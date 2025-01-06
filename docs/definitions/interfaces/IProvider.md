[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / IProvider

# Interface: IProvider\<TEvent, UResponse\>

Defined in: [src/definitions.ts:29](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L29)

Interface representing a provider within the system.

This interface provides lifecycle hooks for managing the registration,
initialization, and termination phases of a provider. Implementations
of this interface are expected to define these lifecycle methods as needed.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### afterHandle()?

> `optional` **afterHandle**: (`context`) => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:53](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L53)

Hook that runs after the main handler is invoked. This can be used for cleanup tasks.

#### Parameters

##### context

[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>

#### Returns

`void` \| `Promise`\<`void`\>

***

### beforeHandle()?

> `optional` **beforeHandle**: () => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:38](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L38)

Hook that runs before the main handler is invoked. This can be used for setup or validation purposes.

#### Returns

`void` \| `Promise`\<`void`\>

***

### boot()?

> `optional` **boot**: () => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:48](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L48)

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

`void` \| `Promise`\<`void`\>

***

### mustSkip()?

> `optional` **mustSkip**: () => `boolean`

Defined in: [src/definitions.ts:63](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L63)

Skip this provider.

#### Returns

`boolean`

***

### onPrepare()?

> `optional` **onPrepare**: () => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:33](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L33)

Hook that runs before the context is created. This can be used for setup or validation purposes.

#### Returns

`void` \| `Promise`\<`void`\>

***

### onTerminate()?

> `optional` **onTerminate**: (`context`) => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:58](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L58)

Hook that runs after the main handler completes. This can be used for cleanup tasks.

#### Parameters

##### context

`Partial`\<[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>\>

#### Returns

`void` \| `Promise`\<`void`\>

***

### register()?

> `optional` **register**: () => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:43](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L43)

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

`void` \| `Promise`\<`void`\>

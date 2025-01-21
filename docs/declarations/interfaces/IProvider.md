[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IProvider

# Interface: IProvider\<TEvent, UResponse\>

Defined in: [declarations.ts:54](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L54)

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

Defined in: [declarations.ts:78](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L78)

Hook that runs after the main handler is invoked. This can be used for cleanup tasks.

#### Parameters

##### context

[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>

#### Returns

`void` \| `Promise`\<`void`\>

***

### beforeHandle()?

> `optional` **beforeHandle**: () => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:63](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L63)

Hook that runs before the main handler is invoked. This can be used for setup or validation purposes.

#### Returns

`void` \| `Promise`\<`void`\>

***

### boot()?

> `optional` **boot**: () => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:73](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L73)

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

`void` \| `Promise`\<`void`\>

***

### mustSkip()?

> `optional` **mustSkip**: () => `boolean`

Defined in: [declarations.ts:88](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L88)

Skip this provider.

#### Returns

`boolean`

***

### onPrepare()?

> `optional` **onPrepare**: () => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:58](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L58)

Hook that runs before the context is created. This can be used for setup or validation purposes.

#### Returns

`void` \| `Promise`\<`void`\>

***

### onTerminate()?

> `optional` **onTerminate**: (`context`) => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:83](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L83)

Hook that runs after the main handler completes. This can be used for cleanup tasks.

#### Parameters

##### context

`Partial`\<[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>\>

#### Returns

`void` \| `Promise`\<`void`\>

***

### register()?

> `optional` **register**: () => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:68](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L68)

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

`void` \| `Promise`\<`void`\>

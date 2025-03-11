[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IServiceProvider

# Interface: IServiceProvider

Defined in: [core/src/declarations.ts:231](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L231)

Interface representing a service provider within the system.

This interface provides lifecycle hooks for managing the registration,
initialization, and termination phases of a provider. Implementations
of this interface are expected to define these lifecycle methods as needed.

## Properties

### boot()?

> `optional` **boot**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:240](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L240)

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### mustSkip()?

> `optional` **mustSkip**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

Defined in: [core/src/declarations.ts:245](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L245)

Skip this provider.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

***

### register()?

> `optional` **register**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:235](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L235)

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

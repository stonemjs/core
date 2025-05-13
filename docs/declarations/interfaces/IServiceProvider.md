[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IServiceProvider

# Interface: IServiceProvider

Defined in: [declarations.ts:259](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L259)

Interface representing a service provider within the system.

This interface provides lifecycle hooks for managing the registration,
initialization, and termination phases of a provider. Implementations
of this interface are expected to define these lifecycle methods as needed.

## Properties

### boot()?

> `optional` **boot**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:268](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L268)

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### mustSkip()?

> `optional` **mustSkip**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

Defined in: [declarations.ts:273](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L273)

Skip this provider.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

***

### register()?

> `optional` **register**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:263](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L263)

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

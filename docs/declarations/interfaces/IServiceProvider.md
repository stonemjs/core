[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IServiceProvider

# Interface: IServiceProvider

Defined in: [declarations.ts:393](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L393)

Interface representing a service provider within the system.

This interface provides lifecycle hooks for managing the registration,
initialization, and termination phases of a provider. Implementations
of this interface are expected to define these lifecycle methods as needed.

## Properties

### boot()?

> `optional` **boot**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:402](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L402)

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### mustSkip()?

> `optional` **mustSkip**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

Defined in: [declarations.ts:407](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L407)

Skip this provider.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

***

### register()?

> `optional` **register**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:397](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L397)

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

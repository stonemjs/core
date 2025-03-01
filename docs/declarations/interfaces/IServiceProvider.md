[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IServiceProvider

# Interface: IServiceProvider

Defined in: [core/src/declarations.ts:230](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L230)

Interface representing a service provider within the system.

This interface provides lifecycle hooks for managing the registration,
initialization, and termination phases of a provider. Implementations
of this interface are expected to define these lifecycle methods as needed.

## Properties

### boot()?

> `optional` **boot**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:239](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L239)

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### mustSkip()?

> `optional` **mustSkip**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

Defined in: [core/src/declarations.ts:244](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L244)

Skip this provider.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

***

### register()?

> `optional` **register**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:234](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L234)

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

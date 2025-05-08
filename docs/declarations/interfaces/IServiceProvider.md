[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IServiceProvider

# Interface: IServiceProvider

Defined in: [core/src/declarations.ts:259](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L259)

Interface representing a service provider within the system.

This interface provides lifecycle hooks for managing the registration,
initialization, and termination phases of a provider. Implementations
of this interface are expected to define these lifecycle methods as needed.

## Properties

### boot()?

> `optional` **boot**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:268](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L268)

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### mustSkip()?

> `optional` **mustSkip**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

Defined in: [core/src/declarations.ts:273](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L273)

Skip this provider.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`boolean`\>

***

### register()?

> `optional` **register**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:263](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L263)

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

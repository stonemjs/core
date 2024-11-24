[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [definitions](../README.md) / IProvider

# Interface: IProvider

Interface representing a provider within the system.

This interface provides lifecycle hooks for managing the registration,
initialization, and termination phases of a provider. Implementations
of this interface are expected to define these lifecycle methods as needed.

## Properties

### beforeHandle()?

> `optional` **beforeHandle**: () => `void` \| `Promise`\<`void`\>

Hook that runs before the main handler is invoked. This can be used for setup or validation purposes.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:30](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L30)

***

### boot()?

> `optional` **boot**: () => `void` \| `Promise`\<`void`\>

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:40](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L40)

***

### mustSkip()?

> `optional` **mustSkip**: () => `boolean`

Skip this provider.

#### Returns

`boolean`

#### Defined in

[src/definitions.ts:50](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L50)

***

### onTerminate()?

> `optional` **onTerminate**: () => `void` \| `Promise`\<`void`\>

Hook that runs after the main handler completes. This can be used for cleanup tasks.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:45](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L45)

***

### register()?

> `optional` **register**: () => `void` \| `Promise`\<`void`\>

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:35](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L35)

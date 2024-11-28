[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / IProvider

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

[src/definitions.ts:29](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L29)

***

### boot()?

> `optional` **boot**: () => `void` \| `Promise`\<`void`\>

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:39](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L39)

***

### mustSkip()?

> `optional` **mustSkip**: () => `boolean`

Skip this provider.

#### Returns

`boolean`

#### Defined in

[src/definitions.ts:49](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L49)

***

### onTerminate()?

> `optional` **onTerminate**: () => `void` \| `Promise`\<`void`\>

Hook that runs after the main handler completes. This can be used for cleanup tasks.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:44](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L44)

***

### register()?

> `optional` **register**: () => `void` \| `Promise`\<`void`\>

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:34](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L34)

[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / AdapterHooks

# Interface: AdapterHooks

AdapterHooks Interface.

Represents lifecycle hooks that can be defined for the adapter, such as initialization, pre-handling, and termination.

## Properties

### beforeHandle?

> `optional` **beforeHandle**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:246](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L246)

***

### onInit?

> `optional` **onInit**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:245](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L245)

***

### onTerminate?

> `optional` **onTerminate**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:247](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L247)

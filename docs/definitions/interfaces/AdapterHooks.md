[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [definitions](../README.md) / AdapterHooks

# Interface: AdapterHooks

AdapterHooks Interface.

Represents lifecycle hooks that can be defined for the adapter, such as initialization, pre-handling, and termination.

## Properties

### beforeHandle?

> `optional` **beforeHandle**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:273](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L273)

***

### onInit?

> `optional` **onInit**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:272](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L272)

***

### onTerminate?

> `optional` **onTerminate**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:274](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L274)

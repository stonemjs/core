[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [definitions](../README.md) / AdapterHooks

# Interface: AdapterHooks

AdapterHooks Interface.

Represents lifecycle hooks that can be defined for the adapter, such as initialization, pre-handling, and termination.

## Properties

### beforeHandle?

> `optional` **beforeHandle**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:273](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L273)

***

### onInit?

> `optional` **onInit**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:272](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L272)

***

### onTerminate?

> `optional` **onTerminate**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:274](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L274)

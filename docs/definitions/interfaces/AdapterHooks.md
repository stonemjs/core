[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / AdapterHooks

# Interface: AdapterHooks

AdapterHooks Interface.

Represents lifecycle hooks that can be defined for the adapter, such as initialization, pre-handling, and termination.

## Properties

### beforeHandle?

> `optional` **beforeHandle**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:245](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L245)

***

### onInit?

> `optional` **onInit**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:244](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L244)

***

### onTerminate?

> `optional` **onTerminate**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

#### Defined in

[src/definitions.ts:246](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L246)

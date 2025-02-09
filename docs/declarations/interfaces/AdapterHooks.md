[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterHooks

# Interface: AdapterHooks

Defined in: [core/src/declarations.ts:953](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L953)

AdapterHooks Interface.

Represents lifecycle hooks that can be defined for the adapter, such as initialization, pre-handling, and termination.

## Properties

### afterHandle?

> `optional` **afterHandle**: [`AdapterAfterHandleHookListener`](../type-aliases/AdapterAfterHandleHookListener.md)[]

Defined in: [core/src/declarations.ts:957](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L957)

***

### beforeHandle?

> `optional` **beforeHandle**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)[]

Defined in: [core/src/declarations.ts:956](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L956)

***

### onInit?

> `optional` **onInit**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)[]

Defined in: [core/src/declarations.ts:954](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L954)

***

### onPrepare?

> `optional` **onPrepare**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)[]

Defined in: [core/src/declarations.ts:955](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L955)

***

### onTerminate?

> `optional` **onTerminate**: [`AdapterOnTerminateHookListener`](../type-aliases/AdapterOnTerminateHookListener.md)[]

Defined in: [core/src/declarations.ts:958](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L958)

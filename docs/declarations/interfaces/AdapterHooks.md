[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterHooks

# Interface: AdapterHooks

Defined in: [core/src/declarations.ts:954](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L954)

AdapterHooks Interface.

Represents lifecycle hooks that can be defined for the adapter, such as initialization, pre-handling, and termination.

## Properties

### afterHandle?

> `optional` **afterHandle**: [`AdapterAfterHandleHookListener`](../type-aliases/AdapterAfterHandleHookListener.md)[]

Defined in: [core/src/declarations.ts:958](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L958)

***

### beforeHandle?

> `optional` **beforeHandle**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)[]

Defined in: [core/src/declarations.ts:957](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L957)

***

### onPrepare?

> `optional` **onPrepare**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)[]

Defined in: [core/src/declarations.ts:956](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L956)

***

### onStart?

> `optional` **onStart**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)[]

Defined in: [core/src/declarations.ts:955](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L955)

***

### onStop?

> `optional` **onStop**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)[]

Defined in: [core/src/declarations.ts:960](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L960)

***

### onTerminate?

> `optional` **onTerminate**: [`AdapterOnTerminateHookListener`](../type-aliases/AdapterOnTerminateHookListener.md)[]

Defined in: [core/src/declarations.ts:959](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L959)

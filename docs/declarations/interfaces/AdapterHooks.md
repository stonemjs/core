[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterHooks

# Interface: AdapterHooks

Defined in: [declarations.ts:323](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L323)

AdapterHooks Interface.

Represents lifecycle hooks that can be defined for the adapter, such as initialization, pre-handling, and termination.

## Properties

### afterHandle?

> `optional` **afterHandle**: [`AdapterAfterHandleListenerHook`](../type-aliases/AdapterAfterHandleListenerHook.md)[]

Defined in: [declarations.ts:327](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L327)

***

### beforeHandle?

> `optional` **beforeHandle**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

Defined in: [declarations.ts:326](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L326)

***

### onInit?

> `optional` **onInit**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

Defined in: [declarations.ts:324](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L324)

***

### onPrepare?

> `optional` **onPrepare**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

Defined in: [declarations.ts:325](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L325)

***

### onTerminate?

> `optional` **onTerminate**: [`AdapterOnTerminateListenerHook`](../type-aliases/AdapterOnTerminateListenerHook.md)[]

Defined in: [declarations.ts:328](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L328)

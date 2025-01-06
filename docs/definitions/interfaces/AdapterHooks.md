[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / AdapterHooks

# Interface: AdapterHooks

Defined in: [src/definitions.ts:272](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L272)

AdapterHooks Interface.

Represents lifecycle hooks that can be defined for the adapter, such as initialization, pre-handling, and termination.

## Properties

### afterHandle?

> `optional` **afterHandle**: [`AdapterAfterHandleListenerHook`](../type-aliases/AdapterAfterHandleListenerHook.md)[]

Defined in: [src/definitions.ts:276](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L276)

***

### beforeHandle?

> `optional` **beforeHandle**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

Defined in: [src/definitions.ts:275](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L275)

***

### onInit?

> `optional` **onInit**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

Defined in: [src/definitions.ts:273](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L273)

***

### onPrepare?

> `optional` **onPrepare**: [`AdapterListenerHook`](../type-aliases/AdapterListenerHook.md)[]

Defined in: [src/definitions.ts:274](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L274)

***

### onTerminate?

> `optional` **onTerminate**: [`AdapterOnTerminateListenerHook`](../type-aliases/AdapterOnTerminateListenerHook.md)[]

Defined in: [src/definitions.ts:277](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L277)

[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / KernelContext

# Interface: KernelContext\<U, V\>

KernelContext Interface.

Represents the context for a kernel, containing the event and optional response.

## Template

V

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### event

> **event**: `U`

#### Defined in

[src/definitions.ts:409](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L409)

***

### response?

> `optional` **response**: `V`

#### Defined in

[src/definitions.ts:410](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L410)

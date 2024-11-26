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

[src/definitions.ts:447](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L447)

***

### response?

> `optional` **response**: `V`

#### Defined in

[src/definitions.ts:448](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L448)

[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / KernelContext

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

[src/definitions.ts:394](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L394)

***

### response?

> `optional` **response**: `V`

#### Defined in

[src/definitions.ts:395](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L395)

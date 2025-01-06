[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / HookContext

# Interface: HookContext\<TEvent, UResponse\>

Defined in: [src/definitions.ts:416](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L416)

HookContext Interface.

Represents the context for the hooks, containing the event and optional response.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### event

> **event**: `TEvent`

Defined in: [src/definitions.ts:417](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L417)

***

### response

> **response**: `UResponse`

Defined in: [src/definitions.ts:418](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L418)

[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / HookContext

# Interface: HookContext\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:698](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L698)

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

Defined in: [core/src/declarations.ts:699](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L699)

***

### response

> **response**: `UResponse`

Defined in: [core/src/declarations.ts:700](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L700)

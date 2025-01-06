[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / HookContext

# Interface: HookContext\<TEvent, UResponse\>

Defined in: [src/definitions.ts:416](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L416)

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

Defined in: [src/definitions.ts:417](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L417)

***

### response

> **response**: `UResponse`

Defined in: [src/definitions.ts:418](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L418)

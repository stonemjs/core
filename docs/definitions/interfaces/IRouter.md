[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / IRouter

# Interface: IRouter\<U, V\>

Router Interface.

Represents a router that can dispatch incoming events and return outgoing responses.

## Template

V

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### dispatch()

> **dispatch**: (`event`) => `V` \| `Promise`\<`V`\>

#### Parameters

• **event**: `U`

#### Returns

`V` \| `Promise`\<`V`\>

#### Defined in

[src/definitions.ts:384](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L384)

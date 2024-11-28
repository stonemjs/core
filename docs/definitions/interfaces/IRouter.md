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

[src/definitions.ts:384](https://github.com/stonemjs/core/blob/c4dbb69a8c86aa6134b62f7d9cac7dabb444c749/src/definitions.ts#L384)

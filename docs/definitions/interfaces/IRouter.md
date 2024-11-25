[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [definitions](../README.md) / IRouter

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

[src/definitions.ts:422](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L422)

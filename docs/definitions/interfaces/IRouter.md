[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / IRouter

# Interface: IRouter\<TEvent, UResponse\>

Defined in: [src/definitions.ts:391](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L391)

Router Interface.

Represents a router that can dispatch incoming events and return outgoing responses.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### dispatch()

> **dispatch**: (`event`) => `UResponse` \| `Promise`\<`UResponse`\>

Defined in: [src/definitions.ts:392](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L392)

#### Parameters

##### event

`TEvent`

#### Returns

`UResponse` \| `Promise`\<`UResponse`\>

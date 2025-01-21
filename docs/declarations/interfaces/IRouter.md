[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IRouter

# Interface: IRouter\<TEvent, UResponse\>

Defined in: [declarations.ts:460](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L460)

Router Interface.

Represents a router that can dispatch incoming events and return outgoing responses.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### dispatch()

> **dispatch**: (`event`) => `unknown`

Defined in: [declarations.ts:461](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L461)

#### Parameters

##### event

`TEvent`

#### Returns

`unknown`

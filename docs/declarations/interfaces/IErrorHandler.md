[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IErrorHandler

# Interface: IErrorHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:420](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L420)

ErrorHandler Interface.

Represents an error handler that provides methods to report and render errors.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### handle()

> **handle**: (`error`, `event`) => `UResponse` \| `Promise`\<`UResponse`\>

Defined in: [declarations.ts:421](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L421)

#### Parameters

##### error

`any`

##### event

`TEvent`

#### Returns

`UResponse` \| `Promise`\<`UResponse`\>

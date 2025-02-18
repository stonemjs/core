[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ApplicationClass

# Type Alias: ApplicationClass()\<TEvent, UResponse, UserResponse\>

> **ApplicationClass**\<`TEvent`, `UResponse`, `UserResponse`\>: (...`args`) => [`IApplication`](../interfaces/IApplication.md)\<`TEvent`, `UResponse`\> \| [`IApplicationHandler`](../interfaces/IApplicationHandler.md)\<`TEvent`, `UResponse`, `UserResponse`\>

Defined in: [core/src/declarations.ts:215](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L215)

Represents an ApplicationClass type.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

• **UserResponse** = `unknown`

## Parameters

### args

...`any`[]

## Returns

[`IApplication`](../interfaces/IApplication.md)\<`TEvent`, `UResponse`\> \| [`IApplicationHandler`](../interfaces/IApplicationHandler.md)\<`TEvent`, `UResponse`, `UserResponse`\>

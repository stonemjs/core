[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / RouterResolver

# Type Alias: RouterResolver()\<TEvent, UResponse\>

> **RouterResolver**\<`TEvent`, `UResponse`\>: (`container`) => [`IRouter`](../interfaces/IRouter.md)\<`TEvent`, `UResponse`\>

Defined in: [src/definitions.ts:342](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L342)

A type representing a function that resolves an `IRouter` instance.

The `RouterResolver` is responsible for generating an instance of `IRouter`
for processing incoming events and producing outgoing responses. It utilizes
a dependency injection container to dynamically resolve necessary dependencies.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### container

`Container`

The dependency injection container used to resolve the `IRouter` instance.

## Returns

[`IRouter`](../interfaces/IRouter.md)\<`TEvent`, `UResponse`\>

An `IRouter` instance capable of handling the specified incoming and outgoing types.

[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / RouterResolver

# Type Alias: RouterResolver()\<TEvent, UResponse\>

> **RouterResolver**\<`TEvent`, `UResponse`\>: (`container`) => [`IRouter`](../interfaces/IRouter.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:393](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L393)

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

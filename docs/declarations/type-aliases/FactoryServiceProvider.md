[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FactoryServiceProvider

# Type Alias: FactoryServiceProvider()\<TEvent, UResponse\>

> **FactoryServiceProvider**\<`TEvent`, `UResponse`\>: (`container`) => [`IServiceProvider`](../interfaces/IServiceProvider.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:272](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L272)

Represents a FactoryServiceProvider type.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### container

The dependency injection container.

[`IContainer`](IContainer.md) | `any`

## Returns

[`IServiceProvider`](../interfaces/IServiceProvider.md)\<`TEvent`, `UResponse`\>

The service provider object.

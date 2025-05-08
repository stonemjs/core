[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [BlueprintUtils](../README.md) / defineEventHandler

# Function: defineEventHandler()

Utility function to define an event handler.

## Param

The EventHandler module.

## Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional handler.

## Call Signature

> **defineEventHandler**\<`U`, `V`\>(`module`): `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

Defined in: core/src/BlueprintUtils.ts:220

Utility function to define a function-based event handler.

### Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`FunctionalEventHandler`](../../declarations/type-aliases/FunctionalEventHandler.md)\<`U`, `V`\>

The EventHandler module.

### Returns

`Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

The StoneBlueprint.

The StoneBlueprint.

### Param

The EventHandler module.

### Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional handler.

## Call Signature

> **defineEventHandler**\<`U`, `V`\>(`module`, `isFactory`?): `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

Defined in: core/src/BlueprintUtils.ts:231

Utility function to define a factory-based event handler.

### Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`FactoryEventHandler`](../../declarations/type-aliases/FactoryEventHandler.md)\<`U`, `V`\>

The EventHandler module.

#### isFactory?

`true`

Indicates if the handler is a factory function. e.g. `true` for a factory function.

### Returns

`Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

The StoneBlueprint.

The StoneBlueprint.

### Param

The EventHandler module.

### Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional handler.

## Call Signature

> **defineEventHandler**\<`U`, `V`\>(`module`, `isFactory`?): `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

Defined in: core/src/BlueprintUtils.ts:243

Utility function to define a factory-based event handler.

### Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`EventHandlerClass`](../../declarations/type-aliases/EventHandlerClass.md)\<`U`, `V`\>

The EventHandler module.

#### isFactory?

`false`

Indicates if the handler is a factory function. e.g. `false` for a class.

### Returns

`Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

The StoneBlueprint.

The StoneBlueprint.

### Param

The EventHandler module.

### Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional handler.

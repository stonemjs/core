[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [BlueprintUtils](../README.md) / defineEventHandler

# Function: defineEventHandler()

Utility function to define an event handler.

## Param

The EventHandler module.

## Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional handler.

## Call Signature

> **defineEventHandler**\<`U`, `V`\>(`module`): `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [BlueprintUtils.ts:220](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L220)

Utility function to define a function-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`FunctionalEventHandler`](../../declarations/type-aliases/FunctionalEventHandler.md)\<`U`, `V`\>

The EventHandler module.

### Returns

`Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The EventHandler module.

### Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional handler.

## Call Signature

> **defineEventHandler**\<`U`, `V`\>(`module`, `isFactory?`): `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [BlueprintUtils.ts:231](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L231)

Utility function to define a factory-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`FactoryEventHandler`](../../declarations/type-aliases/FactoryEventHandler.md)\<`U`, `V`\>

The EventHandler module.

#### isFactory?

`true`

Indicates if the handler is a factory function. e.g. `true` for a factory function.

### Returns

`Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The EventHandler module.

### Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional handler.

## Call Signature

> **defineEventHandler**\<`U`, `V`\>(`module`, `isFactory?`): `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [BlueprintUtils.ts:243](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L243)

Utility function to define a factory-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`EventHandlerClass`](../../declarations/type-aliases/EventHandlerClass.md)\<`U`, `V`\>

The EventHandler module.

#### isFactory?

`false`

Indicates if the handler is a factory function. e.g. `false` for a class.

### Returns

`Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The EventHandler module.

### Param

Indicates if the handler is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional handler.

[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/KernelUtils](../README.md) / defineEventHandler

# Function: defineEventHandler()

Utility function to define an event handler.

## Param

The EventHandler module.

## Param

The options for the EventHandler.

## Call Signature

> **defineEventHandler**\<`U`, `V`\>(`module`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/KernelUtils.ts:121](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/blueprint/KernelUtils.ts#L121)

Utility function to define a function-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`FunctionalEventHandler`](../../../declarations/type-aliases/FunctionalEventHandler.md)\<`U`, `V`\>

The EventHandler module.

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The EventHandler module.

### Param

The options for the EventHandler.

## Call Signature

> **defineEventHandler**\<`U`, `V`\>(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/KernelUtils.ts:132](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/blueprint/KernelUtils.ts#L132)

Utility function to define a factory-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`FactoryEventHandler`](../../../declarations/type-aliases/FactoryEventHandler.md)\<`U`, `V`\>

The EventHandler module.

#### options

The options for the EventHandler.

##### isFactory

`true`

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The EventHandler module.

### Param

The options for the EventHandler.

## Call Signature

> **defineEventHandler**\<`U`, `V`\>(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/KernelUtils.ts:144](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/blueprint/KernelUtils.ts#L144)

Utility function to define a factory-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`EventHandlerClass`](../../../declarations/type-aliases/EventHandlerClass.md)\<`U`, `V`\>

The EventHandler module.

#### options

The options for the EventHandler.

##### isClass

`true`

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The EventHandler module.

### Param

The options for the EventHandler.

[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/BlueprintUtils](../README.md) / defineBlueprintMiddleware

# Function: defineBlueprintMiddleware()

Utility function to define a blueprint middleware.

## Param

The Middleware module.

## Param

The options for the Middleware.

## Call Signature

> **defineBlueprintMiddleware**(`module`, `options?`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/BlueprintUtils.ts:158](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/BlueprintUtils.ts#L158)

Utility function to define a function-based blueprint middleware.

### Parameters

#### module

[`Arrayable`](../../../declarations/type-aliases/Arrayable.md)\<[`FunctionalMiddleware`](../../../declarations/type-aliases/FunctionalMiddleware.md)\<[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\<`any`\>, `PipeClass` \| [`ClassType`](../../../declarations/type-aliases/ClassType.md)\<`any`\>\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>\>

The Middleware module.

#### options?

The options for the Middleware.

##### params?

`any`[]

##### priority?

`number`

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The Middleware module.

### Param

The options for the Middleware.

## Call Signature

> **defineBlueprintMiddleware**(`module`, `options?`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/BlueprintUtils.ts:170](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/BlueprintUtils.ts#L170)

Utility function to define a factory-based blueprint middleware.

### Parameters

#### module

[`Arrayable`](../../../declarations/type-aliases/Arrayable.md)\<[`FactoryMiddleware`](../../../declarations/type-aliases/FactoryMiddleware.md)\<[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\<`any`\>, `PipeClass` \| [`ClassType`](../../../declarations/type-aliases/ClassType.md)\<`any`\>\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>\>

The Middleware module.

#### options?

The options for the Middleware.

##### isFactory?

`true`

##### params?

`any`[]

##### priority?

`number`

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The Middleware module.

### Param

The options for the Middleware.

## Call Signature

> **defineBlueprintMiddleware**(`module`, `options?`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/BlueprintUtils.ts:182](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/BlueprintUtils.ts#L182)

Utility function to define a class-based blueprint middleware.

### Parameters

#### module

[`Arrayable`](../../../declarations/type-aliases/Arrayable.md)\<[`MiddlewareClass`](../../../declarations/type-aliases/MiddlewareClass.md)\<[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\<`any`\>, `PipeClass` \| [`ClassType`](../../../declarations/type-aliases/ClassType.md)\<`any`\>\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>\>

The Middleware module.

#### options?

The options for the Middleware.

##### isFactory?

`false`

##### params?

`any`[]

##### priority?

`number`

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The Middleware module.

### Param

The options for the Middleware.

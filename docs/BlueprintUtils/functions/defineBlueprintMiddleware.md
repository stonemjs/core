[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [BlueprintUtils](../README.md) / defineBlueprintMiddleware

# Function: defineBlueprintMiddleware()

Utility function to define a blueprint middleware.

## Param

The Middleware module.

## Param

Indicates if the Middleware is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional Middleware.

## Param

The options for the Middleware.

## Call Signature

> **defineBlueprintMiddleware**(`module`, `isFactory?`, `options?`): `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [BlueprintUtils.ts:280](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L280)

Utility function to define a function-based blueprint middleware.

### Parameters

#### module

[`Arrayable`](../../declarations/type-aliases/Arrayable.md)\<[`FunctionalMiddleware`](../../declarations/type-aliases/FunctionalMiddleware.md)\<[`BlueprintContext`](../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)\<`any`\>, [`ClassType`](../../declarations/type-aliases/ClassType.md)\<`any`\> \| `PipeClass`\>, [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)\>\>

The Middleware module.

#### isFactory?

`undefined`

Indicates if the Middleware is a function. e.g. `undefined` for a function.

#### options?

The options for the Middleware.

##### params?

`any`[]

##### priority?

`number`

### Returns

`Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The Middleware module.

### Param

Indicates if the Middleware is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional Middleware.

### Param

The options for the Middleware.

## Call Signature

> **defineBlueprintMiddleware**(`module`, `isFactory?`, `options?`): `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [BlueprintUtils.ts:294](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L294)

Utility function to define a factory-based blueprint middleware.

### Parameters

#### module

[`Arrayable`](../../declarations/type-aliases/Arrayable.md)\<[`FactoryMiddleware`](../../declarations/type-aliases/FactoryMiddleware.md)\<[`BlueprintContext`](../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)\<`any`\>, [`ClassType`](../../declarations/type-aliases/ClassType.md)\<`any`\> \| `PipeClass`\>, [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)\>\>

The Middleware module.

#### isFactory?

`true`

Indicates if the Middleware is a factory function. e.g. `true` for a factory function.

#### options?

The options for the Middleware.

##### params?

`any`[]

##### priority?

`number`

### Returns

`Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The Middleware module.

### Param

Indicates if the Middleware is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional Middleware.

### Param

The options for the Middleware.

## Call Signature

> **defineBlueprintMiddleware**(`module`, `isFactory?`, `options?`): `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [BlueprintUtils.ts:308](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L308)

Utility function to define a class-based blueprint middleware.

### Parameters

#### module

[`Arrayable`](../../declarations/type-aliases/Arrayable.md)\<[`MiddlewareClass`](../../declarations/type-aliases/MiddlewareClass.md)\<[`BlueprintContext`](../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)\<`any`\>, [`ClassType`](../../declarations/type-aliases/ClassType.md)\<`any`\> \| `PipeClass`\>, [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)\>\>

The Middleware module.

#### isFactory?

`false`

Indicates if the Middleware is a factory function. e.g. `false` for a class.

#### options?

The options for the Middleware.

##### params?

`any`[]

##### priority?

`number`

### Returns

`Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

### Param

The Middleware module.

### Param

Indicates if the Middleware is a factory function. e.g. `true` for a factory function, `false` for a class, or `undefined` for a functional Middleware.

### Param

The options for the Middleware.

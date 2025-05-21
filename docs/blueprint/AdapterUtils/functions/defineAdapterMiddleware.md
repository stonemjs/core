[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/AdapterUtils](../README.md) / defineAdapterMiddleware

# Function: defineAdapterMiddleware()

Registers an adapter-specific middleware in the blueprint.

This function dynamically inserts a middleware definition into the blueprint
if the adapter context matches either the platform or alias (or both are undefined).

## Param

The middleware module to register (function, factory, or class).

## Param

Metadata describing which adapter(s) the middleware applies to.

## Call Signature

> **defineAdapterMiddleware**\<`ExecutionContextType`, `RawResponseType`\>(`module`, `options?`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/AdapterUtils.ts:132](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/blueprint/AdapterUtils.ts#L132)

Defines a function-based adapter middleware.

This overload is used to register middleware as a simple function for a specific adapter platform or alias.

### Type Parameters

#### ExecutionContextType

`ExecutionContextType` = `any`

#### RawResponseType

`RawResponseType` = `any`

### Parameters

#### module

[`FunctionalMiddleware`](../../../declarations/type-aliases/FunctionalMiddleware.md)\<`ExecutionContextType`, `RawResponseType`\>

The middleware function to be registered.

#### options?

[`AdapterMiddlewareOptions`](../../../declarations/interfaces/AdapterMiddlewareOptions.md)

Adapter-specific metadata such as platform or alias.

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A blueprint fragment that registers the middleware conditionally.

### Param

The middleware module to register (function, factory, or class).

### Param

Metadata describing which adapter(s) the middleware applies to.

## Call Signature

> **defineAdapterMiddleware**\<`ExecutionContextType`, `RawResponseType`\>(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/AdapterUtils.ts:149](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/blueprint/AdapterUtils.ts#L149)

Defines a factory-based adapter middleware.

This overload registers a middleware factory function for a specific adapter platform or alias.

### Type Parameters

#### ExecutionContextType

`ExecutionContextType` = `any`

#### RawResponseType

`RawResponseType` = `any`

### Parameters

#### module

[`FactoryMiddleware`](../../../declarations/type-aliases/FactoryMiddleware.md)\<`ExecutionContextType`, `RawResponseType`\>

The factory function that returns middleware.

#### options

[`AdapterMiddlewareOptions`](../../../declarations/interfaces/AdapterMiddlewareOptions.md) & `object`

Adapter-specific metadata such as platform or alias.

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A blueprint fragment that registers the middleware conditionally.

### Param

The middleware module to register (function, factory, or class).

### Param

Metadata describing which adapter(s) the middleware applies to.

## Call Signature

> **defineAdapterMiddleware**\<`ExecutionContextType`, `RawResponseType`\>(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/AdapterUtils.ts:166](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/blueprint/AdapterUtils.ts#L166)

Defines a class-based adapter middleware.

This overload registers a middleware class for a specific adapter platform or alias.

### Type Parameters

#### ExecutionContextType

`ExecutionContextType` = `any`

#### RawResponseType

`RawResponseType` = `any`

### Parameters

#### module

[`MiddlewareClass`](../../../declarations/type-aliases/MiddlewareClass.md)\<`ExecutionContextType`, `RawResponseType`\>

The class to be used as middleware.

#### options

[`AdapterMiddlewareOptions`](../../../declarations/interfaces/AdapterMiddlewareOptions.md) & `object`

Adapter-specific metadata such as platform or alias.

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A blueprint fragment that registers the middleware conditionally.

### Param

The middleware module to register (function, factory, or class).

### Param

Metadata describing which adapter(s) the middleware applies to.

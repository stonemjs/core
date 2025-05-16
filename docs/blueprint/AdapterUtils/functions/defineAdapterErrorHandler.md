[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/AdapterUtils](../README.md) / defineAdapterErrorHandler

# Function: defineAdapterErrorHandler()

Registers an adapter error handler in the blueprint with appropriate metadata.

This function creates and injects a middleware into the blueprint that registers
an error handler for a specific adapter based on platform or alias.

## Param

The handler function, factory, or class.

## Param

Options including `platform`, `adapterAlias`, and `error` type(s) to handle.

## Call Signature

> **defineAdapterErrorHandler**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/AdapterUtils.ts:27](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/AdapterUtils.ts#L27)

Defines a function-based adapter error handler.

This overload is used for plain function handlers that handle specific adapter errors.

### Type Parameters

#### RawEventType

`RawEventType` = `any`

#### RawResponseType

`RawResponseType` = `any`

#### ExecutionContextType

`ExecutionContextType` = `any`

### Parameters

#### module

[`FunctionalAdapterErrorHandler`](../../../declarations/type-aliases/FunctionalAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

The function to handle the adapter error.

#### options

[`AdapterErrorHandlerOptions`](../../../declarations/interfaces/AdapterErrorHandlerOptions.md)

Metadata describing when to apply the handler (e.g. platform, alias, error types).

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A Stone.js blueprint fragment that adds the registration middleware.

### Param

The handler function, factory, or class.

### Param

Options including `platform`, `adapterAlias`, and `error` type(s) to handle.

## Call Signature

> **defineAdapterErrorHandler**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/AdapterUtils.ts:45](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/AdapterUtils.ts#L45)

Defines a factory-based adapter error handler.

This overload allows defining an adapter error handler as a factory function.

### Type Parameters

#### RawEventType

`RawEventType` = `any`

#### RawResponseType

`RawResponseType` = `any`

#### ExecutionContextType

`ExecutionContextType` = `any`

### Parameters

#### module

[`FactoryAdapterErrorHandler`](../../../declarations/type-aliases/FactoryAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

A factory that returns the adapter error handler function.

#### options

[`AdapterErrorHandlerOptions`](../../../declarations/interfaces/AdapterErrorHandlerOptions.md) & `object`

Metadata describing when to apply the handler (e.g. platform, alias, error types).

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A Stone.js blueprint fragment that adds the registration middleware.

### Param

The handler function, factory, or class.

### Param

Options including `platform`, `adapterAlias`, and `error` type(s) to handle.

## Call Signature

> **defineAdapterErrorHandler**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/AdapterUtils.ts:63](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/AdapterUtils.ts#L63)

Defines a class-based adapter error handler.

This overload allows defining an adapter error handler as a class.

### Type Parameters

#### RawEventType

`RawEventType` = `any`

#### RawResponseType

`RawResponseType` = `any`

#### ExecutionContextType

`ExecutionContextType` = `any`

### Parameters

#### module

[`IAdapterErrorHandlerClass`](../../../declarations/type-aliases/IAdapterErrorHandlerClass.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

A class that implements the adapter error handler logic.

#### options

[`AdapterErrorHandlerOptions`](../../../declarations/interfaces/AdapterErrorHandlerOptions.md) & `object`

Metadata describing when to apply the handler (e.g. platform, alias, error types).

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A Stone.js blueprint fragment that adds the registration middleware.

### Param

The handler function, factory, or class.

### Param

Options including `platform`, `adapterAlias`, and `error` type(s) to handle.

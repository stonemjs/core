[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / LifecycleHookType

# Type Alias: LifecycleHookType\<BlueprintType, AdapterContextType, RawResponseType, IncomingEventType, OutgoingResponseType\>

> **LifecycleHookType**\<`BlueprintType`, `AdapterContextType`, `RawResponseType`, `IncomingEventType`, `OutgoingResponseType`\> = [`BlueprintHookType`](../interfaces/BlueprintHookType.md)\<`BlueprintType`\> & [`AdapterHookType`](../interfaces/AdapterHookType.md)\<`AdapterContextType`, `RawResponseType`\> & [`KernelHookType`](../interfaces/KernelHookType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [declarations.ts:1023](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1023)

Represents the application lifecycle hooks.

## Type Parameters

### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](IBlueprint.md) = [`IBlueprint`](IBlueprint.md)

### AdapterContextType

`AdapterContextType` = `unknown`

### RawResponseType

`RawResponseType` = `unknown`

### IncomingEventType

`IncomingEventType` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### OutgoingResponseType

`OutgoingResponseType` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / LifecycleHookType

# Type Alias: LifecycleHookType\<BlueprintType, AdapterContextType, RawResponseType, IncomingEventType, OutgoingResponseType\>

> **LifecycleHookType**\<`BlueprintType`, `AdapterContextType`, `RawResponseType`, `IncomingEventType`, `OutgoingResponseType`\> = [`BlueprintHookType`](../interfaces/BlueprintHookType.md)\<`BlueprintType`\> & [`AdapterHookType`](../interfaces/AdapterHookType.md)\<`AdapterContextType`, `RawResponseType`\> & [`KernelHookType`](../interfaces/KernelHookType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [declarations.ts:884](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L884)

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

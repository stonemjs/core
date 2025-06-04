[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / LifecycleHookListener

# Type Alias: LifecycleHookListener\<BlueprintType, AdapterContextType, RawResponseType, IncomingEventType, OutgoingResponseType\>

> **LifecycleHookListener**\<`BlueprintType`, `AdapterContextType`, `RawResponseType`, `IncomingEventType`, `OutgoingResponseType`\> = [`BlueprintHookListener`](BlueprintHookListener.md)\<`BlueprintType`\> \| `PipelineHookListener`\<[`BlueprintContext`](../interfaces/BlueprintContext.md)\<`BlueprintType`\>, `BlueprintType`, `any`[]\> \| [`AdapterHookListener`](AdapterHookListener.md)\<`AdapterContextType`\> \| `PipelineHookListener`\<`AdapterContextType`, [`AdapterEventBuilderType`](AdapterEventBuilderType.md)\<`RawResponseType`\>, `any`[]\> \| [`KernelHookListener`](KernelHookListener.md) \| `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>

Defined in: [declarations.ts:1037](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1037)

Represents the application lifecycle hooks listeners.

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

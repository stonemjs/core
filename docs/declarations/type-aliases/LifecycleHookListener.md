[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / LifecycleHookListener

# Type Alias: LifecycleHookListener\<BlueprintType, AdapterContextType, RawResponseType, IncomingEventType, OutgoingResponseType\>

> **LifecycleHookListener**\<`BlueprintType`, `AdapterContextType`, `RawResponseType`, `IncomingEventType`, `OutgoingResponseType`\> = [`BlueprintHookListener`](BlueprintHookListener.md)\<`BlueprintType`\> \| `PipelineHookListener`\<[`BlueprintContext`](../interfaces/BlueprintContext.md)\<`BlueprintType`\>, `BlueprintType`, `any`[]\> \| [`AdapterHookListener`](AdapterHookListener.md)\<`AdapterContextType`\> \| `PipelineHookListener`\<`AdapterContextType`, [`AdapterEventBuilderType`](AdapterEventBuilderType.md)\<`RawResponseType`\>, `any`[]\> \| [`KernelHookListener`](KernelHookListener.md) \| `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>

Defined in: [declarations.ts:1032](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L1032)

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

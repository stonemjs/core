[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / LifecycleHookType

# Type Alias: LifecycleHookType\<BlueprintType, AdapterContextType, RawResponseType, IncomingEventType, OutgoingResponseType\>

> **LifecycleHookType**\<`BlueprintType`, `AdapterContextType`, `RawResponseType`, `IncomingEventType`, `OutgoingResponseType`\>: [`BlueprintHookType`](../interfaces/BlueprintHookType.md)\<`BlueprintType`\> & [`AdapterHookType`](../interfaces/AdapterHookType.md)\<`AdapterContextType`, `RawResponseType`\> & [`KernelHookType`](../interfaces/KernelHookType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/declarations.ts:855](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L855)

Represents the application lifecycle hooks.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](IBlueprint.md) = [`IBlueprint`](IBlueprint.md)

• **AdapterContextType** = `unknown`

• **RawResponseType** = `unknown`

• **IncomingEventType** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

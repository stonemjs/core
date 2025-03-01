[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / LifecycleHookType

# Type Alias: LifecycleHookType\<BlueprintType, AdapterContextType, RawResponseType, IncomingEventType, OutgoingResponseType\>

> **LifecycleHookType**\<`BlueprintType`, `AdapterContextType`, `RawResponseType`, `IncomingEventType`, `OutgoingResponseType`\>: [`BlueprintHookType`](../interfaces/BlueprintHookType.md)\<`BlueprintType`\> & [`AdapterHookType`](../interfaces/AdapterHookType.md)\<`AdapterContextType`, `RawResponseType`\> & [`KernelHookType`](../interfaces/KernelHookType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/declarations.ts:854](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L854)

Represents the application lifecycle hooks.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](IBlueprint.md) = [`IBlueprint`](IBlueprint.md)

• **AdapterContextType** = `unknown`

• **RawResponseType** = `unknown`

• **IncomingEventType** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

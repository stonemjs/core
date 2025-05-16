[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/KernelUtils](../README.md) / defineHookListener

# Function: defineHookListener()

> **defineHookListener**\<`U`\>(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/KernelUtils.ts:186](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/blueprint/KernelUtils.ts#L186)

Defines a lifecycle hook listener for the application.

This function allows you to declaratively register a function to a specific lifecycle hook
such as `onInit`, `onTerminate`, `onHandlingEvent`, etc.

## Type Parameters

### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

## Parameters

### module

[`LifecycleHookListener`](../../../declarations/type-aliases/LifecycleHookListener.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), `any`, `any`, `U`\>

The hook function to be registered.

### options

Hook configuration, including the `name` of the lifecycle hook.

#### name

[`HookName`](../../../declarations/type-aliases/HookName.md)

## Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A partial StoneBlueprint with the lifecycle hook injected.

## Example

```ts
defineHookListener(onInitFunction, { name: 'onInit' })
```

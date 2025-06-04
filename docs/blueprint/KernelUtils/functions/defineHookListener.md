[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/KernelUtils](../README.md) / defineHookListener

# Function: defineHookListener()

> **defineHookListener**\<`U`\>(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

Defined in: [blueprint/KernelUtils.ts:190](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/KernelUtils.ts#L190)

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

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

A partial StoneBlueprint with the lifecycle hook injected.

## Example

```ts
defineHookListener(onInitFunction, { name: 'onInit' })
```

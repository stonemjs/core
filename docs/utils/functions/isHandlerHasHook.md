[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [utils](../README.md) / isHandlerHasHook

# Function: isHandlerHasHook()

> **isHandlerHasHook**\<`HandlerType`\>(`handler`, `hookName`): `handler is HandlerType & Record<keyof HandlerType, (args: any[]) => any>`

Defined in: [core/src/utils.ts:335](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/utils.ts#L335)

Check if the provided handler has the specified hook.

## Type Parameters

• **HandlerType**

## Parameters

### handler

`any`

The handler to check.

### hookName

keyof `HandlerType`

The hook name to check.

## Returns

`handler is HandlerType & Record<keyof HandlerType, (args: any[]) => any>`

`true` if the handler has the specified hook, otherwise `false`.

[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [utils](../README.md) / isHandlerHasHook

# Function: isHandlerHasHook()

> **isHandlerHasHook**\<`HandlerType`\>(`handler`, `hookName`): `handler is HandlerType & Record<keyof HandlerType, (args: any[]) => any>`

Defined in: [core/src/utils.ts:129](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/utils.ts#L129)

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

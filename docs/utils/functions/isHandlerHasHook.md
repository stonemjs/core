[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [utils](../README.md) / isHandlerHasHook

# Function: isHandlerHasHook()

> **isHandlerHasHook**\<`HandlerType`\>(`handler`, `hookName`): `handler is HandlerType & Record<keyof HandlerType, (args: any[]) => any>`

Defined in: [utils.ts:129](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/utils.ts#L129)

Check if the provided handler has the specified hook.

## Type Parameters

### HandlerType

`HandlerType`

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

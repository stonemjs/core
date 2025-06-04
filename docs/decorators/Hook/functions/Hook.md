[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Hook](../README.md) / Hook

# Function: Hook()

> **Hook**\<`T`\>(`name`): `MethodDecorator`

Defined in: [decorators/Hook.ts:21](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Hook.ts#L21)

Hook decorator to mark a method as a lifecycle hook
And automatically add it to the global lifecycle hook registry.

## Type Parameters

### T

`T` *extends* `Function` = `Function`

## Parameters

### name

[`HookName`](../../../declarations/type-aliases/HookName.md)

The name of the lifecycle hook.

## Returns

`MethodDecorator`

A class decorator function that sets the metadata using the provided options.

## Example

```typescript
class MyClass {
   // ...
   @Hook('onStart')
   onStart () {}
}
```

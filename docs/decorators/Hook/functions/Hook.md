[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Hook](../README.md) / Hook

# Function: Hook()

> **Hook**\<`T`\>(`name`): `MethodDecorator`

Defined in: [core/src/decorators/Hook.ts:21](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/decorators/Hook.ts#L21)

Hook decorator to mark a method as a lifecycle hook
And automatically add it to the global lifecycle hook registry.

## Type Parameters

• **T** *extends* `Function` = `Function`

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

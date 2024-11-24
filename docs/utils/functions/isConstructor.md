[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [utils](../README.md) / isConstructor

# Function: isConstructor()

> **isConstructor**(`value`): `boolean`

Checks if the given value is a constructor function.

This function determines if the provided value is a function
that can be used as a constructor by verifying if it has a prototype.

## Parameters

• **value**: `unknown`

The value to be checked.

## Returns

`boolean`

True if the value is a constructor function, false otherwise.

## Examples

```typescript
class MyClass {}
const result = isConstructor(MyClass); // true
```

```typescript
const notAConstructor = () => {};
const result = isConstructor(notAConstructor); // false
```

## Defined in

[src/utils.ts:71](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/utils.ts#L71)

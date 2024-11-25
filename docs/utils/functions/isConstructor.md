[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [utils](../README.md) / isConstructor

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

[src/utils.ts:72](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/utils.ts#L72)

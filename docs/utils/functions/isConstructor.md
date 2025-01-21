[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [utils](../README.md) / isConstructor

# Function: isConstructor()

> **isConstructor**(`value`): `value is (args: any[]) => any`

Defined in: [utils.ts:76](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/utils.ts#L76)

Checks if the given value is a constructor function.

This function determines if the provided value is a function
that can be used as a constructor by verifying if it has a prototype.

## Parameters

### value

`unknown`

The value to be checked.

## Returns

`value is (args: any[]) => any`

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

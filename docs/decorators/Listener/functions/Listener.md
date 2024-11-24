[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [decorators/Listener](../README.md) / Listener

# Function: Listener()

> **Listener**\<`T`\>(`options`): (`target`, `context`) => `void`

Listener decorator to mark a class as a listener for a specific event.

This decorator is useful for customizing classes that need to listen for specific events within the Stone.js framework.
It allows the class to be recognized and managed by the event-handling system.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **options**: [`ListenerOptions`](../interfaces/ListenerOptions.md)

The configuration options for the listener, including the event to listen for.

## Returns

`Function`

A decorator function to set metadata on the target class.

### Parameters

• **target**: `T`

• **context**: `ClassDecoratorContext`\<`T`\>

### Returns

`void`

## Example

```typescript
@Listener({ event: 'UserRegistered' })
class UserRegisteredListener {
  // Listener class logic here.
}
```

## Defined in

[src/decorators/Listener.ts:34](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/decorators/Listener.ts#L34)

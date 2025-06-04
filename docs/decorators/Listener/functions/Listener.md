[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Listener](../README.md) / Listener

# Function: Listener()

> **Listener**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/Listener.ts:22](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Listener.ts#L22)

Listener decorator to mark a class as a listener for a specific event.

This decorator is useful for customizing classes that need to listen for specific events within the Stone.js framework.
It allows the class to be recognized and managed by the event-handling system.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`ListenerOptions`](../../../declarations/interfaces/ListenerOptions.md)

The configuration options for the listener, including the event to listen for.

## Returns

`ClassDecorator`

A decorator function to set metadata on the target class.

## Example

```typescript
@Listener({ event: 'UserRegistered' })
class UserRegisteredListener {
  // Listener class logic here.
}
```

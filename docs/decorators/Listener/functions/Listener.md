[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Listener](../README.md) / Listener

# Function: Listener()

> **Listener**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/Listener.ts:34](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Listener.ts#L34)

Listener decorator to mark a class as a listener for a specific event.

This decorator is useful for customizing classes that need to listen for specific events within the Stone.js framework.
It allows the class to be recognized and managed by the event-handling system.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`ListenerOptions`](../interfaces/ListenerOptions.md)

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

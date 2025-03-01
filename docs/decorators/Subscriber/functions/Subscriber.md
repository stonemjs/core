[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Subscriber](../README.md) / Subscriber

# Function: Subscriber()

> **Subscriber**\<`T`\>(`options`): `ClassDecorator`

Defined in: [core/src/decorators/Subscriber.ts:34](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/decorators/Subscriber.ts#L34)

Subscriber decorator to mark a class as a subscriber.

This decorator is useful for customizing classes as subscribers within the Stone.js framework,
allowing them to listen for events or perform specific tasks based on their subscription.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`SubscriberOptions`](../interfaces/SubscriberOptions.md) = `{}`

The configuration options for the subscriber.

## Returns

`ClassDecorator`

A decorator function to set metadata on the target class.

## Example

```typescript
@Subscriber({ event: 'UserCreated' })
class UserCreatedSubscriber {
  // Subscriber class logic here.
}
```

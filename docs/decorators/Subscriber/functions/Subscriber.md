[**Core Documentation v0.0.34**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../../modules.md) / [decorators/Subscriber](../README.md) / Subscriber

# Function: Subscriber()

> **Subscriber**\<`T`\>(`options`): (`target`, `context`) => `void`

Subscriber decorator to mark a class as a subscriber.

This decorator is useful for customizing classes as subscribers within the Stone.js framework,
allowing them to listen for events or perform specific tasks based on their subscription.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **options**: [`SubscriberOptions`](../interfaces/SubscriberOptions.md) = `{}`

The configuration options for the subscriber.

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
@Subscriber({ event: 'UserCreated' })
class UserCreatedSubscriber {
  // Subscriber class logic here.
}
```

## Defined in

[src/decorators/Subscriber.ts:34](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/decorators/Subscriber.ts#L34)

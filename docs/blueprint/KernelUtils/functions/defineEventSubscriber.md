[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/KernelUtils](../README.md) / defineEventSubscriber

# Function: defineEventSubscriber()

Registers an event subscriber into the Stone blueprint.
Supports functional, factory-based, and class-based subscribers.

## Param

The subscriber implementation.

## Param

Optional `isFactory` flag to define subscriber type.

## Example

```ts
defineEventSubscriber(MySubscriberClass, { isFactory: false })
defineEventSubscriber(() => ({ subscribe: emitter => ... }), { isFactory: true })
defineEventSubscriber((emitter) => { ... })
```

## Call Signature

> **defineEventSubscriber**(`module`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: blueprint/KernelUtils.ts:469

Registers a **functional event subscriber** into the Stone blueprint.

### Parameters

#### module

[`FunctionalEventSubscriber`](../../../declarations/type-aliases/FunctionalEventSubscriber.md)

The functional subscriber.

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A partial StoneBlueprint with the subscriber metadata.

### Param

The subscriber implementation.

### Param

Optional `isFactory` flag to define subscriber type.

### Example

```ts
defineEventSubscriber(MySubscriberClass, { isFactory: false })
defineEventSubscriber(() => ({ subscribe: emitter => ... }), { isFactory: true })
defineEventSubscriber((emitter) => { ... })
```

## Call Signature

> **defineEventSubscriber**(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: blueprint/KernelUtils.ts:480

Registers a **factory-based event subscriber** into the Stone blueprint.

### Parameters

#### module

[`FactoryEventSubscriber`](../../../declarations/type-aliases/FactoryEventSubscriber.md)

The factory subscriber.

#### options

Must include `isFactory: true`.

##### isFactory

`true`

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A partial StoneBlueprint with the subscriber metadata.

### Param

The subscriber implementation.

### Param

Optional `isFactory` flag to define subscriber type.

### Example

```ts
defineEventSubscriber(MySubscriberClass, { isFactory: false })
defineEventSubscriber(() => ({ subscribe: emitter => ... }), { isFactory: true })
defineEventSubscriber((emitter) => { ... })
```

## Call Signature

> **defineEventSubscriber**(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: blueprint/KernelUtils.ts:492

Registers a **class-based event subscriber** into the Stone blueprint.

### Parameters

#### module

[`IEventSubscriberClass`](../../../declarations/type-aliases/IEventSubscriberClass.md)

The subscriber class.

#### options

Must include `isFactory: false`.

##### isFactory

`false`

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A partial StoneBlueprint with the subscriber metadata.

### Param

The subscriber implementation.

### Param

Optional `isFactory` flag to define subscriber type.

### Example

```ts
defineEventSubscriber(MySubscriberClass, { isFactory: false })
defineEventSubscriber(() => ({ subscribe: emitter => ... }), { isFactory: true })
defineEventSubscriber((emitter) => { ... })
```

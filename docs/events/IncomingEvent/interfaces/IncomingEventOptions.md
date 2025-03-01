[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [events/IncomingEvent](../README.md) / IncomingEventOptions

# Interface: IncomingEventOptions

Defined in: [core/src/events/IncomingEvent.ts:7](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/events/IncomingEvent.ts#L7)

IncomingEventOptions.

## Extends

- [`EventOptions`](../../Event/interfaces/EventOptions.md)

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### locale?

> `optional` **locale**: `string`

Defined in: [core/src/events/IncomingEvent.ts:8](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/events/IncomingEvent.ts#L8)

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [core/src/events/Event.ts:10](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/events/Event.ts#L10)

#### Inherited from

[`EventOptions`](../../Event/interfaces/EventOptions.md).[`metadata`](../../Event/interfaces/EventOptions.md#metadata)

***

### source

> **source**: [`IncomingEventSource`](../../../declarations/interfaces/IncomingEventSource.md)

Defined in: [core/src/events/IncomingEvent.ts:9](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/events/IncomingEvent.ts#L9)

#### Overrides

[`EventOptions`](../../Event/interfaces/EventOptions.md).[`source`](../../Event/interfaces/EventOptions.md#source)

***

### timeStamp?

> `optional` **timeStamp**: `number`

Defined in: [core/src/events/Event.ts:9](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/events/Event.ts#L9)

#### Inherited from

[`EventOptions`](../../Event/interfaces/EventOptions.md).[`timeStamp`](../../Event/interfaces/EventOptions.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: [core/src/events/Event.ts:7](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/events/Event.ts#L7)

#### Inherited from

[`EventOptions`](../../Event/interfaces/EventOptions.md).[`type`](../../Event/interfaces/EventOptions.md#type)

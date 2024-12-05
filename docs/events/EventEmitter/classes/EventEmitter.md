[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [events/EventEmitter](../README.md) / EventEmitter

# Class: EventEmitter

Class representing an EventEmitter.

## Extends

- `EventEmitter`

## Constructors

### new EventEmitter()

> **new EventEmitter**(`options`?): [`EventEmitter`](EventEmitter.md)

#### Parameters

• **options?**: `EventEmitterOptions`

#### Returns

[`EventEmitter`](EventEmitter.md)

#### Inherited from

`NodeEventEmitter.constructor`

#### Defined in

node\_modules/@types/node/events.d.ts:134

## Methods

### emit()

Overloaded emit method to accept either a custom Event or event name and arguments.

#### Param

The event name or an instance of Event.

#### Param

Additional arguments to pass when emitting.

#### emit(event)

> **emit**(`event`): `boolean`

Overloaded emit method to accept either a custom Event or event name and arguments.

##### Parameters

• **event**: [`Event`](../../Event/classes/Event.md)

The event name or an instance of Event.

##### Returns

`boolean`

##### Param

The event name or an instance of Event.

##### Param

Additional arguments to pass when emitting.

##### Overrides

`NodeEventEmitter.emit`

##### Defined in

[src/events/EventEmitter.ts:18](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/EventEmitter.ts#L18)

#### emit(event, args)

> **emit**(`event`, ...`args`): `boolean`

Overloaded emit method to accept either a custom Event or event name and arguments.

##### Parameters

• **event**: `symbol`

The event name or an instance of Event.

• ...**args**: `any`[]

Additional arguments to pass when emitting.

##### Returns

`boolean`

##### Param

The event name or an instance of Event.

##### Param

Additional arguments to pass when emitting.

##### Overrides

`NodeEventEmitter.emit`

##### Defined in

[src/events/EventEmitter.ts:25](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/EventEmitter.ts#L25)

#### emit(event, args)

> **emit**(`event`, ...`args`): `boolean`

Overloaded emit method to accept either a custom Event or event name and arguments.

##### Parameters

• **event**: `string`

The event name or an instance of Event.

• ...**args**: `any`[]

Additional arguments to pass when emitting.

##### Returns

`boolean`

##### Param

The event name or an instance of Event.

##### Param

Additional arguments to pass when emitting.

##### Overrides

`NodeEventEmitter.emit`

##### Defined in

[src/events/EventEmitter.ts:32](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/EventEmitter.ts#L32)

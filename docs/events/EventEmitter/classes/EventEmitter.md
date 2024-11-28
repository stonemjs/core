[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [events/EventEmitter](../README.md) / EventEmitter

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

[src/events/EventEmitter.ts:18](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/events/EventEmitter.ts#L18)

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

[src/events/EventEmitter.ts:25](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/events/EventEmitter.ts#L25)

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

[src/events/EventEmitter.ts:32](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/events/EventEmitter.ts#L32)

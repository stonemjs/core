[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [events/EventEmitter](../README.md) / EventEmitter

# Class: EventEmitter

Defined in: [src/events/EventEmitter.ts:12](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/events/EventEmitter.ts#L12)

Class representing an EventEmitter.

## Extends

- `EventEmitter`

## Constructors

### new EventEmitter()

> **new EventEmitter**(`options`?): [`EventEmitter`](EventEmitter.md)

Defined in: node\_modules/@types/node/events.d.ts:134

#### Parameters

##### options?

`EventEmitterOptions`

#### Returns

[`EventEmitter`](EventEmitter.md)

#### Inherited from

`NodeEventEmitter.constructor`

## Methods

### emit()

Overloaded emit method to accept either a custom Event or event name and arguments.

#### Param

The event name or an instance of Event.

#### Param

Additional arguments to pass when emitting.

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: [src/events/EventEmitter.ts:18](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/events/EventEmitter.ts#L18)

Overloaded emit method to accept either a custom Event or event name and arguments.

##### Parameters

###### event

[`Event`](../../Event/classes/Event.md)

The event name or an instance of Event.

##### Returns

`boolean`

##### Param

The event name or an instance of Event.

##### Param

Additional arguments to pass when emitting.

##### Overrides

`NodeEventEmitter.emit`

#### Call Signature

> **emit**(`event`, ...`args`): `boolean`

Defined in: [src/events/EventEmitter.ts:25](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/events/EventEmitter.ts#L25)

Overloaded emit method to accept either a custom Event or event name and arguments.

##### Parameters

###### event

`symbol`

The event name or an instance of Event.

###### args

...`any`[]

Additional arguments to pass when emitting.

##### Returns

`boolean`

##### Param

The event name or an instance of Event.

##### Param

Additional arguments to pass when emitting.

##### Overrides

`NodeEventEmitter.emit`

#### Call Signature

> **emit**(`event`, ...`args`): `boolean`

Defined in: [src/events/EventEmitter.ts:32](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/events/EventEmitter.ts#L32)

Overloaded emit method to accept either a custom Event or event name and arguments.

##### Parameters

###### event

`string`

The event name or an instance of Event.

###### args

...`any`[]

Additional arguments to pass when emitting.

##### Returns

`boolean`

##### Param

The event name or an instance of Event.

##### Param

Additional arguments to pass when emitting.

##### Overrides

`NodeEventEmitter.emit`

[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [StoneFactory](../README.md) / StoneFactory

# Class: StoneFactory\<TEvent, UResponse\>

Defined in: [StoneFactory.ts:38](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/StoneFactory.ts#L38)

StoneFactory.

This class provides a fluent interface for building Stone applications.
It is responsible for creating and running the main application by resolving
the appropriate adapter from the provided blueprint. It handles the core setup of the application.

## Template

UResponse

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Methods

### configure()

> **configure**(`configuration`): `this`

Defined in: [StoneFactory.ts:76](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/StoneFactory.ts#L76)

Configure the application using the blueprint resolver.
Use this method to add custom configurations to the application.

#### Parameters

##### configuration

The user-defined blueprint configuration.

[`FunctionalConfiguration`](../../declarations/type-aliases/FunctionalConfiguration.md) | `Partial`\<`Record`\<`"configure"` \| `"afterConfigure"`, [`FunctionalConfiguration`](../../declarations/type-aliases/FunctionalConfiguration.md)\>\>

#### Returns

`this`

The current StoneFactory instance.

***

### handle()

> **handle**\<`ExecutionResultType`\>(`handler`): `Promise`\<`ExecutionResultType`\>

Defined in: [StoneFactory.ts:92](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/StoneFactory.ts#L92)

Handle application events.
This method is a shorthand for running the application with the provided event handler.

#### Type Parameters

##### ExecutionResultType

`ExecutionResultType` = `unknown`

#### Parameters

##### handler

[`MixedEventHandler`](../../declarations/type-aliases/MixedEventHandler.md)\<`TEvent`, `unknown`\>

The application event handler function.

#### Returns

`Promise`\<`ExecutionResultType`\>

The platform-specific response.

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [StoneFactory.ts:103](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/StoneFactory.ts#L103)

Run the application.
Populates the blueprint via introspection and runs the application.

#### Type Parameters

##### ExecutionResultType

`ExecutionResultType` = `unknown`

#### Returns

`Promise`\<`ExecutionResultType`\>

The platform-specific response.

***

### create()

> `static` **create**\<`TEvent`, `UResponse`\>(`options`): `StoneFactory`\<`TEvent`, `UResponse`\>

Defined in: [StoneFactory.ts:53](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/StoneFactory.ts#L53)

Create a new StoneFactory instance.

#### Type Parameters

##### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

##### UResponse

`UResponse` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

#### Parameters

##### options

[`StoneFactoryOptions`](../interfaces/StoneFactoryOptions.md) = `{}`

The options to create the StoneFactory.

#### Returns

`StoneFactory`\<`TEvent`, `UResponse`\>

A new StoneFactory instance.

#### Example

```typescript
const stone = StoneFactory.create({ modules: [/* your modules */] });
```

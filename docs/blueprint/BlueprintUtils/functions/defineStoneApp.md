[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/BlueprintUtils](../README.md) / defineStoneApp

# Function: defineStoneApp()

Declares a complete Stone application blueprint.

This utility combines a main event handler with additional blueprints and configuration options
to define a full application. The event handler can be functional, class-based, or factory-based.

## Param

A function, factory, or class that handles incoming events.

## Param

Optional application-level configuration (log level, middleware, lifecycle, etc.)

## Param

Additional partial blueprints to merge into the final one.

## Example

```ts
defineStoneApp((event) => new OutgoingResponse({ content: 'ok' }))
defineStoneApp(MyHandlerClass, { isFactory: false })
defineStoneApp(() => (event) => new OutgoingResponse({ content: 'ok' }), { isFactory: true })
```

## Call Signature

> **defineStoneApp**\<`U`, `V`\>(`module`, `options?`, `blueprints?`): [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

Defined in: [blueprint/BlueprintUtils.ts:33](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/BlueprintUtils.ts#L33)

Declares a complete Stone application blueprint using a function-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`FunctionalEventHandler`](../../../declarations/type-aliases/FunctionalEventHandler.md)\<`U`, `V`\>

A function as an event handler.

#### options?

`Partial`\<[`AppConfig`](../../../options/StoneBlueprint/interfaces/AppConfig.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Application-level configuration.

#### blueprints?

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`any`, `any`\> & `Record`\<`string`, `any`\>[]

Additional partial blueprints to merge.

### Returns

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

A fully merged Stone blueprint representing the application.

### Param

A function, factory, or class that handles incoming events.

### Param

Optional application-level configuration (log level, middleware, lifecycle, etc.)

### Param

Additional partial blueprints to merge into the final one.

### Example

```ts
defineStoneApp((event) => new OutgoingResponse({ content: 'ok' }))
defineStoneApp(MyHandlerClass, { isFactory: false })
defineStoneApp(() => (event) => new OutgoingResponse({ content: 'ok' }), { isFactory: true })
```

## Call Signature

> **defineStoneApp**\<`U`, `V`\>(`module`, `options`, `blueprints?`): [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

Defined in: [blueprint/BlueprintUtils.ts:47](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/BlueprintUtils.ts#L47)

Declares a complete Stone application blueprint using a factory-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`FactoryEventHandler`](../../../declarations/type-aliases/FactoryEventHandler.md)\<`U`, `V`\>

A factory function that returns an event handler.

#### options

`Partial`\<[`AppConfig`](../../../options/StoneBlueprint/interfaces/AppConfig.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\> & `object`

Application-level configuration with `{ isFactory: true }`.

#### blueprints?

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`any`, `any`\> & `Record`\<`string`, `any`\>[]

Additional partial blueprints to merge.

### Returns

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

A fully merged Stone blueprint representing the application.

### Param

A function, factory, or class that handles incoming events.

### Param

Optional application-level configuration (log level, middleware, lifecycle, etc.)

### Param

Additional partial blueprints to merge into the final one.

### Example

```ts
defineStoneApp((event) => new OutgoingResponse({ content: 'ok' }))
defineStoneApp(MyHandlerClass, { isFactory: false })
defineStoneApp(() => (event) => new OutgoingResponse({ content: 'ok' }), { isFactory: true })
```

## Call Signature

> **defineStoneApp**\<`U`, `V`\>(`module`, `options`, `blueprints?`): [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

Defined in: [blueprint/BlueprintUtils.ts:61](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/BlueprintUtils.ts#L61)

Declares a complete Stone application blueprint using a class-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`EventHandlerClass`](../../../declarations/type-aliases/EventHandlerClass.md)\<`U`, `V`\>

A class constructor for the event handler.

#### options

`Partial`\<[`AppConfig`](../../../options/StoneBlueprint/interfaces/AppConfig.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\> & `object`

Application-level configuration with `{ isFactory: false }`.

#### blueprints?

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`any`, `any`\> & `Record`\<`string`, `any`\>[]

Additional partial blueprints to merge.

### Returns

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

A fully merged Stone blueprint representing the application.

### Param

A function, factory, or class that handles incoming events.

### Param

Optional application-level configuration (log level, middleware, lifecycle, etc.)

### Param

Additional partial blueprints to merge into the final one.

### Example

```ts
defineStoneApp((event) => new OutgoingResponse({ content: 'ok' }))
defineStoneApp(MyHandlerClass, { isFactory: false })
defineStoneApp(() => (event) => new OutgoingResponse({ content: 'ok' }), { isFactory: true })
```

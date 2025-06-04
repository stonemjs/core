[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/BlueprintUtils](../README.md) / defineStoneApp

# Function: defineStoneApp()

Defines a Stone app using a function-based, factory-based or class-based main handler.

## Param

A function, factory function or class constructor for the main page.

## Param

Optional application-level configuration.

## Param

Additional blueprints to merge.

## Call Signature

> **defineStoneApp**\<`U`\>(`module`, `options?`, `blueprints?`): [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

Defined in: [blueprint/BlueprintUtils.ts:32](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/BlueprintUtils.ts#L32)

Declares a complete Stone application blueprint using a function-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

### Parameters

#### module

[`FunctionalEventHandler`](../../../declarations/type-aliases/FunctionalEventHandler.md)\<`U`\>

A function as an event handler.

#### options?

`Partial`\<[`AppConfig`](../../../options/StoneBlueprint/interfaces/AppConfig.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\> & `object`

Application-level configuration.

#### blueprints?

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`any`, `any`\> & `Record`\<`string`, `any`\>[]

Additional partial blueprints to merge.

### Returns

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

A fully merged Stone blueprint.

### Param

A function, factory function or class constructor for the main page.

### Param

Optional application-level configuration.

### Param

Additional blueprints to merge.

## Call Signature

> **defineStoneApp**\<`U`\>(`module`, `options`, `blueprints?`): [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

Defined in: [blueprint/BlueprintUtils.ts:46](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/BlueprintUtils.ts#L46)

Declares a complete Stone application blueprint using a factory-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

### Parameters

#### module

[`FactoryEventHandler`](../../../declarations/type-aliases/FactoryEventHandler.md)\<`U`\>

A factory function that returns an event handler.

#### options

`Partial`\<[`AppConfig`](../../../options/StoneBlueprint/interfaces/AppConfig.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\> & `object`

Application-level configuration with `{ isFactory: true }`.

#### blueprints?

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`any`, `any`\> & `Record`\<`string`, `any`\>[]

Additional partial blueprints to merge.

### Returns

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

A fully merged Stone blueprint.

### Param

A function, factory function or class constructor for the main page.

### Param

Optional application-level configuration.

### Param

Additional blueprints to merge.

## Call Signature

> **defineStoneApp**\<`U`\>(`module`, `options`, `blueprints?`): [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

Defined in: [blueprint/BlueprintUtils.ts:60](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/BlueprintUtils.ts#L60)

Declares a complete Stone application blueprint using a class-based event handler.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

### Parameters

#### module

[`EventHandlerClass`](../../../declarations/type-aliases/EventHandlerClass.md)\<`U`\>

A class constructor for the event handler.

#### options

`Partial`\<[`AppConfig`](../../../options/StoneBlueprint/interfaces/AppConfig.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\> & `object`

Application-level configuration with `{ isClass: true }`.

#### blueprints?

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`any`, `any`\> & `Record`\<`string`, `any`\>[]

Additional partial blueprints to merge.

### Returns

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

A fully merged Stone blueprint.

### Param

A function, factory function or class constructor for the main page.

### Param

Optional application-level configuration.

### Param

Additional blueprints to merge.

## Call Signature

> **defineStoneApp**\<`U`\>(`options?`, `blueprints?`): [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

Defined in: [blueprint/BlueprintUtils.ts:73](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/BlueprintUtils.ts#L73)

Defines a Stone app without a main handler (router-only).

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

### Parameters

#### options?

`Partial`\<[`AppConfig`](../../../options/StoneBlueprint/interfaces/AppConfig.md)\<`U`, [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Application-level configuration.

#### blueprints?

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`any`, `any`\> & `Record`\<`string`, `any`\>[]

Additional partial blueprints to merge.

### Returns

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`\>

A fully merged Stone blueprint.

### Param

A function, factory function or class constructor for the main page.

### Param

Optional application-level configuration.

### Param

Additional blueprints to merge.

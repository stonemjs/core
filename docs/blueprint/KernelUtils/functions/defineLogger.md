[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/KernelUtils](../README.md) / defineLogger

# Function: defineLogger()

Registers a logger (class-based or factory-based) into the Stone blueprint.

## Param

Either a logger class or factory function.

## Param

Optional configuration, including log level and isFactory flag.

## Example

```ts
defineLogger(MyLogger, { level: 'debug', isClass: true })
defineLogger((ctx) => new MyLogger(ctx), { level: 'info', isFactory: true })
```

## Call Signature

> **defineLogger**(`module`, `options?`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/KernelUtils.ts:531](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/blueprint/KernelUtils.ts#L531)

Registers a **class-based logger** into the Stone blueprint.

### Parameters

#### module

[`ILoggerClass`](../../../declarations/type-aliases/ILoggerClass.md)

The logger class that implements `ILogger`.

#### options?

`object` & `Record`\<`string`, `unknown`\>

Optional configuration (must include `isClass: true` if specified).

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A partial StoneBlueprint with the logger resolver and settings.

### Param

Either a logger class or factory function.

### Param

Optional configuration, including log level and isFactory flag.

### Example

```ts
defineLogger(MyLogger, { level: 'debug', isClass: true })
defineLogger((ctx) => new MyLogger(ctx), { level: 'info', isFactory: true })
```

## Call Signature

> **defineLogger**(`module`, `options?`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/KernelUtils.ts:543](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/blueprint/KernelUtils.ts#L543)

Registers a **factory-based logger** into the Stone blueprint.

### Parameters

#### module

[`FactoryLogger`](../../../declarations/type-aliases/FactoryLogger.md)

The logger factory function.

#### options?

`object` & `Record`\<`string`, `unknown`\>

Optional configuration (must include `isFactory: true` if specified).

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

A partial StoneBlueprint with the logger resolver and settings.

### Param

Either a logger class or factory function.

### Param

Optional configuration, including log level and isFactory flag.

### Example

```ts
defineLogger(MyLogger, { level: 'debug', isClass: true })
defineLogger((ctx) => new MyLogger(ctx), { level: 'info', isFactory: true })
```

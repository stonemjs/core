[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [errors/SetupError](../README.md) / SetupError

# Class: SetupError

Custom error for Setup layer operations.

## Extends

- [`RuntimeError`](../../RuntimeError/classes/RuntimeError.md)

## Constructors

### new SetupError()

> **new SetupError**(`message`, `options`): [`SetupError`](SetupError.md)

#### Parameters

• **message**: `string`

• **options**: [`ErrorOptions`](../../../definitions/interfaces/ErrorOptions.md) = `{}`

#### Returns

[`SetupError`](SetupError.md)

#### Overrides

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`constructor`](../../RuntimeError/classes/RuntimeError.md#constructors)

#### Defined in

[src/errors/SetupError.ts:8](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/errors/SetupError.ts#L8)

## Properties

### code?

> `readonly` `optional` **code**: `string`

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`code`](../../RuntimeError/classes/RuntimeError.md#code)

#### Defined in

[src/errors/RuntimeError.ts:9](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/errors/RuntimeError.ts#L9)

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`metadata`](../../RuntimeError/classes/RuntimeError.md#metadata)

#### Defined in

[src/errors/RuntimeError.ts:10](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/errors/RuntimeError.ts#L10)

## Methods

### toString()

> **toString**(`multiline`): `string`

Converts the error to a formatted string representation.

#### Parameters

• **multiline**: `boolean` = `false`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`toString`](../../RuntimeError/classes/RuntimeError.md#tostring)

#### Defined in

[src/errors/RuntimeError.ts:40](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/errors/RuntimeError.ts#L40)

[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [errors/InitializationError](../README.md) / InitializationError

# Class: InitializationError

Custom error for Initialization layer operations.

## Extends

- [`RuntimeError`](../../RuntimeError/classes/RuntimeError.md)

## Constructors

### new InitializationError()

> **new InitializationError**(`message`, `options`): [`InitializationError`](InitializationError.md)

#### Parameters

• **message**: `string`

• **options**: [`ErrorOptions`](../../../definitions/interfaces/ErrorOptions.md) = `{}`

#### Returns

[`InitializationError`](InitializationError.md)

#### Overrides

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`constructor`](../../RuntimeError/classes/RuntimeError.md#constructors)

#### Defined in

[src/errors/InitializationError.ts:8](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/errors/InitializationError.ts#L8)

## Properties

### code?

> `readonly` `optional` **code**: `string`

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`code`](../../RuntimeError/classes/RuntimeError.md#code)

#### Defined in

[src/errors/RuntimeError.ts:9](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/errors/RuntimeError.ts#L9)

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`metadata`](../../RuntimeError/classes/RuntimeError.md#metadata)

#### Defined in

[src/errors/RuntimeError.ts:10](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/errors/RuntimeError.ts#L10)

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

[src/errors/RuntimeError.ts:40](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/errors/RuntimeError.ts#L40)

[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [errors/RuntimeError](../README.md) / RuntimeError

# Class: RuntimeError

Class representing a RuntimeError.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- `Error`

## Extended by

- [`InitializationError`](../../InitializationError/classes/InitializationError.md)
- [`IntegrationError`](../../IntegrationError/classes/IntegrationError.md)
- [`SetupError`](../../SetupError/classes/SetupError.md)

## Constructors

### new RuntimeError()

> **new RuntimeError**(`message`, `options`): [`RuntimeError`](RuntimeError.md)

Create a RuntimeError.

#### Parameters

• **message**: `string`

The message to log.

• **options**: [`ErrorOptions`](../../../definitions/interfaces/ErrorOptions.md) = `{}`

The error options.

#### Returns

[`RuntimeError`](RuntimeError.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/errors/RuntimeError.ts:28](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/errors/RuntimeError.ts#L28)

## Properties

### code?

> `readonly` `optional` **code**: `string`

#### Defined in

[src/errors/RuntimeError.ts:9](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/errors/RuntimeError.ts#L9)

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

#### Defined in

[src/errors/RuntimeError.ts:10](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/errors/RuntimeError.ts#L10)

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

#### Defined in

[src/errors/RuntimeError.ts:50](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/errors/RuntimeError.ts#L50)

***

### create()

> `static` **create**\<`T`\>(`message`, `options`): `T`

Create a RuntimeError.

#### Type Parameters

• **T** *extends* [`RuntimeError`](RuntimeError.md) = [`RuntimeError`](RuntimeError.md)

#### Parameters

• **message**: `string`

• **options**: [`ErrorOptions`](../../../definitions/interfaces/ErrorOptions.md) = `{}`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Defined in

[src/errors/RuntimeError.ts:18](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/errors/RuntimeError.ts#L18)

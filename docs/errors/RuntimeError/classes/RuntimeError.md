[**Core Documentation v0.0.2**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../../modules.md) / [errors/RuntimeError](../README.md) / RuntimeError

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

[src/errors/RuntimeError.ts:18](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/errors/RuntimeError.ts#L18)

## Properties

### code?

> `readonly` `optional` **code**: `string`

#### Defined in

[src/errors/RuntimeError.ts:9](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/errors/RuntimeError.ts#L9)

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

#### Defined in

[src/errors/RuntimeError.ts:10](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/errors/RuntimeError.ts#L10)

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

[src/errors/RuntimeError.ts:40](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/errors/RuntimeError.ts#L40)

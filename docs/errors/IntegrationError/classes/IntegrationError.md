[**Core Documentation v0.0.2**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../../modules.md) / [errors/IntegrationError](../README.md) / IntegrationError

# Class: IntegrationError

Custom error for Integration layer operations.

## Extends

- [`RuntimeError`](../../RuntimeError/classes/RuntimeError.md)

## Constructors

### new IntegrationError()

> **new IntegrationError**(`message`, `options`): [`IntegrationError`](IntegrationError.md)

#### Parameters

• **message**: `string`

• **options**: [`ErrorOptions`](../../../definitions/interfaces/ErrorOptions.md) = `{}`

#### Returns

[`IntegrationError`](IntegrationError.md)

#### Overrides

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`constructor`](../../RuntimeError/classes/RuntimeError.md#constructors)

#### Defined in

src/errors/IntegrationError.ts:8

## Properties

### code?

> `readonly` `optional` **code**: `string`

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`code`](../../RuntimeError/classes/RuntimeError.md#code)

#### Defined in

src/errors/RuntimeError.ts:9

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`metadata`](../../RuntimeError/classes/RuntimeError.md#metadata)

#### Defined in

src/errors/RuntimeError.ts:10

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

src/errors/RuntimeError.ts:40

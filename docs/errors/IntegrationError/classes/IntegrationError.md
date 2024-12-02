[**Core Documentation v0.0.32**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../../modules.md) / [errors/IntegrationError](../README.md) / IntegrationError

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

[src/errors/IntegrationError.ts:8](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/errors/IntegrationError.ts#L8)

## Properties

### code?

> `readonly` `optional` **code**: `string`

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`code`](../../RuntimeError/classes/RuntimeError.md#code)

#### Defined in

[src/errors/RuntimeError.ts:9](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/errors/RuntimeError.ts#L9)

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`metadata`](../../RuntimeError/classes/RuntimeError.md#metadata)

#### Defined in

[src/errors/RuntimeError.ts:10](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/errors/RuntimeError.ts#L10)

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

[src/errors/RuntimeError.ts:50](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/errors/RuntimeError.ts#L50)

***

### create()

> `static` **create**\<`T`\>(`message`, `options`): `T`

Create a RuntimeError.

#### Type Parameters

• **T** *extends* [`RuntimeError`](../../RuntimeError/classes/RuntimeError.md) = [`RuntimeError`](../../RuntimeError/classes/RuntimeError.md)

#### Parameters

• **message**: `string`

• **options**: [`ErrorOptions`](../../../definitions/interfaces/ErrorOptions.md) = `{}`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`create`](../../RuntimeError/classes/RuntimeError.md#create)

#### Defined in

[src/errors/RuntimeError.ts:18](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/errors/RuntimeError.ts#L18)

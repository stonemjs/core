[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [errors/IntegrationError](../README.md) / IntegrationError

# Class: IntegrationError

Defined in: [src/errors/IntegrationError.ts:7](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/errors/IntegrationError.ts#L7)

Custom error for Integration layer operations.

## Extends

- [`RuntimeError`](../../RuntimeError/classes/RuntimeError.md)

## Constructors

### new IntegrationError()

> **new IntegrationError**(`message`, `options`): [`IntegrationError`](IntegrationError.md)

Defined in: [src/errors/IntegrationError.ts:8](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/errors/IntegrationError.ts#L8)

#### Parameters

##### message

`string`

##### options

[`ErrorOptions`](../../../definitions/interfaces/ErrorOptions.md) = `{}`

#### Returns

[`IntegrationError`](IntegrationError.md)

#### Overrides

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`constructor`](../../RuntimeError/classes/RuntimeError.md#constructors)

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: [src/errors/RuntimeError.ts:10](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/errors/RuntimeError.ts#L10)

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`cause`](../../RuntimeError/classes/RuntimeError.md#cause)

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: [src/errors/RuntimeError.ts:9](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/errors/RuntimeError.ts#L9)

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`code`](../../RuntimeError/classes/RuntimeError.md#code)

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: [src/errors/RuntimeError.ts:11](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/errors/RuntimeError.ts#L11)

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`metadata`](../../RuntimeError/classes/RuntimeError.md#metadata)

## Methods

### toString()

> **toString**(`multiline`): `string`

Defined in: [src/errors/RuntimeError.ts:51](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/errors/RuntimeError.ts#L51)

Converts the error to a formatted string representation.

#### Parameters

##### multiline

`boolean` = `false`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`toString`](../../RuntimeError/classes/RuntimeError.md#tostring)

***

### create()

> `static` **create**\<`T`\>(`message`, `options`): `T`

Defined in: [src/errors/RuntimeError.ts:19](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/errors/RuntimeError.ts#L19)

Create a RuntimeError.

#### Type Parameters

• **T** *extends* [`RuntimeError`](../../RuntimeError/classes/RuntimeError.md) = [`RuntimeError`](../../RuntimeError/classes/RuntimeError.md)

#### Parameters

##### message

`string`

##### options

[`ErrorOptions`](../../../definitions/interfaces/ErrorOptions.md) = `{}`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Inherited from

[`RuntimeError`](../../RuntimeError/classes/RuntimeError.md).[`create`](../../RuntimeError/classes/RuntimeError.md#create)

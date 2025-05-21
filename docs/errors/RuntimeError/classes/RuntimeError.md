[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [errors/RuntimeError](../README.md) / RuntimeError

# Class: RuntimeError

Defined in: [errors/RuntimeError.ts:8](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/errors/RuntimeError.ts#L8)

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

### Constructor

> **new RuntimeError**(`message`, `options`): `RuntimeError`

Defined in: [errors/RuntimeError.ts:29](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/errors/RuntimeError.ts#L29)

Create a RuntimeError.

#### Parameters

##### message

`string`

The message to log.

##### options

[`ErrorOptions`](../../../declarations/interfaces/ErrorOptions.md) = `{}`

The error options.

#### Returns

`RuntimeError`

#### Overrides

`Error.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: [errors/RuntimeError.ts:10](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/errors/RuntimeError.ts#L10)

#### Overrides

`Error.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: [errors/RuntimeError.ts:9](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/errors/RuntimeError.ts#L9)

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: [errors/RuntimeError.ts:11](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/errors/RuntimeError.ts#L11)

## Methods

### toString()

> **toString**(`multiline`): `string`

Defined in: [errors/RuntimeError.ts:51](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/errors/RuntimeError.ts#L51)

Converts the error to a formatted string representation.

#### Parameters

##### multiline

`boolean` = `false`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

***

### create()

> `static` **create**\<`T`\>(`message`, `options`): `T`

Defined in: [errors/RuntimeError.ts:19](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/errors/RuntimeError.ts#L19)

Create a RuntimeError.

#### Type Parameters

##### T

`T` *extends* `RuntimeError` = `RuntimeError`

#### Parameters

##### message

`string`

##### options

[`ErrorOptions`](../../../declarations/interfaces/ErrorOptions.md) = `{}`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

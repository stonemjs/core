[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [ErrorHandler](../README.md) / ErrorHandler

# Class: ErrorHandler\<R\>

Class representing an ErrorHandler.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

• **R**

## Implements

- [`IErrorHandler`](../../definitions/interfaces/IErrorHandler.md)\<`R`\>

## Constructors

### new ErrorHandler()

> `protected` **new ErrorHandler**\<`R`\>(`container`): [`ErrorHandler`](ErrorHandler.md)\<`R`\>

Create an ErrorHandler.

#### Parameters

• **container**: [`ErrorHandlerOptions`](../interfaces/ErrorHandlerOptions.md)\<`R`\>

Service container to resolve dependencies.

#### Returns

[`ErrorHandler`](ErrorHandler.md)\<`R`\>

#### Defined in

[src/ErrorHandler.ts:64](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/ErrorHandler.ts#L64)

## Methods

### dontReportDuplicates()

> **dontReportDuplicates**(): `this`

Do not report this error class multiple times.

#### Returns

`this`

This ErrorHandler instance.

#### Defined in

[src/ErrorHandler.ts:127](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/ErrorHandler.ts#L127)

***

### ignore()

> **ignore**(`Class`): `this`

Do not report this error class.

#### Parameters

• **Class**

The error class to ignore.

#### Returns

`this`

This ErrorHandler instance.

#### Defined in

[src/ErrorHandler.ts:96](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/ErrorHandler.ts#L96)

***

### level()

> **level**(`Class`, `level`): `this`

Determine log level by error class.

#### Parameters

• **Class**

The error class.

• **level**: [`LogLevel`](../../definitions/enumerations/LogLevel.md)

The log level.

#### Returns

`this`

This ErrorHandler instance.

#### Defined in

[src/ErrorHandler.ts:84](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/ErrorHandler.ts#L84)

***

### render()

> **render**(`error`): `R`

Prepare this error instance for rendering.

#### Parameters

• **error**: `Error`

The error instance to prepare.

#### Returns

`R`

The rendered error object.

#### Implementation of

[`IErrorHandler`](../../definitions/interfaces/IErrorHandler.md).[`render`](../../definitions/interfaces/IErrorHandler.md#render)

#### Defined in

[src/ErrorHandler.ts:165](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/ErrorHandler.ts#L165)

***

### report()

> **report**(`error`): `this`

Report this error instance.

#### Parameters

• **error**: `Error`

The error instance to report.

#### Returns

`this`

This ErrorHandler instance.

#### Implementation of

[`IErrorHandler`](../../definitions/interfaces/IErrorHandler.md).[`report`](../../definitions/interfaces/IErrorHandler.md#report)

#### Defined in

[src/ErrorHandler.ts:152](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/ErrorHandler.ts#L152)

***

### reportDuplicates()

> **reportDuplicates**(): `this`

Report this error class multiple times.

#### Returns

`this`

This ErrorHandler instance.

#### Defined in

[src/ErrorHandler.ts:117](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/ErrorHandler.ts#L117)

***

### shouldReport()

> **shouldReport**(`error`): `boolean`

Check if this error instance should be reported or not.

#### Parameters

• **error**: `Error`

The error instance to check.

#### Returns

`boolean`

Whether the error should be reported.

#### Defined in

[src/ErrorHandler.ts:138](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/ErrorHandler.ts#L138)

***

### stopIgnoring()

> **stopIgnoring**(`Class`): `this`

Stop ignoring this error class.

#### Parameters

• **Class**

The error class to stop ignoring.

#### Returns

`this`

This ErrorHandler instance.

#### Defined in

[src/ErrorHandler.ts:107](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/ErrorHandler.ts#L107)

***

### create()

> `static` **create**\<`R`\>(`options`): [`ErrorHandler`](ErrorHandler.md)\<`R`\>

Create an ErrorHandler.

#### Type Parameters

• **R**

#### Parameters

• **options**: [`ErrorHandlerOptions`](../interfaces/ErrorHandlerOptions.md)\<`R`\>

The options to create an ErrorHandler.

#### Returns

[`ErrorHandler`](ErrorHandler.md)\<`R`\>

A new ErrorHandler instance.

#### Defined in

[src/ErrorHandler.ts:55](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/ErrorHandler.ts#L55)

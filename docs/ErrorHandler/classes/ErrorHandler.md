[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [ErrorHandler](../README.md) / ErrorHandler

# Class: ErrorHandler\<R, E\>

Class representing an ErrorHandler.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

• **R**

• **E** *extends* [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md) = [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md)

## Implements

- [`IErrorHandler`](../../definitions/interfaces/IErrorHandler.md)\<`R`, `E`\>

## Constructors

### new ErrorHandler()

> `protected` **new ErrorHandler**\<`R`, `E`\>(`container`): [`ErrorHandler`](ErrorHandler.md)\<`R`, `E`\>

Create an ErrorHandler.

#### Parameters

• **container**: [`ErrorHandlerOptions`](../interfaces/ErrorHandlerOptions.md)\<`R`, `E`\>

Service container to resolve dependencies.

#### Returns

[`ErrorHandler`](ErrorHandler.md)\<`R`, `E`\>

#### Defined in

[src/ErrorHandler.ts:65](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L65)

## Methods

### dontReportDuplicates()

> **dontReportDuplicates**(): `this`

Do not report this error class multiple times.

#### Returns

`this`

This ErrorHandler instance.

#### Defined in

[src/ErrorHandler.ts:128](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L128)

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

[src/ErrorHandler.ts:97](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L97)

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

[src/ErrorHandler.ts:85](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L85)

***

### render()

> **render**(`error`): `R`

Prepare this error instance for rendering.

#### Parameters

• **error**: `E`

The error instance to prepare.

#### Returns

`R`

The rendered error object.

#### Implementation of

[`IErrorHandler`](../../definitions/interfaces/IErrorHandler.md).[`render`](../../definitions/interfaces/IErrorHandler.md#render)

#### Defined in

[src/ErrorHandler.ts:166](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L166)

***

### report()

> **report**(`error`): `this`

Report this error instance.

#### Parameters

• **error**: `E`

The error instance to report.

#### Returns

`this`

This ErrorHandler instance.

#### Implementation of

[`IErrorHandler`](../../definitions/interfaces/IErrorHandler.md).[`report`](../../definitions/interfaces/IErrorHandler.md#report)

#### Defined in

[src/ErrorHandler.ts:153](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L153)

***

### reportDuplicates()

> **reportDuplicates**(): `this`

Report this error class multiple times.

#### Returns

`this`

This ErrorHandler instance.

#### Defined in

[src/ErrorHandler.ts:118](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L118)

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

[src/ErrorHandler.ts:139](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L139)

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

[src/ErrorHandler.ts:108](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L108)

***

### create()

> `static` **create**\<`R`, `E`\>(`options`): [`ErrorHandler`](ErrorHandler.md)\<`R`, `E`\>

Create an ErrorHandler.

#### Type Parameters

• **R**

• **E** *extends* [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md) = [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md)

#### Parameters

• **options**: [`ErrorHandlerOptions`](../interfaces/ErrorHandlerOptions.md)\<`R`, `E`\>

The options to create an ErrorHandler.

#### Returns

[`ErrorHandler`](ErrorHandler.md)\<`R`, `E`\>

A new ErrorHandler instance.

#### Defined in

[src/ErrorHandler.ts:56](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L56)

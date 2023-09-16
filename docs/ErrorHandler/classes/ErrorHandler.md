[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [ErrorHandler](../README.md) / ErrorHandler

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

[src/ErrorHandler.ts:63](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/ErrorHandler.ts#L63)

## Methods

### dontReportDuplicates()

> **dontReportDuplicates**(): `this`

Do not report this error class multiple times.

#### Returns

`this`

This ErrorHandler instance.

#### Defined in

[src/ErrorHandler.ts:126](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/ErrorHandler.ts#L126)

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

[src/ErrorHandler.ts:95](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/ErrorHandler.ts#L95)

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

[src/ErrorHandler.ts:83](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/ErrorHandler.ts#L83)

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

[src/ErrorHandler.ts:164](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/ErrorHandler.ts#L164)

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

[src/ErrorHandler.ts:151](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/ErrorHandler.ts#L151)

***

### reportDuplicates()

> **reportDuplicates**(): `this`

Report this error class multiple times.

#### Returns

`this`

This ErrorHandler instance.

#### Defined in

[src/ErrorHandler.ts:116](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/ErrorHandler.ts#L116)

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

[src/ErrorHandler.ts:137](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/ErrorHandler.ts#L137)

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

[src/ErrorHandler.ts:106](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/ErrorHandler.ts#L106)

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

[src/ErrorHandler.ts:54](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/ErrorHandler.ts#L54)

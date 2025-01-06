[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / IAdapterErrorHandler

# Interface: IAdapterErrorHandler\<RawEventType, RawResponseType, ExecutionContextType\>

Defined in: [src/definitions.ts:360](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L360)

Adapter ErrorHandler Interface.

Represents an error handler for the adapters, which can handle errors and return responses.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

## Properties

### handle()

> **handle**: (`error`, `context`) => `RawResponseType` \| `Promise`\<`RawResponseType`\>

Defined in: [src/definitions.ts:361](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L361)

#### Parameters

##### error

`any`

##### context

[`AdapterErrorContext`](AdapterErrorContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

#### Returns

`RawResponseType` \| `Promise`\<`RawResponseType`\>

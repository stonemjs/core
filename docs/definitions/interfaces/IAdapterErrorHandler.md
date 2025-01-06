[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / IAdapterErrorHandler

# Interface: IAdapterErrorHandler\<RawEventType, RawResponseType, ExecutionContextType\>

Defined in: [src/definitions.ts:360](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L360)

Adapter ErrorHandler Interface.

Represents an error handler for the adapters, which can handle errors and return responses.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

## Properties

### handle()

> **handle**: (`error`, `context`) => `RawResponseType` \| `Promise`\<`RawResponseType`\>

Defined in: [src/definitions.ts:361](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L361)

#### Parameters

##### error

`any`

##### context

[`AdapterErrorContext`](AdapterErrorContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

#### Returns

`RawResponseType` \| `Promise`\<`RawResponseType`\>

[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IAdapterErrorHandler

# Interface: IAdapterErrorHandler\<RawEventType, RawResponseType, ExecutionContextType\>

Defined in: [declarations.ts:429](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L429)

Adapter ErrorHandler Interface.

Represents an error handler for the adapters, which can handle errors and return responses.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

## Properties

### handle()

> **handle**: (`error`, `context`) => `RawResponseType` \| `Promise`\<`RawResponseType`\>

Defined in: [declarations.ts:430](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L430)

#### Parameters

##### error

`any`

##### context

[`AdapterErrorContext`](AdapterErrorContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

#### Returns

`RawResponseType` \| `Promise`\<`RawResponseType`\>

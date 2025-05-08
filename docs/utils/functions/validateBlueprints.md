[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [utils](../README.md) / validateBlueprints

# Function: validateBlueprints()

> **validateBlueprints**\<`U`, `V`\>(`blueprints`): `void`

Defined in: [core/src/utils.ts:202](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/utils.ts#L202)

Validates that the provided blueprints are valid objects.

This function checks if each blueprint in the provided array is an object,
throwing a SetupError if an invalid blueprint is found.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### blueprints

(`Record`\<`string`, `any`\> \| [`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>)[]

An array of blueprints to validate.

## Returns

`void`

## Throws

- If any of the provided blueprints are not valid objects.

## Example

```typescript
validateBlueprints([blueprint1, blueprint2]);
```

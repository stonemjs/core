[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [utils](../README.md) / validateBlueprints

# Function: validateBlueprints()

> **validateBlueprints**\<`U`, `V`\>(`blueprints`): `void`

Defined in: [utils.ts:200](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/utils.ts#L200)

Validates that the provided blueprints are valid objects.

This function checks if each blueprint in the provided array is an object,
throwing a SetupError if an invalid blueprint is found.

## Type Parameters

### U

`U` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### V

`V` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

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

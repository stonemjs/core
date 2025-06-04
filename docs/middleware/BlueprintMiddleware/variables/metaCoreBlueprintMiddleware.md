[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / metaCoreBlueprintMiddleware

# Variable: metaCoreBlueprintMiddleware

> `const` **metaCoreBlueprintMiddleware**: `MetaPipe`\<[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md) \| `PipeClass`\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>[]

Defined in: [middleware/BlueprintMiddleware.ts:400](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/middleware/BlueprintMiddleware.ts#L400)

Array representing the core configuration middleware for the application.

This array contains the list of core middleware functions that are used to process the application
configuration in a specific order. Each middleware is associated with a priority that determines
the sequence in which it is executed. Middleware functions are used to build the application's blueprint,
set up the adapter, register providers, and handle other essential configuration steps.

## Example

```typescript
import { coreBlueprintMiddleware } from './BlueprintMiddleware';

// The middleware will be used to configure the application's settings before it starts.
```

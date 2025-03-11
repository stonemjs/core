[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / coreConfigMiddleware

# Variable: coreConfigMiddleware

> `const` **coreConfigMiddleware**: `MetaPipe`\<[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md) \| `PipeClass`\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>[]

Defined in: [core/src/middleware/configMiddleware.ts:472](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/middleware/configMiddleware.ts#L472)

Array representing the core configuration middleware for the application.

This array contains the list of core middleware functions that are used to process the application
configuration in a specific order. Each middleware is associated with a priority that determines
the sequence in which it is executed. Middleware functions are used to build the application's blueprint,
set up the adapter, register providers, and handle other essential configuration steps.

## Example

```typescript
import { coreConfigMiddleware } from './coreConfigMiddleware';

// The middleware will be used to configure the application's settings before it starts.
```

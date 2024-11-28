[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [middleware/configMiddleware](../README.md) / coreConfigMiddleware

# Variable: coreConfigMiddleware

> `const` **coreConfigMiddleware**: `MixedPipe`[]

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

## Defined in

[src/middleware/configMiddleware.ts:310](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/middleware/configMiddleware.ts#L310)

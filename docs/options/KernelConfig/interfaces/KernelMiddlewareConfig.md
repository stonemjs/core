[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [options/KernelConfig](../README.md) / KernelMiddlewareConfig

# Interface: KernelMiddlewareConfig

Middleware options.

This interface defines the configuration for middleware used at different stages of the application.
It includes options for event processing, response handling, and termination.

## Properties

### event

> **event**: `MixedPipe`[]

Middleware to be applied during event processing.
This array can include classes or aliases for middleware functions.
Example: event: [MyCustomMiddleware, 'aliasForMiddleware']

#### Defined in

[src/options/KernelConfig.ts:25](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/options/KernelConfig.ts#L25)

***

### response

> **response**: `MixedPipe`[]

Middleware to be applied during response processing.
This array can include classes or aliases for middleware functions.

#### Defined in

[src/options/KernelConfig.ts:31](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/options/KernelConfig.ts#L31)

***

### skip

> **skip**: `boolean`

Determines whether to skip all kernel middleware.
If set to true, all middleware defined in the kernel will be bypassed.

#### Defined in

[src/options/KernelConfig.ts:18](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/options/KernelConfig.ts#L18)

***

### terminate

> **terminate**: `MixedPipe`[]

Middleware to be applied during the termination phase.
This array can include classes or aliases for middleware functions.

#### Defined in

[src/options/KernelConfig.ts:37](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/options/KernelConfig.ts#L37)

[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ServiceOptions

# Interface: ServiceOptions

Defined in: [declarations.ts:268](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L268)

Service options.

This interface defines the configuration options for marking a class as a service.

## Properties

### alias

> **alias**: `string` \| `string`[]

Defined in: [declarations.ts:280](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L280)

Alias or aliases for the service, used for identification or access.
Can be a single alias or an array of aliases.

***

### singleton?

> `optional` **singleton**: `boolean`

Defined in: [declarations.ts:274](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L274)

Whether the service should be treated as a singleton.
A singleton service will only have one instance in the container.
Optional.

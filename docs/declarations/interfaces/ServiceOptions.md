[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ServiceOptions

# Interface: ServiceOptions

Defined in: [declarations.ts:263](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L263)

Service options.

This interface defines the configuration options for marking a class as a service.

## Properties

### alias

> **alias**: `string` \| `string`[]

Defined in: [declarations.ts:275](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L275)

Alias or aliases for the service, used for identification or access.
Can be a single alias or an array of aliases.

***

### singleton?

> `optional` **singleton**: `boolean`

Defined in: [declarations.ts:269](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L269)

Whether the service should be treated as a singleton.
A singleton service will only have one instance in the container.
Optional.

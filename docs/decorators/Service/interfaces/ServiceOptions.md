[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Service](../README.md) / ServiceOptions

# Interface: ServiceOptions

Defined in: [src/decorators/Service.ts:10](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/Service.ts#L10)

Service options.

This interface defines the configuration options for marking a class as a service.

## Properties

### alias

> **alias**: `string` \| `string`[]

Defined in: [src/decorators/Service.ts:22](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/Service.ts#L22)

Alias or aliases for the service, used for identification or access.
Can be a single alias or an array of aliases.

***

### singleton?

> `optional` **singleton**: `boolean`

Defined in: [src/decorators/Service.ts:16](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/Service.ts#L16)

Whether the service should be treated as a singleton.
A singleton service will only have one instance in the container.
Optional.

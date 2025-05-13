[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Service](../README.md) / ServiceOptions

# Interface: ServiceOptions

Defined in: [decorators/Service.ts:10](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/decorators/Service.ts#L10)

Service options.

This interface defines the configuration options for marking a class as a service.

## Properties

### alias

> **alias**: `string` \| `string`[]

Defined in: [decorators/Service.ts:22](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/decorators/Service.ts#L22)

Alias or aliases for the service, used for identification or access.
Can be a single alias or an array of aliases.

***

### singleton?

> `optional` **singleton**: `boolean`

Defined in: [decorators/Service.ts:16](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/decorators/Service.ts#L16)

Whether the service should be treated as a singleton.
A singleton service will only have one instance in the container.
Optional.

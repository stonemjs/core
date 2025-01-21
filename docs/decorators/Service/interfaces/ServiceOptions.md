[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Service](../README.md) / ServiceOptions

# Interface: ServiceOptions

Defined in: [decorators/Service.ts:10](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Service.ts#L10)

Service options.

This interface defines the configuration options for marking a class as a service.

## Properties

### alias

> **alias**: `string` \| `string`[]

Defined in: [decorators/Service.ts:22](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Service.ts#L22)

Alias or aliases for the service, used for identification or access.
Can be a single alias or an array of aliases.

***

### singleton?

> `optional` **singleton**: `boolean`

Defined in: [decorators/Service.ts:16](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Service.ts#L16)

Whether the service should be treated as a singleton.
A singleton service will only have one instance in the container.
Optional.

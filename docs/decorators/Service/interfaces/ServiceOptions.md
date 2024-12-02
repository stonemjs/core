[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [decorators/Service](../README.md) / ServiceOptions

# Interface: ServiceOptions

Service options.

This interface defines the configuration options for marking a class as a service.

## Properties

### alias

> **alias**: `string` \| `string`[]

Alias or aliases for the service, used for identification or access.
Can be a single alias or an array of aliases.

#### Defined in

[src/decorators/Service.ts:22](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/decorators/Service.ts#L22)

***

### singleton?

> `optional` **singleton**: `boolean`

Whether the service should be treated as a singleton.
A singleton service will only have one instance in the container.
Optional.

#### Defined in

[src/decorators/Service.ts:16](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/decorators/Service.ts#L16)

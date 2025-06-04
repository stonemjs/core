[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Configuration](../README.md) / ConfigurationOptions

# Interface: ConfigurationOptions

Defined in: [decorators/Configuration.ts:10](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Configuration.ts#L10)

Configuration options.

This interface defines the configuration options for marking a class as a Configuration.

## Properties

### live?

> `optional` **live**: `boolean`

Defined in: [decorators/Configuration.ts:17](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Configuration.ts#L17)

Live configurations are loaded on each request.
By default, configurations loaded once when the application starts.
Usefull to define dynamic configurations.
No need to restart the application to apply changes.

[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Configuration](../README.md) / ConfigurationOptions

# Interface: ConfigurationOptions

Defined in: [core/src/decorators/Configuration.ts:10](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/decorators/Configuration.ts#L10)

Configuration options.

This interface defines the configuration options for marking a class as a Configuration.

## Properties

### live?

> `optional` **live**: `boolean`

Defined in: [core/src/decorators/Configuration.ts:17](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/decorators/Configuration.ts#L17)

Live configurations are loaded on each request.
By default, configurations loaded once when the application starts.
Usefull to define dynamic configurations.
No need to restart the application to apply changes.

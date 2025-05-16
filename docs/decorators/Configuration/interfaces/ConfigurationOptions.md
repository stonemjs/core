[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Configuration](../README.md) / ConfigurationOptions

# Interface: ConfigurationOptions

Defined in: [decorators/Configuration.ts:10](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/decorators/Configuration.ts#L10)

Configuration options.

This interface defines the configuration options for marking a class as a Configuration.

## Properties

### live?

> `optional` **live**: `boolean`

Defined in: [decorators/Configuration.ts:17](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/decorators/Configuration.ts#L17)

Live configurations are loaded on each request.
By default, configurations loaded once when the application starts.
Usefull to define dynamic configurations.
No need to restart the application to apply changes.

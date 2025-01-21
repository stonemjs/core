import { ErrorOptions } from '../declarations'
import { RuntimeError } from './RuntimeError'

/**
 * Custom error for Initialization layer operations.
 */
export class InitializationError extends RuntimeError {
  constructor (message: string, options: ErrorOptions = {}) {
    super(message, options)
    this.name = 'InitializationError'
  }
}

import { handlers } from './handlers'
// src/mocks/browser.js
import { setupWorker } from 'msw'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)
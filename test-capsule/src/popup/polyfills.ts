// src/polyfills.ts

// Import the required browserify packages
(window as any).global = window;
import * as crypto from 'crypto-browserify';
import * as stream from 'stream-browserify';

// Assign the browserify versions to the global window object
(window as any).crypto = crypto;
(window as any).stream = stream;

// Polyfill the global object
(window as any).global = window;
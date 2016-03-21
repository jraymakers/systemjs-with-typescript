/// <reference path="../typings/browser.d.ts" />
/// <reference path="../dist/lib.d.ts" />

// This doesn't actually load the library,
// because it isn't used at the root scope.
// It just declares the type for TypeScript.
import libType = require('lib');

import { AppStrings } from './AppStrings';

console.log('app loaded');

console.log(Date.now()+': '+AppStrings.message);

document.getElementById('loadLibraryButton').addEventListener('click', () => {
  // This actually loads the library.
  System.import('lib').then((lib: typeof libType) => {
    console.log(Date.now()+': '+lib.LibStrings.message);
  });
});
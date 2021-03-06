// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of shift is 0
 *
 * @path ch15/15.4/15.4.4/15.4.4.9/S15.4.4.9_A5.4.js
 * @description shift.length === 1
 */

//CHECK#1
if (Array.prototype.shift.length !== 0) {
  $ERROR('#1: Array.prototype.shift.length === 0. Actual: ' + (Array.prototype.shift.length));
}



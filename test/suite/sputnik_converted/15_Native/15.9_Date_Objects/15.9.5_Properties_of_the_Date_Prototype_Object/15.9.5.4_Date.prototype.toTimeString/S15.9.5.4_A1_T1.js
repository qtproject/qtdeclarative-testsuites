// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.4_A1_T1;
 * @section: 15.9.5.4;
 * @assertion: The Date.prototype property "toTimeString" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.4_A1_T1",

path: "15.9.5.4",

description: "Checking absence of ReadOnly attribute",

test: function testcase() {
   x = Date.prototype.toTimeString;
if(x === 1)
  Date.prototype.toTimeString = 2;
else
  Date.prototype.toTimeString = 1;
if (Date.prototype.toTimeString === x) {
  $ERROR('#1: The Date.prototype.toTimeString has not the attribute ReadOnly');
}


 }
});

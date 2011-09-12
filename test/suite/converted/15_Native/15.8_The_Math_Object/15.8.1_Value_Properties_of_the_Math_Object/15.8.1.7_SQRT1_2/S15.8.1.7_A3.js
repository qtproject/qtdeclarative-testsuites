// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property SQRT1_2 of the Math Object has the attribute DontDelete
 *
 * @section 15.8.1.7
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.7_SQRT1_2/S15.8.1.7_A3.js
 * @description Checking if Math.SQRT1_2 property has the attribute DontDelete
 * @strict_only
 * @strict_mode_negative
 */

// CHECK#1
if (delete Math.SQRT1_2 === true) {
  $ERROR("#1: Value Property SQRT1_2 of the Math Object hasn't attribute DontDelete: 'Math.SQRT1_2 === true'");
}


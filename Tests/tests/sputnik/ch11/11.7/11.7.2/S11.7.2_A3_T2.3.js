// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Operator x >> y returns ToNumber(x) >> ToNumber(y)
 *
 * @path ch11/11.7/11.7.2/S11.7.2_A3_T2.3.js
 * @description Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Null
 */

//CHECK#1
if (1 >> null !== 1) {
  $ERROR('#1: 1 >> null === 1. Actual: ' + (1 >> null));
}

//CHECK#2
if (null >> 1 !== 0) {
  $ERROR('#2: null >> 1 === 0. Actual: ' + (null >> 1));
}

//CHECK#3
if (new Number(1) >> null !== 1) {
  $ERROR('#3: new Number(1) >> null === 1. Actual: ' + (new Number(1) >> null));
}

//CHECK#4
if (null >> new Number(1) !== 0) {
  $ERROR('#4: null >> new Number(1) === 0. Actual: ' + (null >> new Number(1)));
}


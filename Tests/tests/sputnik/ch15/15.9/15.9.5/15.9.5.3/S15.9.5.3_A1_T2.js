// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype property "toDateString" has { DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.3/S15.9.5.3_A1_T2.js
 * @description Checking absence of DontDelete attribute
 */

if (delete Date.prototype.toDateString  === false) {
  $ERROR('#1: The Date.prototype.toDateString property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('toDateString')) {
  $FAIL('#2: The Date.prototype.toDateString property has not the attributes DontDelete');
}



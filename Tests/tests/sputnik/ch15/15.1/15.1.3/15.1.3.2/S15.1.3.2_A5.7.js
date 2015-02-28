// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The decodeURIComponent property can't be used as constructor
 *
 * @path ch15/15.1/15.1.3/15.1.3.2/S15.1.3.2_A5.7.js
 * @description If property does not implement the internal [[Construct]] method, throw a TypeError exception
 */

//CHECK#1

try {
  new decodeURIComponent();
  $ERROR('#1.1: new decodeURIComponent() throw TypeError. Actual: ' + (new decodeURIComponent()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new decodeURIComponent() throw TypeError. Actual: ' + (e));
  }
}


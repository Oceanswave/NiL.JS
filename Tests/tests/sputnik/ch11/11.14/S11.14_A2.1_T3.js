// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Operator uses GetValue
 *
 * @path ch11/11.14/S11.14_A2.1_T3.js
 * @description If GetBase(AssigmentExpression) is null, throw ReferenceError
 */

//CHECK#1
try {
  1, y;
  $ERROR('#1.1: 1, y throw ReferenceError. Actual: ' + (1, y));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: 1, y throw ReferenceError. Actual: ' + (e));  
  }
}


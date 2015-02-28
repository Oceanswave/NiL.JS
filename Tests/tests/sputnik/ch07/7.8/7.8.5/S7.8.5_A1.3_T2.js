// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * RegularExpressionFirstChar :: LineTerminator is incorrect
 *
 * @path ch07/7.8/7.8.5/S7.8.5_A1.3_T2.js
 * @description Line Feed, with eval
 */

//CHECK#1
try {
   eval("/\u000A/").source;
   $ERROR('#1.1: RegularExpressionFirstChar :: Line Feed is incorrect. Actual: ' + (eval("/\u000A/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionFirstChar :: Line Feed is incorrect. Actual: ' + (e));
  }
}     


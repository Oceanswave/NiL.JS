/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * note that prior to the finally ES5 draft SameValue was used for comparisions
 * and hence NaNs could be found using indexOf *
 *
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-10.js
 * @description Array.prototype.indexOf must return correct index (NaN)
 */


function testcase() {
  var _NaN = NaN;
  var a = new Array("NaN",undefined,0,false,null,{toString:function (){return NaN}},"false",_NaN,NaN);
  if (a.indexOf(NaN) === -1)  // NaN is equal to nothing, including itself.
  {
    return true;
  }
 }
runTestCase(testcase);

/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.5/15.5.4/15.5.4.20/15.5.4.20-2-33.js
 * @description String.prototype.trim - argument 'this' is a string(value is '1')
 */


function testcase() {
        return String.prototype.trim.call("1") === "1";
    }
runTestCase(testcase);

/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-9-c-ii-26.js
 * @description Array.prototype.reduceRight - Array Object can be used as accumulator
 */


function testcase() {

        var accessed = false;
        var objArray = [];
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === objArray;
        }

        var obj = { 0: 11, length: 1 };

        return Array.prototype.reduceRight.call(obj, callbackfn, objArray) === true && accessed;
    }
runTestCase(testcase);

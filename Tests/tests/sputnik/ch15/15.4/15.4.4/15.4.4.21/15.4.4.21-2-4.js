/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-2-4.js
 * @description Array.prototype.reduce - 'length' is own data property that overrides an inherited data property on an Array
 */


function testcase() {
        var storeProtoLength;

        function callbackfn(prevVal, curVal, idx, obj) {
            return (obj.length === 2);
        }

        try {
            storeProtoLength = Array.prototype.length;
            Array.prototype.length = 0;

            return [12, 11].reduce(callbackfn, 1) === true;
        } finally {
            Array.prototype.length = storeProtoLength;
        }
    }
runTestCase(testcase);

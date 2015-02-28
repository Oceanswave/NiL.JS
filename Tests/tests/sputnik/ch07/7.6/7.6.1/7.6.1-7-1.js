/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch07/7.6/7.6.1/7.6.1-7-1.js
 * @description Allow reserved words as property names by index assignment, accessed via indexing: null, true, false
 */


function testcase() {
        var tokenCodes = {};
        tokenCodes['null'] = 0;
        tokenCodes['true'] = 1;
        tokenCodes['false'] = 2;        
        var arr = [
            'null',
            'true',
            'false'
        ];
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);

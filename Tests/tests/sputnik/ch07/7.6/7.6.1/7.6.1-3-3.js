/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch07/7.6/7.6.1/7.6.1-3-3.js
 * @description Allow reserved words as property names by index assignment,verified with hasOwnProperty: instanceof, typeof, else
 */


function testcase() {
        var tokenCodes  = {};
        tokenCodes['instanceof'] = 0;
        tokenCodes['typeof'] = 1;
        tokenCodes['else'] = 2;
        var arr = [
            'instanceof',
            'typeof',
            'else'
            ];
        for(var p in tokenCodes) {       
            for(var p1 in arr) {                
                if(arr[p1] === p) {
                    if(!tokenCodes.hasOwnProperty(arr[p1])) {
                        return false;
                    };
                }
            }
        }
        return true;
    }
runTestCase(testcase);

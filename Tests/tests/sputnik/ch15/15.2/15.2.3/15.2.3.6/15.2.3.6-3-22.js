/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-22.js
 * @description Object.defineProperty - 'enumerable' property in 'Attributes' is own data property (8.10.5 step 3.a)
 */


function testcase() {
        var obj = {};
        var accessed = false;

        Object.defineProperty(obj, "property", {
            enumerable: true
        });

        for (var prop in obj) {
            if (prop === "property") {
                accessed = true;
            }
        }
        return accessed;
    }
runTestCase(testcase);

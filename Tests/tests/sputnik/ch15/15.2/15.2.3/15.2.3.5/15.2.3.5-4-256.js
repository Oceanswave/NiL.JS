/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-256.js
 * @description Object.create - one property in 'Properties' is the global object that uses Object's [[Get]] method to access the 'get' property (8.10.5 step 7.a)
 */


function testcase() {
        fnGlobalObject().get = function () {
            return "VerifyGlobalObject";
        };

        try {
            var newObj = Object.create({}, {
                prop: fnGlobalObject()
            });

            return newObj.prop === "VerifyGlobalObject";
        } finally {
            delete fnGlobalObject().get;
        }
    }
runTestCase(testcase);

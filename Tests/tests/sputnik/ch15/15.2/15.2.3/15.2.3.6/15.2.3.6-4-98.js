/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-98.js
 * @description Object.defineProperty will not throw TypeError when name.configurable = false, both desc.[[Get]] and name.[[Get]] are two objects which refer to the same object (8.12.9 step 11.a.ii)
 */


function testcase() {

        var obj = {};

        function getFunc() {
            return 10;
        }
        function setFunc(value) {
            obj.verifyGetHelpMethod = value;
        }

        Object.defineProperty(obj, "foo", {
            get: getFunc,
            set: setFunc,
            configurable: false
        });

        try {
            Object.defineProperty(obj, "foo", { get: getFunc });
            return accessorPropertyAttributesAreCorrect(obj, "foo", getFunc, setFunc, "verifyGetHelpMethod", false, false);
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);

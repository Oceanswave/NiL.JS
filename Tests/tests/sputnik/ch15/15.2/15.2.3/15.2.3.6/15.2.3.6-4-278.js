/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-278.js
 * @description Object.defineProperty - 'name' is generic property that won't exist on 'O', and 'desc' is accessor descriptor, test 'name' is defined in 'O' with all correct attribute values (15.4.5.1 step 5)
 */


function testcase() {

        var arrObj = [];

        function getFunc() {
            return 12;
        }
        function setFunc(value) {
            arrObj.setVerifyHelpProp = value;
        }

        Object.defineProperty(arrObj, "property", {
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        });

        return accessorPropertyAttributesAreCorrect(arrObj, "property", getFunc, setFunc, "setVerifyHelpProp", true, true);
    }
runTestCase(testcase);

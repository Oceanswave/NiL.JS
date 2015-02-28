/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-101.js
 * @description Object.defineProperty - 'name' and 'desc' are data properties, name.value is present and desc.value is undefined (8.12.9 step 12)
 */


function testcase() {

        var obj = {};

        obj.foo = 100; // default value of attributes: writable: true, configurable: true, enumerable: true

        Object.defineProperty(obj, "foo", { value: undefined });
        return dataPropertyAttributesAreCorrect(obj, "foo", undefined, true, true, true);
    }
runTestCase(testcase);

/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.9/15.2.3.9-2-a-9.js
 * @description Object.freeze - 'P' is own property of the Function object that uses Object's [[GetOwnProperty]]
 */


function testcase() {
        var funObj = function () { };

        funObj.foo = 10; // default [[Configurable]] attribute value of foo: true

        Object.freeze(funObj);

        var desc = Object.getOwnPropertyDescriptor(funObj, "foo");

        delete funObj.foo;
        return funObj.foo === 10 && desc.configurable === false && desc.writable === false;
    }
runTestCase(testcase);

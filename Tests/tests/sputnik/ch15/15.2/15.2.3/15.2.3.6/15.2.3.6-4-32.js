/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-32.js
 * @description Object.defineProperty - 'name' is an inherited accessor property without a get function (8.12.9 step 1)
 */


function testcase() {
        var proto = {};
        Object.defineProperty(proto, "foo", {
            set: function () { },
            configurable: false
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var obj = new ConstructFun();

        Object.defineProperty(obj, "foo", {
            configurable: true
        });
        return obj.hasOwnProperty("foo") && typeof obj.foo === "undefined";
    }
runTestCase(testcase);

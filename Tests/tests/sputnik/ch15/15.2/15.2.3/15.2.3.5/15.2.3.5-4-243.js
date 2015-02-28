/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-243.js
 * @description Object.create - 'get' property of one property in 'Properties' is an inherited accessor property without a get function (8.10.5 step 7.a)
 */


function testcase() {
        var proto = {};

        Object.defineProperty(proto, "get", {
            set: function () { }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var descObj = new ConstructFun();

        var newObj = Object.create({}, {
            prop: descObj 
        });

        return newObj.hasOwnProperty("prop") && typeof (newObj.prop) === "undefined";
    }
runTestCase(testcase);

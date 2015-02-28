// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The production QuantifierPrefix :: * evaluates by returning the two results 0 and \infty
 *
 * @path ch15/15.10/15.10.2/15.10.2.7/S15.10.2.7_A4_T14.js
 * @description Execute /(\d*)(\d+)/.exec('1234567890') and check results
 */

__executed = /(\d*)(\d+)/.exec('1234567890');

__expected = ["1234567890","123456789","0"];
__expected.index = 0;
__expected.input = '1234567890';

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(\\d*)(\\d+)/.exec(\'1234567890\'); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(\\d*)(\\d+)/.exec(\'1234567890\'); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(\\d*)(\\d+)/.exec(\'1234567890\'); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(\\d*)(\\d+)/.exec(\'1234567890\'); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}



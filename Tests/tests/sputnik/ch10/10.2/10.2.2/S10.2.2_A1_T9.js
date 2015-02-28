// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Every execution context has associated with it a scope chain.
 * A scope chain is a list of objects that are searched when evaluating an
 * Identifier
 *
 * @path ch10/10.2/10.2.2/S10.2.2_A1_T9.js
 * @description Checking scope chain containing function declarations and "with"
 * @noStrict
 */

var x = 0;

var myObj = {x : "obj"};

function f1(){
  with(myObj){
    return x;
  }
}

if(!(f1() === "obj")){
  $ERROR("#1: Scope chain disturbed");
}


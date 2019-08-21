"use strict";

var a = "Test1";
var b = "Test2";

const test  = () => {
    var a = 30;
    if(true) {
        const a = 50;
        console.log(a);
    }
    console.log(`other a: ${a}`);
}

console.log(`Logged: ${a}`)

test();

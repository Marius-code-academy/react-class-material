"use strict";
let x;
let y;
let z;
let arr = [];
let t;
let cm;
cm = 'asdf';
cm = 123;
function logName(name, age) {
    console.log(name);
}
logName('Marius');
logName('Marius', 32);
const person = {
    id: 1,
    name: 'Marius',
    sayHello: (name) => {
        console.log(`hello ${name}`);
    },
};
const b = 3168135168;
function mToCm(value) {
    if (typeof value === 'string') {
        return +value * 100;
    }
    else {
        return value * 100;
    }
}

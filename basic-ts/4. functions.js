"use strict";
function adding(n1, n2) {
    return n1 + n2;
}
function printResutl(num) {
    console.log("result: " + num);
}
function addAndHanbdle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// kalau kita console.log function yang tidak mereturn apa-apa.
// Maka akan menghasilkan undefined
console.log(printResutl(adding(5, 12)));
// function as types
// below is the use case
// let combineValues;
// combineValues = add;
// combineValues = 5;
// console.log(combineValues(8, 8));
let combineValues;
combineValues = adding;
console.log(combineValues(8, 8));
addAndHanbdle(10, 20, (result) => {
    console.log(result);
    return result;
});

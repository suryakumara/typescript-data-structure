function add(n1, n2) {
    return n1 + n2;
}
function printResutl(num) {
    console.log("result: " + num);
}
// kalau kita console.log function yang tidak mereturn apa-apa.
// Maka akan menghasilkan undefined
console.log(printResutl(add(5, 12)));
// function as types
// below is the use case
// let combineValues;
// combineValues = add;
// combineValues = 5;
// console.log(combineValues(8, 8));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));

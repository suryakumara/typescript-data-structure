function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResutl(num: number): void {
  console.log("result: " + num);
}

function addAndHanbdle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
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

let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8, 8));

addAndHanbdle(10, 20, (result) => {
  console.log(result);
  return result;
});

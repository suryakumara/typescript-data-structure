// Union, menggunakan tanda "|" digunakan untuk membuat fungsi yang mempunyai input berbeda
// Literal type adalah type seperti string
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + "" + input2.toString();
    }
    //   if (resultConversion === "as-number") {
    //     return +result;
    //   } else {
    //     result.toString();
    //   }
    return result;
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);
var combineNames = combine("Surya", "Kumara", "as-text");
console.log(combineNames);

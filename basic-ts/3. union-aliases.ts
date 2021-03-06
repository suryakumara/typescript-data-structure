// Union, menggunakan tanda "|" digunakan untuk membuat fungsi yang mempunyai input berbeda
// Literal type adalah type seperti string

type Combineable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combineable,
  input2: Combineable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + "" + input2.toString();
  }
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     result.toString();
  //   }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNames = combine("Surya", "Kumara", "as-text");
console.log(combineNames);

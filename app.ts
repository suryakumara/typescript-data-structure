const userName = "Surya";

// let age = 10;
// age = 20;

function add(a: number, b: number = 1) {
  let result;
  result = a + b;
  return result;
}

// perbedaan let dan variable adalah pada block scope menggunakan if statement

// ini masih bekerja di javascript
// if (age > 30) {
//   var isOld = true;
// }
// console.log(isOld);

// ini error di javascript
// if (age > 30) {
//   let isOld = true;
// }
// console.log(isOld);

const printOut: (a: number | string) => void = (output) => console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOut(add(5));

// spread operator
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

const person = {
  firstName: "Surya",
  age: 25,
};

const copiedPerson = {
  ...person,
};

const substact = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const substractedNumbers = substact(2, 4, 56, 34);
console.log(substractedNumbers);

// destructuring

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { firstName: userNames, age } = person;
console.log(userName, age);

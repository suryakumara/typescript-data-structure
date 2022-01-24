const names: Array<string> = ["Surya", "Kumara"];
const newName = names[0].split("  ");
console.log(newName);

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done !");
  }, 2000);
});

promise.then((data) => console.log(data.split(" ")));

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "I Made Surya Kumara" }, { age: "25" });

console.log(mergedObj.age);

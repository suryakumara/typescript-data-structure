"use strict";
const names = ["Surya", "Kumara"];
const newName = names[0].split("  ");
console.log(newName);
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done !");
    }, 2000);
});
promise.then((data) => console.log(data.split(" ")));
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "I Made Surya Kumara" }, { age: "25" });
console.log(mergedObj.age);

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
// use extends to constrains the type
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "I Made Surya Kumara" }, { age: 30 });
console.log(mergedObj.age);
const countAndDescribe = (element) => {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " element.";
    }
    return [element, descriptionText];
};
console.log(countAndDescribe([0, 0, 0]));
function extractAndConvert(obj, key) {
    return "Value " + obj[key];
}
extractAndConvert({ name: "Surya" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Surya");
textStorage.addItem("Kumara");
textStorage.removeItem("Surya");
console.log(textStorage.getItems());

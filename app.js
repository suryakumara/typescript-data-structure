"use strict";
var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function tambah(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name : " + emp.name);
    if ("privileges" in emp) {
        console.log("Privilages : " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Privileges : " + emp.startDate);
    }
}
printEmployeeInformation({ name: "Surya", startDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo ..." + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVhecle(vehicles) {
    vehicles.drive();
    // if ("loadCargo" in vehicles) {
    //   vehicles.loadCargo(1000);
    // }
    // atau bisa juga seperti ini
    if (vehicles instanceof Truck) {
        vehicles.loadCargo(1000);
    }
}
useVhecle(v1);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
        default:
            break;
    }
    console.log(" Moving at speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
var paragraph = document.getElementById("message-output");
console.log(paragraph);
var userInput = document.getElementById("user-input"); // panggunaan ! untuk meyakinkan typescript bahwa ini tidak mungkin null
userInput.value = "This is not true";
console.log(userInput);

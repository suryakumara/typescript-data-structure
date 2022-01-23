"use strict";
var _a;
const e1 = {
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
const result = tambah("Surya", "Kumara");
result.split(" ");
// optional Chaining
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My Own Company" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const usersInput = "Surya";
const storedData = usersInput !== null && usersInput !== void 0 ? usersInput : "DEFAULT";
console.log(storedData);
function printEmployeeInformation(emp) {
    console.log("Name : " + emp.name);
    if ("privileges" in emp) {
        console.log("Privilages : " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Privileges : " + emp.startDate);
    }
}
// printEmployeeInformation({ name: "Surya", startDate: new Date() });
class Car {
    drive() {
        console.log("Driving....");
    }
}
class Truck {
    drive() {
        console.log("Driving...");
    }
    loadCargo(amount) {
        console.log("Loading cargo ..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
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
    let speed;
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
const userInput = document.getElementById("user"); // panggunaan ! untuk meyakinkan typescript bahwa ini tidak mungkin null
if (userInput) {
    userInput.value = "HI there";
}
console.log(userInput);
const error = {
    email: "Not a valid email !",
    username: "Must start with a capital character!",
};

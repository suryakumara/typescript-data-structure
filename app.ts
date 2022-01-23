type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

// intersection type menggunakan &

type Combinable = string | number;
type Numeric = number | boolean;

type Unversal = Combinable & Numeric;

function tambah(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name : " + emp.name);

  if ("privileges" in emp) {
    console.log("Privilages : " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Privileges : " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Surya", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving....");
  }
}

class Truck {
  drive() {
    console.log("Driving...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck; // Union type

const v1 = new Car();
const v2 = new Truck();

function useVhecle(vehicles: Vehicle) {
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

// discriminated unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

const paragraph = document.getElementById("message-output");
console.log(paragraph);

const userInput = document.getElementById("user-input")! as HTMLInputElement; // panggunaan ! untuk meyakinkan typescript bahwa ini tidak mungkin null
userInput.value = "This is not true";

console.log(userInput);

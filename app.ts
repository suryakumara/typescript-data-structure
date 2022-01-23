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

function tambah(a: number, b: number): number;
function tambah(a: string, b: string): string;
function tambah(a: string, b: number): string;
function tambah(a: number, b: string): string;

function tambah(a: Combinable, b: Combinable) {
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

console.log(fetchedUserData?.job?.title);

const usersInput = "Surya";

const storedData = usersInput ?? "DEFAULT";

console.log(storedData);

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

const userInput = document.getElementById("user") as HTMLInputElement; // panggunaan ! untuk meyakinkan typescript bahwa ini tidak mungkin null
if (userInput) {
  (userInput as HTMLInputElement).value = "HI there";
}

console.log(userInput);

// index property
// not limit the property we need
interface ErrorContainer {
  // email not a valid email,
  [prop: string]: string;
}

const error: ErrorContainer = {
  email: "Not a valid email !",
  username: "Must start with a capital character!",
};

const names: Array<string> = ["Surya", "Kumara"];
const newName = names[0].split("  ");
console.log(newName);

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done !");
  }, 2000);
});

promise.then((data) => console.log(data.split(" ")));

// use extends to constrains the type
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "I Made Surya Kumara" }, { age: 30 });

console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T) => {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " element.";
  }
  return [element, descriptionText];
};

console.log(countAndDescribe([0, 0, 0]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

extractAndConvert({ name: "Surya" }, "name");

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
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

// alasan menggunakan storage, kita bisa hanya menambahkan number dsana rg.
const numberStorage = new DataStorage<number>();

const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: "Surya" });

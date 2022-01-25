function Logger(logString: string) {
  return function (constructor: Function) {
    console.log("Loogin...");
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: Function) {
    const hookEl = document.getElementById(hookId);
    console.log(hookEl);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

@WithTemplate("<h1>My Template</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);

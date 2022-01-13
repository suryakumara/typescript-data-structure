class Department {
  // field of the class
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(public name: string, private readonly id: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ` + this.name + this.id);
  }

  addEmployees(employe: string) {
    // validation
    this.employees.push(employe);
  }

  printEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting", "1");
accounting.describe();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

accounting.addEmployees("Surya");
accounting.addEmployees("Kumara");
accounting.printEmployee();

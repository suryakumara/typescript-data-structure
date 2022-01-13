class Department {
  // field of the class
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

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

// inhiritent
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super("IT", id);
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(name: string, private reports: string[]) {
    super(name, "ID");
    this.reports = reports;
  }

  addReports(report: string) {
    this.reports.push(report);
  }

  addEmployees(name: string): void {
    if (name === "Surya") {
      return;
    }
    this.employees.push(name);
  }
}

const it = new ITDepartment("id3", ["Surya"]);
it.addEmployees("Surya");
it.addEmployees("Kumara");
console.log(it);

const acc = new AccountingDepartment("Surya", []);

acc.addReports("Make a task");
acc.addReports("Make a taskas");
console.log(acc);

// private property can't access to extend class
//

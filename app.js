"use strict";
var Department = /** @class */ (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        // field of the class
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name + this.id);
    };
    Department.prototype.addEmployees = function (employe) {
        // validation
        this.employees.push(employe);
    };
    Department.prototype.printEmployee = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting", "1");
accounting.describe();
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
accounting.addEmployees("Surya");
accounting.addEmployees("Kumara");
accounting.printEmployee();

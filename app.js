"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// inhiritent
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, "IT", id) || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name, reports) {
        var _this = _super.call(this, name, "ID") || this;
        _this.reports = reports;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReports = function (report) {
        this.reports.push(report);
    };
    return AccountingDepartment;
}(Department));
var it = new ITDepartment("id3", ["Surya"]);
it.addEmployees("Surya");
it.addEmployees("Kumara");
console.log(it);
var acc = new AccountingDepartment("Surya", []);
acc.addReports("Make a task");
acc.addReports("Make a taskas");
console.log(acc);

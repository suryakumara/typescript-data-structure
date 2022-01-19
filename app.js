"use strict";
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("I Made Surya Kumara");
// user1 = {
//   name: "I Made Surya Kumara",
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };
user1.greet("Hi there - I am ");
console.log(user1);

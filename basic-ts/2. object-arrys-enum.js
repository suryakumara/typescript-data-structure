"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role[Role["AUTHOR"] = 6] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "I Made SUrya Kumara",
    age: 30,
    hobbies: ["Sports", "Fishing"],
    role: Role.ADMIN,
};
for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
}
if (person.role === Role.ADMIN) {
    console.log("role is admine");
}

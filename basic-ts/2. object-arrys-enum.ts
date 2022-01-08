// const person: {
//   name: string;
//   age: number;
// } = {

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 5,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
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

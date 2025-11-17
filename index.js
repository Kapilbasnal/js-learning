const numbers = [1, 2, 3, 4, 5];
const double = numbers.map(num => num*2);
console.log(double);

//Filter
let nums = [1, 5, 10, 15, 20];
let final = nums.filter(num => num > 9);
console.log(final);

//Destructuring
const user = ["kapil", "pradeep", "sumo", 2]

let {name} = user;
let {age} = user;

console.log(name);
console.log(age);

//Project

const users = [
  { id: 1, name: "Iklu", role: "admin" },
  { id: 2, name: "Banhar", role: "user" },
  { id: 3, name: "Vikram", role: "user" }
];

let onlyUser = users.filter(user => user.role == "user");
console.log(onlyUser);

let userStr = onlyUser.map(u => `${u.name} is a user` );
console.log(userStr);

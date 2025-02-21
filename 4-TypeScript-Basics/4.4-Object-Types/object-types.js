// const cars = {
//     name: "Toyota",
//     brand: "Camry",
//     model: "2022"
// };
// console.log(cars)
console.log("=> Ways to define type of an object <=");
//1. Object Literal Type 
console.log("===================Object Literal Type==========================");
var person;
person = { name: "Prabin", age: 30 };
//person = {name:"Prabin", age: "24"};  //Error : age should be a number
console.log(person);
// 2. Using Interface
console.log("====================Using Interface=============================");
var developerDetails = { name: "Prabin", address: "Somewhere in the earth", age: 30 }; // valid
console.log(developerDetails);
//  Extending the interface
console.log("===================Extending Interface==========================");
var employee = { name: "Heavy Developer", address: "Earth", age: 25, isSeniorDeveloper: false };
console.log(employee);
// 3. Using Type Aliases
console.log("=======================Type Aliases=============================");
var Address = { province: "ABC", district: "abc", provinceNumber: 4 };
console.log(Address);
// 4. Object with Index Signatures
console.log("==================Object with Index Signature===================");
var user;
user = { name: "Heavy Dveloper", email: "xyz12@gmail.com" };
console.log(user);
user = { name: "Heavy Dveloper", email: "xyz12@gmail.com", address: "xyz" };
console.log(user);
//user = {name : "Heavy Dveloper", email: "xyz12@gmail.com", age: 23};  //invalid 
// 5. ReadOnly  Object 
console.log("==================ReadOnly Object========================");
var car = { name: "Toyota", model: "Camry", year: 2023 };
console.log(car);
car.year = 2024;
//car.name = "Its not a Car"; //invalid : error TS2540: Cannot assign to 'name' because it is a read-only property
console.log(car);
//6. Optional Properties
console.log("=================Optional Property========================");
var school = { numberOfTeachers: 50, name: "Harvard", address: "XYZ place", isGoodSchool: true }; // Valid
var school1 = { name: "Harvard", address: "XYZ place", isGoodSchool: true }; // Valid
console.log(school);
console.log(school1);

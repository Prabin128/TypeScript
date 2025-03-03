//1. Tuple Syntax
console.log("==========================Tuple Syntax=============================");
var randomVariable;
randomVariable = ['Hello', 42, true];
console.log(randomVariable);
//2.1. Tuples Basics
console.log("==========================Tuple Basics=============================");
var person = ['Developer', 23];
//let invalidPerson: [string, number] = [4, 'Wrong name']; //error
console.log(person);
//2.2. Optional Elements in Tuples\
console.log("===================Optional Elements in Tuples=====================");
var studentsDetails;
studentsDetails = ["Developer"]; //Valid with one elements 
studentsDetails = ["Developer, 42"]; //Valid with two elements  
//2.3. Rest Elements in Tuples
console.log("=====================Rest Elements in Tuples=======================");
var studentsAddress;
studentsAddress = ["Nepal", 23]; //valid
//studentsAddress = ["NEPAL", 09, 23, 5];  //Simple Error:  Decimals with leading zeros are not allowed. (because of 09)
studentsAddress = ["NEPAL", 9, 23, 5, 5, 6, 7, 8];
studentsAddress = ["Nepal"];
console.log(studentsAddress);
//2.4. Nested Tuples
console.log("===========================Nested Tuples===========================");
var developerRealName;
developerRealName = ['Prabin', [42, true]]; // Valid nested tuple 
console.log(developerRealName);
//5. Tuple Index Signatures  
console.log("======================Tuple Index Signatures=======================");
var tuple;
tuple = ['Alice', 30];
var firstElement = tuple[0]; // string
var secondElement = tuple[1]; // number
console.log(firstElement);
console.log(secondElement);
//Push Operation in Tuple 
console.log("======================Push Operation in Tuple======================");
var employee = {
    name: 'Developer',
    age: 24,
    skills: ['React', 'Typescript'],
    role: [1, 'author']
};
employee.role.push("published by XYZ authore");
console.log(employee);

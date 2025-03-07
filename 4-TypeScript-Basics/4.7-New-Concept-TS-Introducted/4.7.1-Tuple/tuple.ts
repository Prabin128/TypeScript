//1. Tuple Syntax

console.log("==========================Tuple Syntax=============================");

let randomVariable: [string, number, boolean];
randomVariable = ['Hello', 42, true];

console.log(randomVariable);


//2.1. Tuples Basics
console.log("==========================Tuple Basics=============================");

let person: [string, number] = ['Developer', 23];
//let invalidPerson: [string, number] = [4, 'Wrong name']; //error

console.log(person);
 

//2.2. Optional Elements in Tuples\
console.log("===================Optional Elements in Tuples=====================");

let studentsDetails: [string, number?];
studentsDetails = ["Developer"];  //Valid with one elements 
studentsDetails = ["Developer, 42"]; //Valid with two elements  

//2.3. Rest Elements in Tuples
console.log("=====================Rest Elements in Tuples=======================");

let studentsAddress : [string, ...number[]];
studentsAddress = ["Nepal", 23];  //valid
//studentsAddress = ["NEPAL", 09, 23, 5];  //Simple Error:  Decimals with leading zeros are not allowed. (because of 09)
studentsAddress = ["NEPAL", 9, 23, 5, 5, 6, 7, 8];
studentsAddress = ["Nepal"];
console.log(studentsAddress);


//2.4. Nested Tuples
console.log("===========================Nested Tuples===========================");
let developerRealName: [string, [number, boolean]];
developerRealName = ['Prabin', [42, true]];  // Valid nested tuple 
console.log(developerRealName); 


//5. Tuple Index Signatures  
console.log("======================Tuple Index Signatures=======================");

let tuple: [string, number];
tuple = ['Alice', 30];

let firstElement = tuple[0];  // string
let secondElement = tuple[1];  // number
console.log(firstElement);
console.log(secondElement);


//Push Operation in Tuple 
console.log("======================Push Operation in Tuple======================");

const employee : {
    name: string;
    age: number;
    skills: string[];
    role: [number, string];
}= {
    name: 'Developer',
    age: 24,
    skills: ['React', 'Typescript'],
    role: [1, 'author']
};

employee.role.push("published by XYZ authore"); // this kind of break the length constraint.

console.log(employee);


                    //1. Declaring array types in TypeScript

//1. Using Square brackets [`type[]` Syntax]                   
console.log("==================1. Array Types using type[]========================");

let numbers: number[] = [1,2,3,4,5,6,7];
let names: string[] = ['Developer', 'Engineer', 'Data Scientist'];

console.log(numbers);
console.log(names); 


//2. Using Generic Array Type  [Array<type>]
console.log("=================2. Array Types using Array<>========================");

let GenericNumbers: Array<number> = [1,2,3,4,5,6,7];
let GenericNames: Array<string>  = ['Developer', 'Engineer', 'Data Scientist']; 

console.log(GenericNames);
console.log(GenericNumbers); 

                        //3. Array Type Annotations

//1. Single dimensional Array( All of the above code are single dimensional arrays)

//2. Multidimenstional Arrays
console.log("====================Multidimensional Arrays==========================");

const multiDimensionalArray: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9 ]
];

console.log(multiDimensionalArray);


console.log("=========Declaring Multidimensional Arrays using Generic=============");
let GenericMultiDimensionalArray: Array<Array<number>> = [ [1,2], [3,4] ];
console.log(GenericMultiDimensionalArray);


//3. Arrays with Union Types
console.log("======================Union Type Arrays==============================");

const UnionArrayType: (number | string) [] = [1, 'Developer', 'Senior Developer', 2, 3 ];
console.log(UnionArrayType);


                    // 4. Tuple Types (Fixed-Length Arrays)

//1. Declaring Tuples 
console.log("=======================Declaring Tuples==============================");
//let person: [number, string] = ["Senior Developer", 25]; //Error: Type 'string' is not assignable to type 'number'.
let person: [string, number] = ["Senior Developer", 25];

console.log(person);

//2.Accessing Tuple Elements 
console.log("=====================Accessing Tuples Elements=======================");
console.log(person[0]); 
console.log(person[1]);


//3. Tuple with Optional Elements 
console.log("===================Tuples with Optional Elements=====================");
let minorPerson: [string, number?] = ["Junior Developer"];
                //OR,
//let minorPerson: [string, number?] = ["Junior Developer", 25];
console.log(minorPerson);


//4. Tuple with Rest Elements
console.log("======================Tuple with Rest Elements=======================");


let dynamicTuple: [number, number, number, ...number[]] = [1,2,3]; //valid
//let dynamicTuple1: [number, number, number, ...number[]] = [1,2,3,8,9,0]; //valid
console.log(dynamicTuple);


                            // 5. Declaring Readonly Arrays  

console.log("======================Declaring Readonly Arrays======================");
//let number  : ReadonlyArray<number> =  [1,2,3,4];
//OR,
let number  : readonly number[] =  [1,2,3,4];
console.log(number)  

                            //6. Array Destructuring

console.log("========================Array Destructuring==========================");
let arr: number[] = [1, 2, 3];
let [first, second, third] = arr;

console.log(first);  
console.log(second); 
console.log(third);   


                            // Advanced Array Types

// 1. Arrays with Generic Types 
console.log("======================Arrays with Generic Types======================");

function printArray<T> (a : T[]) : void {
    a.forEach(item => console.log(item));
}
printArray([1,2,3,4,5]);
printArray(["Hi", "Hello", "Hey"]);


//2. Array of Object
console.log("==========================Array of Objects===========================");

type Person = {
    name: string;
    age: number;
}

let personalDetails: Person[] = [
    {name: "Senior Developer", age: 25},
    {name: "Junior Developer", age: 15},
    {name: "Noob Developer", age: 5},
];

console.log(personalDetails);


                            // 8. Intersection Types with Arrays

//1. Intersection of Object Types in Arrays 
console.log("===============Intersection of Object Types in Arrays================");

type Admin = { privileges: string[] };
type User = { name: string; age: number };
type AdminUser = Admin & User;

let adminUser: AdminUser[] = [
    { name: "Developer", age: 25, privileges: ["edit", "delete"] }
];
console.log(adminUser);



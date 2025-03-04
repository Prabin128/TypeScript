                                //1. Numeric Enum

//1.1. Default Numeric Enum 
console.log("========================Default Numeric Enum=======================");

enum Direction {
    Up,  //0
    Down,  // 0+1 = 1
    Left,  // 1+1 =2
    Right   // 2+1 = 3
}

console.log(Direction);
console.log("=============================");


let dir: Direction = Direction.Up;
console.log(dir); // Output: 0


//1.2. Numeric Enum - fully Initialized
console.log("=================Numeric Enum - fully Initialized==================");

enum Direction1 {
    Up = 101,  
    Down = 101,  
    Left = 322,  
    Right = 411
}

let upDirection : Direction1 = Direction1.Up;
let downDirection : Direction1 = Direction1.Down;
let leftDirection : Direction1 = Direction1.Left;

console.log(upDirection);
console.log(downDirection);
console.log(leftDirection);


//1.3. Numeric Enums - Mix Initialized 
console.log("=================Numeric Enum - Mix Initialized====================");

enum Direction2 {
    Up = 1,
    Down,  //1+1 = 2
    Left = 7,
    Right  // 7+1 = 8
}

let downDir: Direction2 = Direction2.Down;
let rightDir: Direction2 = Direction2.Right

console.log(downDir);
console.log(rightDir);

                                //2. String Enums
console.log("============================String Enum============================");

enum StringEnum {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let directionString: StringEnum = StringEnum.Left;
console.log(directionString);

//3. Heterogeneous enums
console.log("========================Heterogeneous Enum=========================");

enum HeterogeneousEnum {
    Up = "UP",
    Down = 1,
    Left,
    Right = "RIGHT"
}

let heterogeneousLeftDirection: HeterogeneousEnum = HeterogeneousEnum.Left;
let heterogeneousRightDirection: HeterogeneousEnum = HeterogeneousEnum.Right;

console.log(heterogeneousLeftDirection);
console.log(heterogeneousRightDirection);



                                //Computed Enums

console.log("==========================Computed Enum============================");

enum Weekdays {
    Monday = 1,
    Tuesday = Monday + 1,
    Wednesday = Tuesday + 1,
    Thursday = Wednesday + 1,
    Friday = Thursday + 1,
    Saturday = Friday + 1,
    Sunday = Saturday + 1
}

console.log(Weekdays);
  


                            //Real World Example

console.log("=======================Real World Example==========================");

enum Role {
    SuperAdmin ="superAdmin",
    Admin = "admin",
    User = "user"
}

interface Person {
    name: string;
    age: number;
    role : Role;
}

//Create a person object
let person1: Person =  {
    name: "Developer",
    age: 23,
    role: Role.Admin  // Using enum to set role
}

console.log(person1);
 
// Here Comparing with  role .. if we declare  superAdmin  as "super_admin" it throws an error.
if(person1.role === "superAdmin") {
    console.log("This guy is the head of the programming World");
} else if(person1.role === "admin"){
    console.log("This guy is the cordinator of  this programming world");   
} else{
    console.log("This guy is a noob!!");
    
}
                            //1. "number" type in Typescript

let num1 : number = 2;  //Explicitly typed as number
let num2 = 2.3;
let hex: number = 0xff;      // Hexadecimal (0xff is 255 in Hexadecimal)
let binary: number = 0b1010; // Binary (0b1010 is 10 in decimal)
let octal: number = 0o744;   // Octal (0o744 is 484 in Octal)


//Number Operations 
console.log("=======================Number Operations================================"); // Makes Output Readable in Console

console.log(num1 + num2); // 4.3 (Addition)
console.log(binary - hex); // -245  (Subtraction)
console.log(octal * num2); // 1113.1999999999998 (Multiplication)
console.log(hex / num2); // 110.86956521739131 (Division)
console.log(num1 % num2); // 2  (Modulus)
console.log(Math.pow(num1, num2)); // 4.924577653379664 (Exponentiation)

                            //2. String type in typeSCript

let firstName : string = "Mr. Prabin";  // Explicitly typed as string
let lastName = "Poudel";  // Implicit typing

//String Operation 
console.log("=======================String Operations================================"); // Makes Output Readable in Console

console.log(firstName + " " + lastName); //Mr. Prabin Poudel
console.log(`The developer name is: ${firstName}  ${lastName}`); //The developer name is: Mr. Prabin  Poudel
console.log(firstName.length); //10
console.log(firstName.toUpperCase()); //MR. PRABIN
console.log(lastName.toLowerCase()); //poudel
console.log(firstName.charAt(1)); //r


                            //3.Boolean Operations

let a: boolean = true; // Explicit typing
let b: boolean = false; // Implicit typing (TypeScript infers as boolean)

console.log("=======================Boolean Operations================================"); // Makes Output Readable in Console
console.log(a && b); // false (Logical AND)
console.log(a || b); // true  (Logical OR)
console.log(!a);     // false (Logical NOT)
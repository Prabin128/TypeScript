# Introduction to Typescript

## Basic overview of Javascript

JavaScript is a loosely typed language, meaning variables are defined and their types are determined at runtime. This flexibility can lead to unexpected behavior, especially in larger projects.

For example, we might accidentally assign a value of the wrong type to a variable, resulting in errors that we only discover when the code is executed.

```js
let name = "Mr. Heavy Programmer"; 
name = 25; // No error during assignment, but this might break the code later.

function sayHelloToProgrammer(name){
    console.log(`Hello my boy ${name.toUpperCase()}`); // Error at runtime if `name` is not a string.
}

sayHelloToProgrammer(name); // Throws an error because `userName` is a number, not a string.
```
***Above code throws an error as:***
```
    console.log(`Hello my boy ${name.toUpperCase()}`);
                                     ^

TypeError: name.toUpperCase is not a function
    at sayHelloToProgrammer (E:\Typescript\index.js:5:38)
    at Object.<anonymous> (E:\Typescript\index.js:8:1)
    at Module._compile (node:internal/modules/cjs/loader:1460:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1544:10)
    at Module.load (node:internal/modules/cjs/loader:1275:32)
    at Module._compile (node:internal/modules/cjs/loader:1460:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1544:10)
    at Module._compile (node:internal/modules/cjs/loader:1460:14)
    at Module._compile (node:internal/modules/cjs/loader:1460:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1544:10)
    at Module.load (node:internal/modules/cjs/loader:1275:32)
    at Module._load (node:internal/modules/cjs/loader:1091:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:212:19)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:5)
    at node:internal/main/run_main_module:30:49
```
This error can be challenging to debug, as it only surfaces at runtime, making large projects harder to maintain and more prone to bugs. This is where TypeScript comes into the picture.


# What is Typescript?

<div align="center">
  <img src="https://github.com/user-attachments/assets/e7cf24c5-c6ed-4480-8e82-6cd4f7faf595" width="500" >
</div>

- TypeScript is a programming language developed and maintained by Microsoft that is essentially a superset of JavaScript. 
- This means that TypeScript includes everything that JavaScript can do, plus some additional features.
- TypeScript is a programming language that builds on JavaScript by adding static typing. Static typing means you can explicitly specify the types of variables, function arguments, return values, and more. 
- Unlike dynamic typing, where types are determined at runtime, static typing allows TypeScript to catch type-related errors early during development, improving code quality and reducing bugs.

For example, here’s the same code written in TypeScript:
```js
let name = "Mr. Heavy Programmer"; 
//name = 25; // Error: Type 'number' is not assignable to type 'string'

function sayHelloToProgrammer(name){
    console.log(`Hello my boy ${name.toUpperCase()}`); // Error at runtime if `name` is not a string.
}

sayHelloToProgrammer(name); // Works perfectly since `userName` is correctly typed.
```

## Summary 


- TypeScript is a JavaScript Superset.
- A Language building up on JavaScript.
- It adds new Features + Advantages to Javascript.
- Browser can't execute TypeScript.
- It's a powerful compiler which we run over our code tocomplie our typescript code to Javascript.
- We get result as Javascript when writing code in TypeScript.
- We wrote TypeScript code with all the new features and advantages, and we get normal JavaScript code.
- Gives a opportunity to identify errors in code earlier before our script runs and the error occurs at runtime in the browser.

### How can TypeScript add new features, if we get a result as a regular JavaScript?

It's because of the TypeScript Compiler. It compiles these new features to JavaScript workarounds.
- TypeScript doesn’t change the core JavaScript runtime.
- It adds tools (types, interfaces, generics) that disappear after compilation.
- It ensures safer, more maintainable code while still producing regular JavaScript.
- Modern JS Features → Converted into older JavaScript versions for compatibility.
In the end, TypeScript ensures safer code while producing standard JavaScript that runs in any browser. 



```Developers can't write invalid code and TypeScript helps developer write better code.```

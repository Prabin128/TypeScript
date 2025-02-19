Primitive Types: string, number, boolean, etc.
Arrays: string[], Array<number>, etc.
Objects: { key: type }, interfaces or type aliases.
Functions: (param: type) => returnType.
Union Types: string | number (a variable can have one of multiple types).
Type Aliases: type Person = { name: string, age: number }.
Interfaces: Describing the shape of an object or function.
Enums: enum Direction { Up, Down, Left, Right }.
Generics: Writing reusable, type-safe code that works with various types.




# PRIMITIVE TYPES (string, boolean and numbers)

- Primitive Types represent the most basic, immutable values that can't be broken down into smaller parts. 
- In JavaScript, these values are not objects and are handled in a very simple, direct way. 
- In short, Primitive types are immutable and hold single, simple values directly.

**Strings, Numbers and Boolean are the most basic primitive types in Javascript.**




## 1️⃣ Number Type in TypeScript

#### What is number in TypeScript?

- TypeScript uses the number type for both integers and floating-point numbers.
- Unlike some languages that have separate types for integers (int) and floating points (float), TypeScript follows JavaScript and uses number for all numeric values.
- It supports decimal, hexadecimal, binary, and octal literals.

 ***```Syntax & Examples```*** 

```ts 
let decimal: number = 25;
let float: number = 12.34;
let hex: number = 0xff; // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal
```

#####  Problems in JavaScript

**❌ No Type Safety**

```js
let price = 100;
price = "One hundred"; // No error in JavaScript but causes issues later
```

This could lead to runtime errors if the variable is used in calculations.

**❌ NaN and Implicit Conversions**

```js
console.log(10 + "20"); // "1020" (String Concatenation)
console.log(10 - "5");  // 5 (Automatic Type Conversion)
console.log(10 * "A");  // NaN (Not a Number)
```

    JavaScript allows implicit conversions, sometimes leading to unpredictable behavior.

##### How TypeScript Solves This

**✔ Strict Type Checking**

```ts
let price: number = 100;
// price = "One hundred"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

**✔ Prevents Unintended Type Conversions**

```ts
let total: number = 10 + parseInt("20"); // Explicit conversion required
console.log(total); // 30
```

## 2️⃣ Boolean Type in TypeScript

#### What is boolean in TypeScript?

- The boolean type in TypeScript allows only true or false values.
- This ensures variables meant to store boolean values are not mistakenly assigned non-boolean values.

 ***```Syntax & Examples```*** 

```ts
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;
```

#####  Problems in JavaScript

**❌ Falsy and Truthy Confusion**

```js
let isAvailable = "false"; 
if (isAvailable) {
    console.log("Available"); // This prints because "false" (string) is truthy in JavaScript
}
```

    JavaScript considers values like "false", [], and {} as truthy, which can lead to logic errors.

**❌ Implicit Type Conversions**

```js
console.log(Boolean(""));   // false (empty string is falsy)
console.log(Boolean("0"));  // true  (string "0" is truthy)
console.log(Boolean(0));    // false
console.log(Boolean([]));   // true  (empty array is truthy)
```

    This inconsistency causes unintended bugs.

##### How TypeScript Solves This

**✔ Strict Boolean Type**

```ts 
let isAvailable: boolean = true;
// isAvailable = "false"; // ❌ Error: Type 'string' is not assignable to type 'boolean'
```

**✔ Avoids Falsy/Truthy Ambiguity**

```ts
function checkAccess(isAdmin: boolean) {
    if (isAdmin) {
        console.log("Access Granted");
    } else {
        console.log("Access Denied");
    }
}
checkAccess(true); // ✅ "Access Granted"
checkAccess(false); // ✅ "Access Denied"
// checkAccess("true"); // ❌ Error
```

## 3️⃣ String Type in TypeScript

#### What is string in TypeScript?

The string type in TypeScript represents textual data enclosed in single quotes ('), double quotes ("), or backticks (` for template literals).

 ***```Syntax & Examples```*** 

```ts
let firstName: string = "John";
let lastName: string = 'Doe';
let fullName: string = `${firstName} ${lastName}`; // Template Literal
console.log(fullName); // "John Doe"
```

#####  Problems in JavaScript

**❌ Type Mixing & Implicit Conversion**

```js 
let message = "Hello";
message = 10; // ❌ No error in JavaScript, but can cause unexpected behavior
```

    JavaScript allows string reassignment to a number, leading to unpredictable results.

**❌ String Concatenation vs Template Literals Confusion**

```js
let name = "Alice";
console.log("Hello " + name + ", welcome!"); // Works, but not clean
console.log(`Hello ${name}, welcome!`); // Better way (introduced in ES6)
```

    Before ES6, string concatenation was messy.

##### How TypeScript Solves This

**✔ Strict String Type**

```ts
let message: string = "Hello";
// message = 10; // ❌ Error: Type 'number' is not assignable to type 'string'
```

**✔ Encourages Safer Template Literals**

```ts
let user: string = "Alice";
let greeting: string = `Hello ${user}, welcome!`; // ✅ Clean and readable
```
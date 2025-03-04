<a id="readme-top"></a>

# PRIMITIVE TYPES (string, boolean and numbers) 

Primitive Types represent the most basic, immutable values that can't be broken down into smaller parts. In JavaScript, these values are not objects and are handled in a very simple, direct way. In short, Primitive types are immutable and hold single, simple values directly.

**Strings, Numbers and Boolean are the most basic primitive types in Javascript.**


[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#primitive-types)

## 1️⃣ Number Type in TypeScript

#### What is number in TypeScript?

- TypeScript uses the number type for both integers and floating-point numbers.
- Unlike some languages that have separate types for integers (int) and floating points (float), TypeScript follows JavaScript and uses number for all numeric values.
- It supports decimal, hexadecimal, binary, and octal literals.

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#primitive_type)     


***```Syntax & Examples```*** 

```ts 
let decimal: number = 2;
let float: number = 2.3;
let hex: number = 0xff; // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal
```
**NOTE:** In TypeScript (and JavaScript), hexadecimal, binary, and octal numbers are treated as number types, and you can perform all the usual arithmetic operations on them just as we would with regular decimal numbers.

- **Hexadecimal (Base 16)** uses the digits 0-9 and the letters A-F to represent values. For example, 0xFF is 255 in decimal.
    ```ts
    let hex: number = 0xff;  // Hexadecimal representation of 255
    ```
- **Binary (Base 2)** uses 0 and 1 as its digits. For example, 0b1010 is 10 in decimal.
    ```ts
    let binary: number = 0b1010; // Binary representation of 10
    ```
- **Octal (Base 8)** uses digits from 0 to 7. For example, 0o744 is 484 in decimal.
    ```ts
    let octal: number = 0o744;  // Octal representation of 484
    ```

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#primitive_type)    

### Problems in JavaScript  


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

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#primitive_type)    

### How TypeScript Solves This

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
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#primitive-types)

## 2️⃣ Boolean Type in TypeScript

#### What is boolean in TypeScript?

- The ***boolean*** type in TypeScript allows only ```true or false``` values.
- This ensures variables meant to store boolean values are not mistakenly assigned non-boolean values.

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#primitive_type)    

***```Syntax & Examples```*** 

```ts
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;
```

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#primitive_type)   

### Problems in JavaScript

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

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#primitive_type)    

### How TypeScript Solves This

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
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#primitive-types)

## 3️⃣ String Type in TypeScript

#### What is string in TypeScript?

The ***string*** type in TypeScript represents textual data enclosed in single quotes ('), double quotes ("), or backticks (`) for template literals.

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#primitive_type)   

***```Syntax & Examples```*** 

```ts
let firstName: string = "Prabin";
let lastName: string = 'Poudel';
let fullName: string = `${firstName} ${lastName}`; // Template Literal
console.log(fullName); // "Prabin Poudel"
```

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#primitive_type)   

###  Problems in JavaScript

**❌ Type Mixing & Implicit Conversion**

```js 
let message = "Hello";
message = 10; // ❌ No error in JavaScript, but can cause unexpected behavior
```

JavaScript allows string reassignment to a number, leading to unpredictable results.

**❌ String Concatenation vs Template Literals Confusion**

```js
let name = "Web Developer";
console.log("Hello " + name + ", welcome!"); // Works, but not clean
console.log(`Hello ${name}, welcome!`); // Better way (introduced in ES6)
```

Before ES6, string concatenation was messy.

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#primitive_type)    

### How TypeScript Solves This

**✔ Strict String Type**

```ts
let message: string = "Hello";
// message = 10; // ❌ Error: Type 'number' is not assignable to type 'string'
```

**✔ Encourages Safer Template Literals**

```ts
let user: string = "Prabin";
let greeting: string = `Hello ${user}, welcome!`; // ✅ Clean and readable
```

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#primitive-types)  

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

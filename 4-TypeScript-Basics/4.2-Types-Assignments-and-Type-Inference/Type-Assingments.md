# Type Assignment and Type Inference in TypeScript

TypeScript provides a way to define types explicitly or let the compiler automatically determine them. These are known as Type Assignment and Type Inference.  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)

## 1. Type Assignment (Explicit Typing)

In Type Assignment, we explicitly specify the type of a variable using TypeScript's type annotations. This makes the code more readable and ensures that the variable can only hold values of the specified type.

***Example: Basic Explicit Typing***

```ts
let age: number = 25;
let name: string = "Praveen";
let isStudent: boolean = true;
```
Here:
``age`` is explicitly typed as type ``number`` , so it cannot hold a string like ``"25"``.  
``name`` is explicitly typed as ``string`` , so assigning name = 123; would cause an error.  
``isStudent`` is explicitly typed as ``boolean`` , preventing non-boolean assignments.  

**Attempting to assign the wrong type will result in an error:**

```ts
age = "twenty-five"; // ❌ Error: Type 'string' is not assignable to type 'number'.
```
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)

## 2. Type Inference (Implicit Typing)

TypeScript automatically infers the type of a variable based on the assigned value.    
If we don't specify a type, TypeScript assigns a type based on the value assigned.     
This reduces the need for explicit type declarations.

Example:

```ts
let city = "Kathmandu"; // TypeScript infers `city` as `string`
let temperature = 28;   // TypeScript infers `temperature` as `number`
let isRaining = false;  // TypeScript infers `isRaining` as `boolean`
```

Even though we didn't explicitly specify types, TypeScript understands the types based on the assigned values.

Here:
TypeScript understands that `city` is a `string`, `temperature` is a `number`, and `isRaining` is a `boolean`.

**Attempting to assign a different type later will cause an error:**
```ts
city = 12345; // ❌ Error: Type 'number' is not assignable to type 'string'.
```
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)

**Key Difference**

|**Feature** |	**Type Assignment (Explicit)** |	**Type Inference (Implicit)** |
|---|------|----|
|`Type Declaration` |Yes, explicitly defined| No, inferred by TypeScript  |
|`Flexibility `  |	More strict	 | More flexible |
|`Example `  | let x: number = 10;| let x = 10;|

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)

## When to Use Which?

- Use Type Assignment when you want strict type control and prevent unintended assignments.
- Use Type Inference when TypeScript can correctly determine the type, reducing redundancy.

**NOTE: Using type assignment during variable declaration is somewhat redundant and actually not considered to be a good practice as well because TypeScript is able to perfectly infer the type. For instance:**

```ts 
const number1 : number = 2;
```

- Here, assigning the type `number` is not a good idea because TypeScript automatically *infers the type of number1 as number* based on the assigned value. 
- By explicitly declaring the type, we're repeating what TypeScript already knows, making the code unnecessarily verbose. 
- This doesn't provide any additional benefits and can be seen as redundant. 
- It's better to rely on TypeScript's inference system, which keeps the code cleaner and more concise.

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)





## Type Inference in Functions

TypeScript can infer types in functions based on the return value.  

**Example: Function Return Type Inference**

```ts 
function add(a: number, b: number) {
  return a + b; // TypeScript infers the return type as `number`
}

let result = add(5, 10); // result is inferred as `number`
```

Here:

Since `a` and `b` are numbers, TypeScript infers that a + b will also be a `number`.

**Explicit Return Type (for better readability and safety)**

```ts
function multiply(a: number, b: number): number {
  return a * b; // Explicitly stating return type
}
```  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)  

## Type Inference in Arrays

TypeScript infers array types based on the assigned values.  
***Example: Type Inference in Arrays***
```ts
let numbers = [1, 2, 3, 4]; // Inferred as `number[]`
let fruits = ["Apple", "Banana", "Mango"]; // Inferred as `string[]`
```
**Mixing types in an inferred array will cause an error:**

```ts
numbers.push("five"); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

If we want to store multiple types, explicitly declare the type:

```ts
let mixed: (number | string)[] = [1, "Two", 3];
```  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)  

## Type Inference in Objects

TypeScript infers types in objects based on the properties.

***Example: Type Inference in Objects***

```ts
let person = {
  name: "Praveen",
  age: 26,
  isStudent: false
}; 
// TypeScript infers `person: { name: string; age: number; isStudent: boolean; }`
```
**Trying to assign a different type to a property will cause an error:**

```ts 
person.age = "twenty-six"; // ❌ Error: Type 'string' is not assignable to type 'number'.
```  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)
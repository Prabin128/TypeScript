# Introduction to Arrays in TypeScript   

In TypeScript, arrays are a fundamental data structure that allows us to store multiple values of the same type.  
TypeScript provides several ways to define arrays, ensuring type safety and better code maintainability.    

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#array_types)    

# 1. Declaring Arrays in TypeScript    
TypeScript provides two primary ways to declare arrays:  

### 1. Using Square brackets [`type[]` Syntax] (Preferred Syntax)  

```ts
let numbers: number[] = [1,2,3,4,5,6,7];
let names: string[]  = ['Developer', 'Engineer', 'Data Scientist'];
```   
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)  

### 2. Using Generic Array Type [`Array<type>`]

```ts
let numbers: Array<number> = [1,2,3,4,5,6,7];
let names: Array<string>  = ['Developer', 'Engineer', 'Data Scientist'];
```  

Both the syntaxes are valid, but the square bracket syntax (`T[]`) is more commonly used.   

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#array_types)    

# 2. Type Inference with Arrays

If the type is not explicitly defined, TypeScript infers the type based on the values provided.
```ts
let dummyArray = [1, "hello", true];
// Type inferred as (string | number | boolean)[] 
```  

For strict typing:  

```ts
let strictArray: (string | number)[] = [1, "hello", 3];
```    

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#array_types)    


# 3. Array Type Annotations

### 1. Single-Type Arrays  

To declare an array of a specific type (e.g., number, string, boolean), we use the following syntax:

```ts
let numberArray: number[] = [1,2,3,4,5,6,7];
let stringArray: string[] = ['Developer', 'Engineer', 'Data Scientist'];;  
```
Here:

- `numberArray` is an array containing only `number` elements.
- `stringArray` is an array containing only `string` elements.     

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)

###  2. Multidimensional Arrays  

TypeScript allows for multidimensional arrays (arrays of arrays).  
For example, a 2D array can be defined as:

```ts
let multiDimensionalArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];  
```  
This syntax can be extended to higher-dimensional arrays.  

We can also use the generic syntax:  

```ts  
let GenericMultiDimensionalArray: Array<Array<number>> = [[1, 2], [3, 4]];
```
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)  

### 3. Arrays with Union Types  

Arrays can also hold elements of different types by using a `union` type.

```ts
const UnionArrayType: (number | string) [] = [1, 'Developer', 'Senior Developer', 2, 3 ];
console.log(UnionArrayType);  
```  

Here, **UnionArrayType** can contain both `string` and `number` elements.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#array_types)  

# 4. Tuple Types (Fixed-Length Arrays)

Tuples are a special kind of array where the number and types of elements are fixed.  
Tuples in TypeScript allows to store values of different types in a fixed-length array.  

### 1. Declaring Tuples  

Tuples can be defined with specific types for each position:

```ts
let person: [string, number] = ["Senior Developer", 25];
//let person: [number, string] = ["Senior Developer", 25]; //Error: Type 'string' is not assignable to type 'number'.
```
Here, **person** is a **tuple** with the **first element** being a ***string*** and the **second element** being a ***number***.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)  

### 2. Accessing Tuple Elements  

We can access tuple elements just like arrays:

```ts
let name = person[0];  // string
let age = person[1];   // number  
```    

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)

### 3. Tuple with Optional Elements  

Tuples can also contain `optional` elements:

```ts
let minorPerson: [string, number?] = ["Junior Developer"]; //Valid
                //OR,
//let minorPerson: [string, number?] = ["Junior Developer", 25]; //Valid 
```
Here, the second element `number?` is **optional**.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)
 
### 4. Tuple with Rest Elements   

We can use **rest elements** in tuples to accept multiple values of a specific type.  
- A rest element (`...`) in a tuple allows for additional values of a specified type.  
- The rest element must be at the last position in the tuple.
- The rest element acts like an array but still maintains tuple behavior.

```ts
let dynamicTuple: [number, number, number, ...number[]] = [1,2,3]; //valid
let dynamicTuple1: [number, number, number, ...number[]] = [1,2,3,8,9,0]; //valid
```  
Here:  
- The first three elements are **strictly numbers**.
- The rest (`...number[]`) allows any number of additional `number` elements

This allows for more flexible tuple types, where the first three elements must be `number` and any additional elements can also be `number`.  


###  Difference in `[number, number, number, ...number[]]`  and  `[number, number, number, ...[number]]`   

**Tuple 1:**   

```ts
let dynamicTuple: [number, number, number, ...[number]] = [1,2,3,8,9,0]
```  

***Explanation:***

The structure `[number, number, number, ...[number]]` is **incorrect and redundant**.  
`[number]` is just a tuple with a single number, meaning `...[number]` is just `number` (not an array).  
    
This is equivalent to:  

```ts
let dynamicTuple: [number, number, number, number] = [1, 2, 3, 8]; 
```

The rest element here doesn't behave as expected because `[number]` only allows a single additional number.
So, **8, 9, 0** would **not be valid**.    

***✅ Correct way (if rest is intended):***   

```ts
let dynamicTuple: [number, number, number, ...number[]] = [1, 2, 3, 8, 9, 0];
```   
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)  

**Tuple 2:**  

```ts
let dynamicTuple: [number, number, number, ...number[]] = [1, 2, 3, 8, 9, 0]
```    

***Explanation:***

- `[number, number, number, ...number[]]`
    - First `three` elements must be `numbers`.
    - `...number[]` allows any additional numbers.
- This correctly allows values like `[1, 2, 3, 4, 5]`.

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#array_types)  


# 5. Readonly Arrays  

A `ReadonlyArray<T>` is a type of array in which the elements ***cannot be modified after creation***.  
This is useful for maintaining immutability.  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

### Declaring Readonly Arrays
We can create a readonly array using `ReadonlyArray<type>` or `readonly type[]`.

```ts
let numbers: ReadonlyArray<number> = [1, 2, 3];

numbers[0] = 4; // Error: Index signature in type 'readonly number[]' only permits reading  
```

Similarly, the shorthand syntax can be used:

```ts
let readonlyNumbers: readonly number[] = [1, 2, 3];  
```   
In both cases, we cannot `push`, `pop`, or `modify` any elements in the array after it is created.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#array_types)    

# 6. Array Destructuring  

TypeScript supports array destructuring, which allows to unpack values from arrays into distinct variables.

```ts
let arr: number[] = [1, 2, 3];
let [first, second, third] = arr;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3  
```
We can also skip certain elements:

```ts
let [first, , third] = arr;  // Skip the second element
console.log(first);  // 1
console.log(third);  // 3
```    

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#array_types)    

# 7. Advanced Array Types  

### 1. Arrays with Generic Types  
TypeScript allows to specify a generic type for arrays, which can be used when defining functions that work with arrays.  

```ts
function printArray<T>(a: T[]): void {
    a.forEach(item => console.log(item));  // Prints each element
}

printArray([1, 2, 3, 4, 5]);
printArray(["Hi", "Hello", "Hey"]);
```
In this example, the function printArray can accept an array of any type, and T will be inferred based on the argument passed.

- `function printArray<T>(a: T[]): void`

    - This defines a **generic function** named `printArray`.
    - `<T>`: This is a generic type parameter, which means the function can work with any data type.
    - (`a: T[]`): The function takes a parameter `a`, which is an array of type T.
    - `void`: The function does not return anything.  

**What Does <T> Do?**  
It allows the function to accept an array of any data type (e.g., `number[]`, `string[]`, `boolean[]`, etc.).    

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

### 2. Arrays of Objects    
Arrays can also hold complex data structures like objects.

```ts
interface Person {
  name: string;
  age: number;
}

let personalDetails: Person[] = [
    {name: "Senior Developer", age: 25},
    {name: "Junior Developer", age: 15},
    {name: "Noob Developer", age: 5},
];

console.log(personalDetails);   
```    

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#array_types)   

# 8. Intersection Types with Arrays

We can use intersection types in arrays, but they **don’t merge arrays**. Instead, they enforce elements to satisfy multiple types.  

### 1. Intersection of Object Types in Arrays  

```ts
type Admin = { privileges: string[] };
type User = { name: string; age: number };
type AdminUser = Admin & User;

let adminUser: AdminUser[] = [
    { name: "Developer", age: 25, privileges: ["edit", "delete"] }
];
console.log(adminUser);
```   

- ✔ Each object in `adminUsers` must have both `role` (from `Admin`) and `username` (from `User`).


[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

### 2. Intersection of Array Types

We can use intersection types with arrays, but **it does not combine different array types** —instead, it enforces type compatibility.  

```ts
type Numbers = number[];
type Strings = string[];

type Mixed = Numbers & Strings; // ❌ Not valid (arrays don't merge)
```  

**⚠ Error**: Arrays don’t merge using `&`.  Instead, use union types (`|`) if you want mixed elements:  

```ts
type Mixed = (number | string)[];
let values: Mixed = [1, "hello", 2, "world"];
```  
**✔ Fixed**: Use a union (`|`) instead of an intersection (`&`).    

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

##### When to Use Intersection Types in Arrays?

- ✔ Use intersection types when:

    - We need an array of objects that must satisfy multiple type conditions.
    - We want to combine multiple object types into one.

- ✔ Avoid intersections for array types (like `number[] & string[]`) because they don’t merge properly.


[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#array_types)   




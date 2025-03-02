# Introduction to Tuples  

In TypeScript, a tuple is a special type of array with a fixed size and known types for each of its elements.  
Unlike arrays in JavaScript, which can hold any number of elements of any type, tuples allow us to define an array where each element can have a specific type, and the length of the array is fixed.

Tuples are particularly useful when we need to store data that has a known, fixed number of elements with specific types, like representing a pair of values or a record with mixed data types.    

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples)   

# Tuple Syntax
A tuple is defined using square brackets [], similar to arrays, but with elements of possibly different types. The types of elements in the tuple are specified in order.

Example:

```ts
let randomVariable: [string, number, boolean];
randomVariable = ['Hello', 42, true];  
```
In this example, `randomVariable` is a **tuple** containing a `string`, a `number`, and a `boolean` in that specific order.

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples)    


# Tuple Type Definition  

### Basic Tuple  

A tuple can be defined with a fixed number of elements, each having a specific type:

```ts
let person: [string, number] = ['Alice', 30];  // Valid tuple
let invalidPerson: [string, number] = ['Bob', 'thirty'];  // Error  
```  

In the above example, `person` is a valid tuple with a `string` followed by a `number`.  
The second assignment is invalid because the second element is expected to be a `number`, but a `string` ('thirty') was provided.   

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   


### Optional Elements in Tuples  

Tuples can have optional elements, defined by using the `?` syntax.  
An optional element can be omitted when creating the tuple.

```ts
let tuple: [string, number?];
tuple = ['Hello'];  // Valid tuple with one element
tuple = ['Hello', 42];  // Valid tuple with two elements  
```  
In this case, the second element is optional.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

### Rest Elements in Tuples  

TypeScript allows to define a tuple with a rest element using the `...` syntax.  
The rest element must be of the same type and can appear only at the end of the tuple.

```ts
let tuple: [string, ...number[]];
tuple = ['Alice', 30, 42, 50];  // Valid tuple with a string and multiple numbers
tuple = ['Bob'];  // Valid tuple with just a string  
```  

In this example, the tuple starts with a `string` and then can have zero or more `number` elements.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

### Nested Tuples  

Tuples can also be nested, where an element inside a tuple is another tuple:

```ts
let tuple: [string, [number, boolean]];
tuple = ['Alice', [42, true]];  // Valid nested tuple  
```
Here, the second element of the tuple is itself a tuple consisting of a `number` and a `boolean`.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types) 

### Tuple Index Signatures  

Tuples have specific indices that we can reference by their position.  
TypeScript ensures that the element at the specified index matches the type declared for that index.

```ts
let tuple: [string, number];
tuple = ['Alice', 30];

let firstElement = tuple[0];  // string
let secondElement = tuple[1];  // number
```
In the example above, `tuple[0]` is a `string` and `tuple[1]` is a `number`.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types) 

### Tuples and Type Inference  

TypeScript has type inference for tuples, meaning that if we initialize a tuple without specifying the type, TypeScript can automatically infer the types of the tuple based on the initial values.

```ts
let tuple = ['Alice', 30];  // Inferred as [string, number]  
```  
In this case, TypeScript automatically infers the type `[string, number]` for the tuple.

However, when we define a tuple type, it is important to match the types exactly:

```ts
let tuple: [string, number] = ['Alice', 30];  // Correct
let wrongTuple: [string, number] = ['Alice', '30'];  // Error: '30' is a string, expected a number
```  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types) 

### Tuple Types and Arrays  

While tuples can be considered a type of array, there are some differences.  
Arrays in TypeScript are typically homogeneous (all elements of the same type), while tuples can be heterogeneous (elements of different types).  

- **Array**: `let arr: number[] = [1, 2, 3]`(Only numbers allowed)
- **Tuple**: `let tuple: [string, number] = ['Alice', 30]` (A string followed by a number)
Additionally, arrays can have a dynamic size, whereas tuples are fixed-size.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples)  

# Why Use Tuples?
In many scenarios, arrays can be used to represent collections of values. However, when we need to store a fixed-size sequence of elements where each element has a different type, using a tuple becomes ideal.

For example, in TypeScript, we might want to represent a person's role in an application as an array with two elements:

- The first element is a `number` (identifier).
- The second element is a `string` (role name).    

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types) 

**Example Scenario**

```ts
const person = {
  name: "Developer",
  age: 24,
  skills: ["React", "TypeScript"],
  role: [1, "author"]
};
```  

Here, 
we have a `person` object with a `role` property, which is an array containing exactly two elements:

- The first element is a `number` (1).
- The second element is a `string` ("author").  

In this example, the `role` property is an array, but TypeScript doesn't know that it should always contain exactly two elements, one of type `number` and the other of type `string`.   

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types) 

## Problem with Standard Arrays in TypeScript
If we simply type the `role` property as an array of type `string | number[]`, TypeScript will allow more elements to be added or the wrong types to be assigned, which might lead to unintended results.

For instance:  

```ts
person.role.push('admin');  // TypeScript won't throw an error, but this should not be allowed.
person.role[1] = 10;        // This also passes because TypeScript sees the type as string | number.
```    

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types) 

## Solution: Using Tuples  
Tuples allow to define an array with specific types for each element, along with a fixed length.  
Here's how we can define the `role` property as a tuple:  

```ts
const person: {
  name: string;
  age: number;
  skills: string[];
  role: [number, string]; // Tuple type, first element is number, second element is string
} = {
  name: "Developer",
  age: 24,
  skills: ["React", "TypeScript"],
  role: [1, "author"]
};

```  

Now, TypeScript knows that:

- The `role` must always contain exactly two elements.
- The first element must be a `number`.
- The second element must be a `string`.   

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types) 


# Behavior of Tuples   

Tuples in TypeScript come with several important behaviors:

**1. Fixed Length**: Tuples have a fixed length, and the types of elements are explicitly defined in the tuple type. Any operation that violates these constraints will result in a compile-time error.

**2. Type Safety**: The elements of a tuple are strongly typed. You can enforce exact types for each element at specific positions.

**3. Index Signature**: You can access tuple elements by index, and TypeScript will enforce the types of the elements. For example:

- `role[0]` is a ***number***.
- `role[1]` is a ***string***.  

**4. Push Operation**: One thing to note is that the `push` method is allowed in tuples, but it can violate the fixed length rule.  
This means while the array itself has a fixed length, we can still push new elements to the tuple, which could cause an inconsistency in length.  
Therefore, caution should be exercised when performing operations like `push` on tuples.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

# Tuple Example with Errors  

Consider the following example:

```ts
const person: {
  name: string;
  age: number;
  skills: string[];
  role: [number, string]; // Tuple type with fixed length and specific types
} = {
  name: "Developer",
  age: 24,
  skills: ["React", "TypeScript"],
  role: [1, "author"]
};

// Valid assignment
person.role = [0, "admin"]; // Works fine, role is now a valid tuple

// Error: Assignment is not allowed as we are trying to assign more than two elements.
person.role = [0, "admin", "extra"]; // Error: Type '[number, string, string]' is not assignable to type '[number, string]'.

// Error: Changing type of the second element is not allowed
person.role[1] = 10; // Error: Type 'number' is not assignable to type 'string'.
 
```  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)  

#### Key Features of Tuples in TypeScript  

**Length Constraint**: Tuples enforce that the array has the exact length defined in the type.  
In the example above, `role` can only have two elements: one `number` and one `string`.  

**Type Constraints**: Each element in a tuple can be a different type.  
In the case of `[number, string]`, the first element is of type `number`, and the second is of type `string`.  

**Type Safety for Indexes**: TypeScript ensures that the correct type is used when accessing elements in the tuple based on the index. For example, `role[0]` will always be a `number`, and `role[1]` will always be a `string`.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples)  
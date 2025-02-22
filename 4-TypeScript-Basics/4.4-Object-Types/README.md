# Object Type in TypeScript

In TypeScript, the object type represents all values that are not in primitive types.

The following are primitive types in TypeScript:

- number
- bigint
- string
- boolean
- null
- undefined
- symbol
 
It can be used to define objects that are not of type `number`, `string`, `boolean`, `symbol`, `null`, `bigint`, or `undefined`.

While JavaScript has an object type (Object), TypeScript has a more strict and specific system to handle objects.   
It adds additional type checking to ensure type safety.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)   

# Understanding Object Type

```ts
const cars = {
    name: 'Toyota',
    model : 'Camry',
    year: 2000
}
console.log(cars)
```  

**In JavaScript**  
If we try to access the property which doesnt exists, it simply gives undefined.      
Example:

```js
console.log(cars.owner); // it gives "undefined" as an output.
```  
**In TypeScript**
- It shows a compilation error during the type-checking phase.   
- This is because TypeScript enforces stricter type checking, and the type of the object `cars` is inferred based on its structure.  
- TypeScript infers the type of cars based on the structure provided. In this case, it infers the type as:  

```ts
{ name: string; model: string; year: number; }
```  
This means `cars` is expected to have only the properties `name`, `model`, and `year`, and their corresponding types `(string, string, and number)`.  

**Error Message:**

The error message we get is:
```sh
Property 'owner' does not exist on type '{ name: string; model: string; year: number; }'

```    
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)   

### Object Types Definition 

<div align="center">
  <img src="https://github.com/Prabin128/TypeScript/blob/main/assets/object_types.png" width="700" >
</div>   

If we hoverd over cars, we can see there is a `semi-colon(;)` after the variable or constant name `cars`.  
It inferred that  there is a type of data as: `{ name: string; model: string; year: number; }` which is stored in  there.  

```ts
const cars: {
    name: string; 
    model: string; 
    year: number; 
}
```  
This is the concrete object. It is an **object type definition**, not an object literal.  
It defines that `cars` is an object with three specific keys: `name`, `model`, and `year`.   
Each of these keys is associated with a type:

- `name` has to be a string
- `model` has to be a string
- `year` has to be a number   

In TypeScript, we are not defining key-value pairs here, but **key-type pairs**.   
This means that we are specifying what the type of each property should be, rather than providing values for them.   
This object type is inferred by TypeScript.  

- Object types are there to describe the type of object that is getting used somewhere.   
- The syntax for defining an object type in TypeScript might appear similar to how objects are defined in JavaScript, but it has some key differences.  
    - For instance, 
        - TypeScript uses a `semicolon (;)` to separate key-value pairs in the type definition rather than a `comma (,)`, as is the case in JavaScript objects.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)     

### Object Type vs. Object Literal
It's important to differentiate between **object types** and **object literals** in TypeScript.

**1. Object Literal**: An ***object literal*** in TypeScript is simply an object with values assigned to properties:

```ts
const cars = {
    name: 'Toyota',
    model: 'Camry',
    year: 2000
};
```
Here, the `cars` object has the actual values assigned to its properties.

**2. Object Type**: 
An ***object type*** (like the one in the first example) only specifies the structure of the object.   
It defines the types of the properties but does not provide any actual values.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)   

## Using the object Type  
We can use the ***built-in object type*** when we want to indicate that a variable is an object, without specifying the exact structure.  
This is the most **generic object type**.

***We could explicity  assign a  type to  the constant of object as:*** 
```ts
const cars: object = {
    name: 'Toyota',
    model : 'Camry',
    year: 2000
}
``` 

In the above code, we simply tell TypeScript that `cars`  is of type **object**, but **we don't specify its structure**.   
Since the type is too broad, TypeScript doesn't know what properties the object can have.  
Indeed, now accessing properties like `cars.name` or `cars.model` will actually get an error.  
Because we tell the typescript that we have an object where we don't specify its structure to TypeScript.  
So, actually TypeScript doesnt support any type of property because we dont tell it anything  about the object.  
But we should be more  specific than this.  We will not be working with this generic object type.   
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)     

**Implicit Type Inference in TypeScript**  
TypeScript can automatically infer the type of an object from its structure.   
In the previous example as:  
```ts
const cars = {
    name: 'Toyota',
    model: 'Camry',
    year: 2000
};
```  
Here, TypeScript automatically infers that cars is of the type:    
`const cars: object =  {name: 'Toyota',model : 'Camry',  year: 2000}`. 

Thus, there is no need to manually specify the type, as TypeScript already knows the structure of the object.
 
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)   

**Explicitly Defining Object Type**

Although TypeScript can infer the type of an object, there are cases where we may want to `explicitly define` the structure of an object.   
This can help provide clarity and avoid issues when the object structure is more complex or needs to be enforced for consistency.    
- **Using the {} Type**  
In TypeScript, we can also use the **{} type**, which represents an **empty object type**.   
This means that the object can be any object, but no specific structure is defined.  
```ts
const cars: {} = {
    name: 'Toyota',
    model : 'Camry',
    year: 2000
}
``` 
Here, the `{}` will be stripped out of the compiled JS code. This is just TypeScript notation of a object type where we provide some information about the structure of the object.  

- While this works in TypeScript, it does not provide any meaningful type checking, as it only states that `cars` is an object of some form.   
- This is similar to using the object type but is even more general.   
- It’s worth noting that the `{}` type is effectively the same as using object, so we generally wouldn’t want to use it unless we are dealing with dynamic or unknown object shapes.
    
However, assigning just an empty pair of curly braces as a type, we essentially do the same as with object.   
We tell TypeScript that this is some object.   
We can be even more specific by adding key-type entries here which generally means **Explicitly Defining Object Types**.

- **Explicitly Defining Object Types**  
 
```ts
const cars: {
    name: string;
    model: string;
    year: number; 
} = {
    name: 'Toyota',
    model : 'Camry',
    year: 2000
}
``` 
Here, we are being specific by telling TypeScript that:  
the object which should be stored in `cars` should have a name property and the type of that `name` property should be string and so on for rest of the properties.  
Hence, we described the type of value which will eventually be stored in `name`,`model` and `year`.  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type) 

**NOTE:** This is the explicit assingment the same thing that is inferred by TypeScript before. 
If we not even explicity assign the  key-type pairs, Typescript describe the type automactially by analyzing the key-value pairs.  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type) 

***`Assigning type explicitly for objects is not a good practise. These are just for understanding object types.`***

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)   

# Ways to define the type of an object  

### 1. Object Literal Type
We define an object type directly by specifying its properties and their types inline.  
```ts
let person: {name: string, age:number}
person =  {name: "Prabin", age:30};
person = {name:"Prabin", age: "24"};  //Error : age should be a number
```  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)   
### 2. Using Interfaces
An interface defines the shape of an object. It can be reused and extended.
```ts
interface Person {
    name: string;
    address:string;
    age: number;
}
let developerDetails: Person = {name: "Prabin", address: "Somewhere in the earth", age: 30}; // valid
console.log(developerDetails); 
```
**Extending interfaces:**

```ts
interface Employee extends Person {
    isSeniorDeveloper: boolean;
}

let employee: Employee = {name: "Heavy Developer", address:"Earth", age:25, isSeniorDeveloper:false}
console.log(employee);
```  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)   

### 3. Using Type Aliases
We can define the type of an object using a `type` alias. It works like an interface but can also represent union types, etc.

```ts
type address = {
    province: string,
    district: string,
    provinceNumber: number 
};

let Address : address = { province : "ABC", district:"abc", provinceNumber:4};
console.log(Address);
```  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)   

### 4. Object with Index Signatures
If an object can have any number of properties of the same type, use an index signature.

```ts
let user : {  [key: string]: string};
user = {name : "Heavy Dveloper", email: "xyz12@gmail.com"};  //valid
console.log(user);
user = {name : "Heavy Dveloper", email: "xyz12@gmail.com", address:"xyz"}; //valid
console.log(user);
//user = {name : "Heavy Dveloper", email: "xyz12@gmail.com". age: 23};  //invalid : error TS2322: Type 'number' is not assignable to type 'string'.
```  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)    

### 5. Readonly Object
If we want to make sure an object’s properties cannot be changed after it’s created, use readonly.

```ts
interface Person {
    readonly name: string;
    age: number;
}

let person: Person = { name: "John", age: 30 };
person.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property
```  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)   

### 6. Optional Properties  
We can make some properties optional by using the ? operator.

```ts
interface Person {
    name: string;
    age?: number; // Optional property
}

let person1: Person = { name: "John" }; // Valid
let person2: Person = { name: "Alice", age: 30 }; // Valid
```   
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)   


**Summary of Methods:**
- ***Object Literal Type***: Directly define object shape.
- ***Interface***: Define object shape and reuse/extend.
- ***Type Alias***: Define object type and use it in other places.
- ***Index Signature***: Define objects with dynamic properties.
- ***Readonly Object***: Make properties immutable.
- ***Optional Properties***: Make properties optional with ?.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#object_type)   

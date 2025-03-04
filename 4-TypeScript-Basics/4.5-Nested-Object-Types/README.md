<a id="readme-top"></a>  

# Understanding Nested Objects in TypeScript    

In TypeScript, **nested objects** are simply objects that contain other objects as their properties.  
These nested structures can be used to represent more complex data models.  
TypeScript allows us to define and work with these **nested objects**, providing strong type-checking and structure to help avoid errors.  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#nested_object_type)   

### 1. Defining a Nested Object Type

We can define the type of a nested object just like we would with a regular object.  
In this case, we need to specify the structure of both the outer object and the inner objects. 


**Example: Simple Nested Object**  

Here is an example where the outer object has a nested object as one of its properties: 

```ts
const carAndOwnerDetails = {
    name: 'Toyota',
    model: 'Camry',
    year: 2020,
    owner: {
        name: 'Prabin Poudel',
        age: 35
    }
};
```   

**Output:**  
 
```sh
{
  name: 'Toyota',
  model: 'Camry',
  year: 2020,
  owner: { name: 'Prabin Poudel', age: 35 }
}
```  

In this example, the `owner` property is a nested object with properties `name` (string) and `age` (number).     

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#nested_object_type)   

### 2. Explicitly Defining Types for Nested Objects  
To be more explicit about the types of the outer and nested objects, we can define the object structure with **type annotations**.    

**Example: Explicit Type Annotation with Nested Object** 

```ts
const carOwnerDetails: {
    name: string;
    model: string;
    year: Date;
    owner: {
        name: string;
        age:number;
    }
} = {
    name: 'Toyota',
    model: 'Camry',
    year: new Date(),
    owner: {
        name: 'Senior Developer',
        age: 35
    }   
}
```   

**Output:**   

```sh
{
  name: 'Toyota',
  model: 'Camry',
  year: 2025-02-22T16:24:26.222Z,
  owner: { name: 'Senior Developer', age: 35 }
}
``` 

In this case:  
- The outer object `carOwnerDetails` has properties `name`, `model`, `year`, and `owner`.
- The `owner` property is itself an **object**, which is described with the type `{ name: string; age: number; }`. 

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#nested_object_type)    

### 3. Using Interfaces for Nested Objects  
A more reusable and cleaner way to define object types in TypeScript is to use **interfaces**.  
This is especially useful when we need to define nested objects with similar structures across different parts of our code.

**Example: Using Interfaces for Nested Objects**

```ts
interface Product {
    nameOfProduct: string;
    numberOfQuantity: number;
    isStillAvailable: boolean; 
}

interface Category {
    nameOfCategory: string;
    dateCreated: Date;
    product: Product
}

const productDetails: Category = {
    nameOfCategory: "Electronics",
    dateCreated : new Date(),
    product : {
        nameOfProduct: "Iphone 17",
        numberOfQuantity: 13000,
        isStillAvailable: true
    }
}

console.log("Detailed Description of product:", productDetails);
```   

**Output:**  

```sh
Detailed Description of product: {
  nameOfCategory: 'Electronics',
  dateCreated: 2025-02-22T16:24:26.233Z,
  product: {
    nameOfProduct: 'Iphone 17',
    numberOfQuantity: 13000,
    isStillAvailable: true
  }
}
```  

Here:
- We define an `Product` interface to describe the structure of the `product` object.
- The `Category` interface uses the `Product` interface as the type for its `product` property, creating a **nested object structure**.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#nested_object_type)   

### 4. Optional Nested Properties  
Just like with regular object properties, we can make nested properties optional by using the `?` operator.  
This is useful when not all nested properties are guaranteed to be present.  

**Example: Optional Nested Property**   

```ts
interface Address {
    district: string;
    numberOfMunicipality: number;
    isGood: boolean; 
}

interface PersonalInformation{
    name: string;
    dateOfBirth: string;
    address?: Address
}

const personalDetails: PersonalInformation = {
    name: "Electronics",
    dateOfBirth : "1999/02/02",
}

console.log("Information of Person", personalDetails);  
```   

**Output:**   

`Information of Person { name: 'Electronics', dateOfBirth: '1999/02/02' }`  

In this example:  

The `address` property in the `PersonalInformation` interface is optional, meaning it's okay if the `personalDetails` object doesn't have an `address` property. 

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#nested_object_type)    

### 5. Nested Objects with Index Signatures   
In some cases, the nested object might have dynamic keys. We can use index signatures to allow for this.

**Example: Nested Object with Dynamic Keys**  

```ts
interface OwnerDetails {
    name: string;
    age: number;
    [key: string]: any;  // Allows dynamic properties
}

const carInformation = {
    name: 'Toyota',
    model: 'Camry',
    year: 2020,
    owner: {
        name: 'Mr. Bill Gates',
        age: 35,
        address: 'XYZ',  // Dynamic property
    }
};  
``` 

**Output:**

```sh
Information of Car: {
  name: 'Toyota',
  model: 'Camry',
  year: 2020,
  owner: { name: 'Mr. Bill Gates', age: 22, address: 'XYZ' }
}
```

In this example:

The `OwnerDetails` interface allows any additional properties to be added to the `owner` object through the index signature `[key: string]: any`.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#nested_object_type)   

### 6. Nested Objects with Deep Nesting
We can define deeply nested objects in TypeScript by recursively describing the structure.  

**Example: Deeply Nested Objects**  

```ts
interface Engine {
    type: string;
    horsepower: number;
}

interface Jeep {
    name: string;
    model: string;
    year: number;
    engine: Engine; // Nested Engine object
}

const jeepDetails: Jeep = {
    name: 'Toyota',
    model: 'Camry',
    year: 2020,
    engine: {
        type: 'V6',
        horsepower: 300
    }
};

console.log("Nested Objects with Deep Nesting", jeepDetails);
```     

**Output:** 

```sh
Nested Objects with Deep Nesting {
  name: 'Toyota',
  model: 'Camry',
  year: 2020,
  engine: { type: 'V6', horsepower: 300 }
}
```  

Here:  
The `Jeep` interface contains an `engine` property, which is itself an object defined by the `Engine` interface.  
This allows for creating more complex nested structures.  

**Why Is This Useful?** 

- **Organization**: It helps to organize complex data. Instead of storing everything in a flat structure, we can group related data together (like the `engine` details inside a `car`).
- **Reusability**: The `Engine` interface can be reused for other objects, not just cars. For example, we might have a `Truck` object with an engine, and we can use the same `Engine` interface for that too.  
- **Type Safety**: TypeScript ensures that when we're dealing with a nested object, we don’t make mistakes like assigning a string to `horsepower` (which should be a `number`).  
  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#nested_object_type)    

### 7. Accessing Nested Properties Safely  

When accessing properties of a nested object, it's a good practice to safely access the nested properties, especially if they could be undefined or null.  

TypeScript provides **optional chaining** (`?.`) for this purpose.  

**Example: Accessing Nested Properties Safely** 
  
```ts
const car = {
    name: 'Toyota',
    model: 'Camry',
    year: 2020,
    owner: {
        name: 'Mrs. XYZ',
        age: 35
    }
};

console.log(car.owner?.name); // Output: 'XYZ'
console.log(car.owner?.address); // Output: undefined (does not throw error) 
```

Here, the `?.` operator ensures that the property `owner` exists before trying to access `owner.name`.    
If `owner` is `undefined` or `null`, the code will not throw an error and will return `undefined`.  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#nested_object_type)    

### Summary of Nested Object Concepts in TypeScript: 

- **Nested Object Types**: These are objects that contain other objects as their properties. We can define the types of both outer and inner objects explicitly.
- **Interfaces for Nesting**: Using interfaces makes it easy to define reusable types for nested structures.
- **Optional Nested Properties**: We can use ? to make nested properties optional.
- **Index Signatures**: We can allow dynamic keys in nested objects using the index signature ([key: string]: any).
- **Deep Nesting**: TypeScript supports deeply nested objects, where objects contain other objects, which can also contain other objects, and so on.
- **Safe Access**: Use optional chaining (?.) to safely access properties in nested objects.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#nested_object_type) 

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

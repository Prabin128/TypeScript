<a id="readme-top"></a>  

# Understanding enum in TypeScript

- JavaScript does not have a built-in `enum` (short for "enumeration") type, but TypeScript introduces the enum feature, allowing us to define a set of named constants.
- These constants can either be `numeric` or `string` values. This makes enums ideal for representing related categories like days of the week, months of the year, or other predefined values.
- By using `enums`, we can improve code readability and maintainability by replacing hard-coded values with descriptive identifiers.
- ***An enum is a special `"class"` that represents a group of constants (unchangeable variables). It helps organize and group related values.***
- Enums come in two flavors: string and numeric.   

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples) 

# Enum Syntax
We can define an `enum` in TypeScript using the **enum** keyword followed by the name of the enum and its members.  

```ts
enum enum_name {
    // values or members......
}
```  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples) 

# Types of Enum  

There are three types of enums:
1. Numeric enum
2. String enum
3. Heterogeneous enum  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

### 1. Numeric Enums(Default)  

Numeric enums store string values as numbers and they can be declared using the keyword enum.  
By default, TypeScript creates numeric enums, starting with `0` for the `first value ` and incrementing by `1` for each subsequent member. We can also manually assign values to the members.  

***Numeric Enums - Default***  
```ts
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let dir: Direction = Direction.Up;
console.log(dir); // Output: 0
```  

Here, `Up` would have the value `0`, `Down` would have `1`, etc. This auto-incrementing behavior is useful for cases where we might not care about the member values themselves, but do care that `each value is distinct from other values` in the same enum.

In this example, the enum `Direction` has numeric values starting from `0 (by default)`. We can also explicitly assign numeric values to each enum member if needed. 


***(Numeric Enums - Fully Initialized)***    

We can also assign specific numeric values to enum members:   
```ts
enum Direction {
  Up = 101,
  Down = 101,
  Left = 322,
  Right = 411
}
let dir: Direction = Direction.Left;
console.log(dir);    //Output: 322
``` 
Its not necessary to have a unique values for each enum members. We can also assign the same values for one or more members.
If we want each value to be distinct from other values, we can simply use `Numeric Enums(default)`.

***(Numeric Enums - Mix Initialized)***
Or We can assign mix numeric values to enum member as  `automatic and manual assignment`:   

```ts
enum Direction {
  Up = 1,
  Down,      // 2
  Left = 4,
  Right      // 5
}
```  
Here:  
- `Up = 1`: The constant `Up` is assigned the value 1.
- `Down`: This automatically gets the next value, which is 2.
- `Left = 4`: The constant `Left` is explicitly assigned the value 4.
- `Right`: This automatically gets the next value, which is 5 (since `Left is 4`).  


[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

### 2. String Enums 
 
- We can also define enums where each member has a string value. 
- String enums are similar to numeric enums, except that the enum values are initialized with string values rather than numeric values.   
- The benefits of using string enums is that string enums offer better readability. If we were to debug a program, it is easier to read string values rather than numeric values.  

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let dir: Direction = Direction.Up;
console.log(dir); // Output: "UP"  
```  

In this case, the members of the `Direction` enum are assigned string values like `"UP"`, `"DOWN"`, etc.
While **string enums don’t have auto-incrementing behavior**, string enums have the benefit that they “serialize” well.

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types) 

### 3. Heterogeneous enums  

- Heterogeneous enums are enums that contain ***both string and numeric values***.
- A mix of string and numeric values is also allowed, though this is rarely used and can reduce clarity.  
- Technically, we can mix and match string and numeric enum values, but ***it is recommended not to do so***.

```ts
enum Direction {
  Up = "UP",
  Down = 2,
  Left = "LEFT",
  Right = 4
}

let dir: Direction = Direction.Left;
console.log(dir); // Output: "LEFT"
```  

While this is possible, it’s typically best to stick to either numeric or string values for clarity and consistency.

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples)  

## Computed enums    

Computed enums in TypeScript allow us to generate enum values dynamically based on computations or function calls.  
This provides greater flexibility in defining enum members, enabling more complex scenarios where enum values need to be calculated at runtime.

**Example**: Consider a scenario where we want to define an enum `Weekdays` representing the days of the week, but we want to assign values dynamically based on the current day’s index starting from Monday.

```ts
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
```  

**Output**

```sh
{
  "1": "Monday",
  "2": "Tuesday",
  "3": "Wednesday",
  "4": "Thursday",
  "5": "Friday",
  "6": "Saturday",
  "7": "Sunday",
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6,
  "Sunday": 7
}
```

## Enum as a Set of Flags (Bitwise Enum)
We can use enums to represent bit flags.  
This is done by setting each enum member to a power of `2` (i.e., `1 << n`), enabling us to combine the flags later using bitwise operations.

```ts
enum Flag {
  None = 0,
  Read = 1 << 0,   // 1
  Write = 1 << 1,  // 2
  Execute = 1 << 2 // 4
}

let myFlags = Flag.Read | Flag.Write;
console.log(myFlags); // Output: 3 (1 + 2)   
```
In this example, each flag represents a single bit, and we can combine multiple flags using the bitwise OR operator (`|`).   

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples)   

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>


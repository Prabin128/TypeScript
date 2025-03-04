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


# Sample Enum Example    

```ts
enum Direction {
    Up,    // 0
    Down,  // 0+1 = 1
    Left,  // 1+1 = 2
    Right  // 2+1 = 3
}

console.log(Direction);
```  
**Output:** 

```sh
{ 
  '0': 'Up',
  '1': 'Down',
  '2': 'Left',
  '3': 'Right',
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3
}  
```  


#### Why are we seeing this as an output ??  

Because TypeScript enums create a ***two-way mapping*** between the numeric values and their corresponding names.  

**1. Forward Mapping (Value to Name):**  
TypeScript enums automatically assign numeric values starting from 0 (unless explicitly set). So:

`Up = 0`     
`Down = 1`  
`Left = 2`  
`Right = 3`  


[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

**2. Reverse Mapping (Name to Value):**  
TypeScript also creates a reverse mapping, where the enum values (numbers) map back to their names (keys).  
This means we can access the name of an enum value using the numeric value.

**Output Explanation:**  

```sh
{ 
  '0': 'Up',       // Reverse mapping (0 -> "Up")
  '1': 'Down',     // Reverse mapping (1 -> "Down")
  '2': 'Left',     // Reverse mapping (2 -> "Left")
  '3': 'Right',    // Reverse mapping (3 -> "Right")
  Up: 0,           // Forward mapping (Up -> 0)
  Down: 1,         // Forward mapping (Down -> 1)
  Left: 2,         // Forward mapping (Left -> 2)
  Right: 3         // Forward mapping (Right -> 3)
}

```  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

####  Why Both Mappings?  

- **Forward Mapping**: When we reference `Direction.Up`, it gives us `0`, Direction.Down gives 1, etc.
- **Reverse Mapping**: If we reference `Direction[0]`, it gives us `"Up"`, `Direction[1]` gives us `"Down"`, and so on.  


This behavior is useful because it allows to access both the `numeric` value and the `string` name of the enum, providing flexibility when working with enums in our code.

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples)   

### Note: `Reverse mapping does not exist for string enums.`

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

***1.1. Numeric Enums - Default***  
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


***1.2. (Numeric Enums - Fully Initialized)***    

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

***1.3. (Numeric Enums - Mix Initialized)***  

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

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples)    

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
In this example, each flag represents a single bit, and we can combine multiple flags using the bitwise **OR** operator (`|`).  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

***Let’s break down the concept of bitwise enums and the use of the `<<` operator to make it clearer.***  

### Bitwise Enum Concept
Enums can represent **flags**—essentially, options that can be turned on or off.  
These flags are typically represented as **bit flags**, where each flag corresponds to a specific bit in a binary number.

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)  

### Why Use Powers of 2?
Each member of the enum is set to a power of 2 (`1 << n`).  
This makes it easy to combine multiple flags using bitwise operations, such as the **bitwise OR** (`|`) operator.

Each power of 2 corresponds to a bit position in a binary number:

- `1 << 0` gives `1` (binary `0001`)
- `1 << 1` gives `2` (binary `0010`)
- `1 << 2` gives `4` (binary `0100`)
- `1 << 3` gives `8` (binary `1000`)  

This ensures that each flag is represented by a unique bit in the number, and you can combine them without conflict.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)  

### Understanding << (Bitwise Shift Operator)  

The `<<` operator is the bitwise left shift operator. It shifts the bits of a number to the left by the specified number of positions. For example:

- `1 << 0` means shifting `1` by `0` bits, which still gives `1`.
- `1 << 1` means shifting `1` by `1` bit to the left, which gives `2` (binary `0010`).
- `1 << 2` means shifting `1` by `2` bits, which gives `4` (binary `0100`).


[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)    

### The Code Explained  

```ts
enum Flag {
  None = 0,          // 0000 (no flags)
  Read = 1 << 0,     // 0001 (1)
  Write = 1 << 1,    // 0010 (2)
  Execute = 1 << 2   // 0100 (4)
}

let myFlags = Flag.Read | Flag.Write;
console.log(myFlags); // Output: 3 (1 + 2)
```  

**1. Flag Enum Declaration:**

- `None = 0`: This means "no flags are set," and None is represented by 0 (binary `0000`).
- `Read = 1 << 0`: `1 << 0` means shifting `1` by 0 bits (which is still 1). So, Read is represented by the value 1 (binary `0001`).
- `Write = 1 << 1`: `1 << 1` means shifting `1` by 1 bit, giving us `2` (binary `0010`).
- `Execute = 1 << 2`: `1 << 2` means shifting `1` by 2 bits, giving us `4` (binary `0100`).  

**2. Using Bitwise OR (|):**

- `myFlags = Flag.Read | Flag.Write`: Here, we combine the `Read` and `Write` flags using the **bitwise OR** operator.
    - `Flag.Read` is `1` (binary 0001).
    - `Flag.Write` is `2` (binary 0010).
    - Bitwise OR of `0001 | 0010` gives `0011`, which is `3`.
So, `myFlags` becomes `3`, meaning both `Read` and `Write` are enabled.


[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples)   

# Real Scenerio Example in Code   

```ts
enum Role {
    SuperAdmin ="superAdmin",
    Admin = "admin",
    User = "user"
}

interface Person {
    name: string;
    age: number;
    role : Role;
}

//Create a person object
let person1: Person =  {
    name: "Developer",
    age: 23,
    role: Role.Admin  // Using enum to set role
}
```    

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)    

### Why is it better to use an Enum instead of a String?  

**1. Type Safety:**  

If we use strings directly, there's a risk of typos or inconsistencies when setting or checking the role.    


Using an enum ensures that only the defined values (`admin`, `superAdmin`, `user`) are allowed, preventing invalid values from being assigned to `role`.

```ts
// Using string directly: risk of typo
const person2: Person = {
  name: "Senior Developer",
  age: 15,
  role: "superAdmin" // This might be "SuperAdmin", "super_admin", or "admin"
};
```
If we try to assign something like `role: "super_adm`", TypeScript would give us a compile-time error if we used enums. 
***But with a string, this can easily be overlooked, leading to bugs***.


[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)   

**2. Autocompletion:**  

If we use an enum, IDEs like Visual Studio Code will offer autocompletion when assigning a role.  

So, when we type `role:` , it will suggest only `Role.Admin`, `Role.SuperAdmin`, and `Role.User`, ensuring that the right values are used.

Without the enum, we'd have to remember the exact string values like `"admin"`, `"superAdmin"`, or `"user"`, and there's always the risk of making a typo.



[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)    

### Checking the Role  

Now, let’s say later in the code, we need to check the role of the person:

```ts
if (person1.role === Role.Admin) {
  console.log("This person is an admin.");
} else if (person1.role === Role.SuperAdmin) {
  console.log("This person is a super admin.");
} else {
  console.log("This person is a user.");
}
```  


[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)  


### What if we forget how the role was written?  

We might have written the role as "`superAdmin`", "`super_admin`", or "`superAdmin`" in some other part of the code.

This is where enums help—we don't need to worry about the exact spelling, casing, or underscores in the role value.  

For example, without an enum, we could make a mistake like this:

```ts
// Misspelled role
if (person1.role === "super_admin") {
  console.log("This person is a super admin.");
} else if (person1.role === "superAdmin") {
  console.log("This person is a super admin.");
}
```    

This inconsistency can cause bugs because we might forget the exact spelling or casing of a role, but with enums, it's easy to keep everything consistent.



[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/sub_section_line.png)](#array_types)    


### How Enums Solve This Issue**  

With enums, TypeScript ensures that we only use the predefined constant values, so there's no need to worry about how the string is written.  
The compiler will catch any errors if the role doesn't match one of the enum values, and it won't let us use an incorrect string like `"super_admin"`, which wasn't defined in the enum.  

[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#tuples)   

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>


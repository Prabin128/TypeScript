<a id="readme-top"></a>  

## Comparison: Types of JavaScript vs TypeScript

| **TypeScript Type** | **JavaScript Equivalent** | **Description** | **Example** |
|---------------------|--------------------------|-----------------|-------------|
| `string`           | `string`                  | Text values | `'Hello'`, `"hello"`, `` `hello` `` |
| `number`           | `number`                  | Integers and floating points | `1`, `1.9`, `-10`, `0xFF` |
| `boolean`          | `boolean`                 | True/False values | `true`, `false` |
| `bigint`           | `bigint`                  | Large integers | `9007199254740991n`, `BigInt(123456)` |
| `symbol`           | `symbol`                  | Unique, immutable values | `Symbol('id')`, `Symbol('key')` |
| `undefined`        | `undefined`               | Variable declared but not assigned | `let x: undefined;` |
| `null`             | `null`                     | Intentional absence of value | `let y: null = null;` |
| `object`           | `object`                  | Collections of key-value pairs | `{ name: "Alice", age: 25 }` |
| `Array<T>`         | `Array`                   | List of elements | `[1, 2, 3]`, `["A", "B", "C"]` |
| `Tuple`            | ❌ Not available          | Fixed-length array with different types | `["Alice", 25]`, `[true, "Success"]` |
| `Enum`             | ❌ Not available          | Named constants | `enum Color { Red, Green, Blue }` |
| `any`              | ❌ Not available          | Disables type checking | `let data: any = "Hello";` |
| `unknown`          | ❌ Not available          | Like `any`, but requires type checking | `let input: unknown;` |
| `void`             | ❌ Not available          | Functions that return nothing | `function log(): void { console.log("Hello"); }` |
| `never`            | ❌ Not available          | Functions that never return | `function throwError(): never { throw new Error("Error!"); }` |



```The Key difference is :``` 
- JavaScript uses ***"Dynamic Types"***(resolved at runtime)
- TypeScript uses ***"Static Types"*** (set during development)



[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type_difference)   


### **NOTE:** Just for knowledge about Types Decelarations

- **Primitive Types**: `string`, `number`, `boolean`, etc.
- **Arrays**: `string[]`,  `Array<number>` etc.
- **Objects**: `{ key: type }`, interfaces or type aliases.
- **Functions**: `(param: type) => returnType`.
- **Union Types**: `string | number` (a variable can have one of multiple types).
- **Type Aliases**: `type Person = { name: string, age: number }`.
- **Interfaces**: Describing the shape of an object or function.
- **Enums**: `enum Direction { Up, Down, Left, Right }`.
- **Generics**: Writing reusable, type-safe code that works with various types.


[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type_difference)   

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

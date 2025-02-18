# Javascript Versus TypeScript

Example:

# USING JAVASCRIPT 

###  1. index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Limitations Of JavaSript</title>
    <script src="using_javascript.js" defer></script>
</head>
<body>
    <h1 style="text-align: center;">Limitations Of JavaSript</h1>

    <h2> Simple Function to add two numbers</h2>
    <input type="number" id="firstInput"  placeholder="Number 1" />
    <input type="number" id="secondInput"  placeholder="Number 2" />
    <button>Add!</button>

</body>
</html>
```
### 2. using_javascript.js
```js
const button = document.querySelector('button');
const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');

function addTwoNumbers(number1,  number2){
    return number1 + number2;
}

button.addEventListener("click", function(){
    console.log(`Sum of Two numbbers is: ${addTwoNumbers(firstInput.value,secondInput.value )}`);
});
```

Here, the result is ***121*** which is not an expected result for us as we expected to get ***13*** as a result according to our implemented logic. But javascript ended up concatenating the two numbers stating those numbers as string.


This is because of: ```addTwoNumbers(firstInput.value,secondInput.value )```
When we access the value of an input element, its always a string no matter which type of input it is. So, we are passing two strings into the function ***addTwoNumbers(number1, number2)***. That is why this function ended up concatinating the strings since we passed the string instead of adding mathametically.

This is the issue with Javascript.

However, we can solve this issue in Js by:

```js
const button = document.querySelector('button');
const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');

function addTwoNumbers(number1,  number2){
    if(typeof number1 === "number" && typeof number2 === "number" ){
        return number1 + number2;
    } else {
        return +number1 + +number2;
    }   
}

button.addEventListener("click", function(){
    console.log(`Sum of Two numbbers is: ${addTwoNumbers(firstInput.value,secondInput.value )}`);
});
```
But we  wrote some extra code just  for an error which we would like to prevent in the first place making sure that we cant pass strings here to add as this is the only function to operate on numbers. So that we dont need to check wether we get a number or not.

Here, TypeScript comes into the play.

# USING TYPESCRIPT

- index. html remains same except on the script tag where we will link the typescript file as "using_typescript.ts" in  src attribute.  
- we will make a typescript  file as "using_typescript.ts" and copy the same javascript code in this file. 
***NOTE: the file extension for typescript is .ts***

After all the installations and configurations:

###  1. index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Limitations Of JavaSript</title>
    <script src="using_typescript.js" defer></script>
</head>
<body>
    <h1 style="text-align: center;">Limitations Of JavaSript</h1>

    <h2> Simple Function to add two numbers</h2>
    <input type="number" id="firstInput"  placeholder="Number 1" />
    <input type="number" id="secondInput"  placeholder="Number 2" />
    <button>Add!</button>

</body>
</html>
```

### 2. using_typescript.ts (Add a new file  Remember the extension for typescript is ts)
```js
const button = document.querySelector('button');
const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');

function addTwoNumbers(number1,  number2){
    return number1 + number2;
}

button.addEventListener("click", function(){
    console.log(`Sum of Two numbbers is: ${addTwoNumbers(firstInput.value,secondInput.value )}`);
});
```
As soon as we type this sort of code, it immediately starts to throw an errors  like:

<p align="center">
  <img src="https://github.com/Prabin128/TypeScript/blob/main/assets/errors_in_js_after_using_typescript.png" alt="Demo" width="800" />
</p>

#### Lets utilize the beauty of Typescript now:

***1. The first 3 lines of code is a variable declaration and initalization:***
```js
const button = document.querySelector('button');
const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');
```
We got the error in this line of code as :
```error
    Cannot redeclare block-scoped variable 'button'.
    Cannot redeclare block-scoped variable 'firstInput'.
    Cannot redeclare block-scoped variable 'secondInput'.
```

This is because we  used the same variable name in our ***JavaScrip_Problem*** folder. It can still affect if the same code or variable declarations exist in different folders, even if they are in separate files, as long as they are part of the same project and are bundled or compiled together. This is because the compiled JavaScript (or TypeScript) will be combined into a single file (or multiple files that are included in the same scope) in our project. 
```Simply rename the variable name and the issue will be solved as:```

```ts
const button1 = document.querySelector('button');
const firstInput1 = document.getElementById('firstInput')! as HTMLInputElement;
const secondInput1 = document.getElementById('secondInput')! as HTMLInputElement;
```
Here, 
- The **!** after getElementById('firstInput') is a non-null assertion operator in TypeScript. It tells TypeScript: *"I know this value will not be null"*, so TypeScript won’t throw an error or treat it as null.
- After that, as **HTMLInputElement** is a type assertion that tells TypeScript that **firstInput1** is specifically an **`<input>`** element. This allows us to access input-specific properties, such as .value.


***2. Function Declaration:***
```ts
function addTwoNumbers1(number1 : number,  number2 : number){
    return number1 + number2;
}
```

-  This is a function declaration in TypeScript. The function addTwoNumbers1 takes two parameters, **number1** and **number2**, both of which are explicitly typed as number.
- The **: number** after the function parameters specifies that the function will return a number (the sum of number1 and number2).
Inside the function, it simply adds the two numbers together and returns the result.

***3. Event Listener and TypeScript Logic:***
```ts
button1!.addEventListener("click", function(){
    console.log(`Sum of Two numbbers is: ${addTwoNumbers1(+firstInput1.value , +secondInput1.value )}`);
});
```
- The **```ts!```** after button1 is again a non-null assertion operator. It tells TypeScript: *"I am sure that button1 is not null"*, so it won’t throw a null reference error when accessing it.
- **```ts +firstInput1.value``` and ```ts +secondInput1.value```:**
    - ```ts firstInput1.value``` and ```ts secondInput1.value``` are string values that come from the input fields. When you access .value of an input element, it always returns a string.
    - The **unary plus operator (+)** is used to convert the string values to numbers. This is a shorthand for ***parseFloat() or parseInt()*** to ensure that the input values are treated as numbers.


### Complete TypeScript Code
```ts
const button1 = document.querySelector('button');
const firstInput1 = document.getElementById('firstInput')! as HTMLInputElement;
const secondInput1 = document.getElementById('secondInput')! as HTMLInputElement;

function addTwoNumbers1(number1 : number,  number2 : number){
    return number1 + number2;
}


button1!.addEventListener("click", function(){
    console.log(`Sum of Two numbbers is: ${addTwoNumbers1(+firstInput1.value , +secondInput1.value )}`);
})

```

Now the above code is an error free and we are ready to compile it as:
```sh
tsc using_typescript.ts
```

### What happens when our TypeScript code is compiled using tsc.  

#### ➤Step 1: Type Checking
    Before compilation, TypeScript checks our code for type errors.  
Our code:
```ts
const button1 = document.querySelector('button');
const firstInput1 = document.getElementById('firstInput')! as HTMLInputElement;
const secondInput1 = document.getElementById('secondInput')! as HTMLInputElement;

function addTwoNumbers1(number1: number, number2: number) {
    return number1 + number2;
}

button1!.addEventListener("click", function(){
    console.log(`Sum of Two numbers is: ${addTwoNumbers1(+firstInput1.value , +secondInput1.value )}`);
})
```
**Type Checking Details**

1. document.querySelector('button')
    - TypeScript infers that document.querySelector('button') returns HTMLElement | null.
    - Since we use button1!, we tell TypeScript that button1 will never be null (non-null assertion).
    - If the button is missing in HTML, this will cause a runtime error.

2. Type Assertion for Inputs

```ts const firstInput1 = document.getElementById('firstInput')! as HTMLInputElement;```

- **document.getElementById** returns HTMLElement | null, but since we know it's an `<input>`, we cast it as **HTMLInputElement**.
- The **!** ensures TypeScript does not complain about possible null values.
- If **firstInput1** or **secondInput1** does not exist, the script will crash at runtime.

3. Function Type Safety

```ts
function addTwoNumbers1(number1: number, number2: number) {
    return number1 + number2;
}
```

- This function ensures both number1 and number2 are numbers.
- Inside the event listener:
```ts +firstInput1.value```
- The + converts the string input (input.value is always a string) into a number.

***Since there are no type errors, TypeScript successfully compiles the file.***

####  ➤Step 2: Transpilation (Conversion to JavaScript)
When you run: ```sh tsc using_typescript.ts``` :
TypeScript removes all type-specific features and converts our code into plain JavaScript (using_typescript.ts):
```js
var button1 = document.querySelector('button');
var firstInput1 = document.getElementById('firstInput');
var secondInput1 = document.getElementById('secondInput');
function addTwoNumbers1(number1, number2) {
    return number1 + number2;
}
button1.addEventListener("click", function () {
    console.log("Sum of Two numbbers is: ".concat(addTwoNumbers1(+firstInput1.value, +secondInput1.value)));
});

```
**What Changed?**

✅ All TypeScript-specific features were removed:

- Type annotations (: number) were removed because JavaScript doesn’t have them.
- Type assertions (as HTMLInputElement) were removed because JavaScript doesn’t use them.
- Non-null assertion (!) was removed because JavaScript doesn’t check for nulls.

The resulting JavaScript file can now run in the browser.

####  ➤Step 3: Running the JavaScript Code

Now, we can use the generated JavaScript (using_typescript.js) in your HTML file and run as normal js code.
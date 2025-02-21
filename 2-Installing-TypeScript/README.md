# TypeScript Installation Guide 

## To install TypeScript, follow these steps:  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)  

***Step 1: Install Node.js***

- TypeScript requires Node.js and npm (Node Package Manager).

    1. Download and install Node.js from Node.js official site.
        ```https://nodejs.org/en```

    2. Verify installation by running the following command in the terminal (Command Prompt or PowerShell):

        ```node -v```

    It should display the installed Node.js version.  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)  

***Step 2: Install TypeScript Globally***  

1. Open a terminal or command prompt.

2. Run the following command to install TypeScript globally:

    ```npm install -g typescript```

    The -g flag installs TypeScript globally, making it available in any project.

3. Verify the installation:

    ```tsc -v```

    This should display the installed TypeScript version.  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)  

***Step 3: Install TypeScript Locally (Optional)***

- If you want TypeScript only in a specific project, navigate to the project folder and run:

    ```npm install --save-dev typescript```  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)  

***Step 4: Initialize a TypeScript Project***

- To set up TypeScript in a project, generate a tsconfig.json file:

    ```tsc --init```
This creates a configuration file where you can customize TypeScript settings.  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)  

***Step 5: Write and Compile TypeScript Code***

 ```Create a .ts file (e.g., index.ts).```

Write some TypeScript code:

```ts
let message: string = "Hello, TypeScript!";
console.log(message);
```
Compile it to JavaScript:

```tsc index.ts```

This generates a index.js file.

Run the JavaScript file:

```node index.js```

Now, you have successfully installed and used TypeScript! 🚀  
[![-----------------------------------------------------](https://github.com/Prabin128/TypeScript/blob/main/assets/line.png)](#type-assingment)  
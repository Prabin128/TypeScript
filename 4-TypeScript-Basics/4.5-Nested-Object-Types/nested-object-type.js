// Understanding Nested Objects in TypeScript  
console.log("=====> Nested Objects in TypeScript  <======");
//1. Simple Nested Object
console.log("===============1. Simple Nested Object========================");
var carAndOwnerDetails = {
    name: 'Toyota',
    model: 'Camry',
    year: 2020,
    owner: {
        name: 'Heavy Developer',
        age: 25
    }
};
console.log(carAndOwnerDetails);
// 2. Explicitly Defining Types for Nested Objects
console.log("=========2. Explicitly Defining Nested Objects Types==========");
var carOwnerDetails = {
    name: 'Toyota',
    model: 'Camry',
    year: new Date(),
    owner: {
        name: 'Senior Developer',
        age: 35
    }
};
console.log(carOwnerDetails);
//3. Using Interfaces for Nested Objects
console.log("========= 3. Using Interfaces for Nested Objects==============");
var productDetails = {
    nameOfCategory: "Electronics",
    dateCreated: new Date(),
    product: {
        nameOfProduct: "Iphone 17",
        numberOfQuantity: 13000,
        isStillAvailable: true
    }
};
console.log("Detailed Description of product:", productDetails);
//4. Optional Nested Properties
console.log("============ 4. Optional Nested Properties====================");
var personalDetails = {
    name: "Electronics",
    dateOfBirth: "1999/02/02",
};
console.log("Information of Person", personalDetails);
// 5. Nested Objects with Index Signatures
console.log("========== 5. Nested Objects with Index Signatures============");
var carInformation = {
    name: 'Toyota',
    model: 'Camry',
    year: 2020,
    owner: {
        name: 'Mr. Bill Gates',
        age: 22,
        address: 'XYZ', // Dynamic property
    }
};
console.log("Information of Car:", carInformation);
//6. Nested Objects with Deep Nesting
console.log("============ 6. Nested Objects with Deep Nesting==============");
var jeepDetails = {
    name: 'Toyota',
    model: 'Camry',
    year: 2020,
    engine: {
        type: 'V6',
        horsepower: 300
    }
};
console.log("Nested Objects with Deep Nesting", jeepDetails);

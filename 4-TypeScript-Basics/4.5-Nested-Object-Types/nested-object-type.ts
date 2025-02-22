// Understanding Nested Objects in TypeScript  

console.log("=====> Nested Objects in TypeScript  <======");

//1. Simple Nested Object
console.log("===============1. Simple Nested Object========================");

const carAndOwnerDetails = {
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
};
console.log(carOwnerDetails);


//3. Using Interfaces for Nested Objects
console.log("========= 3. Using Interfaces for Nested Objects==============");

interface Product {
    nameOfProduct: string;
    numberOfQuantity: number;
    isStillAvailable: boolean; 
}

interface Category{
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


//4. Optional Nested Properties
console.log("============ 4. Optional Nested Properties====================");

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


// 5. Nested Objects with Index Signatures
console.log("========== 5. Nested Objects with Index Signatures============");

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
        age: 22,
        address: 'XYZ',  // Dynamic property
    }
}; 

console.log("Information of Car:", carInformation);  


//6. Nested Objects with Deep Nesting
console.log("============ 6. Nested Objects with Deep Nesting==============");

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

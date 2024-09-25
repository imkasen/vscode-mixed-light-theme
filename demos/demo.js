// demo.js - JavaScript syntax showcase

// Variables and Data Types
let integerVar = 10;
const floatVar = 3.14159;
var stringVar = "Hello, world!";
let booleanVar = true;
let undefinedVar;
let nullVar = null;
let symbolVar = Symbol("mySymbol");
let bigIntVar = 1234567890123456789012345678901234567890n;

// Arrays
let intArray = [1, 2, 3, 4, 5];

// Objects
let myObject = {
  name: "John",
  age: 30,
  city: "New York",
};

// Operators
let a = 10;
let b = 5;

// Control Flow
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

switch (a) {
  case 10:
    console.log("a is 10");
    break;
  case 20:
    console.log("a is 20");
    break;
  default:
    console.log("a is neither 10 nor 20");
}

// Functions
function add(x, y) {
  return x + y;
}

let sum = add(5, 3);
console.log("Sum:", sum);

// Arrow Functions
let multiply = (x, y) => x * y;
let product = multiply(5, 3);
console.log("Product:", product);

// Classes
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log("Woof!");
  }
}

let myDog = new Dog("Buddy", "Golden Retriever");
myDog.bark();

// Promises
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});

myPromise.then((value) => console.log(value));

// Async/Await
async function myAsyncFunction() {
  let value = await myPromise;
  console.log("Async/Await:", value);
}

myAsyncFunction();

// Modules (ES6+)
// import { myFunction } from './myModule.js';
// myFunction();

// Error Handling
try {
  // Code that might throw an error
  let result = 10 / 0;
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Finally block executed.");
}

// Regular Expressions
let text = "The quick brown fox jumps over the lazy dog.";
let pattern = /brown/;
let result = pattern.test(text);
console.log("Regex result:", result);

// Date and Time
let currentDate = new Date();
console.log("Current date:", currentDate);

// String Manipulation
let str = "Hello, world!";
console.log("Length of string:", str.length);
console.log("String in uppercase:", str.toUpperCase());
console.log("String in lowercase:", str.toLowerCase());
console.log("String contains 'world':", str.includes("world"));

// DOM Manipulation (if in browser environment)
// let myElement = document.getElementById("myElement");
// myElement.innerHTML = "New content";

// JSON
let myJson = {
  name: "John",
  age: 30,
  city: "New York",
};

let jsonString = JSON.stringify(myJson);
console.log("JSON string:", jsonString);

let parsedJson = JSON.parse(jsonString);
console.log("Parsed JSON:", parsedJson);

// Template Literals
let name = "John";
let age = 30;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// Destructuring
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

let { firstName, lastName } = person;
console.log("First name:", firstName);
console.log("Last name:", lastName);

// Spread Syntax
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5];
console.log("Spread syntax:", moreNumbers);

// Rest Parameters
function sumNumbers(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

let total = sumNumbers(1, 2, 3, 4, 5);
console.log("Rest parameters:", total);

// Map and Set
let myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);

// Generators
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = myGenerator();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

// Iterators
let myIterable = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (i < 3) {
          return { value: i++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let value of myIterable) {
  console.log(value);
}

// Proxy
let myTarget = {};
let myProxy = new Proxy(myTarget, {
  get(target, prop, receiver) {
    console.log(`Getting property ${prop}`);
    return target[prop];
  },
  set(target, prop, value, receiver) {
    console.log(`Setting property ${prop} to ${value}`);
    target[prop] = value;
    return true;
  },
});

myProxy.name = "John";
console.log(myProxy.name);

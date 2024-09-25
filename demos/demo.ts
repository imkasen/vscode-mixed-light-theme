// demo.ts - TypeScript syntax showcase

// Variables and Data Types
let integerVar: number = 10;
const floatVar: number = 3.14159;
var stringVar: string = "Hello, world!";
let booleanVar: boolean = true;
let undefinedVar: undefined;
let nullVar: null = null;
let anyVar: any = "anything";
let unknownVar: unknown = "unknown";
let voidVar: void = undefined;
let neverVar: never; // Represents the type of values that never occur

// Arrays
let intArray: number[] = [1, 2, 3, 4, 5];
let stringArray: string[] = ["apple", "banana", "orange"];

// Tuples
let myTuple: [string, number] = ["hello", 10];

// Enums
enum Color { Red, Green, Blue }
let myColor: Color = Color.Green;

// Objects
let myObject: { name: string, age: number, city: string } = {
    name: "John",
    age: 30,
    city: "New York"
};

// Interfaces
interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
}

let person1: Person = {
    firstName: "John",
    lastName: "Doe"
};

// Classes
class Dog {
    name: string;
    breed: string;

    constructor(name: string, breed: string) {
        this.name = name;
        this.breed = breed;
    }

    bark(): void {
        console.log("Woof!");
    }
}

let myDog: Dog = new Dog("Buddy", "Golden Retriever");
myDog.bark();

// Generics
function identity<T>(arg: T): T {
    return arg;
}

let myString: string = identity<string>("hello");
let myNumber: number = identity<number>(10);

// Type Aliases
type StringOrNumber = string | number;
let myValue: StringOrNumber = "hello";
myValue = 10;

// Union and Intersection Types
let unionType: string | number = "hello";
unionType = 10;

type User = {
    name: string;
    age: number;
};

type Admin = {
    name: string;
    role: string;
};

let intersectionType: User & Admin = {
    name: "John",
    age: 30,
    role: "administrator"
};

// Functions
function add(x: number, y: number): number {
    return x + y;
}

let sum: number = add(5, 3);
console.log("Sum:", sum);

// Arrow Functions
let multiply = (x: number, y: number): number => x * y;
let product: number = multiply(5, 3);
console.log("Product:", product);

// Optional Parameters
function greet(name: string, greeting?: string): void {
    console.log(greeting ? `${greeting}, ${name}` : `Hello, ${name}`);
}

greet("John");
greet("John", "Good morning");

// Rest Parameters
function sumNumbers(...numbers: number[]): number {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

let total: number = sumNumbers(1, 2, 3, 4, 5);
console.log("Rest parameters:", total);

// Function Overloads
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}

let stringResult: string = add("hello", "world");
let numberResult: number = add(5, 3);

// Namespaces
namespace MyNamespace {
    export function myFunction(): void {
        console.log("Hello from MyNamespace");
    }
}

MyNamespace.myFunction();

// Modules (ES6+)
// import { myFunction } from './myModule';
// myFunction();

// Decorators
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with arguments: ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result of ${key}: ${result}`);
        return result;
    };
    return descriptor;
}

class MyClass {
    @log
    myMethod(arg1: number, arg2: string): number {
        return arg1 + arg2.length;
    }
}

let myInstance = new MyClass();
myInstance.myMethod(5, "hello");

// Generics with Constraints
function loggingIdentity<T extends { message: string }>(arg: T): T {
    console.log(arg.message);
    return arg;
}

// Conditional Types
type MyType<T> = T extends string ? string : number;
let myStringType: MyType<string> = "hello";
let myNumberType: MyType<number> = 10;

// Mapped Types
type ReadonlyPerson = {
    readonly [P in keyof Person]: Person[P];
};

let readonlyPerson: ReadonlyPerson = {
    firstName: "John",
    lastName: "Doe"
};

// readonlyPerson.firstName = "Jane"; // Error: Cannot assign to 'firstName' because it is a read-only property.

// Type Guards
function isString(value: any): value is string {
    return typeof value === 'string';
}

function example(value: any) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

example("hello");
example(3.14);

// Type Assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Inferring Types
let message = "hello"; // TypeScript infers the type of message to be string

// Nullish Coalescing Operator
let user = null;
let username = user?.name ?? "Guest";
console.log(username); // Output: Guest

// Optional Chaining
let user2 = {
    name: "John",
    address: {
        street: "Main St",
        city: "New York"
    }
};

let city = user2?.address?.city;
console.log(city); // Output: New York

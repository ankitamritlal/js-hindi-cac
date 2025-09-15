"use strict";

// Data Types in JavaScript
// 1. Primitive Data Types
console.log("Primitive Data Types:");
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol("unique"); // Symbol
let bigInt = 9007199254740991n; // BigInt

console.log(typeof num);    // "number"
console.log(typeof str);    // "string"
console.log(typeof bool);   // "boolean"
console.log(typeof undef);
console.log(typeof nul);    // "object" (this is a known quirk in JavaScript)
//object
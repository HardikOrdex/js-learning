// JS is dynamic or static type? Dynamic

// Primitive
// Primitives are call by value. 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId)

// If we put "n" at the end of number. Its considered as bigInt
const bigNumber = 2345234523523542323423423454235235n;
// console.log(typeof bigNumber);

// Reference type | Non primitive
// These are call by reference.
// 3 types: Arrays, Objects, Functions

const fruits = ["Apple", "Mango", "Orange"];
let myObj = {
    name: "hardik",
    age: 18,
}
const myFunction = function() {
    console.log("Hello World")
}

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myState = "Gujarat";

// We are given the copy of myState because of which its original value remains unchanged
let anotherState = myState;
anotherState = "Rajasthan"

console.log(anotherState)
console.log(myState)

let userOne = {
    name: "hardik",
    email: "user@example.com",
}

// Here we are given the reference of userOne. So, userOne and userTwo point to same value in Heap
let userTwo = userOne;
userTwo.name = "Hardik Channa"

console.log(userOne);
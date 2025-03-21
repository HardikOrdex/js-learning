// singleton

// object literals 

const mySym = Symbol("key1");
const jsUser = {
    name: "Hardik",
    // Adding symbol to the obj: If we do it this way then its considered as string
    // mySym: "myKey1",
    [mySym]: "myKey1",
    age: 18,
    location: "Mumbai",
    isLoggedIn: false, 
    email: "demo@example.com",
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(jsUser.email);
// Second way to access the variables. By default the keys are considered as string. So we have to pass string
// console.log(jsUser["email"]);
jsUser.email = "hardik@example.com";
// If stops accepting any changes in the object. And doesn't throws any error if tried to change. 
// Object.freeze(jsUser);
jsUser.email = "hardik@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello Js User!!!");
}
jsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser);
// Only way to access a symbol in an obj is using square brackets
console.log(jsUser[mySym]);
console.log(jsUser.greetingTwo());


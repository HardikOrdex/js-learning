// array

const arr = [1, 2, 3, 4, 5, 6];
const fruits = ['apple', 'mango', 'kiwi'];
const arr1 = new Array(20, 30, 40, 50, 60, 70);

// arr.push(7);
// arr.pop();
// console.log(arr);

// Adds element at the begining
arr.unshift(9);
// Removes element from the begining
arr.shift();
// console.log(arr);

// console.log(arr.includes(5)); // true | false
// console.log(arr.indexOf(9)); // -1 if doesn't exists

// Join converts the array into a string with comma separated values.
const newArray = arr.join();
// console.log(arr);
// console.log(typeof(arr));
// console.log(newArray); // 1,2,3,4,5,6
// Now if I split then the difference is that, the new array's elements are string whereas the old array had numbers
// const newArrayProcessed = newArray.split(",");
// console.log(newArrayProcessed);
// console.log(typeof newArrayProcessed);
// console.log(typeof (newArray));

// Slice and Splice

// console.log("A ", arr);
// const myn1 = arr.slice(1,3);
// console.log(myn1);
// console.log("B ",arr);

// const myn2 = arr.splice(1,3);
// console.log("C ", arr);
// console.log(myn2);


// *** Difference between Slice and Splice
// 1) end index is not considered in slice where as its considered in splice
// 2) ** Original array is changed in splice

const cars1 = ['BMW X1', 'Mercedes-Benz S-Class', 'Rolls-Royce Phantom'];
const cars2 = ['Mahindra Thar', 'Hyundai Creta', 'Jeep Compass'];

// The cars2 will be directly appended as array to cars1
cars1.push(cars2);

// console.log(cars1);
// console.log(cars1[3][1]);

cars1.pop();
// concat returns a new array
const allCars = cars1.concat(cars2);

// console.log(allCars);

// ... is spread operator. It spreads/separates all the elements. 
// Eg: Imagine a glass bowl fell and breaking down (spreading) into pieces.
const allCars2 = [...cars2, ...cars1]
// console.log(allCars2)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// flat method gives a reduces array has elements till the "depth" passed in the function
// 1: Means traverse the array recursivly till depth 1.  
// const realAnotherArray = anotherArray.flat(1); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
// Infinity: Means traverse the array recursively till it doesn't find another sub array. 
const realAnotherArray = anotherArray.flat(Infinity); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
// console.log(realAnotherArray);

// Checks if its array or not?
console.log(Array.isArray("Hardik"));
// Converts it into an array. Returns [] if it can't convert passed argument to array. 
let myObj = {
    name: "Vijay Kumar",
    age: 38,
    work: "Senior Software Dev @ Oracle"
}
console.log(Array.from(5)); // []
console.log(Array.from("Hardik")); // [ 'H', 'a', 'r', 'd', 'i', 'k' ]
console.log(Array.from(myObj)); // []

let scoreOne = 100;
let scoreTwo = 200;
let scoreThree = 300;

// Returns an array of variables. It works fine with Objects
console.log(Array.of(scoreOne, scoreTwo, scoreThree, myObj));
scoreThree = 500;
myObj = {...myObj, experience: "20 Years"}
console.log(Array.of(scoreOne, scoreTwo, scoreThree, myObj));
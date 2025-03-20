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

// const newArray = arr.join();
// console.log(arr);
// console.log(newArray);
// console.log(typeof (newArray));

// Slice and Splice

console.log("A ", arr);
const myn1 = arr.slice(1,3);
console.log(myn1);
console.log("B ",arr);

const myn2 = arr.splice(1,3);
console.log("C ", arr);
console.log(myn2);


// *** Difference between Slice and Splice
// 1) end index is not considered in slice where as its considered in splice
// 2) ** Original array is changed in splice
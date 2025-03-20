// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let customDate = new Date(2022, 0, 20);
// let customDate = new Date(2022, 0, 20, 5, 3);
// let customDate = new Date("2023-05-22");
let customDate = new Date("06-26-2021");
// console.log(customDate.toDateString());
// console.log(customDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(customDate.getTime());
console.log(Math.floor(Date.now()/1000)); // The output is in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // Months start from 0
console.log(newDate.getDay()); // 1: Monday, 2: Tuesday, ...

newDate.toLocaleString('default', {
    weekday: "long"
})






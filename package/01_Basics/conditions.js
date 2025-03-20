// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// NOTE: Avoid these type of conditions
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // null is converted into 0

// undefined compared with anything gives false: 
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check
console.log("2" == 2)
console.log("2" === 2)


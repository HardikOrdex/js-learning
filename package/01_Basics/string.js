const name = "hardik";
const age = 18;

// console.log(`Hello my name is ${name}. My age is ${age}`);

const gameName = new String("Blaock-Myth-Wukong");
// console.log(gameName)
console.log(gameName.length)
// console.log(gameName[3])
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(7));
// console.log(gameName.indexOf('o'));

// End index is excluded. -ve values can't be used in subString
const newString = gameName.substring(8,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);
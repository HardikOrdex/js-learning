function add(num1, num2){
    console.log(num1+num2);
}
// add(3,null); // 3
// add(3,undefined); // NaN

function userLoggedIn01(userName) {
    if(userName) return `${userName} just logged in`;
    console.log("Pls enter username");
    return 
}
// console.log(userLoggedIn01()); 
// console.log(userLoggedIn01("Hardik Channa")); 

function userLoggedIn02(userName = "Smith") {
    return `${userName} just logged in`;
}
// console.log(userLoggedIn02()); 
// console.log(userLoggedIn02("Rohit Kumar")); 

// Number of parameters is not known
function calculateCartPrice(...num1) {
    return num1;
}
// console.log(calculateCartPrice(200, 500, 199, 701));

const user = {
    userName: "hardik",
    balance: 50000
}
function handleObject(anyObject) {
    console.log(`User name : ${anyObject?.userName} and balance: ${anyObject.balances}`);
}
// handleObject(user);
// handleObject({
//     userName: "Sam Wilson",
//     balance: 46000
// });

const myNewArray = [20, 90, 50, 40, 60, 10];
function returnSecondValue(arr) {
    return arr[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500, 600, 800, 700, 53, 47]));
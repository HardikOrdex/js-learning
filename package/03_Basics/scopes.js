// scope
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner: "+a);
}

// console.log(a);
// console.log(b); // error
// console.log(c); // 30

// Nested scope
function one() {
    const userName = "hardik";

    function two(){
        const webSite = "youtube";
        console.log(userName);
    }
    // console.log(webSite); // error. webSite is not defined
    two();
}
one();

if(true){
    const userName = "Brian"
    if(userName === "Brian"){
        const webSite = "youtube";
        console.log(userName + " " + webSite);
    }
    // console.log(webSite); // error: webSite is not defined
}
// console.log(userName); // userName is not defined

console.log(addOne(5)); // Runs fine if used before declaration
function addOne(num) {
    return num+1;
}

// addTwo(5); // ** If accessed before decalration then throws error.
const addTwo = function (num){
    return num + 2;
}
console.log(addTwo(5));

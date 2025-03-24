const user = {
    username: "hardik",
    price: 999,
    welcomeMessage: function () {
        // "this" is used to refer current context. i.e. to access the immediate current object. 
        console.log(`${this.username}, Welcome to website`)
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Danial";
// user.welcomeMessage();

// In node there is no global object. But in browser when we run this we get an obj
console.log(this); // {}

function chai() {
    let username = "Demo";
    console.log(this);
}

function chai() {
    let username = "Demo";
    console.log(this);
}
chai();
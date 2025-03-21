// const tinderUser = new Object(); // This is a singleton obj
const tinderUser = {};

tinderUser.id = "1234abcd";
tinderUser.name = "Sam Wilson";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "demo01@example.com", 
    fullName: {
        userFullName: {
            firstName: "Hardik", 
            lastName: "Channa"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "One", 2: "Two"};
const obj2 = {3: "Three", 4: "Four"};
const obj3 = {4: "Five", 6: "Six"};

// const obj3 = {obj1, obj2}
// Assign takes a target & source. 
// {} is the target. i.e. all the changes will be done in {}. Rest all after that are sources.
// if obj1 is kept instead of {} then its the target and all the changes will be done in that. 
// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

// console.log(Object.keys(obj4)); // Array of keys
// console.log(Object.values(obj4)); // Array of values
// console.log(Object.entries(obj4)); // Array of sub array: [key, value]
// console.log(obj4.hasOwnProperty("3")); // true
// console.log(obj4.hasOwnProperty(3)); // true

const course = {
    courseName: "js in hindi", 
    price: 999, 
    courseInstructor: "Demo Instructor"
};
// aliasing: i.e. since "courseInstructor" is a long name we use "instructor" instead of it. 
const {courseInstructor: instructor} = course;
console.log(instructor);


// Premitive 

// --------- 7 types : String, Number, Boolean, Null, Undefiend, Symbol, BigInt --------

// const score = 100;
// const scoreVlaue = 100.3;

// const isLoggedIn = false;
const outsideTemp = null;
// let userEmail;

// const id = Symbol("123"); // symbol
// const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNum = 9834203872838027023023n; //bigInt
// console.log(bigNum); 


// Reference (Non preimitive)

// Array, Objects, functions


// ----- Array ------
const heros = ["Shaktiman", "nagraj", "doga"];
let myObj = {
    name: "Prashant",
    age: 20
}

const myFunction = function(){
    console.log("hi");
}
// myFunction();

// console.log(typeof heros); // => object
// console.log(typeof myObj); // => object
// console.log(typeof myFunction); // => function


// ***********************************************************

// stack (Primitive), Heap (Non-Primitive)

let myYouTubeNme = "DailyGeeksInfo"

let anotherName = myYouTubeNme;
console.log(anotherName);
anotherName = "a2zGame"

console.log(anotherName);
console.log(myYouTubeNme);

let userOne = {
    email: "prashant123@gmail.com",
    upi: "prashant12sbi"
}

let userTwo = userOne;

userTwo.email = 'ewem12amial.com'
console.log(userTwo)
console.log(userOne)
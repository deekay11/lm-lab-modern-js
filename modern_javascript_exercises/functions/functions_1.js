// Instructions can be found in functions.md

// Function Declarations
// logPerson() is a "Function Declaration"
// Note how it uses the "function" keyword at the beginning of it's declaration
// This is the original way of writing functions in JavaScript

const people = ["Harry", "Hermione", "Ron"];

function logPerson(person) {
  console.log("The person is " + person);
}
people.forEach(logPerson);


// Function in a Variable
// Store the logPerson() function in a variable called performLogPerson

// This is a traditional function declaration in JavaScript where a function is defined and stored in a variable

const performLogPerson = function logPerson(person) {
  console.log("The person is " + person);
}

people.forEach(performLogPerson);


// Arrow Functions in a Variable
// Write a version of logPerson() as an Arrow Function and store it in a variable called arrowVersionOfLogPerson

//Arrow functions are a more concise way of writing functions in JavaScript and were introduced in ECMAScript 6. They are also known as "fat arrow" functions.

//Anonymous arrow functions are arrow functions without a name. These functions are often used as callback functions, passed as arguments to other functions

logPerson =(person) =>{
  console.log("The person is " +person);
}
const arrowVersionOfLogPerson = people.forEach(logPerson(person));

// Anonymous Arrow Functions
// Replace logPerson below with an Anonymous Arrow Function that does the same thing!

people.forEach((person) => {
  console.log("The person is " + person);
});

// In JavaScript there are lots of ways to write functions. There is no right or wrong way, but arrow functions are the most modern. 🙂

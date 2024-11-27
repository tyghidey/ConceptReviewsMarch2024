const input = require('readline-sync');

console.log("Welcome to my program! Tell me about yourself.");

// TODO: Ask for the user's name

let name = input.question("What is your name?: ");

// TODO: Greet user by name

console.log(`Hello ${name}. My name is Joe.`);

// TODO: Ask user for their favorite ice cream
let favIceCream = input.question("What is your favorite ice cream flaver? ");

// TODO: Respond with both name and favorite flavor in the sentence
console.log(`Nice ${name}, I like ${favIceCream} too.`)

// TODO: Print a final synopsis with both the name and flavor, formatted nicely

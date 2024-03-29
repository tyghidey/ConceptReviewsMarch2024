const input = require('readline-sync');

console.log("Welcome to my program! Tell me about yourself.");

let name = input.question("\nPlease enter your name: ");
console.log(`Welcome, ${name}!`);
let faveIceCream = input.question("\nWhat is your favorite flavor of ice cream? ");
console.log(`Wow, ${name}, I love the ${faveIceCream} flavor too!`);


console.log("\n*****************************")
console.log("Ice Cream Synopsis");
console.log(`Name: ${name}`);
console.log(`Flavor: ${faveIceCream}`);
console.log("*****************************")
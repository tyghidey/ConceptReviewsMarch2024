let string = "deab";

// Example - Create "ABCDEF" in very few lines of code

// TODO: Make string uppercase, create array from string

string = string.toUpperCase().split("");
console.log(string);

// TODO: Add "C"
string.push("C");
console.log(string);

string.sort();
console.log(string);


// TODO: Add "F"

string.push("F");
console.log(string);

// TODO: Create string from mutated array

string = string.join("");
console.log(string);

// TODO: Print "BE" using bracket notation
console.log(string[1] + string[4]);
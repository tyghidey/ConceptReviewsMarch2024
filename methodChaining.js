let string = "deab";

// Create "ABCDEF" in very few lines of code

// Make string uppercase, create array from string
let alphaArr = string.toUpperCase().split("");
console.log(alphaArr);

// Add "C"
alphaArr.splice(2, 0, "C");

// Add "F"
alphaArr.push("F");

// Create string from mutated array
console.log(alphaArr.join(""));

// Print "BE" using bracket notation
console.log(alphaArr[1] + alphaArr[4]);

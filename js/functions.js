// Import readline-sync
const input = require('readline-sync');


/* NAMED FUNCTIONS */

// Sample data
let userInput1 = "abc";
let userInput2 = "5551920";
let userInput3 = "3145551234";

// Function with parameter and a return value of true or false
function isValidPhoneNum(userInput) {
  return !isNaN(Number(userInput)) && userInput.length === 10;
}

// TODO: Call function and print return values for each sample


/* MULTIPLE FUNCTIONS */

// Existing data to be updated
let userPhone = "(314) 555-1234";

// "Helper" or "minor" functions

// TODO: Get user input, validate, and return validated input
function promptUserForNewPhone() {}

// TODO: Format a phone number like this: (314) 555-1234 and return the string
function formatPhone(phoneNum) {}

// TODO: assign new value to userPhone
function updatePhone(phoneNum) {}

// "Main" function 
// Making use of other functions
function runPhoneUpdateSequence() {

  // TODO: Ask user for new phone number, with validation
  

  // TODO: Update their record
  

  // TODO: Print a confirmation using number now on record

}

// TODO: Call main function


/* ANONYMOUS FUNCTIONS */

// Stored in variable
const formatSSN = function (ssn) {
  let ssn1 = ssn.slice(0, 3);
  let ssn2 = ssn.slice(3, 5);
  let ssn3 = ssn.slice(5);
  return `${ssn1}-${ssn2}-${ssn3}`;
}

/* HIGHER-ORDER FUNCTIONS */

let ssnList = ["123456789", "234567890", "345678901"];

// TODO: Use .map() to produce a new array of formatted SSNs


// Defining anon function in place
let address1 = {
  street: "123 Main Street",
  city: "St. Louis",
  state: "MO",
  zip: "63101"
};
let address2 = {
  street: "123 Main Street",
  city: "St. Louis",
  state: "MO",
  zip: "63101"
};
let address3 = {
  street: "123 Main Street",
  city: "St. Louis",
  state: "MO",
  zip: "63101"
};

let addresses = [address1, address2, address3];

// TODO: Print formatted addresses and number them using .forEach()


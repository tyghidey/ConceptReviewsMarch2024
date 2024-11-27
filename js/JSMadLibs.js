const readlineSync = require('readline-sync');

// JAVASCRIPT BASICS: MAD LIBS
// A @CodeWithCarrie Tutorial

/*
	Code along with the video:
 	https://youtu.be/PoZwDM2cOmY

 	More tutorial videos:
	https://tinyurl.com/CodeWithCarrieTutorials
*/
/*
	BEFORE CONTINUING: View the README file for an introduction to the concepts, vocabulary, and syntax.
*/

/*
	This is meant to give you a little extra structured practice on defining and using variables. In order for this to be as fun as it's meant to be, you need to declare all your variables and initialize them with values BEFORE you run the program with the final line of code enabled. 
*/


/** PART 1: DECLARE YOUR VARIABLES **/

/* 	
	The first few variables have been coded as examples; you may change the values however you wish before continuing. Follow the same pattern when naming your variables (var3, var4, etc).
*/

// 0: nonsense word for an object you don't know the name of, capitalized
let title = "Thingamajig";

// 1: motion verb (e.g., "walk") 
let var1 = "cartwheel";

// 2: first name
let var2 = "Griselda";

// 3: name of famous woman from a history book

let var3 = "Harriet Tubman";
// let famousWoman = "Harriet Tubman";

// 4: metal object
//let metalObject = "iphone";
let var4 = "iphone";

// 5: wooden object

//let woodenObject = "wooden spoon";
let var5 = "wooden spoon";

// 6: large number
let var6 = "1000";

// 7: verb ending in -ing
let var7 = "dancing";

// 8: kitchen utensil
let var8 = "fork";

// 9: year, make & model of a car
let var9 = "Toyota Camry 2000";

// 10: slimy, oozing substance
let var10 = "slime";

// 11: a shiny object
let var11 = "penny";

// 12: something colorful
let var12 = "rainbow";

// 13: texture (e.g., "crunchy", "fluffy")
let var13 = "smooth";

// 14: alien planet
let var14 = "Puto";

// 15: your favorite high school teacher
let var15 = "Joe";

// 16: strong emotion (e.g., "despair" or "elation")
let var16 = "happy";

// 17: number greater than 10
let var17 = 15;

// 18: fruit (plural)
let var18 = "banana";

// 19: adjective ending in -est
let var19 = "bestest";

// GOT THEM ALL? Good! Now you can move on.


/** PART 2: RUN PROGRAM **/

/* 	
	Once you've declared all your variables and initialized them with values above, you're ready for the next step. Everything has already been coded for you. Don't worry about syntax you don't recognize yet.

 	Un-comment the remaining lines below and then hit "Run" to see how it comes out in the console!

 (If you have any errors, check that you named all your variables the same as the ones in the list below.)
*/

const runProgram = require('./program/story');

let words = [title, var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13, var14, var15, var16, var17, var18, var19];

runProgram(words);

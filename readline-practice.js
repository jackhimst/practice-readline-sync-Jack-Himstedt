const readline = require('readline-sync');

let studentName = readline.question("What is your name? ");

let questionOne = readline.question("What is an example of explicit type conversion? ");
let questionTwo = readline.question("What is implicit type conversion? ");
let questionThree = readline.questionInt("What is an example of a falsy value in Boolean type conversion that is a number? ");
let questionFour = readline.question("What is a constant variable? ");
let questionFive = readline.question('Is "=" an assignment operator or equality operator? ');

console.log("Question 1 Answer: Examples of explicit type conversion include Number(), String(), and Boolean() among others.")
console.log("You answered: " + questionOne);
console.log("Question 2 Answer: An implicit type conversion is when the program automatically converts the type of a value when it is deemed necessary.");
console.log("You answered: " + questionTwo);
console.log('Question 3 Answer: An example of a falsy value that is a number is 0.');
console.log("You answered: " + questionThree);
console.log("Question 4 Answer: A constant variable is a variable that cannot be changed once initialized.");
console.log("You answered: " + questionFour);
console.log('The "=" is an assignment operator. The "==" and "===" signs are used for equality.');
console.log("You answered: " + questionFive);
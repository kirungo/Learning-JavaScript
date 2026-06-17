// Store the bot's name in a variable
const botName = "MathBot";

// Create a greeting message using template literals
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

// Display the greeting message
console.log(greeting);

// Explain what Math.random() does
console.log(
  "The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1."
);

// Generate a random decimal number between 0 and 1
const randomNum = Math.random();

// Display the random decimal number
console.log(randomNum);

// Introduce generating a random number within a range
console.log("Now, generate a random number between two values.");

// Set the minimum and maximum values for the range
const min = 1;
const max = 100;

// Generate a random decimal number between min and max
const randomNum2 = Math.random() * (max - min) + min;

// Display the random number
console.log(randomNum2);

// Explain what Math.floor() does
console.log(
  "The Math.floor() method rounds the value down to the nearest whole integer."
);

// Round 6.7 down to the nearest integer
const numRoundedDown = Math.floor(6.7);

// Display the rounded value
console.log(numRoundedDown);

// Introduce generating a random integer
console.log("Now, generate a random integer between two values.");

// Generate a random integer between min and max
const randomInt = Math.floor(Math.random() * (max - min) + min);

// Display the random integer
console.log(randomInt);

// Explain what Math.ceil() does
console.log(
  "The Math.ceil() method rounds the value up to the nearest whole integer."
);

// Round 3.2 up to the nearest integer
const numRoundedUp = Math.ceil(3.2);

// Display the rounded value
console.log(numRoundedUp);

// Explain what Math.round() does
console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);

// Round 2.7 to the nearest integer
const numRounded = Math.round(2.7);

// Display the rounded value
console.log(numRounded);

// Round 11.2 to the nearest integer
const numRounded2 = Math.round(11.2);

// Display the rounded value
console.log(numRounded2);

// Explain what Math.max() and Math.min() do
console.log(
  "The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range."
);

// Find the largest number in the list
const maxNum = Math.max(3, 125, 55, 24);

// Display the largest number
console.log(maxNum);

// Find the smallest number in the list
const minNum = Math.min(6, 90, 14, 90, 2);

// Display the smallest number
console.log(minNum);

// End the lesson with a closing message
console.log("It was fun learning about the different Math methods with you!");

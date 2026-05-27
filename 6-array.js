// How to create an array
const hobbies = ["Sports", "Cooking", "Reading"];

// Display the first item in the array
console.log("First hobby:", hobbies[0]);

// Adding an item to an array
hobbies.push("Driving");

// Find index of a value inside an array
const cookingIndex = hobbies.findIndex((item) => {
  return item === "Cooking";
});

console.log("Index of Cooking:", cookingIndex);

// Display the updated array
console.log("Updated hobbies:", hobbies);

// map method is used to tranform data i.e a NEW array with "!" added to each item
const updatedHobbies = hobbies.map((item) => item + "!");

// original array stays the same
console.log("Original array:", hobbies);

// new transformed array
console.log("Transformed array:", updatedHobbies);
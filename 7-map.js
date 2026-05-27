// Tranform items() to be a list of numbers into a list of JavaScript objects.

const items = ["egg", "flour", "milk"];

const newItems = items.map((item) => "omelette");

console.log(newItems);

/** Use map() to transform each item into a baked product:
 * "egg" → "cake"
 * "flour" → "bread"
 * "milk" → "pancake*/ 
const food = ["egg", "flour", "milk"];

const newFood = food.map((item) => {
  if (item === "egg") {
    return "cake";
  } else if (item === "flour") {
    return "bread";
  } else {
    return "pancake";
  }
});

console.log(newFood);


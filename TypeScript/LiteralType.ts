let direction: "up" | "down" | "left" | "right";
direction = "up";
// direction = "sideways"; // Error: not one of the allowed literal values
 
// Common pattern: combine with type alias
type Size = "small" | "medium" | "large";
 
function orderDrink(size: Size): void {
  console.log(`You ordered a ${size} drink`);
}
orderDrink("medium");
// orderDrink("huge"); // Error
 
// Numeric literal types work too
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
let roll: DiceRoll = 4;
 
export {};
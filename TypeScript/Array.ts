let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ["apple", "banana", "mango"];
 
// Alternative generic syntax (same meaning)
let scores: Array<number> = [90, 80, 70];
 
// Arrays of objects
let users: { name: string; age: number }[] = [
  { name: "Sokha", age: 20 },
  { name: "Dara", age: 22 },
];
 
// TS catches mistakes at compile time
// numbers.push("five"); // Error: Argument of type 'string' is not assignable to 'number'
 
numbers.push(5); // fine
console.log(numbers);
 
// Multi-dimensional array
let grid: number[][] = [
  [1, 2],
  [3, 4],
];
 
export {};
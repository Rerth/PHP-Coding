function add(a: number, b: number): number {
  return a + b;
}
 
// Optional parameter (use ?)
function greet(name: string, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${name}!`;
}
console.log(greet("Jkeey"));
console.log(greet("Jkeey", "Hey"));
 
// Default parameter
function multiply(a: number, b: number = 2): number {
  return a * b;
}
 
// Rest parameters
function sumAll(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4));
 
// Function type as a variable
let calculate: (a: number, b: number) => number;
calculate = add;
console.log(calculate(4, 5));
 
// Function that returns nothing
function logMessage(message: string): void {
  console.log(message);
}
 
export {};
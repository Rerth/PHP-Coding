type User = {
  name: string;
  age: number;
  isActive: boolean;
};
 
function printUser(user: User): void {
  console.log(`${user.name} (${user.age})`);
}
 
let u1: User = { name: "Sokha", age: 20, isActive: true };
printUser(u1);
 
// Type aliases work for primitives and unions too
type ID = number | string;
 
let userId: ID = 101;
userId = "u-101"; // also valid
 
// Aliases for function types
type MathOperation = (a: number, b: number) => number;
const subtract: MathOperation = (a, b) => a - b;
 
export {};
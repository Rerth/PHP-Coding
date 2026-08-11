let id: number | string;
id = 101;
id = "u-101";
// id = true; // Error: not part of the union
 
function printId(id: number | string): void {
  console.log(`Your ID is: ${id}`);
}
 
// Narrowing: checking the type inside the function to safely use it
function formatId(id: number | string): string {
  if (typeof id === "number") {
    return id.toFixed(0); // number-only method
  }
  return id.toUpperCase(); // string-only method
}
 
console.log(formatId(42));
console.log(formatId("abc"));
 
// Union of literal values (also see Literal Types file)
type Status = "pending" | "approved" | "rejected";
let orderStatus: Status = "pending";
 
export {};
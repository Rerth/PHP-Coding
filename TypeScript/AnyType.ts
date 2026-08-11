let randomValue: any = 10;
randomValue = "now I'm a string";
randomValue = true;
randomValue = [1, 2, 3];
// No errors above — TS won't complain because it's "any"
 
// Common use case: data from an API where you don't know the shape yet
function processApiResponse(data: any) {
  console.log(data);
}
 
// Best practice: avoid "any" when possible.
// Prefer "unknown" if you're not sure of the type but still want safety:
let safeValue: unknown = "could be anything";
if (typeof safeValue === "string") {
  console.log(safeValue.toUpperCase()); // TS knows it's a string here
}
 
export {};
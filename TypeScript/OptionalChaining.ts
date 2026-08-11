type Address = {
  city: string;
  zip?: string;
};
 
type Person = {
  name: string;
  address?: Address;
};
 
let person: Person = { name: "Sokha" }; // no address
 
// Without optional chaining, this would throw:
// console.log(person.address.city); // Error at runtime if address is undefined
 
// With optional chaining:
console.log(person.address?.city); // undefined, no crash
 
// Also works with function calls
type Config = {
  onSave?: () => void;
};
 
let config: Config = {};
config.onSave?.(); // does nothing since onSave is undefined, no error
 
// Combine with the nullish coalescing operator (??) for a fallback value
let city = person.address?.city ?? "Unknown city";
console.log(city);
 
export {};
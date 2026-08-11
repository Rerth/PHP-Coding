let user: { name: string; age: number } = {
  name: "Sokha",
  age: 20,
};
 
// Optional property (use ?)
let profile: { name: string; bio?: string } = {
  name: "Dara",
  // bio is optional, can be left out
};
 
// Readonly property — can't be reassigned after creation
let config: { readonly apiKey: string } = {
  apiKey: "abc123",
};
// config.apiKey = "xyz"; // Error: Cannot assign to 'apiKey' because it's read-only
 
// Nested objects
let student: {
  name: string;
  address: { city: string; country: string };
} = {
  name: "Jkeey",
  address: { city: "Phnom Penh", country: "Cambodia" },
};
 
console.log(student.address.city);
 
export {};
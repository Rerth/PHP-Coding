let username: string | null = null;
username = "Jkeey"; // fine
 
function greet(name: string | null): string {
  if (name === null) {
    return "Hello, stranger!";
  }
  return `Hello, ${name}!`; // TS knows name is a string here (narrowed)
}
 
console.log(greet(null));
console.log(greet("Jkeey"));
 
// Optional properties are automatically string | undefined
type Profile = {
  bio?: string;
};
 
let p: Profile = {};
console.log(p.bio); // undefined, no error
 
export {};
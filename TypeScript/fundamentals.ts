let age: number = 21;
let name: string = "Jkeey";
let isStudent: boolean = true;

// If you try this, TS will show a compile error:
// age = "twenty one"; // Error: Type 'string' is not assignable to type 'number'

// Type inference: TS can guess the type even if you don't write it
let city = "Phnom Penh"; // inferred as string automatically

function greet(personName: string): string {
  return `Hello, ${personName}!`;
}

console.log(greet(name));

export {};
let id: number = 5;
let userName: string = "Sokha";
let isActive: boolean = true;
let notAssigned: undefined = undefined;
let empty: null = null;
 
// Arrays and objects also have built-in types (covered in more detail later)
let scores: number[] = [90, 85, 77];
let user: { name: string; age: number } = { name: "Dara", age: 22 };
 
// Symbol and BigInt exist too, though rarely needed for beginners
let uniqueId: symbol = Symbol("id");
let bigNumber: bigint = 9007199254740991n;
 
export {};
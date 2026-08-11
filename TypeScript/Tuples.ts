let person: [string, number] = ["Jkeey", 21]; // [name, age]
 
// Order and type matter:
// let wrong: [string, number] = [21, "Jkeey"]; // Error: types swapped
 
console.log(`${person[0]} is ${person[1]} years old`);
 
// Real-world example: representing an RGB color
let color: [number, number, number] = [255, 0, 0];
 
// Named tuples (TS 4.0+) improve readability
let point: [x: number, y: number] = [10, 20];
 
export {};
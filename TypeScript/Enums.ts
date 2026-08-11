enum Role {
  Admin,      // 0
  Editor,     // 1
  Viewer,     // 2
}
 
let userRole: Role = Role.Admin;
console.log(userRole); // 0
console.log(Role[0]);  // "Admin"
 
// You can assign custom values
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}
 
console.log(StatusCode.NotFound); // 404
 
// String enums (more readable when logging/debugging)
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
 
let move: Direction = Direction.Up;
console.log(move); // "UP"
 
export {};
var radius = 5;
var area = Math.PI * radius * radius;
console.log(area); // Output: 78.53981633974483
radius = 7; // Reassigning the radius value
area = Math.PI * radius * radius;
console.log(area); // Output: 153.93804002589985
// Using let to declare and reassign a radius value
let radius2 = 10;
let area2 = Math.PI * radius2 * radius2;
console.log(area2); // Output: 314.1592653589793
radius2 = 12; // Reassigning the radius value
area2 = Math.PI * radius2 * radius2;
console.log(area2); // Output: 452.3893421169302
// Using const for PI and let for radius
const PI = Math.PI;
let radius3 = 15;
let area3 = PI * radius3 * radius3;
console.log(area3); // Output: 706.8583470577034


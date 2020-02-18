import { arrayFromString, isOdd } from "./helpers.js";
import { quartiles1, quartiles2, quartiles3 } from "./quartiles.js";

const values = arrayFromString("  3 7 8 5 12 14 21 13 18");

console.log(`quartiles1 ${quartiles1(values)}`);
console.log(`quartiles2 ${quartiles2(values)}`);
console.log(`quartiles3 ${quartiles3(values)}`);

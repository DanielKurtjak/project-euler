// The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)
import { isPal, getBinaryRepresentation } from "./helpers.js";

const r = [];
const LIMIT = 1e6;
let s = 0;

for (let i = 1; i < LIMIT; i++) {
  if (isPal(i + "")) {
    const b = getBinaryRepresentation(i);
    if (isPal(b)) {
      s += i;
      r.push([i, b]);
    }
  }
}
console.log(r);
console.log(s);

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.
//  4  ##################################  4
import { isPal } from "./helpers.js";

let max = 0;
for (let num1 = 999; num1 >= 100; num1--) {
  for (let num2 = 999; num2 >= 100; num2--) {
    const p = num1 * num2;
    if (p > max && isPal(p)) {
      max = p;
      continue;
    } else if (p < max) continue;
  }
}

console.log(max);

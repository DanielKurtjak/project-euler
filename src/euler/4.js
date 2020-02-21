//  4  ##################################  4
import { isPal } from "./helpers.js";

let max = 0;
for (let num1 = 999; num1 >= 100; num1--) {
  for (let num2 = 999; num2 >= 100; num2--) {
    const p = num1 * num2;
    if (p > max && isPal(p)) {
      max = p;
    }
  }
}

console.log(max);

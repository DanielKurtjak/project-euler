// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.
import R from "ramda";

import { getProperdivisors } from "./helpers.js";

const { add, sum, uniq } = R;

const sumOfdivisorsObj = {};
const sumOfdivisors = n => {
  if (sumOfdivisorsObj[n]) {
    return sumOfdivisorsObj[n];
  }
  const sum = getProperdivisors(n).reduce(add, 0);
  sumOfdivisorsObj[n] = sum;
  return sum;
};

const amicablenumbers = [];
for (let i = 10; i < 10000; i++) {
  const a = sumOfdivisors(i);
  const b = sumOfdivisors(a);
  if (b === i && a !== i) {
    amicablenumbers.push(a, b);
  }
}
console.log(sum(uniq(amicablenumbers)));

// Consider the divisors of 30: 1,2,3,5,6,10,15,30.
// It can be seen that for every divisor d of 30, d+30/d is prime.

// Find the sum of all positive integers n not exceeding 100 000 000
// such that for every divisor d of n, d+n/d is prime.
import R from "ramda";
import { isPrimeMemoized } from "./helpers.js";

const { memoizeWith, add, divide, chain, identity } = R;

const { floor, sqrt } = Math;

const makeFormula = n => chain(add, divide(n));

const LIMIT = 1e8;
let s = 1;
for (let number = 2; number < LIMIT; number += 2) {
  const formula = makeFormula(number);
  let allArePrime = true;
  if (!isPrimeMemoized(formula(1))) continue;

  let t2 = floor(sqrt(number));

  for (let divisor = 2; allArePrime && divisor <= t2; divisor++) {
    if (number % divisor === 0) {
      if (
        !isPrimeMemoized(formula(divisor)) ||
        (number / divisor !== divisor &&
          !isPrimeMemoized(formula(number / divisor)))
      ) {
        allArePrime = false;
      }
    }
  }

  if (allArePrime) {
    s += number;
  }
}

console.log(s);

// The number 3797 has an interesting property. Being prime itself,
//  it is possible to continuously remove digits from left to right,
//  and remain prime at each stage: 3797, 797, 97, and 7.
//  Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from
//  left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
import R from "ramda";

import { isPrimeMemoized, getPrimesToNumber } from "./helpers.js";

const LIMIT = 1e6;
const STARTING_PRIME = 23;
const primes = getPrimesToNumber(LIMIT, STARTING_PRIME);
let s = 0;
for (let prime of primes) {
  const primeString = prime + "";
  const len = primeString.length;
  let condition = true;
  for (let i = 1; condition && i < len; i++) {
    if (
      !isPrimeMemoized(primeString.substr(0, i)) ||
      !isPrimeMemoized(primeString.substr(i))
    ) {
      condition = false;
    }
  }
  if (condition) {
    s += prime;
    // console.log(prime);
  }
}
console.log({ s });

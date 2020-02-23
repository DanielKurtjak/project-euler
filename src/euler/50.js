// The prime 41, can be written as the sum of six consecutive primes:

// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime below one-hundred.

// The longest sum of consecutive primes below one-thousand that adds to a prime,
//  contains 21 terms, and is equal to 953.

// Which prime, below one-million, can be written as the sum of the most consecutive primes?
import R from "ramda";

import { isPrimeMemoized, getPrimesToNumber } from "./helpers.js";

const { sum } = R;

const PRIME_TILL_NUM_LIMIT = 5e3;
const primes = getPrimesToNumber(PRIME_TILL_NUM_LIMIT);
let longest = 199;
let longestNum = 117751;

let len = primes.length;
const PRIME_AS_SUM_LIMIT = 1e6;
const MAX_CONSECUTIVE_LENGTH_LIMIT_GUESS = 1000;
for (
  let newLongest = longest + 1;
  newLongest < MAX_CONSECUTIVE_LENGTH_LIMIT_GUESS;
  newLongest++
) {
  for (let start = 0; start < len - newLongest; start++) {
    const s = sum(primes.slice(start, start + newLongest));
    if (s < PRIME_AS_SUM_LIMIT && isPrimeMemoized(s)) {
      longest = newLongest;
      longestNum = s;
      break;
    }
  }
}

console.log({ len });
console.log(longest);
console.log(longestNum);

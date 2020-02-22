import R from "ramda";

import { isPrime, isPrimeMemoized } from "./helpers.js";

const { sum } = R;

let prime = 2;
const primes = [prime];
const LIMIT = 5e3;
let i = 0;
let longest = 199;
let longestNum = 117751;

for (let i = prime + 1; i < LIMIT; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

let len = primes.length;
for (let newLongest = longest + 1; newLongest < 1000; newLongest++) {
  for (let start = 0; start < len - newLongest; start++) {
    const suma = sum(primes.slice(start, start + newLongest));
    if (suma < 1e6 && isPrimeMemoized(suma)) {
      longest = newLongest;
      longestNum = suma;
      break;
    }
  }
}

console.log({ len });
console.log(longest);
console.log(longestNum);

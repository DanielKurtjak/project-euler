import { getPrimesToNumber } from "./helpers";

// The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330,
//  is unusual in two ways:
//  (i) each of the three terms are prime, and,
//  (ii) each of the 4-digit numbers are permutations of one another.

// There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes,
//  exhibiting this property, but there is one other 4-digit increasing sequence.

// What 12-digit number do you form by concatenating the three terms in this sequence?

const primes = getPrimesToNumber(1e4)
  .filter(x => x > 1000)
  .filter(x => String(x).split(""));
console.log(primes.slice(10));

a * 1000 + b * 100 + c * 10 + d;

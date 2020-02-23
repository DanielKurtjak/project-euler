import { getPrimesToNumber } from "./helpers";

const { floor, sqrt } = Math;

// It was proposed by Christian Goldbach that every odd composite number
//  can be written as the sum of a prime and twice a square.

// 9 = 7 + 2×1^2
// 15 = 7 + 2×2^2
// 21 = 3 + 2×3^2
// 25 = 7 + 2×3^2
// 27 = 19 + 2×2^2
// 33 = 31 + 2×1^2

// It turns out that the conjecture was false.

// What is the smallest odd composite that cannot be written as the sum of a prime
//  and twice a square?

const LIMIT = 1e4;
const primes = getPrimesToNumber(LIMIT).slice(1);
let searchingFor = 0;
let found = false;
for (let number = 35; number < LIMIT; number += 2) {
  if (primes.includes(number)) continue;
  found = false;

  for (let prime of primes) {
    if (prime > number - 2) {
      break;
    }
    const pRoot = (number - prime) >> 1;
    const sqRoot = floor(sqrt(pRoot));
    if (sqRoot * sqRoot * 2 + prime === number) {
      found = true;
      break;
    }
  }

  if (!found) {
    searchingFor = number;
    break;
  }
}
console.log(searchingFor);

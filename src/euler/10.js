// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.
//  10  ##################################  10
import { nextPrime } from "./helpers.js";

const N = 2e6;
let prime = 1;
let sum = 0;
do {
  prime = nextPrime(prime, N);
  if (prime !== false) sum += prime;
  else break;
} while (true);

console.log(sum);

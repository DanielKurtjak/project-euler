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

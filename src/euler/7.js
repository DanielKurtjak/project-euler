// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?
//  7  ##################################  7
import { nextPrime } from "./helpers.js";

let count = 1;
let prime = 2;
const TO_FIND = 10001;
while (count < TO_FIND) {
  prime = nextPrime(prime, Infinity);
  count++;
}

console.log({ prime, count });

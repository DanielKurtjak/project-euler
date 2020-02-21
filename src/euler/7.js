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

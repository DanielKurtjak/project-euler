// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n
//  exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?
import R from "ramda";

import "./41.js";

import { isPrime, permutations } from "./helpers.js";

const { max } = Math;

const perms = permutations("1234567");

const primes = [];
for (let perm of perms) {
  if (isPrime(perm)) {
    primes.push(perm);
  }
}

console.log(max(...primes));

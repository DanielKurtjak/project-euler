// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
import R from "ramda";

import { int, permutations } from "./helpers.js";

const { sum, uniq } = R;

const perms = permutations("123456789");

const pandigitalProducts = [];
for (let perm of perms) {
  const product = int(perm.substr(5));
  if (perm.substr(0, 2) * perm.substr(2, 3) == product) {
    console.log(perm.substr(0, 2), perm.substr(2, 3), product);
    pandigitalProducts.push(product);
  }
  if (perm.substr(0, 1) * perm.substr(1, 4) == product) {
    console.log(perm.substr(0, 1), perm.substr(1, 4), product);
    pandigitalProducts.push(product);
  }
}

console.log(sum(uniq(pandigitalProducts)));

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

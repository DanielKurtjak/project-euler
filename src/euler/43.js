import R from "ramda";

import { permutations } from "./helpers.js";

const { sum } = R;
const isPandigitalNumberDividibleByPrimes = pandigital => {
  if (int(pandigital.substr(1, 3)) % 2 !== 0) return false;
  if (int(pandigital.substr(2, 3)) % 3 !== 0) return false;
  if (int(pandigital.substr(3, 3)) % 5 !== 0) return false;
  if (int(pandigital.substr(4, 3)) % 7 !== 0) return false;
  if (int(pandigital.substr(5, 3)) % 11 !== 0) return false;
  if (int(pandigital.substr(6, 3)) % 13 !== 0) return false;
  if (int(pandigital.substr(7, 3)) % 17 !== 0) return false;
  return true;
};

const perms = permutations("0123456789");
const result = [];
for (let perm of perms) {
  if (isPandigitalNumberDividibleByPrimes(perm)) {
    result.push(perm);
  }
}

console.log({ result });
console.log(sum(result.map(int)));

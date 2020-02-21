import R from "ramda";
import { getProperDividers } from "./helpers.js";

const { filter, sum, range, uniq } = R;

const isAbundant = n => n < sum(getProperDividers(n));

const LIMIT = 28123;
const abundants = filter(isAbundant, range(1, LIMIT >> 1));

let sums = [];
for (let i = 0, len = abundants.length; i < len - 1; i++) {
  for (let j = i; j < len; j++) {
    sums.push(abundants[i] + abundants[j]);
  }
}

sums = uniq(sums);
// sums.push(LIMIT);
// sums = sums.slice(0, 3);
let suma = (sums[0] * (sums[0] - 1)) >> 1;
for (let i = 1; i < sums.length; i++) {
  const start = sums[i - 1] + 1;
  const end = sums[i] - 1;
  // const diff = end - start;
  // suma += ((diff * (diff + 1)) >> 1) + (diff + 1) * start;
  suma += sum(range(start, sums[i]));
}
console.log(suma);

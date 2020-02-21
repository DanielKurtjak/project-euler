import R from "ramda";

import { getProperDividers } from "./helpers.js";

const { add, sum, uniq } = R;

const sumOfDividersObj = {};
const sumOfDividers = n => {
  if (sumOfDividersObj[n]) {
    return sumOfDividersObj[n];
  }
  const sum = getProperDividers(n).reduce(add, 0);
  sumOfDividersObj[n] = sum;
  return sum;
};

const amicablenumbers = [];
for (let i = 10; i < 10000; i++) {
  const a = sumOfDividers(i);
  const b = sumOfDividers(a);
  if (b === i && a !== i) {
    amicablenumbers.push(a, b);
  }
}
console.log(sum(uniq(amicablenumbers)));

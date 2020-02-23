// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
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

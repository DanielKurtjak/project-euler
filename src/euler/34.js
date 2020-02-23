// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

import { fact } from "./helpers.js";
import R from "ramda";

const { compose, toString, sum } = R;
const { map, split } = R;

const sumFactorielOfDigits = compose(
  sum,
  map(fact),
  map(Number),
  split(""),
  toString
);

let i = 10;
const numbers = [];
while (i < 1000000) {
  if (i === sumFactorielOfDigits(i)) {
    numbers.push(i);
  }
  i++;
}

console.log(numbers);
console.log(sum(numbers));

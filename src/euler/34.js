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

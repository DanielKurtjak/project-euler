import { arrayFromString } from "./helpers.js";
import { interquartileRange } from "./interquartileRange.js";
import R from "ramda";

const {
  __,
  compose,
  pipe,
  subtract,
  apply,
  unapply,
  reduce,
  prop,
  identity,
  sort,
  length,
  maxBy,
  nth,
  dec,
  sum,
  countBy,
  zipWith,
  divide,
  repeat,
  converge,
  reverse,
  flatten,
  ifElse,
  filter,
  either,
  equals,
  modulo,
  chain,
  map,
  range,
  toUpper
} = R;

const values = arrayFromString(
  // "6 12 8 10 20"
  "10 40 30 50 20 10 40 30 50 20 1 2 3 4 5 6 7 8 9 10 20 10 40 30 50 20 10 40 30 50"
);
const frequences = arrayFromString(
  // "5 4 3 2 1 5"
  "1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 10 40 30 50 20 10 40 30 50 20"
);

console.log(`interquartileRange ${interquartileRange(values, frequences)}`);

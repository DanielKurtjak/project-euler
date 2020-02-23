import R from "ramda";
import "./28.js";

import {
  BigNumber,
  isPal,
  isPrime,
  isPrimeMemoized,
  nextPrime,
  primeFactors,
  square,
  int,
  fact,
  getDividers,
  getProperDividers,
  permutations,
  charPermutations,
  getCalls,
  ascDigits,
  rotateString
} from "./helpers.js";

const { __, T, indentity, add, append, curry, flip, binary, xprod, reduce } = R;
const { unary, filter, compose, toString, multiply, sum, either, all } = R;
const { reverse, repeat, equals, modulo, sort, flatten, toPairs } = R;
const { countBy, length, map, split, subtract, identity, uniq, range } = R;
const { pow, floor, sqrt, max } = Math;

const f = n => 2 * n + 2 * (n - 1);

console.log(f(2));
console.log(f(3));

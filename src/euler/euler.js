import R from "ramda";

import "./357.js";

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
  getBinaryRepresentation,
  getPrimesToNumber,
  getProperDividers,
  permutations,
  charPermutations,
  getCalls,
  ascDigits,
  rotateString
} from "./helpers.js";

const { __, T, indentity, add, append, curry, flip, binary, xprod } = R;
const { unary, filter, compose, toString, multiply, sum, either, all } = R;
const { reverse, repeat, equals, modulo, sort, flatten, toPairs } = R;
const { countBy, length, map, split, subtract, identity, uniq, range } = R;
const { divide, chain, reduce } = R;
const { pow, floor, sqrt, max } = Math;

const makeFormula = n => chain(add, divide(n));

const LIMIT = 1e8;
let s = 0;
for (let n = 1; n < LIMIT; n++) {
  const dividers = getDividers(n);
  const allDividersArePrime = all(compose(isPrimeMemoized, makeFormula(n)));
  if (allDividersArePrime(dividers)) {
    s += n;
  }
}

console.log(s);

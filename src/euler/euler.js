import R from "ramda";

import "./42.js";

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
  getDivisors,
  getBinaryRepresentation,
  getPrimesToNumber,
  getProperDivisors,
  permutations,
  charPermutations,
  getCalls,
  ascDigits,
  rotateString,
  getTriangle,
  getPentagonal,
  getHexagonal,
  isPentagonal,
  isHexagonal,
  isTriangle
} from "./helpers.js";

const { __, T, indentity, add, append, curry, flip, binary, xprod } = R;
const { unary, filter, compose, toString, multiply, sum, either, all } = R;
const { reverse, repeat, equals, modulo, sort, flatten, toPairs } = R;
const { countBy, length, map, split, subtract, identity, uniq, range } = R;
const { divide, chain, reduce, product, nth } = R;
const { pow, floor, sqrt, max } = Math;

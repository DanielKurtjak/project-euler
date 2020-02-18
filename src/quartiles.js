import { div2, isOdd } from "./helpers.js";
import { median } from "./meanMedianMode.js";
import R from "ramda";

const {
  compose,
  subtract,
  zipWith,
  multiply,
  nthArg,
  sum,
  divide,
  converge,
  identity,
  always,
  ifElse,
  sort,
  length,
  inc,
  slice
} = R;

export const quartiles = converge(divide, [
  compose(sum, zipWith(multiply)),
  compose(sum, nthArg(1))
]);

export const quartiles2 = median;

const lengthDiv2 = compose(Math.floor, div2);

export const quartiles1 = compose(
  median,
  converge(slice, [always(0), compose(lengthDiv2, length), identity]),
  sort(subtract)
);

export const quartiles3 = compose(
  median,
  converge(slice, [
    compose(ifElse(isOdd, compose(inc, lengthDiv2), lengthDiv2), length),
    length,
    identity
  ]),
  sort(subtract)
);

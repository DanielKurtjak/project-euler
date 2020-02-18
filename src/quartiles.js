import { lengthDiv2, isOdd } from "./helpers.js";
import { median } from "./meanMedianMode.js";
import R from "ramda";

const {
  compose,
  subtract,
  converge,
  identity,
  always,
  ifElse,
  sort,
  length,
  inc,
  slice
} = R;

export const quartiles2 = median;

export const quartiles1 = compose(
  median,
  converge(slice, [always(0), lengthDiv2, identity]),
  sort(subtract)
);

export const quartiles3 = compose(
  median,
  converge(slice, [
    ifElse(compose(isOdd, length), compose(inc, lengthDiv2), lengthDiv2),
    length,
    identity
  ]),
  sort(subtract)
);

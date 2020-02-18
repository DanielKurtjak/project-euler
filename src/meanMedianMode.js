import { lengthDiv2, isOdd } from "./helpers.js";
import R from "ramda";

const {
  compose,
  pipe,
  subtract,
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
  divide,
  converge,
  toPairs,
  ifElse
} = R;

//MEAN
export const mean = converge(divide, [sum, length]);
const avg = unapply(mean);

const midElement = converge(prop, [lengthDiv2, identity]);

// MEADIAN
export const median = compose(
  ifElse(
    compose(isOdd, length),
    midElement,
    converge(avg, [
      converge(prop, [compose(dec, lengthDiv2), identity]),
      midElement
    ])
  ),
  sort(subtract)
);

//MODE
export const mode = pipe(
  countBy(identity),
  toPairs,
  reduce(maxBy(nth(1)), [Infinity, -Infinity]),
  nth(0)
);

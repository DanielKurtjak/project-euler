import { lengthDiv2, isOdd } from "./helpers.js";
import R from "ramda";

const {
  compose,
  pipe,
  subtract,
  unapply,
  reduce,
  identity,
  sort,
  length,
  maxBy,
  nth,
  dec,
  sum,
  chain,
  countBy,
  divide,
  converge,
  toPairs,
  ifElse
} = R;

//MEAN
export const mean = converge(divide, [sum, length]);
const avg = unapply(mean);

const midElement = chain(nth, lengthDiv2);

// MEADIAN
export const median = compose(
  ifElse(
    compose(isOdd, length),
    midElement,
    converge(avg, [chain(nth, compose(dec, lengthDiv2)), midElement])
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

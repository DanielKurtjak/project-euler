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
  ifElse
} = R;

//MEAN
export const mean = converge(divide, [sum, length]);
const avg = unapply(mean);

// MEADIAN
export const median = compose(
  ifElse(
    compose(isOdd, length),
    converge(prop, [lengthDiv2, identity]),
    converge(avg, [
      converge(prop, [compose(dec, lengthDiv2), identity]),
      converge(prop, [lengthDiv2, identity])
    ])
  ),
  sort(subtract)
);

//MODE
export const mode = pipe(
  countBy(identity),
  Object.entries,
  reduce(maxBy(nth(1)), ["broj", -1]),
  nth(0)
);

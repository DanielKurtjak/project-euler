import { arrayFromString } from "./helpers.js";
import R from "ramda";

const {
  compose,
  pipe,
  unapply,
  reduce,
  prop,
  identity,
  length,
  maxBy,
  equals,
  nth,
  dec,
  sum,
  countBy,
  divide,
  converge,
  flip,
  subtract,
  modulo,
  ifElse
} = R;

const array = arrayFromString(" 10 8 6 9").sort(subtract);

//MEAN
export const mean = converge(divide, [sum, length]);
const avg = unapply(mean);

const divFlipped = flip(divide);
const div2 = divFlipped(2);
const lengthDiv2 = compose(Math.floor, div2, length);

// MEADIAN
export const median = ifElse(
  compose(equals(1), modulo(2), length),
  converge(prop, [lengthDiv2, identity]),
  converge(avg, [
    converge(prop, [compose(dec, lengthDiv2), identity]),
    converge(prop, [lengthDiv2, identity])
  ])
);

//MODE
export const mode = pipe(
  countBy(identity),
  Object.entries,
  reduce(maxBy(nth(1)), ["broj", -1]),
  nth(0)
);

console.log(`mode ${mode(array)}`);
console.log(`mean ${mean(array)}`);
console.log(`median ${median(array)}`);

import { arrayFromString } from "./helpers.js";
import { interquartileRange } from "./interquartileRange.js";
import R from "ramda";

const {
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
  map,
  toUpper
} = R;

const values = arrayFromString(
  "6 12 8 10 20"
  // "10 40 30 50 20 10 40 30 50 20 1 2 3 4 5 6 7 8 9 10 20 10 40 30 50 20 10 40 30 50"
);
const frequences = arrayFromString(
  "5 4 3 2 1 5"
  // "1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 10 40 30 50 20 10 40 30 50 20"
);

console.log(`interquartileRange ${interquartileRange(values, frequences)}`);

// export const interquartileRange = compose(
//   converge(subtract, [quartiles3, quartiles1]),
//   flatten,
//   zipWith(repeat)
// );

// const users = [
//   { name: "Daniel", age: 35 },
//   { name: "Cvija", age: 36 },
//   { name: "Dalibor", age: 38 }
// ];

// // const getProperty = (propName, obj) => obj[propName];
// const getProperty = propName => obj => obj[propName];

// const fn = (a1, a2, a3) => a1 + a2 + a3;
// const fnCurried = a1 => a2 => a3 => a1 + a2 + a3;

// fn(1, 3, 5);
// fnCurried(1)(3)(5);

// const getName = getProperty("name");
// const upperName = compose(toUpper, getName);
// console.log({ names: map(upperName, users) });

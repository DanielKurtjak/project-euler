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
  modulo,
  subtract,
  ifElse
} = require("ramda");

const println = tag => x => (console.log(`${tag}: ${JSON.stringify(x)}`), x);

const array = " 10 8 6 9"
  // const array = " 64630 11735 14216 99233 14470 4978 73429 38120 51135 67060 14470"
  .trim()
  .split(" ")
  .map(x => Number.parseInt(x))
  .filter(x => !Number.isNaN(x))
  .sort(subtract);

//MEAN
const mean = converge(divide, [sum, length]);
const avg = unapply(mean);

const divFlipped = flip(divide);
const div2 = divFlipped(2);
const lengthDiv2 = compose(Math.floor, div2, length);

// MEADIAN
const median = ifElse(
  compose(equals(1), modulo(2), length),
  converge(prop, [lengthDiv2, identity]),
  converge(avg, [
    converge(prop, [compose(dec, lengthDiv2), identity]),
    converge(prop, [lengthDiv2, identity])
  ])
);

//MODE
const mode = pipe(
  countBy(identity),
  Object.entries,
  reduce(maxBy(nth(1)), ["broj", -1]),
  nth(0)
);

console.log(`mode ${mode(array)}`);
console.log(`mean ${mean(array)}`);
console.log(`median ${median(array)}`);

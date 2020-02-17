const {
  countBy,
  curry,
  flip,
  compose,
  pipe,
  unapply,
  reduce,
  prop,
  dec,
  identity,
  length,
  zipWith,
  gt,
  maxBy,
  minBy,
  lt,
  takeLast,
  nthArg,
  nth,
  take,
  sum,
  ifElse
} = require("ramda");

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const div = (x, y) => x / y;
const mod = (x, y) => x % y;
const equal = (x, y) => x === y;

const modCurried = curry(flip(mod));
const divCurried = curry(flip(div));
const eqCurried = curry(equal);

const println = tag => x => (console.log(`${tag}: ${JSON.stringify(x)}`), x);

const div2 = divCurried(2);
const mod2 = modCurried(2);
const equal1 = eqCurried(1);

// const array = " 10 8 6    4 12 11 4 1 11    "
const array = " 64630 11735 14216 99233 14470 4978 73429 38120 51135 67060 "
  .trim()
  .split(" ")
  .map(x => Number.parseInt(x))
  .filter(x => !Number.isNaN(x))
  .sort(sub);

const isOdd = pipe(mod2, equal1);

const callTwice = fn => x => fn(x)(x);
const functionalize = fn =>
  curry((...fnArgs) => args => fn(...fnArgs.map(fn => fn(args))));

const divFn = functionalize(div);

//MEAN
const mean = divFn(sum, length);

const avg = unapply(mean);
const avgF = functionalize(avg);

const lengthDiv2 = compose(Math.floor, div2, length);

//MEADIAN
const median = ifElse(
  compose(isOdd, length),
  callTwice(compose(prop, lengthDiv2)),
  avgF(
    callTwice(compose(prop, dec, lengthDiv2)),
    callTwice(compose(prop, lengthDiv2))
  )
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

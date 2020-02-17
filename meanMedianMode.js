const {
  curry,
  flip,
  compose,
  pipe,
  reduce,
  reduceBy,
  prop,
  assoc
} = require("ramda");

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
const mod = (x, y) => x % y;
const equal = (x, y) => x === y;
const not = x => !x;
const identity = x => x;

const modCurried = curry(flip(mod));
const divCurried = curry(flip(div));
const subCurried = curry(flip(sub));
const eqCurried = curry(equal);

const println = tag => x => (console.log(`${tag}: ${x}`), x);

const div2 = divCurried(2);
const mod2 = modCurried(2);
const equal1 = eqCurried(1);

const array = "64630 11735 14216 99233 14470 4978 73429 38120 51135 67060"
  .split(" ")
  .map(x => parseInt(x))
  .sort(sub);

const isOdd = pipe(mod2, equal1);
const isEven = pipe(isOdd, not);
// const avg = compose(
//   div,
//   println("end"),
//   prop("length"),
//   println("mid"),
//   compose(reduce, add),
//   println("start")
// );

// const mean = compose(divCurried, flip(reduce)(add), prop("length"));
const mean = args =>
  compose(divCurried, prop("length"))(args)(args.reduce(add, 0));
const avg = (...args) => mean(args);

const lengthDiv2 = compose(div2, prop("length"));
const median = arr => {
  const lDiv2 = lengthDiv2(arr);
  compose(isEven, prop("length"))(arr)
    ? avg(arr[lDiv2 - 1], arr[lDiv2])
    : arr[lDiv2 + 1];
};

const { max: mode } = array.reduce(
  (
    { uniqueValues: uniqueValuesArg, max: maxArg, maxCount: maxCountArg },
    v
  ) => {
    const uniqueValues = { ...uniqueValuesArg };
    let max = maxArg;
    let maxCount = maxCountArg;

    // uniqueValues[v] = !uniqueValues[v] ? 1 : uniqueValues[v] + 1;
    const incValue = assoc(v, ifElse(complement(prop(v)), always(1), inc));
    incValue(uniqueValues);
    if (uniqueValues[v] > maxCount) {
      maxCount = uniqueValues[v];
      max = v;
    }
    return { max, maxCount, uniqueValues };
  },
  { max: -1, maxCount: -1, uniqueValues: {} }
);

console.log(mean(array));
console.log(median(array));
console.log(mode);

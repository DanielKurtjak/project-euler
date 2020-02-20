import R from "ramda";
const {
  __,
  add,
  append,
  curry,
  flip,
  binary,
  unary,
  compose,
  multiply,
  sum,
  filter,
  either,
  reverse,
  equals,
  modulo,
  sort,
  flatten,
  toPairs,
  reduce,
  countBy,
  map,
  split,
  identity,
  range
} = R;

const { pow, floor, sqrt, max } = Math;

export const sumMod3andMod6 = compose(
  sum,
  filter(
    either(compose(equals(0), modulo(__, 3)), compose(equals(0), modulo(__, 5)))
  ),
  range(1)
);

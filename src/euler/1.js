import R from "ramda";
const { __, compose, sum, filter, either, equals, modulo, range } = R;

export const sumMod3andMod6 = compose(
  sum,
  filter(
    either(compose(equals(0), modulo(__, 3)), compose(equals(0), modulo(__, 5)))
  ),
  range(1)
);

console.log(sumMod3andMod6(1000));

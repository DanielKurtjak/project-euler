// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
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

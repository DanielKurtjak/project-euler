import R from "ramda";

const { floor } = Math;
const { parseInt, isNaN } = Number;
const { compose, complement, divide, mathMod, length, equals, unary, __ } = R;

export const println = tag => x => (
  console.log(`${tag}: ${JSON.stringify(x)}`), x
);

export const arrayFromString = string =>
  string
    .trim()
    .split(" ")
    .map(unary(parseInt))
    .filter(complement(isNaN));

export const div2 = divide(__, 2);
export const mod2 = mathMod(__, 2);
export const lengthDiv2 = compose(floor, div2, length);
export const isOdd = compose(equals(1), mod2);
export const isEven = complement(isOdd);

import R from "ramda";

const { compose, complement, flip, divide, mathMod, length, equals } = R;

export const println = tag => x => (
  console.log(`${tag}: ${JSON.stringify(x)}`), x
);

export const arrayFromString = string =>
  string
    .trim()
    .split(" ")
    .map(x => Number.parseInt(x))
    .filter(x => !Number.isNaN(x));

const divFlipped = flip(divide);
const modFlipped = flip(mathMod);

export const div2 = divFlipped(2);
export const mod2 = modFlipped(2);
export const lengthDiv2 = compose(Math.floor, div2, length);
export const isOdd = compose(equals(1), mod2);
export const isEven = complement(isOdd);

import R from "ramda";

const { subtract } = R;

export const println = tag => x => (
  console.log(`${tag}: ${JSON.stringify(x)}`), x
);

export const arrayFromString = string =>
  string
    .trim()
    .split(" ")
    .map(x => Number.parseInt(x))
    .filter(x => !Number.isNaN(x));

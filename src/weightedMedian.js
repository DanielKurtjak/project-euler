import { arrayFromString } from "./helpers.js";
import R from "ramda";

const { compose, zipWith, multiply, nthArg, sum, divide, converge } = R;

const value = arrayFromString(" 10 40 30 50 3");
const weigth = arrayFromString(" 1 2 3 4 5");

export const weigthedMean = converge(divide, [
  compose(sum, zipWith(multiply)),
  compose(sum, nthArg(1))
]);

console.log(`weigthedMean ${weigthedMean(value, weigth)}`);

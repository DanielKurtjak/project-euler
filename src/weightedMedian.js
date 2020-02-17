import { arrayFromString } from "./helpers.js";
import R from "ramda";

const { compose, zipWith, multiply, nthArg, sum, divide, converge } = R;

const values = arrayFromString(" 10 40 30 50 3");
const weigths = arrayFromString(" 1 2 3 4 5");

export const weigthedMean = converge(divide, [
  compose(sum, zipWith(multiply)),
  compose(sum, nthArg(1))
]);

console.log(`weigthedMean ${weigthedMean(values, weigths)}`);

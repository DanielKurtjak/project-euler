import R from "ramda";
import { arrayFromString } from "./helpers.js";

const { compose, sum, divide, converge, zipWith, multiply, nthArg } = R;

const values = arrayFromString("10 40 30 50 20");
const weight = arrayFromString("1 2 3 4 5");

const weightedMedian = converge(divide, [
  compose(sum, zipWith(multiply)),
  compose(sum, nthArg(1))
]);

console.log(`weightedMedian: ${weightedMedian(values, weight)}`);

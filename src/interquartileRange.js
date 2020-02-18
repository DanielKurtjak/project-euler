import { quartiles1, quartiles3 } from "./quartiles.js";
import R from "ramda";

const { compose, subtract, zipWith, repeat, converge, flatten } = R;

export const interquartileRange = compose(
  converge(subtract, [quartiles3, quartiles1]),
  flatten,
  zipWith(repeat)
);

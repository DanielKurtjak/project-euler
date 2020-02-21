//  6  ##################################  6
import R from "ramda";
import { square } from "./helpers.js";

const { add, reduce, map, range, subtract } = R;

const sqDiff = n =>
  subtract(
    square((n * (n + 1)) / 2),
    reduce(add, 0)(map(square, range(1, n + 1)))
  );

console.log(sqDiff(100));

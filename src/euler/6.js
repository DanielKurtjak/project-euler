// The sum of the squares of the first ten natural numbers is,

// 1^2+2^2+...+10^2=385
// The square of the sum of the first ten natural numbers is,

// (1+2+...+10)^2=55^2=3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

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

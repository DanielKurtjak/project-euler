// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//  5  ##################################  5
import R from "ramda";
import { primeFactors } from "./helpers.js";

const { __, countBy, map, identity } = R;

const { pow, max } = Math;

const maxCountsByPrime = {};
const factors = [];
for (let i = 2; i < 20; i++) {
  factors.push(primeFactors(i));
}

map(countBy(identity))(factors).forEach(o =>
  Object.keys(o).forEach(key => {
    maxCountsByPrime[key] = max(Number(maxCountsByPrime[key] || 0), o[key]);
  })
);

const mul = Object.entries(maxCountsByPrime).reduce(
  (mul, [p, n]) => mul * pow(p, n),
  1
);

console.log(mul);

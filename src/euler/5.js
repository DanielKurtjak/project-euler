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

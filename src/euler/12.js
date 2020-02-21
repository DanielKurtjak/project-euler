//  12  ##################################  12
import { getDividers } from "./helpers.js";
const { pow, floor, sqrt, max } = Math;

const getTri = index => (index * (index + 1)) / 2;
const COUNT_OF_DIVIDERS = 500;

const calcCount = i => (i === 1 ? [1] : getDividers(getTri(i)));

let i = 10000;
while (true) {
  let dividers = calcCount(i);

  if (dividers.length >= COUNT_OF_DIVIDERS) {
    break;
  }
  i++;
}

console.log(getTri(i));

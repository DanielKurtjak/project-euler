import R from "ramda";
import names from "./resources/22.js";
const { add, sum, reduce } = R;

const offset = "A".charCodeAt(0) - 1;

const nameSum = name =>
  name
    .split("")
    .map(char => char.charCodeAt(0) - offset)
    .reduce(add, 0);

const names2 = names.sort().slice(0, 2);

console.log(names2);
console.log(sum(names.map((name, i) => nameSum(name) * (i + 1))));

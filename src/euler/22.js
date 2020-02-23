// Using "./resources/22.js"t a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?
import R from "ramda";
import names from "./resources/22.js";
const { add, sum } = R;

const offset = "A".charCodeAt(0) - 1;

const nameSum = name =>
  name
    .split("")
    .map(char => char.charCodeAt(0) - offset)
    .reduce(add, 0);

const names2 = names.sort().slice(0, 2);

console.log(names2);
console.log(sum(names.map((name, i) => nameSum(name) * (i + 1))));

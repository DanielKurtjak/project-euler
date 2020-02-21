import R from "ramda";
import { int, BigNumber } from "./helpers.js";
const { reduce, add } = R;

let big2 = BigNumber("2");
// let num = BigNumber("2");
// for (let i = 1; i < 1000; i++) {
//   num = num.mul(big2);
// }

// console.log({
//   bigNum: num.fold(),
//   sum: num.sumDigits()
// });

let bigNum = "2";
for (let i = 1; i < 1000; i++) {
  let x = 0;
  for (let c = 0; c < bigNum.length; c++) {
    const num = int(bigNum[c]) * 2 + x;
    bigNum = bigNum.replaceAt(c, "" + (num % 10));
    x = int(num / 10);
  }
  if (x) bigNum += x;
}

console.log({
  bigNum,
  sum: reduce(add, 0, bigNum.split("").map(Number))
});

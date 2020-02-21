import { BigNumber } from "./helpers.js";

let s = BigNumber("1");
for (let i = 2; i <= 100; i++) {
  s = s.mul(BigNumber(i + ""));
}
console.log(s.sumDigits());

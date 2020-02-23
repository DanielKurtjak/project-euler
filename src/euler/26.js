// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2	= 	0.5
// 1/3	= 	0.(3)
// 1/4	= 	0.25
// 1/5	= 	0.2
// 1/6	= 	0.1(6)
// 1/7	= 	0.(142857)
// 1/8	= 	0.125
// 1/9	= 	0.(1)
// 1/10	= 	0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
import { BigNumber } from "./helpers.js";

const veryBigNum = BigNumber("1".padEnd(1e5, "0"));

let longest = 7;
let rec = 6;
let seq = "142857";
for (let i = 8; i < 1000; i++) {
  const num = veryBigNum.div(BigNumber(i + "")).fold();
  const l2 = num.length >> 1;
  let len = 6;
  if (
    num.substr(0, 5) === num.substr(1, 5) &&
    num.substr(0, 6) === num.substr(1, 6)
  )
    continue;
  while (len < l2) {
    if (num.substr(0, len) === num.substr(len, len)) {
      if (len > rec) {
        longest = i;
        rec = len;
        seq = num.substr(0, len);
      }
      break;
    }
    len++;
  }
}
console.log({ seq, rec, longest });

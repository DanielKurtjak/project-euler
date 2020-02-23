// Consider all integer combinations of ab for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:

// 2^2=4, 2^3=8, 2^4=16, 2^5=32
// 3^2=9, 3^3=27, 3^4=81, 3^5=243
// 4^2=16, 4^3=64, 4^4=256, 4^5=1024
// 5^2=25, 5^3=125, 5^4=625, 5^5=3125
// If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:

// 4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125

// How many distinct terms are in the sequence generated by ab for 2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?
import R from "ramda";

const { sum } = R;

let nums = [];
let o = [];
const pow5 = n =>
  ({
    0: 0,
    1: 1,
    2: 32,
    3: 243,
    4: 1024,
    5: 3125,
    6: 7776,
    7: 16807,
    8: 32768,
    9: 59049
  }[n]);

for (let i = 10; i < 1e8; i++) {
  if (i === sum(("" + i).split("").map(pow5))) {
    nums.push(i);
    o.push({
      [i]: ("" + i).split("").map(pow5)
    });
  }
}
console.log(sum(nums));
console.log(o);

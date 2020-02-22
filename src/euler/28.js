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

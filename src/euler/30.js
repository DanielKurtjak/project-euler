// Surprisingly there are only three numbers that can be written as the sum of fourth powers
//  of their digits:

// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 8208 = 8^4 + 2^4 + 0^4 + 8^4
// 9474 = 9^4 + 4^4 + 7^4 + 4^4
// As 1 = 1^4 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of
// their digits.

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

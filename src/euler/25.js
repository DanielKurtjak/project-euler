import { BigNumber } from "./helpers.js";
// 1: 1
// 2: 1
// 3: 2
// 4: 3
// 5: 5
// 6: 8
// 7: 13
// 8: 21
// 9: 34
// 10: 55
// 11: 89
// 12: 144

let prev = BigNumber("89");
let fib = BigNumber("144");
let count = 12;
const INDEX = 1e3;
while (fib.numberOfDigits() < INDEX) {
  count++;
  const temp = fib.add(prev);
  prev = fib;
  fib = temp;
}

console.log(count);

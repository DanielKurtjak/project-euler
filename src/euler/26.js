import { BigNumber } from "./helpers.js";

const veryBigNum = BigNumber("1".padEnd(100000, "0"));

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

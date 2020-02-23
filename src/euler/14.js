// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?
const collatz = n => (n % 2 === 0 ? n / 2 : 3 * n + 1);

const terms = num => {
  let c = num;
  let a = [num];
  let count = 1;
  while (c > 1) {
    count++;
    c = collatz(c);
    a.push(c);
  }
  return [a, count];
};

const NUM = 1e6;
let num = 1;
let maxCount = 0;
let maxNum = "";

while (num < NUM) {
  const [a, count] = terms(num);
  if (count > maxCount) {
    maxCount = count;
    maxNum = num;
  }
  num++;
}
console.log({ maxCount, maxNum });

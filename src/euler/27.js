import { isPrime } from "./helpers.js";

const makeGenerator = (a, b) => n => n * n + a * n + b;
let longest = 0;
let maxA = 0;
let maxB = 0;

for (let a = -999; a < 1000; a++) {
  for (let b = -1000; b <= 1000; b++) {
    const g = makeGenerator(a, b);
    let counter = 0;
    while (isPrime(g(counter))) counter++;
    if (counter > longest) {
      maxA = a;
      maxB = b;
      longest = counter;
      console.log({ a, b, counter });
    }
  }
}
console.log(maxA * maxB);

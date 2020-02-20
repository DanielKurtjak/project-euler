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
    console.log({ maxCount, maxNum });
  }
  num++;
}

//  2  ##################################  2
let sum = 0;
let prev = 1;
let fib = 2;

while (fib < 4000000) {
  if (fib % 2 === 0) sum += fib;
  let temp = prev;
  prev = fib;
  fib += temp;
}

console.log(fib);

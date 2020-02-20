//  2  ##################################  2

let suma = 0;
let prev = 1;
let fib = 2;

while (fib < 4000000) {
  if (fib % 2 === 0) suma += fib;
  let temp = prev;
  prev = fib;
  fib += temp;
}

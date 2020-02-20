import R from "ramda";
const {
  __,
  add,
  append,
  curry,
  flip,
  binary,
  unary,
  compose,
  multiply,
  sum,
  filter,
  either,
  reverse,
  equals,
  modulo,
  sort,
  flatten,
  toPairs,
  reduce,
  countBy,
  map,
  split,
  identity,
  range
} = R;

const { pow, floor, sqrt, max } = Math;

const primes = [];

const isPrime = n => {
  if (n == 1) return false;
  if (n < 4) return true; //2 and 3 are prime
  if (n % 2 == 0) return false;
  if (n % 3 == 0) return false;
  if (n <= 9) return true; //we have already excluded 4,6 and 8.

  let r = floor(sqrt(n)); // n rounded to the greatest integer r so that r*r<=n
  let f = 5;
  while (f <= r) {
    if (n % f == 0) return false;
    if (n % (f + 2) == 0) return false;
    f = f + 6;
  }
  return true;
};

const square = x => pow(x, 2);

const nextPrime = (n, num) => {
  for (let i = n + 1; i < num; i++) {
    if (isPrime(i)) return i;
  }
  return false;
};

const primeFactors = num => {
  let f = [];
  let prime = 2;
  while (num > 1) {
    while (num % prime === 0) {
      f.push(prime);
      num = num / prime;
    }
    prime = nextPrime(prime, num);
  }
  return f;
};

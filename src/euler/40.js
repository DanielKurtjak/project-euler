// An irrational decimal fraction is created by concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If dn represents the nth digit of the fractional part, find the value of the
// following expression.

// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
import R from "ramda";
const { __, map, product, nth } = R;

let s = "012345678910";
let counter = 11;
while (s.length <= 1e6) {
  s += counter++;
}

console.log(product(map(nth(__, s))([1, 10, 100, 1e3, 1e4, 1e5, 1e6])));

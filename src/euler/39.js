// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c},
// there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?
const checkCanBeTriangleSides = (a, b, c) => a * a + b * b === c * c;

let maxP = 0;
let maxPCount = 0;

const LIMIT = 1e3;

// for (let p = 120; p <= 120; p++) {
for (let p = 6; p <= LIMIT; p++) {
  const result = [];
  const p2 = p >> 1;
  for (let a = 1; a < p2 - 2; a++) {
    for (let b = a + 1; b < p2 - 1; b++) {
      const c = p - a - b;
      if (c > a && c > b && checkCanBeTriangleSides(a, b, c)) {
        result.push([a, b, c]);
      }
    }
  }
  if (result.length > maxPCount) {
    maxPCount = result.length;
    maxP = p;
  }
}

console.log(maxP);

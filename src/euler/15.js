// Lattice paths
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

const MAX = 20;
const latticePaths = n => {
  let a = 1;
  for (let i = 1; i < n; i++) {
    a *= (i + n) / i;
  }
  return Math.round(a * 2);
};

console.log({ latticePaths: latticePaths(MAX) });

const MAX = 20;
const latticePaths = n => {
  let a = 1;
  for (let i = 1; i < n; i++) {
    a *= (i + n) / i;
  }
  return Math.round(a * 2);
};

console.log({ latticePaths: latticePaths(MAX) });

const LIMIT = 3e3;
const pentagonals = Array(LIMIT);
for (let n = 1; n < LIMIT; n++) {
  pentagonals[n - 1] = (n * (3 * n - 1)) / 2;
}
pentagonals[LIMIT - 1] = (LIMIT * (3 * LIMIT - 1)) / 2;

const result = [];
for (let i = 1; i < LIMIT - 1; i++) {
  for (let j = i; j < LIMIT; j++) {
    const s = pentagonals[i] + pentagonals[j];
    if (pentagonals.indexOf(s) !== -1) {
      const diff = pentagonals[j] - pentagonals[i];
      if (pentagonals.includes(diff)) {
        result.push([s, diff]);
      }
    }
  }
}

console.log(result);

//  6  ##################################  6

const sqDiff = n =>
  subtract(
    square((n * (n + 1)) / 2),
    reduce(add, 0)(map(square, range(1, n + 1)))
  );

console.log(sqDiff(100));

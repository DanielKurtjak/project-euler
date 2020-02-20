//  12  ##################################  12

const getTri = index => (index * (index + 1)) / 2;
const COUNT_OF_DIVIDERS = 500;
const calcCount = i => {
  if (i === 1) return 1;

  let triangular = getTri(i);
  let dividers = [1, triangular];

  let t2 = floor(sqrt(triangular));

  for (let divider = 2; divider <= t2; divider++) {
    if (triangular % divider === 0)
      dividers.push(triangular / divider, divider);
  }

  return dividers;
};

let i = 10000;
while (true) {
  let dividers = calcCount(i);
  if (dividers.length >= COUNT_OF_DIVIDERS) {
    break;
  }
  i++;
}

console.log(getTri(i));

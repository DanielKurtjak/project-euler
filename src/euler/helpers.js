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
  toString,
  multiply,
  sum,
  filter,
  either,
  reverse,
  repeat,
  equals,
  modulo,
  sort,
  flatten,
  toPairs,
  reduce,
  countBy,
  length,
  map,
  uniq,
  split,
  identity,
  range
} = R;

const { pow, floor, sqrt, max } = Math;

export const isPrime = n => {
  if (n <= 1) return false;
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

export const getProperDividers = number => getDividersInternal(false, number);
export const getDividers = number => getDividersInternal(true, number);
const getDividersInternal = (addNumberAsWell, number) => {
  let dividers = [1];

  if (number === 1) return dividers;

  let t2 = floor(sqrt(number));

  for (let divider = 2; divider <= t2; divider++) {
    if (number % divider === 0) {
      dividers.push(divider);
      if (number / divider !== divider) dividers.push(number / divider);
    }
  }

  return addNumberAsWell ? dividers.push(number) : dividers;
};

export const nextPrime = (n, num) => {
  for (let i = n + 1; i < num; i++) {
    if (isPrime(i)) return i;
  }
  return false;
};

export const primeFactors = num => {
  let f = [];
  let n = num;
  let prime = 2;
  while (n > 1) {
    while (n % prime === 0) {
      f.push(prime);
      n = n / prime;
    }
    prime = nextPrime(prime, num);
    if (prime === false) break;
  }
  return f.length ? f : [num];
};

export const square = x => pow(x, 2);
export const int = str => Number.parseInt(str);
export const fact = n => reduce(multiply, 1, range(1, n));

export const isPal = string => string + "" === reverse(string + "");

String.prototype.replaceAt = function(index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

export const BigNumber = value => ({
  value,
  toString: () => value + "",
  fold: () => value,
  numberOfDigits: () => value.length,
  clone: () => BigNumber(value),
  digits: () => value.split(""),
  sumDigits: () => reduce(add, 0, value.split("")),
  div: number2 => {
    let n1 = value;
    let n2 = number2.value;
    const n2Int = int(n2);
    const n1Length = n1.length;
    const n2Length = n2.length;
    let result = "";
    let lastIndex = 0;
    let rem = "";
    while (lastIndex < n1Length) {
      let n = int(rem + n1.substr(lastIndex, n2Length));
      lastIndex += n2Length;
      if (n < n2Int) {
        n = int(n + n1[lastIndex++]);
      }
      result += int(n / n2Int);
      rem = "" + (n % n2Int);
      if (
        rem == "0" &&
        "".padEnd(n1Length - lastIndex, "0") === n1.substr(lastIndex)
      ) {
        result += n1.substr(lastIndex);
        break;
      }
    }
    return BigNumber(result);
  },
  mul: number2 => {
    let n1 = reverse(value);
    let n2 = reverse(number2.value);

    let s = BigNumber("0");
    for (let i = 0, len = n1.length; i < len; i++) {
      for (let j = 0, len2 = n2.length; j < len2; j++) {
        s = s.add(
          BigNumber(int(n1[i]) * int(n2[j]) + repeat("0", i + j).join(""))
        );
      }
    }
    return s;
  },
  add: number2 => {
    let n1 = reverse(value);
    let n2 = reverse(number2.value);
    if (n1.length < n2.length) {
      n1 = n1.padEnd(n2.length, "0");
    } else {
      n2 = n2.padEnd(n1.length, "0");
    }

    let s = "";
    let c = 0;
    for (let i = 0, len = n1.length; i < len; i++) {
      let intSum = int(n1[i]) + int(n2[i]) + c;
      s = (intSum % 10) + s;
      c = int(intSum / 10);
    }
    return BigNumber(c !== 0 ? c + s : s);
  }
});

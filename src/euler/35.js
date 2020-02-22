import R from "ramda";
import { rotateString, isPrime, isPrimeMemoized } from "./helpers.js";

const { all, uniq } = R;

const allArePrime = all(isPrimeMemoized);

const isSutable = stringNum => {
  let digits = stringNum.split("");
  if (digits.includes("0")) return false;
  if (digits.includes("2")) return false;
  if (digits.includes("5")) return false;

  return digits.sort().join("") === stringNum;
};

const getRotations = string => {
  const result = [string];
  let rotating = string;
  for (let i = 1; i < string.length; i++) {
    rotating = rotateString(rotating);
    result.push(rotating);
  }
  return uniq(result);
};

const LIMIT = 1e6;

let nums = ["2", "3", "5", "7"];
let num = nums[nums.length - 1];
let counter = nums.length;

while (++num < LIMIT) {
  const stringNum = num + "";
  // working with all numbers permutations permutations
  // if (nums.includes(stringNum) || !isSutable(stringNum) || !isPrime(num))
  //   continue;
  // const perms = charPermutations(stringNum);
  // if (perms.length === 1 || allArePrime(perms)) {
  //   nums = nums.concat(perms);
  //   counter += perms.length;
  // }

  if (nums.includes(stringNum) || !isPrime(num)) continue;
  const rotations = getRotations(stringNum);
  if (rotations.length === 1 || allArePrime(rotations)) {
    nums = nums.concat(rotations);
    counter += rotations.length;
  }
}

console.log({ LIMIT, nums, counter });

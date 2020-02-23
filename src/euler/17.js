// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
import R from "ramda";
const { __, compose, sum, length, map } = R;
const s1to9 = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];
const tenTonineteen = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];
const nty = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];

const hundred = "hundred";
const thousand = "thousand";

const s1to9Num = compose(sum, map(length))(s1to9);
const tenTonineteenNum = compose(sum, map(length))(tenTonineteen);
const ntyNum = compose(sum, map(length))(nty);
const toHundredNum = 9 * s1to9Num + tenTonineteenNum + ntyNum * 10;
console.log(
  s1to9Num * 100 +
    hundred.length * 900 +
    "and".length * 891 +
    "one".length +
    thousand.length +
    10 * toHundredNum
);

// const toHundred = [
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten",
//   "eleven",
//   "twelve",
//   "thirteen",
//   "fourteen",
//   "fifteen",
//   "sixteen",
//   "seventeen",
//   "eighteen",
//   "nineteen",
//   "twenty",
//   "twenty-one",
//   "twenty-two",
//   "twenty-three",
//   "twenty-four",
//   "twenty-five",
//   "twenty-six",
//   "twenty-seven",
//   "twenty-eight",
//   "twenty-nine",
//   "thirty",
//   "thirty-one",
//   "thirty-two",
//   "thirty-three",
//   "thirty-four",
//   "thirty-five",
//   "thirty-six",
//   "thirty-seven",
//   "thirty-eight",
//   "thirty-nine",
//   "forty",
//   "forty-one",
//   "forty-two",
//   "forty-three",
//   "forty-four",
//   "forty-five",
//   "forty-six",
//   "forty-seven",
//   "forty-eight",
//   "forty-nine",
//   "fifty",
//   "fifty-one",
//   "fifty-two",
//   "fifty-three",
//   "fifty-four",
//   "fifty-five",
//   "fifty-six",
//   "fifty-seven",
//   "fifty-eight",
//   "fifty-nine",
//   "sixty",
//   "sixty-one",
//   "sixty-two",
//   "sixty-three",
//   "sixty-four",
//   "sixty-five",
//   "sixty-six",
//   "sixty-seven",
//   "sixty-eight",
//   "sixty-nine",
//   "seventy",
//   "seventy-one",
//   "seventy-two",
//   "seventy-three",
//   "seventy-four",
//   "seventy-five",
//   "seventy-six",
//   "seventy-seven",
//   "seventy-eight",
//   "seventy-nine",
//   "eighty",
//   "eighty-one",
//   "eighty-two",
//   "eighty-three",
//   "eighty-four",
//   "eighty-five",
//   "eighty-six",
//   "eighty-seven",
//   "eighty-eight",
//   "eighty-nine",
//   "ninety",
//   "ninety-one",
//   "ninety-two",
//   "ninety-three",
//   "ninety-four",
//   "ninety-five",
//   "ninety-six",
//   "ninety-seven",
//   "ninety-eight",
//   "ninety-nine"
// ];

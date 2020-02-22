const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const monthsWith30Days = [4, 6, 9, 11];

const isEndOfYear = (d, m) => d === 31 && m === 12;

const isLeapYear = y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

const isEndOfMonth = (d, m, y) => {
  if (d === 31) return true;
  if (d === 30 && monthsWith30Days.includes(m)) return true;
  if (d === 29 && m === 2) return true;
  if (d === 28 && m === 2 && !isLeapYear(y)) return true;
  return false;
};

let day = 1;
let month = 1;
let year = 1900;
const dayName = "Monday";
let dayNameIndex = dayNames.findIndex(name => name === dayName);
const sundayIndex = dayNames.findIndex(name => name === "Sunday");
console.log({ dayNameIndex, sundayIndex });
let sundayCounter = 0;
// while (!(day > 4 && month > 4 && year > 1904)) {
while (year < 2001) {
  dayNameIndex = (dayNameIndex + 1) % 7;
  if (isEndOfYear(day, month)) {
    day = 1;
    month = 1;
    year++;
  } else if (isEndOfMonth(day, month, year)) {
    day = 1;
    month++;
  } else {
    day++;
  }
  if (
    day === 1 &&
    year >= 1901 &&
    year <= 2000 &&
    dayNameIndex === sundayIndex
  ) {
    sundayCounter++;
  }
}

console.log(sundayCounter);

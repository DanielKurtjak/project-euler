// var integerBreak = function(n) {
//   const s = Math.round(Math.sqrt(n));
//   const a = Array(Math.floor(n / s)).fill(s);
//   const rest = n - a.reduce((a, b) => a + b, 0);
//   console.log({ n, s, a, rest });
//   if (rest === 1) a[a.length - 1] += 1;
//   else if (rest) a.push(rest);
//   return a.reduce((a, v) => a * v, 1);
// };
// console.log(integerBreak(2));
// console.log(integerBreak(10));
// console.log(integerBreak(8));
// console.log(integerBreak(9));
// console.log(integerBreak(7));

// 7
// 2 2 3  12
// 3 4    12
// 2 5    10
// 3 1 3  9

// 8
// 4 4     16
// 2 2 2 2 16
// 3 3 2   18
// 3 5     15

//9
// 3 3 3  27
// 4 3 2  24
// 4 5    20
// 3 6    18
// 2 2 5  20
// 2 3 4  24

// 10
//   3,3,4   36.
//   3,5,2   30.
//   1,2,7   14
//   1,3,6   18
//   1 4 5   20
//   1 1 8    8
//   2 2 6   24

// 1    2     5    10
// 200  100   40
//1  1
//2  100*2 2*1+49*2  101

const a = [3, 8, 9, 7, 6];
const solution = (A, K) => {
  const len = A.length;
  const r = K % len;
  if (r === 0) return A;
  const result = Array(len);
  for (let i = 0; i < len; i++) {
    result[(i + r) % len] = A[i];
  }
  return result;
};

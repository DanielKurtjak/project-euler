const solution = a => {
  if (!a.length) return 0;
  const s = a.sort((a, b) => a - b);
  let count = 1;
  for (let i = 1, len = a.length; i < len; i++) {
    if (s[i] !== s[i - 1]) count++;
  }
  return count;
};

const A = [];
A[0] = 2;
A[1] = 1;
A[2] = 20;
A[3] = 2;
A[4] = 3;
A[5] = 1;

console.log(solution(A));
console.log(solution([1, 1]));

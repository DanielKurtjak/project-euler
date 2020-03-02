const solution = a => {
  const s = a.sort((a, b) => a - b);
  const len = a.length;
  let max = s[0] < 0 && s[1] < 0 ? s[0] * s[1] * s[len - 1] : -Infinity;
  return Math.max(max, s[len - 3] * s[len - 2] * s[len - 1]);
};

console.log(solution([-5, -5, -10, -20, -2]));
console.log(solution([-5, -5, -10, -20, 2]));
console.log(solution([-5, -5, 10, 20, 2]));
console.log(solution([5, 5, 10, 20, 2]));

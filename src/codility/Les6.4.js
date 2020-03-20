// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
// For example, consider array A such that:

//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// Triplet (0, 2, 4) is triangular.

// Write a function:

// function solution(A);

// that, given an array A consisting of N integers, returns 1 if there exists a
// 	triangular triplet for this array and returns 0 otherwise.

// For example, given array A such that:

//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// the function should return 1, as explained above. Given array A such that:

//   A[0] = 10    A[1] = 50    A[2] = 5
//   A[3] = 1
// the function should return 0.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

const solution = A => {
  A.sort((a, b) => a - b);
  const len = A.length;

  for (let i = 0; i < len - 2; i++) {
    const a = A[i];
    const b = A[i + 1];
    if (b > 2 * a) continue;
    const c = A[i + 2];
    if (a + b > c && b + c > a && c + a > b) return 1;
  }

  return 0;
};

const A = [];
A[0] = 10;
A[1] = 2;
A[2] = 5;
A[3] = 1;
A[4] = 8;
A[5] = 20;

console.log("should be 1:", solution(A));

const B = [];
B[0] = 10;
B[1] = 50;
B[2] = 5;
B[3] = 1;
console.log("should be 0:", solution(B));

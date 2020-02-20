//  4  ##################################  4

let max = 0;
const isPal = num => num + "" === reverse(num + "");
for (let num1 = 999; num1 >= 100; num1--) {
  for (let num2 = 999; num2 >= 100; num2--) {
    const p = num1 * num2;
    if (p > max && isPal(p)) {
      console.log(num1, num2);
      max = p;
    }
  }
}

console.log(max);

// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

const checkCancelingFactors = (n1, n2, c1, c2, r1, r2) => {
  if (n1 == n2 || c1 !== c2 || c1 === "0") return [1, 1];
  if (n1 > n2) {
    if ((n1 / n2).toFixed(5) != (r1 / r2).toFixed(5)) return [1, 1];
    return [r1, r2];
  }
  if ((n2 / n1).toFixed(5) != (r2 / r1).toFixed(5)) return [1, 1];
  return [r1, r2];
};

let mulD = 1;
let mulN = 1;
let nom, dnom;
for (let i = 11; i < 100; i++) {
  for (let j = i + 1; j < 100; j++) {
    const dI = (i + "").split("");
    const dJ = (j + "").split("");
    [nom, dnom] = checkCancelingFactors(i, j, dI[0], dJ[1], dI[1], dJ[0]);
    mulD *= dnom;
    mulN *= nom;
    [nom, dnom] = checkCancelingFactors(i, j, dI[1], dJ[0], dI[0], dJ[1]);
    mulD *= dnom;
    mulN *= nom;
    [nom, dnom] = checkCancelingFactors(i, j, dI[0], dJ[1], dI[0], dJ[1]);
    mulD *= dnom;
    mulN *= nom;
    [nom, dnom] = checkCancelingFactors(i, j, dI[0], dJ[1], dI[0], dJ[1]);
    mulD *= dnom;
    mulN *= nom;
  }
}
console.log(Number(mulD % mulN === 0 ? mulD / mulN : mulD));

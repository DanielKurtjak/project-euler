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

//  10  ##################################  10

const N = 2e6;
let prime = 1;
let suma = 0;
do {
  prime = nextPrime(prime, N);
  if (prime !== false) suma += prime;
  else break;
} while (true);

console.log(suma);

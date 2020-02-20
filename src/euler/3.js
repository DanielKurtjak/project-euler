//  3   ##################################  3

let NUM = 600851475143;

let max = 0;
let prime = 2;
while (NUM > 1) {
  while (NUM % prime === 0) {
    max = prime;
    NUM = NUM / prime;
  }
  prime = nextPrime(prime);
}

console.log(max);

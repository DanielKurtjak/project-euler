import { primeFactors } from "./helpers.js";

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?
//  3   ##################################  3
const { max } = Math;
let NUM = 600851475143;
console.log(max(...primeFactors(NUM)));

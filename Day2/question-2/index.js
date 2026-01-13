import { checkPrime } from "./math.js";

const numbers = [1, 2, 3, 4, 5, 10, 11, 17, 20];

numbers.forEach((num) => {
  console.log(`Is ${num} a prime number? ->`, checkPrime(num));
});

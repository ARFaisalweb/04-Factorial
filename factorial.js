// doing factorial math with for loop.

function factorial(n) {
  let fact = 1; // initial value of factorial.
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
    // value store in factorial after multification.
  }
  return fact;
}
const result = factorial(5);
console.log(result);

// doing factorial math with while loop.

function factorial1(n) {
  let fact = 1;
  let i = 1;
  while (i <= n) {
    fact = fact * i;
    i++;
  }
  return fact;
}
const result1 = factorial1(6);
console.log(result1);

// doing factorial in recursive function way

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const result2 = factorial(5);
console.log(result2);

const factorialOfN = (n, i = 1, factorial = 1) =>
  i < n ? factorialOfN(n, (i += 1), (factorial *= i)) : factorial;

console.log(factorialOfN(4));

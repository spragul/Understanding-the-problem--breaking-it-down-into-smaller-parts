//Write a function that takes a number as input and returns the factorial of that number.

//multiplying the integer numbers from 1 to n. The formula for n factorial is n! = n × (n - 1)!.

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

function factorial(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));
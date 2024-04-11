//Explain the Fibonacci series and write a function to generate the first n numbers in the
//Fibonacci sequence.
//understanding
//series --  0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//solution
/*
 F2 = 0 + 1 = 1
 F3 = 1 + 1 = 2
F4 = 2 + 1 = 3
F5 = 2 + 3 = 5
F6 = 3 + 5 = 8
F7 = 5 + 8 = 13
 Fn = Fn-1 + Fn-2. 
 */
function fibonacciNumber(value) {
  let previous = 0;
  let current = 1;
  let result = [];
  result.push(previous);
  result.push(current);
  for (let i = 2; i < value; i++) {
    let sum = previous + current;
    previous = current;
    current = sum;
    result.push(current);
  }
  return result.join(" ");
}
console.log(fibonacciNumber(5));

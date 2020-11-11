// Fibonacci Sequence: Write a function fib that return the value of n-th order of fibonacci sequence.

let sequence = []
sequence[0] = 1
sequence[1] = 1

for (let index = 2; index <= 20; index++) {
  sequence[index] = sequence[index - 1] + sequence[index - 2]
}

function fib(index) {
  return sequence[index - 1]
}

console.log(fib(1)) //1
console.log(fib(3)) //2
console.log(fib(12)) //144

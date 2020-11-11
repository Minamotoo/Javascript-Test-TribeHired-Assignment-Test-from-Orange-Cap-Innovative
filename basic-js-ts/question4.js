//FizzBuzz...But: You may heard FizzBuzz task.
//Here we have the same rule.
//You will write a function fizzBuzz that receive a single parameter it will return the value base on these rule.

function fizzBuzz(number) {
  //solution 1-----------------------------------------
  let answer = ''
  switch (true) {
    case number % 5 === 0 && number % 3 === 0:
      answer = 'FizzBuzz'
      break
    case number % 5 === 0 && number % 3 !== 0:
      answer = 'Buzz'
      break
    case number % 5 !== 0 && number % 3 === 0:
      answer = 'Fizz'
      break
    default:
      answer = 'No answer'
      break
  }
  return answer

  //solution 2-----------------------------------------
  //   let answer = ''
  //   while (true) {
  //     number % 5 === 0 && number % 3 === 0
  //       ? (answer = 'FizzBuzz')
  //       : number % 5 === 0
  //       ? (answer = 'Buzz')
  //       : number % 3 === 0
  //       ? (answer = 'Fizz')
  //       : (answer = 'No answer')
  //     break
  //   }
  //   return answer

  // solution 3-----------------------------------------
  //let answer = ''
  //   switch (number % 5 === 0 && number % 3 === 0) {
  //     case true:
  //       answer = 'FizzBuzz'
  //       break
  //     case false:
  //       switch (number % 5 === 0) {
  //         case true:
  //           answer = 'Buzz'
  //           break

  //         case false:
  //           switch (number % 3 === 0) {
  //             case true:
  //               answer = 'Fizz'
  //               break

  //             default:
  //               answer = 'No answer'
  //               break
  //           }

  //         default:
  //           break
  //       }

  //     default:
  //       break
  //   }
  //return answer
}

console.log(fizzBuzz(21)) // 21 % 3 = 0 so Fizz
console.log(fizzBuzz(25)) // 25 % 5 = 0 so Buzz
console.log(fizzBuzz(45)) // 45 % 3 = 0 and 45 % 5 = 0 so FizzBuzz
console.log(fizzBuzz(15)) // 15 % 3 = 0 and 15 % 5 = 0 so FizzBuzz
console.log(fizzBuzz(33)) // 33 % 3 = 0 so Fizz

//Second max: Write a function secondMax that receive an array of number.
//The function will return the second maximum value of the array.
//If there is no second max, return max instead.
//If an array is empty, throw and error.

function secondMax(array) {
  try {
    if (array.length === 0) {
      throw Error
      //or just remove try-catch statement and simply return 'Error!'
    } else {
      let max = array[0]
      let secondMaxArray = []
      let secondMax = 0

      for (let index = 0; index < array.length; index++) {
        if (array[index] > max) {
          max = array[index]
        }
      }
      secondMaxArray = array.filter((value) => value < max)
      secondMax = Math.max(...secondMaxArray)
      if (secondMaxArray.length === 0) {
        secondMax = max
      }
      return secondMax
    }
  } catch (error) {
    return error
  }
}

//my test
console.log(secondMax([2, 3, 4, 5])) // 4
console.log(secondMax([2, 9, 19, 21])) // 19
console.log(secondMax([4, 4, 4, 4, 4, 4, 3, 4])) // 3
console.log(secondMax([4123, 55, 66])) // 66
console.log(secondMax([])) // Error!

//question test
console.log(secondMax([2, 3, 4, 5])) // 4
console.log(secondMax([9, 2, 21, 21])) // 9
console.log(secondMax([4, 4, 4, 4])) // 4
console.log(secondMax([4123])) // 4123
console.log(secondMax([])) // Error!

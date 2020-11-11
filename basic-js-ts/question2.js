//Array shift: Write a function shift that shifts the elements of array to left or right by n elements in an infinite loop.

function shift(array, position, times) {
  let selectedElement
  for (let index = 0; index < times; index++) {
    if (position === 'right') {
      selectedElement = array[array.length - 1]
      array.splice(-1, 1)
      array.unshift(selectedElement)
    } else {
      selectedElement = array[0]
      array.shift()
      array.push(selectedElement)
    }
  }
  console.log(array)
}
shift(['John', 'Jane', 'Sarah', 'Alex'], 'left', 2) // ['Sarah', 'Alex', 'John', 'Jane']
shift([1, 2, 3, 4, 5], 'right', 3) // [3, 4, 5, 1, 2]

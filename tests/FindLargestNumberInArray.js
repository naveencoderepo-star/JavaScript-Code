function findLargestNumber(arr) {
  let largest = arr[0]

  for (let num of arr) {
    if (num > largest) {
      largest = num
    }
  }

  return largest
}

// Example
const numbers = [10, 45, 3, 99, 23]
console.log(findLargestNumber(numbers))

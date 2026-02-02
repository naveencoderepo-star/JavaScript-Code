class SortArrayInAscendingOrder {
  sortInAscendingOrder(arr) {
    const lengthOfArray = arr.length

    for (let i = 0; i < lengthOfArray ; i++) {
      for (let j = i + 1; j < lengthOfArray; j++) {
        if (arr[i] > arr[j]) {
          // Destructuring allows extracting values from arrays or objects into variables,
          // and it’s commonly used to swap values without a temporary variable
          ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
      }
    }

    return arr
  }
}

const objectOfClass = new SortArrayInAscendingOrder()
const result = objectOfClass.sortInAscendingOrder([90, 4343, 6454, 4, 0])

console.log('Ascending order of array:', result)

class SortArrayInAscendingOrder {
  sortInAscendingOrder(arr) {
    const lengthOfArray = arr.length

    for (let i = 0; i < lengthOfArray ; i++) {
      for (let j = i + 1; j < lengthOfArray; j++) {
        if (arr[i] > arr[j]) {

          // Destructuring or Using Temp variable we can swap the numbers,

          
          // Destructuring allows extracting values from arrays or objects into variables,
          // and it’s commonly used to swap values without a temporary variable
          // ;[arr[i], arr[j]] = [arr[j], arr[i]]

          // also we can do the swap by using the temp variable also,

          let temp = arr[i]
          arr[i]  = arr[j]
          arr[j]  = temp;
        }
      }
    }

    return arr
  }
}

const objectOfClass = new SortArrayInAscendingOrder()
const result = objectOfClass.sortInAscendingOrder([90, 4343, 6454, 4, 0])

console.log('Ascending order of array:', result)

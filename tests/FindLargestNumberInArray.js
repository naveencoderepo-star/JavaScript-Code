class FindLargestNumber {
  findLargestNumber(arr) {
    let largest = arr[0]

    for (let num of arr) {
      if (num > largest) {
        largest = num
      }
    }

    return largest
  }
}

const obj = new FindLargestNumber()

const print = obj.findLargestNumber([99, 33, 66])

console.log(print)

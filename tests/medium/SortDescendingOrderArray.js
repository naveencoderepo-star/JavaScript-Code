class SortDescendingOrderArray {
    sortInDescendingOrder(arr) {
        const length = arr.length;

        for (let i = 0; i < length; i++) {
            for (let j = i + 1; j < length; j++) {  // here we are passing j = i + 1 to compare the first index value in i With second index value in j
                if (arr[i] < arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
}

const obj = new SortDescendingOrderArray();
const result = obj.sortInDescendingOrder([3, 5, 6666, 2234, 788]);

console.log(result);
// ✅ 1️⃣ Spread Operator (...)
// It converts the array [1, 3, 5, 7] into individual values → 1, 3, 5, 7
// Used to expand array elements and merge arrays easily

// ✅ 2️⃣ push() Method
// arr.push(value)
// It adds the given value to the END of the array
// Used with loops to add elements one by one into an array

// ✅ 3️⃣ concat() Method
// arr1.concat(arr2)
// It joins two arrays and returns a NEW merged array
// Original arrays are not changed

class MergeArray {

    mergeTwoArray(arr1, arr2) {
        let mergedArray = arr1.concat(arr2);
        return mergedArray;
    }

    mergeTwoArrayUsingSpreadOperator(arr1, arr2) {
        let spreadOperator = [...arr1, ...arr2];
        return spreadOperator;
    }

    mergeTwoArrayUsingPushMethod(arr1, arr2) {
        arr1.push(...arr2); // If i store in let any variable then it will return the length of the array
        return arr1;
    }

}

const obj = new MergeArray();
const result = obj.mergeTwoArray([1, 2, 3], [4, 5, 6]);
const result2 = obj.mergeTwoArrayUsingSpreadOperator([1, 2, 3], [4, 5, 6]);
const result3 = obj.mergeTwoArrayUsingPushMethod([1, 2, 3], [4, 5, 6]);

console.log("Using concat method", result);
console.log("Using spread operator", result2);
console.log("Using push method", result3);
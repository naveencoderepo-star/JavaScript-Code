/*
Class: ArrayStringUpperCase

Method Used:
- for loop → Used to iterate through each element in the array.
- toUpperCase() → Converts each string element into uppercase.

Why Used:
- We use a for loop to manually iterate over the array.
- We use toUpperCase() to transform each word into uppercase.
- We store results in a new array because strings are immutable.
*/

class ArrayStringUpperCase {

    getArrayStringUpperCase(arr) {



        // return arr.map(word => word.toUpperCase());

        let upperCaseArray = [];

        for (let i = 0; i < arr.length; i++) {
            upperCaseArray[i] = arr[i].toUpperCase();
        }

        return upperCaseArray;
    }

}

const obj = new ArrayStringUpperCase();

const result = obj.getArrayStringUpperCase([
    'Playwright',
    'automation',
    'testing'
]);

console.log(result);

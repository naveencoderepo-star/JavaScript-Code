/*
Set is a built-in JavaScript class introduced in ES6.
It stores only UNIQUE values (duplicates not allowed).

Set provides fast lookup operations (O(1)).

Common Set methods:

set.has(value)     // check value exists or not
set.add(value)     // add a value
set.delete(value)  // remove a value
set.size           // number of elements

NOTE:
Set does NOT support push().
push() is used only for Arrays.
*/


class IntersectionOfTwoArray{


    getIntersection(arr1, arr2) {
        let set = new Set(arr1);
        let result = [];

        for (let num of arr2) {
            if (set.has(num)) {
                result.push(num);
                set.delete(num);
            }
        }
        return result;
    }

}


const obje = new IntersectionOfTwoArray();
const result = obje.getIntersection([1, 2, 2, 1], [2,2]);
console.log("Intersection Result:", result);


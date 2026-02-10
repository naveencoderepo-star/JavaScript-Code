class ArrayUnion {
  getUnion(arr1, arr2) {
    // Create a Set from arr1 (duplicates removed automatically)
    const set = new Set(arr1);

    // Add each element of arr2 into the same Set
    for (const num of arr2) {
      set.add(num);
    }

    // Convert Set back to Array and return
    return Array.from(set);
  }
}

const object = new ArrayUnion();

const result = object.getUnion(
  [1, 2, 3, 5, 6, 7],
  [1, 2, 3, 4, 5, 8, 9]
);

console.log(result);

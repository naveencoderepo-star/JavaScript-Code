class MapFunction {
  /**
   * Doubles each number in the array using the .map() method.
   * @param {number[]} arr - The array of numbers to double.
   * @returns {number[]} - The new array with doubled values.
   */
  mapFunction(arr) {
    // The .map() method creates a new array populated with the results
    // of calling a provided function on every element in the calling array.
    const result = arr.map(function (number) {
      return number * 2;
    });

    return result;
  }
}

// Create an instance of the class
const mapHelper = new MapFunction();

// Input data
const inputNumbers = [2, 10, 15];

// Execute the mapping logic
const doubledOutput = mapHelper.mapFunction(inputNumbers);

// Display the result
console.log("Original numbers:", inputNumbers);
console.log("Doubled numbers:", doubledOutput);
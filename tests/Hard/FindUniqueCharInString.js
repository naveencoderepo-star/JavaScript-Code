/*
| Method       | Return Type | Purpose                  |
| ------------ | ----------- | ------------------------ |
| `includes()` | **boolean** | check if value exists    |
| `push()`     | **number**  | returns new array length |
| `join()`     | **string**  | convert array -> string  |
*/

class FindUniqueCharInString {
    /**
     * Finds and extracts unique characters from a given string.
     * @param {string} str - The input string to parse.
     * @returns {string} A string containing only the unique characters.
     */
    findUniqueCharInString(str) {
        // Array to hold characters we haven't seen yet
        let uniqueChars = [];

        // Iterate through each character of the input string
        for (let i = 0; i < str.length; i++) {
            // Check if our uniqueChars array already contains the current character
            if (!uniqueChars.includes(str[i])) {
                // If it doesn't, add it to the array
                uniqueChars.push(str[i]);
            }
        }

        // Join the array of unique characters back into a single string
        return uniqueChars.join('');
    }
}

// Example usage:
const obj = new FindUniqueCharInString();
const result = obj.findUniqueCharInString("GeeksForGeeks");
console.log(result);

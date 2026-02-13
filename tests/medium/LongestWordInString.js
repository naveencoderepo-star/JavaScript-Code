class LongestWordInString {

    getLongestWord(str) {

        // Split sentence into words
        let words = str.split(" ");

        // Variable to store longest word
        let longestWord = "";

        // Loop through each word
        for (const word of words) {

            // Compare word length
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        }

        // Return result
        return longestWord;
    }
}

// Create object
const object = new LongestWordInString();

// Call method
const result = object.getLongestWord("Hello World is very Happppy yaa");

// Print output
console.log(result);

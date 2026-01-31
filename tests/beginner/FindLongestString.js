class FindLongestWordInString {

  findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";

    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }

    return longestWord;
  }
}

// Create object of the class
const obj = new FindLongestWordInString();

// Call the method
const result = obj.findLongestWord("Playwright is test");

console.log(result);

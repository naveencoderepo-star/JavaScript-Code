// split(" ")  
// Splits the sentence using space as separator.
// Converts the full string into an array of words.


// map()  
// Loops through each word in the array.
// Returns a new array where each word is modified (first letter capitalized).


// charAt(0)  
// Gets the first character of the current word.


// toUpperCase()  
// Converts the first character to uppercase.


// slice(1)  
// Extracts the remaining part of the word starting from index 1.
// (Keeps all letters except the first one.)


// + operator  
// Combines the capitalized first letter with the remaining letters.


// join(" ")  
// Converts the modified array of words back into a single string.
// Adds space between each word.

// map()  map the array and it will change the array of string formatts to array of string formatts,

// charAt()  charAt the first letter of the word,

// toUpperCase()  toUpperCase the first letter of the word,

// slice(1)  slice the word from the second letter and it will change the word to array of string formatts,

// join()  join the array and it will change the array of string formatts to string formatts,


class CapitalizeSentence{


    capitalizeSentence(str){

return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
}

const object = new CapitalizeSentence();
const result = object.capitalizeSentence("hello world");
console.log(result);





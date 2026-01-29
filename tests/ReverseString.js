class ReverseString {

  reverseString(str) {

    // WHY 'let' and WHY outside the loop?
    // -----------------------------------
    // We need a variable that will CHANGE as we add characters.
    // 'let' allows reassignment (changing value).
    // If we declare this inside the loop, it would RESET every time.
    // So we declare it ONCE outside the loop.
    let reversed = "";

    // Loop from last character to first character
    for (let i = str.length - 1; i >= 0; i--) {

      // WHY '+=' is used?
      // -----------------
      // '+=' means: take existing value and ADD something to it
      // Example:
      // reversed = reversed + str[i]
      // We want to KEEP previous characters and append new ones
      reversed += str[i];
    }

    // Return final reversed string after loop completes
    return reversed;
  }
}

// Create object of class
let obj = new ReverseString();

// 'const' is used here because result will NOT change later
const result = obj.reverseString("Automation");

// Print output
console.log(result);

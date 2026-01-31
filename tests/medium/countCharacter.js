class CountCharacter {
  countChararcher(str, char) {
    let count = 0

      str = str.toLowerCase();
      char = char.toLowerCase();

    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++
      }
    }

    return count
  }
}

const obj = new CountCharacter()

const result = obj.countChararcher('POtato', 'o')

console.log(result)

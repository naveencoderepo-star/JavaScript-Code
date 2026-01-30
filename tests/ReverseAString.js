class ReversingString {
  toreverseString(str) {
    // reverse panna use aagura empty string
    let reverse = ''

    // i = last index (string length - 1) la irundhu start pannrom
    // i >= 0 varaikum loop run aagum
    // i-- na back side (reverse direction) move aagum
    for (let i = str.length - 1; i >= 0; i--) {
      // current character-a reverse string kooda join pannrom
      reverse = reverse + str[i]
    }

    // full reverse aana string-a return pannrom
    return reverse
  }
}

// class-ku object create pannrom
const obj = new ReversingString()

// method call pannitu string pass pannrom
const reversedString = obj.toreverseString('Iphone')

// final reversed output print pannrom
console.log(reversedString)

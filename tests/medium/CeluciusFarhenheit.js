// 22. Write a Program to convert Celsius to Fahrenheit in JavaScript?

/*
Formula = (celsius * 9/5) + 32
Formula = (fahrenheit - 32) * 5/9
*/

class CelsiusFahrenheitConversion {
  celsiusToFahrenheitConversion(celsius) {
    return (celsius * 9) / 5 + 32
  }

  fahrenheitToCelsiusConversion(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
  }
}

const classObject = new CelsiusFahrenheitConversion()

const result = classObject.celsiusToFahrenheitConversion(30)
const result2 = classObject.fahrenheitToCelsiusConversion(86)

console.log("Celcius to farhenheit : " +result)
console.log("Fahrenheit to Celsius: " + result2)

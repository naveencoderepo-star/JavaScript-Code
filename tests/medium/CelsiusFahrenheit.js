// 22. Write a Program to convert Celsius to Fahrenheit in JavaScript

/*
Formula:
Celsius to Fahrenheit = (celsius * 9 / 5) + 32
Fahrenheit to Celsius = (fahrenheit - 32) * 5 / 9
*/

class CelsiusFahrenheitConversion {
  celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
}

// Object creation
const converter = new CelsiusFahrenheitConversion();

// Method calls
const celsiusResult = converter.celsiusToFahrenheit(30);
const fahrenheitResult = converter.fahrenheitToCelsius(86);

// Output
console.log("Celsius to Fahrenheit:", celsiusResult);
console.log("Fahrenheit to Celsius:", fahrenheitResult);

// Export for testing or reuse
module.exports = CelsiusFahrenheitConversion;

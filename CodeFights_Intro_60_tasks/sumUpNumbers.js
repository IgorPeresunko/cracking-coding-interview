/*
Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

Example

For inputString = "2 apples, 12 oranges", the output should be
sumUpNumbers(inputString) = 14.
*/

const sumUpNumbers = inputString => inputString
    .match(/[0-9]*/g)
    .filter(Number)
    .map(Number)
    .reduce((a, b) => a + b, 0)

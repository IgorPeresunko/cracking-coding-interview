/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/

function palindromeRearranging(inputString) {
    // if odds <= 1
    return inputString.split('')
        .filter((symb, i, arr) => arr.indexOf(symb) === i)
        .map(symbol => inputString.match(new RegExp(symbol, 'g')).length)
        .filter(num => num % 2 !== 0)
        .length <= 1
}
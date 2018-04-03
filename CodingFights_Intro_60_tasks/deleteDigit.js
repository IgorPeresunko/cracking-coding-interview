/*
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.
*/

function deleteDigit(n) {
    const str = n.toString()
    
    return str.split('').reduce((max, d, i) => {
        const newNum = Number(str.slice(0, i) + str.slice(i+1))
        return newNum > max ? newNum : max
    }, 0)
}
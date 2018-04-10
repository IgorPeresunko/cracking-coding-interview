/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
*/

function isLucky(n) {
    const sum = arr => arr.reduce((a, b) => a + b, 0)
    
    const nums = n.toString().split('').map(Number)
    const half = n.toString().length / 2
    
    return sum(nums.splice(0, half)) === sum(nums)
}

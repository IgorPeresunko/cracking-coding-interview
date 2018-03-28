/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.
*/

function arrayChange(inputArray) {
    return inputArray.reduce(([incs, prevNum], num, i) =>
        num <= prevNum ? [incs + prevNum - num + 1, prevNum - num + 1 + num] : [incs, num]
    , [0, inputArray[0] - 1])[0]
}
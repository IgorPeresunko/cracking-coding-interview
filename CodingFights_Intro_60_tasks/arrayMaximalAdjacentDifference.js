/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.
*/

function arrayMaximalAdjacentDifference(inputArray) {
    return inputArray.reduce((max, num, i, a) =>
        a[i + 1] && Math.abs(num - a[i + 1]) > max ?
            Math.abs(num - a[i + 1]) : max, 0)
}
/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.
*/

function avoidObstacles(inputArray) {
    const max = Math.max(...inputArray)
    
    return new Array(max + 1).fill(0).reduce((ans, el, i) => {
        if (inputArray.every(el => (el % (i + 1)) !== 0) && ans > i + 1) {
            return i + 1
        }
        return ans
    }, max + 1)
}
/*
	Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

    For sequence = [1, 3, 2, 1], the output should be
    almostIncreasingSequence(sequence) = false;

    There is no one element in this array that can be removed in order to get a strictly increasing sequence.

    For sequence = [1, 3, 2], the output should be
    almostIncreasingSequence(sequence) = true.

    You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

*/

function almostIncreasingSequence(sequence) {
    let strikes = 0
    let max = Math.min(...sequence) - 1
    let secondMax = Math.min(...sequence) - 1
    
    sequence.forEach((el, i) => {
        if (el > max) {
            secondMax = max
            max = el
        } else if (el > secondMax) {
            max = el
            strikes++
        } else {
            strikes++
        }
    })
    
    return strikes < 2
}
/*
The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.

Example

For

image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]
the output should be boxBlur(image) = [[1]].
*/

function boxBlur(image) {
    const crop = m => m.slice(1, -1).map(row => row.slice(1, -1))
    const add = (a, b) => a + b
    const sum = m => m.reduce((sum, row) => add(sum, row.reduce(add, 0)), 0)
    const sumBorder = (m, i, j) => sum(m
        .filter((row, rowI) => rowI === i || rowI + 1 === i || rowI - 1 === i)
        .map(row => row.filter((num, numJ) => numJ === j || numJ + 1 === j || numJ - 1 === j)))
    
    return crop(image).map((row, i) => row.map((num, j) =>
        Math.floor(sumBorder(image, i + 1, j + 1) / 9)       
    ))
}

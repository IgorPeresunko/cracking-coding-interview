/*
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]

the output should be
differentSquares(matrix) = 6.
*/

function differentSquares(matrix) {
    const matrices = new Set()

    matrix.forEach((row, i) =>
        row.forEach((col, j) => {
            const m = matrix.slice(i, i+2).map(row => row.slice(j, j+2))
            if (m.length === 2 && m[0].length === 2) {
                matrices.add(JSON.stringify(m))
            }
    }))

    return matrices.size
}
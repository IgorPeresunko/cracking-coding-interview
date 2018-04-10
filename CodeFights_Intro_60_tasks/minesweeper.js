/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
					   [1, 1, 1]]       
*/


function minesweeper(m) {
    const countTrues = m =>
        m.reduce((sum, row) => sum + row.reduce((sum, el) => el ? sum + 1 : sum, 0), 0)
    
    return m.map((row, i) => row.map((num, j) => {
        const sum = countTrues(m.slice(i < 1 ? 0 : i - 1, i > m.length - 1 ? m.length : i + 2)
             .map(row => row.slice(j < 1 ? 0 : j - 1, j > row.length - 1 ? row.length : j + 2)))
        return num ? sum - 1 : sum
    }))
}

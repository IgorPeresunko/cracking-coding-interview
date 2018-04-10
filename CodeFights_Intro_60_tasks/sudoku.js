/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example

For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.
*/

function sudoku(grid) {
    
    function isRight(_) {
        const arr = [..._].sort()
        for (let j = 0; j < arr.length; ++j) {
            if (arr[j] >= arr[j+1])
                return false
        }
        return true
    }
    // row
    for (let i = 0; i < grid.length; ++i) {
        if (!isRight(grid[i]))
            return false
    }
    // column
    for (let i = 0; i < grid[0].length; ++i) {
        let arr = []
        for (let j = 0; j < grid.length; ++j) {
            arr.push(grid[j][i])
        }
        if (!isRight(arr))
            return false
    }
    
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            let arr = grid[3*i].slice(j*3, j*3 + 3)
            .concat(grid[3*i+1].slice(j*3, j*3 + 3))
            .concat(grid[3*i+2].slice(j*3, j*3 + 3))
            
            if (!isRight(arr))
                return false
        }
    }
    
    return true
    
}
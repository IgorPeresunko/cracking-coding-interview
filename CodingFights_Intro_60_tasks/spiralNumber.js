/*
Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]
*/

class SpiralNumber {
    constructor(n) {
        this.i = 0
        this.j = 0
        this.num = 1
        this.size = n
        this.matrix = []
        
        for (let i = 0; i < n; ++i) {
            let row = []
            for (let j = 0; j < n; ++j) {
                row.push(0)
            }
            this.matrix.push(row)
        }
    }
    
    rotate() {
        const rotated = []
        
        for (let i = 0; i < this.size; i++) {
            let row = []
            for (let j = 0; j < this.size; j++) {
                row.push(this.matrix[j][this.size - 1 - i])
            }
            rotated.push(row)
        }
        this.matrix = rotated;
        
        [this.i, this.j] = [this.size - 1 - this.j, this.i]
    }
    
    add() {
        const [i, j] = [this.i, this.j];
        
        this.matrix[i][j] = this.num
        this.num++
        
        if (j + 1 in this.matrix[0] && this.matrix[i][j+1] === 0) {
            
        } else {
            this.rotate()
        }
        this.j++
            
    }
    
}
function spiralNumbers(n) {
    
    const matrix = new SpiralNumber(n)
    
    while (matrix.num <= n * n) {
        matrix.add()
    }
    
    for (let i = 0; i < (n % 2 ? 3 : 1); ++i)
        matrix.rotate()
    
    return matrix.matrix
}
/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

Example

For cell = "a1", the output should be
chessKnight(cell) = 2.
*/

function chessKnight(cell) {
    const moves = [[2, 1], [1, 2], [-1, 2], [-1, -2], [1, -2], [2, -1], [-2, -1], [-2, 1]]
    const knight = [cell.charCodeAt(0) - 'a'.charCodeAt(0) + 1, Number(cell[1])]
    
    return moves.filter(move => {
        const newMove = [move[0] + knight[0], move[1] + knight[1]]
        if (newMove[0] > 8 || newMove[0] <= 0 || newMove[1] > 8 || newMove[1] <= 0)
            return false
        return true
    }).length
}
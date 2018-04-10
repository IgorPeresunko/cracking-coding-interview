/*
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.
The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

Example

For bishop = "a1" and pawn = "c3", the output should be
bishopAndPawn(bishop, pawn) = true.

For bishop = "h1" and pawn = "h3", the output should be
bishopAndPawn(bishop, pawn) = false.
*/

function bishopAndPawn(bishop, pawn) {    
    const posB = [bishop.charCodeAt(0) - 96, Number(bishop[1])]
    const posP = [pawn.charCodeAt(0) - 96, Number(pawn[1])]
    
    return Math.abs(posB[0] - posP[0]) === Math.abs(posB[1] - posP[1])
}

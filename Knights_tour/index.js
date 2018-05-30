let numofBoxesI, numofBoxesJ, delay, boxSize

const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

const init = () => {
	
	numofBoxesI = numofBoxesJ = document.getElementById('rows').value
	boxSize = document.getElementById('boxSize').value
	delay = document.getElementById('delay').value
	
	canvas.width = canvas.height = numofBoxesI * boxSize + 10

	for(let n = 0; n < numofBoxesI; n++) {
		for(let m = 0; m < numofBoxesJ; m++) {
			ctx.beginPath();
			ctx.rect(n*boxSize, m*boxSize, boxSize, boxSize)
			
			if((n + m) % 2 != 0){
				ctx.fillStyle = 'grey'
			}
			else{
				ctx.fillStyle = 'white'
			}
			
			ctx.fill()
			ctx.lineWidth = 1
			ctx.strokeStyle = 'black'
			ctx.stroke()
		}
	}

	startMovingDragonKnight()
}

class ChessPosition {
	constructor(i, j) {
		this.posI = i
		this.posJ = j
	}
}

class Box {
	constructor(isMarked, positionI, positionJ) {
		this.isMarked = isMarked
		this.positionI = positionI
		this.positionJ = positionJ
		this.listMoves = new Array()
		this.moves = 0
		
		if (positionI - 2 >= 0 && positionJ - 1 >= 0) {
			this.listMoves.push(new ChessPosition(positionI - 2, positionJ - 1))
			this.moves++
		}
		if (positionI - 2 >= 0 && positionJ + 1 <= numofBoxesJ - 1) {
			this.listMoves.push(new ChessPosition(positionI - 2, positionJ + 1))
			this.moves++
		}
		if (positionI + 2 <= numofBoxesI - 1 && positionJ - 1 >= 0) {
			this.listMoves.push(new ChessPosition(positionI + 2, positionJ - 1))
			this.moves++
		}
		if (positionI + 2 <= numofBoxesI - 1 && positionJ + 1 <= numofBoxesJ - 1) {
			this.listMoves.push(new ChessPosition(positionI + 2, positionJ + 1))
			this.moves++
		}
		if (positionI - 1 >= 0 && positionJ - 2 >= 0) {
			this.listMoves.push(new ChessPosition(positionI - 1, positionJ - 2))
			this.moves++
		}
		if (positionI - 1 >= 0 && positionJ + 2 <= numofBoxesJ - 1) {
			this.listMoves.push(new ChessPosition(positionI - 1, positionJ + 2))
			this.moves++
		}
		if (positionI + 1 <= numofBoxesI - 1 && positionJ - 2 >= 0) {
			this.listMoves.push(new ChessPosition(positionI + 1, positionJ - 2))
			this.moves++
		}
		if (positionI + 1 <= numofBoxesI - 1 && positionJ + 2 <= numofBoxesJ - 1) {
			this.listMoves.push(new ChessPosition(positionI + 1, positionJ + 2))
			this.moves++
		}
	}
}

let arr, cnt
function startMovingDragonKnight() {	
	cnt = 0
	arr = new Array(numofBoxesI)
	for (let i = 0; i < numofBoxesI; i++) {
		arr[i] = new Array(numofBoxesJ)
	}
	
	for (let i = 0; i < numofBoxesI; i++) {
		for (let j = 0; j < numofBoxesJ; j++) {
			arr[i][j] = new Box(false, i, j)
		}
	}

	let currentPos = new ChessPosition(Math.round(numofBoxesI/2-0.1),Math.round(numofBoxesJ/2-0.1))
	
	for (let i = 0; i < numofBoxesI; i++) {
		for (let j = 0; j < numofBoxesJ; j++) {
			if (arr[i][j].isMarked === false) {
				for (let move = 0; move < arr[i][j].listMoves.length; move++) {
					if (arr[i][j].listMoves[move].posI == currentPos.posI && arr[i][j].listMoves[move].posJ == currentPos.posJ) {
						arr[i][j].moves--
					}
				}
			}
		}
	}
	
	arr[currentPos.posI][currentPos.posJ].isMarked = true
	chooseYourMove(currentPos)
}

function chooseYourMove(pos) {
	cnt++
	let tempMoves = 9
	let nextPos, tmp, indx = -2
	
	for (let i = 0; i<arr[pos.posI][pos.posJ].listMoves.length; i++) {
		tmp = arr[pos.posI][pos.posJ].listMoves[i]
		
		if (arr[tmp.posI][tmp.posJ].moves < tempMoves && arr[tmp.posI][tmp.posJ].isMarked == false) {
			nextPos = new ChessPosition(tmp.posI, tmp.posJ)
			tempMoves = arr[tmp.posI][tmp.posJ].moves
			
		}
	}

	if (nextPos === undefined) {

		for (let i = 0; i<arr[pos.posI][pos.posJ].listMoves.length; i++) {
			tmp = arr[pos.posI][pos.posJ].listMoves[i]
			if (arr[tmp.posI][tmp.posJ].isMarked == false) {
				nextPos = new ChessPosition(tmp.posI, tmp.posJ)
				tempMoves = arr[tmp.posI][tmp.posJ].moves
				break
			}
		}
	}

	for (let i = 0; i < numofBoxesI; i++) {
		for (let j = 0; j < numofBoxesJ; j++) {
			if (arr[i][j].isMarked == false) {
				
				for (let k = 0; k < arr[i][j].listMoves.length; k++) {
					if (arr[i][j].listMoves[k].posI == nextPos.posI && arr[i][j].listMoves[k].posJ == nextPos.posJ) {
						arr[i][j].listMoves.splice(k, 1)
						arr[i][j].moves--
					}
				}
			}
		}
	}
	
	arr[nextPos.posI][nextPos.posJ].isMarked = true

	drawLine(pos, nextPos)
	
	if (cnt == numofBoxesI*numofBoxesJ-1) {
		return
	}

	setTimeout(() => chooseYourMove(nextPos), delay)
}

function drawLine(current, next) {
	ctx.moveTo(boxSize/2 + current.posI*boxSize,boxSize/2 + current.posJ*boxSize)
	ctx.lineTo(boxSize/2 + next.posI*boxSize,boxSize/2 + next.posJ*boxSize)
	ctx.lineWidth = 1
	ctx.stroke()

	ctx.font = 'italic 10pt Calibri'
	ctx.fillStyle = 'black'
	ctx.fillText(cnt.toString(), current.posI*boxSize, current.posJ*boxSize+boxSize/2)
	ctx.fillText((cnt+1).toString(), next.posI*boxSize, next.posJ*boxSize+boxSize/2)
}

document.getElementById('startMoving').onclick = init
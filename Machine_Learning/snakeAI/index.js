'use strict'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const w = canvas.width = 500
const h = canvas.height = 500
const cell = 25
const speed = 1
const snake = {
	length: 5,
	direction: 1,
	body: [randomCoord()]
}
const candy = randomCoord()

function init() {

	window.addEventListener('keydown', handleKeyPress)	

	update()
	setInterval(update, 1000 / speed)
}

function moveSnake() {

}

function draw() {
	ctx.fillStyle = '#000'
	ctx.fillRect(0, 0, w, h)

	ctx.fillStyle = 'red'
	ctx.fillRect(candy.x, candy.y, cell, cell)

	ctx.fillStyle = 'white'
	snake.body.forEach(({ x, y }) => ctx.fillRect(x, y, cell, cell))
}

function update() {

	moveSnake()
	draw()

}

function handleKeyPress(e) {
	snake.direction = { 37: -1, 38: -2, 39: 1, 40: 2 }[e.keyCode] || snake.direction
}

function randomCoord() {
	return {
		x: Math.floor(Math.random() * w / cell) * cell,
		y: Math.floor(Math.random() * w / cell) * cell
	}
}

init()
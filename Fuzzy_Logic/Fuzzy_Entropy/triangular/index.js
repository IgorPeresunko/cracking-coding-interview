'use strict'

const triangular = (x, a, b, c) => {
	if (x <= a || x >= c)
		return 0
	if (x >= a && x <= b)
		return (x - a) / (b - a)
	return (c - x) / (c - b)
}
	

const tabulate = (len, a1, a2, a3) => {
	const min = a1 + .1
	const max = a3 
	const step = (max - min) / len

	const values = new Array(len).fill(0).map((_, i) => ({
		x: min + step * i,
		y: triangular(min + step * i, a1, a2, a3)
	}))

	return values
}

const calc = () => { 
	const a1 = +document.getElementById("a_1").value
	const a2 = +document.getElementById("a_2").value
	const a3 = +document.getElementById("a_3").value
	const len = +document.getElementById("length").value

	if (a1 > a2 || a2 > a3)
		return alert('dont')

	const A = tabulate(len, a1, a2, a3)
	const xCoords = A.map(coord => coord.x)

	const minX = Math.min(...xCoords)
	const maxX = Math.max(...xCoords)

	const H = []
	const Pi = []
	let h = 0
	const step = (maxX - minX) / len
	const ySums = A.reduce((s, coord) => s + coord.y, 0)

	A.forEach(coords => {
		const pY = coords.y / ySums
		const hY = coords.y / ySums * Math.log(pY)
		Pi.push({ x: coords.x, y: pY })
		H.push({ x: coords.x, y: hY })
		
		h += hY
	})

	// console.log(h, A, H, Pi, ySums)
	console.log(h)

	document.getElementById('h').value = (h / Math.log(len).toFixed(3))

	draw([A, H, Pi]) 
}

const draw = series => {
	new Chartist.Line('.ct-chart-1', {
		series,
		labels: ['A', 'B']
	}, {
		axisX: {
		  type: Chartist.AutoScaleAxis,
		  onlyInteger: true
		},
		axisY: {
			type: Chartist.FixedScaleAxis,
			ticks: [0, 1],
			low: 0
		},
		lineSmooth: Chartist.Interpolation.none(),
		showPoint: false,
		fullWidth: true,
		plugins: [
			Chartist.plugins.legend({
				legendNames: ['A', 'B']
			})
		]
	})
}

document.querySelectorAll('input').forEach(item =>
	item.addEventListener('change', calc))

calc()
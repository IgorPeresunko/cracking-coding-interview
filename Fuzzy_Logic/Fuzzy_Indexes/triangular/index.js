'use strict'

const round = x =>
	Math.round(x * 100) / 100

const triangular = (x, a, b, c) => {
	if (x <= a || x >= c)
		return 0
	if (x >= a && x <= b)
		return (x - a) / (b - a)
	return (c - x) / (c - b)
}
	

const tabulate = (len, a1, a2, a3) => {
	const min = a1 - 5
	const max = a3 + 5
	const step = (max - min) / len

	const values = new Array(len).fill(0).map((_, i) => ({
		x: min + step * i,
		y: triangular(min + step * i, a1, a2, a3)
	}))

	return values
}

const preciseNumberFromTriangular = (a1, a2, a3) => {
	const x1 = (a1 + a2) / 2 + 0.03
	const x2 = (a2 + a3) / 2 + 0.03
	const x0 = x1
	const x3 = x2
	
	return [
		{ x: x0, y: 0 },
		{ x: x1, y: 1 },
		{ x: x2, y: 1 },
		{ x: x3, y: 0 }
	]
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

	const B = preciseNumberFromTriangular(a1, a2, a3)

	let roH = 0
	let epsE = 0
	const step = (maxX - minX) / len

	new Array(len).fill(0).forEach((_, i) => {
		const x = minX + step * i
		const y = Math.abs(triangular(x, a1, a2, a3) - ((x >= B[1].x && x <= B[2].x) ? 1 : 0))
		
		roH += y
		epsE += y * y
	})
    			
	roH = roH * 2 / len
	epsE = Math.sqrt(epsE) * 2 / Math.sqrt(len)
    			
	document.getElementById('roH').value = round(roH)
	document.getElementById('epsE').value = round(epsE)

	draw([A, B]) 
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
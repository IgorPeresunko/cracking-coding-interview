'use strict'

const round = x =>
	Math.round(x * 100) / 100

const laplacian = (x, b, d) =>
	Math.exp(-Math.abs(x - b) / d)

const tabulate = (len, b, d) => {
	const min = b - 5 * d
	const max = b + 5 * d
	const step = (max - min) / len

	const values = new Array(len).fill(0).map((_, i) => ({
		x: min + step * i,
		y: laplacian(min + step * i, b, d)
	}))

	return values
}

const preciseNumberFromLaplacian = (b, d) => {
	const x1 = b + Math.log(0.5) * d
	const x2 = b - Math.log(0.5) * d
	const x0 = x1 - 1e-5
	const x3 = x2 + 1e-5
	
	return [
		{ x: x0, y: 0 },
		{ x: x1, y: 1 },
		{ x: x2, y: 1 },
		{ x: x3, y: 0 }
	]
}

const calc = () => { 
	const Ab = +document.getElementById("a_b").value
	const Ad = +document.getElementById("a_d").value
	const len = +document.getElementById("length").value

	if (Ad <= 0)
		return alert('dont')

	const A = tabulate(len, Ab, Ad)
	const xCoords = A.map(coord => coord.x)

	const minX = Math.min(...xCoords)
	const maxX = Math.max(...xCoords)

	const B = preciseNumberFromLaplacian(Ab, Ad)

	let roH = 0
	let epsE = 0
	const step = (maxX - minX) / len

	new Array(len).fill(0).forEach((_, i) => {
		const x = minX + step * i
		const y = Math.abs(laplacian(x, Ab, Ad) - ((x >= B[1].x && x <= B[2].x) ? 1 : 0))
		
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
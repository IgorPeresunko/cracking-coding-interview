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
	const b1 = +document.getElementById("b_1").value
	const b2 = +document.getElementById("b_2").value
	const b3 = +document.getElementById("b_3").value
	const len = +document.getElementById("length").value

	if (a1 > a2 || a2 > a3 || b1 > b2 || b2 > b3)
		return alert('dont')

	const A = tabulate(len, a1, a2, a3)
	const B = tabulate(len, b1, b2, b3)
	const xCoords = {
		a: A.map(coord => coord.x),
		b: B.map(coord => coord.x),
	}

	const minX = Math.min(Math.min(...xCoords.a), Math.min(...xCoords.b))
	const maxX = Math.max(Math.max(...xCoords.a), Math.max(...xCoords.b))

	const H = []
	const E = []
	let roH = 0
	let epsE = 0
	const step = (maxX - minX) / len

	new Array(len).fill(0).forEach((_, i) => {
		const x = minX + step * i
		const y = Math.abs(triangular(x, a1, a2, a3) - triangular(x, b1, b2, b3))
		
		H.push({ x, y })
		roH += y

		E.push({ x, y: y * y })
		epsE += y * y
	})

	epsE = Math.sqrt(epsE);
	document.getElementById('roH').value = (roH).toFixed(3)
	document.getElementById('epsE').value = (epsE).toFixed(3)

	draw([A, B, H, E]) 
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
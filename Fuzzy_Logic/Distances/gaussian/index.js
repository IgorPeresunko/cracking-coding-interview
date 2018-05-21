'use strict'

const round = x =>
	Math.round(x * 100) / 100

const simGaussian = (x, b, c) => {
	return Math.exp(-Math.pow(x - b, 2) / (2 * c * c))
}
	

const tabulate = (len, b, c) => {
	const min = b - 5 * c
	const max = b + 5 * c
	const step = (max - min) / len

	const values = new Array(len).fill(0).map((_, i) => ({
		x: min + step * i,
		y: simGaussian(min + step * i, b, c)
	}))

	return values
}

const calc = () => { 
	const b1 = +document.getElementById("b1").value
	const c1 = +document.getElementById("c1").value
	const b2 = +document.getElementById("b2").value
	const c2 = +document.getElementById("c2").value
	const len = +document.getElementById("length").value

	const A = tabulate(len, b1, c1)
	const B = tabulate(len, b2, c2)
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
		const y = Math.abs(simGaussian(x, b1, c1) - simGaussian(x, b2, c2))
		
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
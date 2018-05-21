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

const calc = () => { 
	const Ab = +document.getElementById("a_b").value
	const Ad = +document.getElementById("a_d").value
	const Bb = +document.getElementById("b_b").value
	const Bd = +document.getElementById("b_d").value
	const len = +document.getElementById("length").value

	if (Ad <= 0 && Bd <= 0)
		return alert('dont')

	const A = tabulate(len, Ab, Ad)
	const B = tabulate(len, Bb, Bd)
	const xCoords = {
		a: A.map(coord => coord.x),
		b: B.map(coord => coord.x)
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
		const y = Math.abs(laplacian(x, Ab, Ad) - laplacian(x, Bb, Bd))
		
		H.push({ x, y })
		roH += y

		E.push({ x, y: y * y })
		epsE += y * y
	})

	epsE = Math.sqrt(epsE);
	document.getElementById('roH').value = round(roH)
	document.getElementById('epsE').value = round(epsE)

	draw([A, B, H, E]) 
}

const draw = series => {
	new Chartist.Line('.ct-chart-1', {
		series,
		labels: ['A', 'B', 'Hemingow', 'Euclidean']
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
				legendNames: ['A', 'B', 'Hemingow', 'Euclidean']
			})
		]
	})
}

document.querySelectorAll('input').forEach(item =>
	item.addEventListener('change', calc))

calc()
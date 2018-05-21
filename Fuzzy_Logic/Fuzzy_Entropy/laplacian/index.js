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
	const len = +document.getElementById("length").value

	if (Ad <= 0)
		return alert('dont')

	const A = tabulate(len, Ab, Ad)
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

	document.getElementById('h').value = round(h / Math.log(len))

	draw([A, H, Pi]) 
}

const draw = series => {
	new Chartist.Line('.ct-chart-1', {
		series,
		labels: ['A', 'Entropy', 'Fuzzy']
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
				legendNames: ['A', 'Entropy', 'Fuzzy']
			})
		]
	})
}

document.querySelectorAll('input').forEach(item =>
	item.addEventListener('change', calc))

calc()
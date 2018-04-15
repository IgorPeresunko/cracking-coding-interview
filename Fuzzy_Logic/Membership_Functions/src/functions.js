const triangular = (x, a, b, c) => {
	if (x <= a || x >= c)
		return 0
	if (x >= a && x <= b)
		return (x - a) / (b - a)
	return (c - x) / (c - b)
}

const trapezius = (x, a, b, c, d) => {
	if (x <= a || x >= d)
		return 0
	if (x >= a && x <= b)
		return (x - a) / (b - a)
	if (x >= b && c >= x)
		return 1
	return (d - x) / (d - c)
}

const simGaussian = (x, b, c) => {
	return Math.exp(-Math.pow(x - b, 2) / (2 * c * c))
}

const twoSidesGaussian = (x, c1, c2, a1, a2) => {
	if (c1 < c2) {
		if (x < c1)
			return Math.exp(-Math.pow(x - c1, 2) / 2 * a1 * a1)
		if (x >= c1 && x <= c2)
			return 1
		return Math.exp(-Math.pow(x - c2, 2) / (2 * a2 * a2))
	}

	if (x < c2)
		return Math.exp(-Math.pow(x - c1, 2) / (2 * a1 * a1))
	if (x >= c2 && x <= c1)
		return Math.exp(-Math.pow(x - c1, 2) / (2 * a1 * a1)) * Math.exp(-Math.pow(x - c2, 2) / (2 * a2 * a2))
	
	return Math.exp(-Math.pow(x - c2, 2) / (2 * a2 * a2))
}

const gbellmf = (x, a, b, c) => {
	return 1 / (1 + Math.pow(Math.abs((x - c) / a), 2 * b))
}

const sigmoid = (x, a, c) => {
	return 1 / ( 1 + Math.exp(-a * (x - c)) )
}

const sigmoidMultiplication = (x, a1, c1, a2, c2) => {
	return sigmoid(x, a1, c1) * sigmoid(x, a2, c2)
}

const sigmoidSubstraction = (x, a1, c1, a2, c2) => {
	return sigmoid(x, a1, c1) - sigmoid(x, a2, c2)
}

const laplacian = (x, b, d) => {
	return Math.exp(-Math.abs(x - b) / d)
}

const quadratic = (x, a, b) => {
	if (1 > Math.pow((x - a) / b, 2))
		return 1 - Math.pow((x - a) / b, 2)
	
	return 0
}

export default [
	{
		name: 'Triangular Membership Function',
		inputs: [{ name: 'x1', value: -20 },{ name: 'x2', value: 0 },{ name: 'x3', value: 10 }],
		func: triangular,
	}, {
		name: 'Trapezoidal Membership Function',
		inputs: [{ name: 'a', value: -20 },{ name: 'b', value: 0 },{ name: 'c', value: 10 },{ name: 'd', value: 12 }],
		func: trapezius,
	}, {
		name: 'Simple Gaussian Membership Function',
		inputs: [{ name: 'b', value: 0 },{ name: 'c', value: 7 }],
		func: simGaussian,
	}, {
		name: 'Two-Sided Gaussian Membership Function',
		inputs: [{ name: 'c1', value: .2 },{ name: 'c2', value: 2 },{ name: 'a1', value: 1 },{ name: 'a2', value: 2 }],
		func: twoSidesGaussian
	}, {
		name: 'Generalized Bell Membership Function',
		inputs: [{ name: 'a', value: 4 },{ name: 'b', value: 6 },{ name: 'c', value: 2 }],
		func: gbellmf
	}, {
		name: 'Sigmoidal Membership Function',
		inputs: [{ name: 'a', value: 2 }, { name: 'c', value: 0 }],
		func: sigmoid
	}, {
		name: 'Product of two Sigmoidal Functions',
		inputs: [{ name: 'a1', value: -1 }, { name: 'c1', value: 7 }, { name: 'a2', value: 2 }, { name: 'c2', value: 0 }],
		func: sigmoidMultiplication
	}, {
		name: 'Difference between two Sigmoidal Functions',
		inputs: [{ name: 'a1', value: -3 }, { name: 'c1', value: 7 }, { name: 'a2', value: -1 }, { name: 'c2', value: -3 }],
		func: sigmoidSubstraction
	}, {
		name: 'Laplacian Membership Function',
		inputs: [{ name: 'b', value: 0 }, { name: 'd', value: 9 }],
		func: laplacian
	}, {
		name: 'Quadratic Membership Function',
		inputs: [{ name: 'a', value: 0 }, { name: 'b', value: 9 }],
		func: quadratic
	}, 
]
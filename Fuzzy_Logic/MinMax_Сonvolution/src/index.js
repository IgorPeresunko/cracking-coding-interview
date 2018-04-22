import React from 'react'
import ReactDOM from 'react-dom'
import MinMax from './MinMax'
// import Function from './Function'
// import functions from './functions'
import './index.css'

const functions = [
	{
		name: 'Laplacian',
		inputs0: [{ name: 'b', value: 10 }, { name: 'd', value: 1 }],
		inputs1: [{ name: 'b', value: 2 }, { name: 'd', value: 5 }],
		tabulate: (steps, b, d) => {
			const min = b - 5 * d
			const max = b + 5 * d
			const step = (max - min) / steps
			
			return new Array(steps).fill(0).map((n, i) => ({
				x: min + step * i,
				y: Math.exp(-Math.abs((min + step * i) - b) / d)
			}))
		}
	},
	// {
	// 	name: 'Sigmoidal',
	// 	inputs0: [{ name: 'a', value: 2 }, { name: 'c', value: 0 }],
	// 	inputs1: [{ name: 'a', value: 5 }, { name: 'c', value: 2 }],
	// 	tabulate: (steps, a, c) => {
	// 		const min = a - 5 * c
	// 		const max = a + 5 * c
	// 		const step = (max - min) / steps
			
	// 		return new Array(steps).fill(0).map((n, i) => ({
	// 			x: min + step * i,
	// 			y: 1 / ( 1 + Math.exp(-a * (min + step * i - c)) )
	// 		}))
	// 	}
	// }
]

const App = () =>
	functions.map(func => <MinMax {...func} key={func.name} />)


ReactDOM.render(<App />, document.getElementById('root'))
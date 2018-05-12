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
	{
		name: 'Sigmoidal',
		inputs0: [{ name: 'a', value: 2 }, { name: 'c', value: 0 }],
		inputs1: [{ name: 'a', value: 5 }, { name: 'c', value: 2 }],
		tabulate: (steps, a, c) => {
			const min = 20
			const max = 40
			const step = (max - min) / steps
			
			return new Array(steps).fill(0).map((n, i) => ({
				x: min + step * i,
				y: 1 / ( 1 + Math.exp(-a * (min + step * i - c)) )
			}))
		}
	},
	{
		name: 'Triangular',
		inputs0: [{ name: 'a1', value: -20 },{ name: 'b2', value: 0 },{ name: 'c3', value: 10 }],
		inputs1: [{ name: 'a1', value: -20 },{ name: 'b2', value: 0 },{ name: 'c3', value: 10 }],
		tabulate: (steps, a, b, c) => {
			const min = 10
			const max = 20
			const step = (max - min) / steps
			
			return new Array(steps).fill(0).map((n, i) => {
				const x = min + step * i
				let y = 0
				if (x <= a || x >= c)
					y = 0
				if (x >= a && x <= b)
					y = (x - a) / (b - a)
				y = (c - x) / (c - b)

				return { x, y }
			})
		}
	}
]

const App = () =>
	functions.map(func => <MinMax {...func} key={func.name} />)


ReactDOM.render(<App />, document.getElementById('root'))
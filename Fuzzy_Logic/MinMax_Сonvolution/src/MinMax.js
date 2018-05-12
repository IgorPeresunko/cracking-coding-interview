/* global Chartist */
import React, { Component } from 'react'
import Chart from './Chart'

const chartSettings = {
	axisX: {
	  type: Chartist.AutoScaleAxis,
	  onlyInteger: true
	},
	axisY: {
		type: Chartist.FixedScaleAxis,
		ticks: [0, 1],
		low: 0
	},
	lineSmooth: Chartist.Interpolation.step(),
	showPoint: false,
	showArea: true,
}
const operations = {
	sum: (x, y) => x + y,
	sub: (x, y) => x - y,
	mul: (x, y) => x * y,
	div: (x, y) => x / y,
	min: Math.min,
	max: Math.max,
}

export default class MinMax extends Component {

	constructor(props) {
		super(props)
		this.operation = 'sum'
	}

	state = {
		chart: {
			name: this.props.name,
			inputs0: this.props.inputs0,
			inputs1: this.props.inputs1
		},
		len: 20,
		points: [],
		operation: 'sum',
		isModalOpen: false
	}

	calc = () => {
		const { len } = this.state
		
		const f0 = this.props.tabulate(len, ...this.state.chart.inputs0.map(el => el.value))
		const f1 = this.props.tabulate(len, ...this.state.chart.inputs1.map(el => el.value))

		const f2 = this.getMinMaxResult(f0, f1, this.operation)

		this.setState({ points: [ f0, f1, f2 ] })
	}

	getMinMaxResult = (f0, f1, operation) => {
		const data = []
		for (let i = 0; i < f0.length; ++i) {
			for (let j = 0; j < f1.length; ++j) {
				const x = operations[operation](f0[i].x, f1[j].x)	
				if (data[x]) {
					data[x] = Math.max(data[x], Math.min(f0[i].y, f1[j].y))
				} else {
					data[x] = Math.min(f0[i].y, f1[j].y)
				}
			}
		}
		const sum = Object
			.keys(data)
			.sort((a, b) => a - b)
			.map(key => ({ x: key, y: data[key] }))

		return sum
	}

	onChange = (arr, name) => e => {
		const value = Number(e.target.value)

		this.setState({
			chart: {
				...this.state.chart,
				[arr]: this.state.chart[arr].map(input =>
					input.name === name ? { name, value } : input)
			}
		})

		this.calc()
	}

	onStepChange = e => {
		const len = Number(e.target.value)
		this.setState({ len })
		this.calc()
	}

	onOperationChange = e => {
		this.operation = e.target.value
		this.calc()
	}

	onModal = () => {
		this.setState({ isModalOpen: !this.state.isModalOpen })
	}

	draw = () =>
		new Chartist.Line('.' + this.props.name, { series: this.state.points }, chartSettings)

	componentDidUpdate = () =>
		this.draw()

	componentDidMount = () =>
		this.calc()
	
	render() {
		const { chart, len, isModalOpen, points } = this.state
		return <Chart
			chart={chart}
			onChange={this.onChange}
			step={len}
			onStepChange={this.onStepChange}
			onOperationChange={this.onOperationChange}
			isModalOpen={isModalOpen}
			onModal={this.onModal}
			points={points}
		/>
	}
}
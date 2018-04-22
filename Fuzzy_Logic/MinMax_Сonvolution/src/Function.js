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
	lineSmooth: Chartist.Interpolation.none(),
	showPoint: false
}

export default class Function extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: this.props.name,
			className: `ct-chart-${this.props.index}`,
			points: this.getCoords(...this.props.inputs.map(val => val.value)),
			inputs: this.props.inputs
		}
	}

	onChange = i => e => {
		const value = Number(e.target.value)
		const chart = this.state

		const newChart = {
			...chart,
			points: this.getCoords(
				...this.state.inputs.map(val => val.name === chart.inputs[i].name ? { name: val.name, value } : val).map(val => val.value)
			),
			inputs: chart.inputs.map((n, index) => index === i ? { ...n, value } : n)
		}

		this.setState({ ...newChart })
	}

	getCoords = (...args) =>
		new Array(500).fill(0)
			.map((n, i) => i / 10 - 25)
			.map(x => ({ x, y: this.props.func(x, ...args) }))

	draw = () =>
		new Chartist.Line(
			'.' + this.state.className,
			{ series: [this.state.points] },
			chartSettings)

	componentDidUpdate = () =>
		this.draw()

	componentDidMount = () =>
		this.draw()

	render() {
		return (
			<Chart chart={this.state} onChange={this.onChange}/>
		)
	}
}
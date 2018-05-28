import React, { Component } from 'react'
import { getMatches } from '../../../api/matches'

import Content from '../components/Content'

export default class Matches extends Component {

	constructor(props) {
		super(props)

		this.state = {
			items: [],
			limit: 10,
			loading: true
		}
		this.controls = {
			onMore: this.onMore
		}
	}

	queryMatches = async (limit) => {
		const matches = await getMatches(limit)

		this.setState({ loading: false, items: matches })
	}

	onMore = () => {
		this.setState({ limit: this.state.limit + 10 })

		this.queryMatches(this.state.limit + 10)
	}

	componentDidMount = () => {
		this.queryMatches(this.state.limit)
	}
	
	render() {
		const { items } = this.state
		return (
			<Content items={items} controls={this.controls} />
		)
	}
}

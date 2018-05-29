import React, { Component } from 'react'
import { getMatches } from '../../../api/matches'

import Content from '../components/MatchSection'

export default class Matches extends Component {

	constructor(props) {
		super(props)

		this.state = {
			items: [],
			limit: 5,
			loading: true
		}
		this.controls = {
			onMore: this.onLoadMore
		}
	}

	queryMatches = async (limit) => {
		const matches = await getMatches(limit)

		this.setState({ loading: false, items: matches })
	}

	onLoadMore = () => {
		this.setState({ limit: this.state.limit + 5, loading: true })

		this.queryMatches(this.state.limit + 5)
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

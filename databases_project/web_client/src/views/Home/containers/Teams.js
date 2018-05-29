import React, { Component } from 'react'
import { getTeams } from '../../../api/teams'

import TeamsSection from '../components/TeamsSection'

export default class Teams extends Component {

	constructor(props) {
		super(props)

		this.state = {
			items: [],
			limit: 10,
			loading: true
		}
		this.controls = {
			onMore: this.onLoadMore
		}
	}

	queryTeams = async (limit) => {
		const teams = await getTeams(limit)

		this.setState({ loading: false, items: teams.filter(t => t.logo_url && t.logo_url !== "null") })
	}

	onLoadMore = () => {
		this.setState({ limit: this.state.limit + 5, loading: true })

		this.queryTeams(this.state.limit + 5)
	}

	componentDidMount = () => {
		this.queryTeams(this.state.limit)
	}
	
	render() {
		const { items } = this.state
		return (
			<TeamsSection items={items} controls={this.controls} />
		)
	}
}

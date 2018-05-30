import React, { Component } from 'react'
import { getTeam } from '../../../api/teams'
import { getPlayersByTeam } from '../../../api/players'

import View from '../components/View'

export default class Team extends Component {

	state = {
		team: {},
		loading: true
	}

	loadTeam = async path => {
		this.setState({ loading: true })
		const id = path.split('/')[2]
		
		const teamPromise = getTeam(id)
		const playersPromise = getPlayersByTeam(id)

		const [team, players] = await Promise.all([teamPromise, playersPromise])

		team.players = players

		this.setState({ loading: false, team })
	}

	componentDidMount = () => {
		this.loadTeam(this.props.path)
	}

	componentWillReceiveProps = nextProps => {
		if (this.props.path !== nextProps.path) {
			this.loadTeam(nextProps.path)
		}
	}
	
	render() {
		const { team } = this.state
		
		return (
			<View team={team} />
		)
	}
}

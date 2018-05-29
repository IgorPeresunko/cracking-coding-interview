import React, { Component } from 'react'
import { getMatch } from '../../../api/matches'

import View from '../components/View'

export default class Match extends Component {

	state = {
		match: {},
		loading: true
	}

	loadMatch = async path => {
		this.setState({ loading: true })
		
		const match = await getMatch(path.split('/')[2])

		this.setState({ loading: false, match })
	}

	componentDidMount = () => {
		this.loadMatch(this.props.path)
	}

	componentWillReceiveProps = (nextProps) => {
		if (this.props.path !== nextProps.path) {
			this.loadMatch(nextProps.path)
		}
	}
	
	render() {
		const { match } = this.state
		return (
			<View match={match} />
		)
	}
}

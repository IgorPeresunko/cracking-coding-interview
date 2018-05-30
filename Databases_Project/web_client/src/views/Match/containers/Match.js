import React, { Component } from 'react'
import { getMatch, createMatch, updateMatch, deleteMatch } from '../../../api/matches'

import View from '../components/View'

const emptyInputs = {
	id: '',
	duration: 0,
	radiant_team_id: 0,
	dire_team_id: 0,
	league_id: 0,
	radiant_score: 0,
	dire_score: 0,
	radiant_win: 'true'
}

export default class Match extends Component {

	state = {
		match: {},
		loading: true,
		modals: {
			create: false,
			update: false,
			delete: false
		},
		inputs: {
			...emptyInputs
		}
	}

	loadMatch = async path => {
		this.setState({ loading: true })
		
		const match = await getMatch(path.split('/')[2])

		this.setState({ loading: false, match })
	}

	createMatch = async () => {
		const { inputs } = this.state

		await createMatch(inputs)

		this.setState({ modals: { ...this.state.modals, create: false } })

		this.props.push(`/match/${inputs.id}`)
	}

	updateMatch = async () => {
		const { inputs, match: { id } } = this.state

		const values = { ...inputs }
		delete values.id

		await updateMatch(id, { match: values })

		this.props.push('/')
	}

	deleteMatch = async () => {
		await deleteMatch(this.state.match.id)

		this.props.push('/')
	}

	onInputChange = input => e => {
		const value = e.target.value

		this.setState({
			inputs: {
				...this.state.inputs,
				[input]: value
			}
		})
	}

	changeModal = modal => () => {
		const { modals, match } = this.state

		if (modal === 'update') {
			if (!modals.update) {
				this.setState({
					inputs: {
						id: match.id,
						duration: match.duration,
						radiant_team_id: match.radiant_id,
						dire_team_id: match.dire_id,
						league_id: match.league_id,
						radiant_score: match.radiant_score,
						dire_score: match.dire_score,
						radiant_win: Boolean(match.radiant_win).toString()
					}
				})
			} else {
				this.setState({
					inputs: { ...emptyInputs }
				})
			}
		}

		this.setState({
			modals: {
				...modals,
				[modal]: !modals[modal] 
			}
		})
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
		const { match, modals, loading, inputs } = this.state
		return (
			<View
				loading={loading}
				match={match}
				modals={modals}
				inputs={inputs}
				controls={{
					create: this.createMatch,
					update: this.updateMatch,
					delete: this.deleteMatch,
					changeModal: this.changeModal,
					onInputChange: this.onInputChange
				}}
			/>
		)
	}
}

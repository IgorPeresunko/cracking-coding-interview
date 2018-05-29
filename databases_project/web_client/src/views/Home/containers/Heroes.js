import React, { Component } from 'react'
import { getHeroes, getHero } from '../../../api/heroes'

import HeroesSection from '../components/HeroesSection'

export default class Heroes extends Component {

	constructor(props) {
		super(props)

		this.state = {
			items: [],
			limit: 8,
			loading: true,
			showModal: false,
			hero: {}
		}
		this.controls = {
			onMore: this.onLoadMore,
			onClick: this.onClick,
			onChangeState: this.onModalStateChange
		}
	}

	queryHeroes = async (limit) => {
		const heroes = await getHeroes(limit)

		this.setState({ loading: false, items: heroes })
	}

	onClick = id => async () => {
		const hero = await getHero(id)

		this.setState({ hero, loading: false, showModal: true })
	}

	onLoadMore = () => {
		this.setState({ limit: this.state.limit + 8, loading: true })

		this.queryHeroes(this.state.limit + 8)
	}

	onModalStateChange = () => {
		this.setState({ showModal: !this.state.showModal })
	}

	componentDidMount = () => {
		this.queryHeroes(this.state.limit)
	}
	
	render() {
		return (
			<HeroesSection controls={this.controls} state={this.state} />
		)
	}
}

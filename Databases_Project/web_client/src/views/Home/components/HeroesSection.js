import React from 'react'
import styled from 'styled-components'

import HeroesList from './HeroesList'
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import HeroesDialog from './HeroesDialog'

const Content = ({ state, controls }) => (
	<Wrapper>
		<Title>Heroes</Title>
		<HeroesList items={state.items} onClick={controls.onClick} />
		<HeroesDialog open={state.showModal} onChangeState={controls.onChangeState} hero={state.hero} />
		<Button onClick={controls.onMore}>more</Button>
	</Wrapper>
)

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 10px auto 40px;
`

export default Content
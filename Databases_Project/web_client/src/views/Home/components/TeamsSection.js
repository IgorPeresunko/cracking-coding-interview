import React from 'react'
import styled from 'styled-components'

import TeamsList from './TeamsList'
import Button from '../../../components/Button'
import Title from '../../../components/Title'

const Content = ({ items, controls }) => (
	<Wrapper>
		<Title>Teams</Title>
		<TeamsList items={items} />
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
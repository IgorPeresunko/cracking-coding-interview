import React from 'react'
import styled from 'styled-components'

import MatchesList from './MatchesList'

const Content = ({ items, controls }) => (
	<Wrapper>
		<MatchesList items={items} />
		<button onClick={controls.onMore}>more</button>
	</Wrapper>
)

const Wrapper = styled.div`
	position: relative;
	width: 80%;
	max-width: 1000px;
	margin: auto;
`

export default Content
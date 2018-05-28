import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MatchItem from './MatchItem'

const propTypes = {
	items: PropTypes.array
}

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`
const MatchesList = ({ items }) => (
	<Wrapper>{
		items.map(item => <MatchItem key={item.duration} item={item} />)
	}</Wrapper>
)

MatchesList.propTypes = propTypes

export default MatchesList
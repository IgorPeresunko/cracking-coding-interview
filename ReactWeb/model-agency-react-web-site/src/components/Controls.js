import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from './Icon'

const propTypes = {
	onSlideChange: PropTypes.func.isRequired,
	indexes: PropTypes.shape({
		current: PropTypes.number,
		count: PropTypes.number
	})
}

const Controls = ({ onSlideChange, indexes: { current, count } }) => (
	<Container>
		<MyIcon left onClick={onSlideChange('prev')}>keyboard_arrow_left</MyIcon>
		<Indexes>{ current + 1 }/{ count }</Indexes>
		<MyIcon right onClick={onSlideChange('next')}>keyboard_arrow_right</MyIcon>
	</Container>
)

Controls.propTypes = propTypes

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const MyIcon = styled(Icon)`
	font-size: 26px;
`
const Indexes = styled.div`
	font-size: 16px;
`

export default Controls

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func
}

const Icon = ({ children, onClick }) => (
	<I className="material-icons" onClick={onClick}>{ children }</I>
)

Icon.propTypes = propTypes

const I = styled.i`
	font-size: 20px;
	margin: 22px;
	cursor: pointer;
`

export default Icon

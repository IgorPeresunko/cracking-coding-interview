import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	children: PropTypes.node.isRequired
}

const Title = ({ children }) => (
	<Wrapper>{ children }</Wrapper>
)

const Wrapper = styled.div`
	width: 100%;
	font-weight: 400;
	font-size: 2.8125rem;
	margin: 0.7em 0;
	color: rgba(0, 0, 0, 0.54);
`

Title.propTypes = propTypes

export default Title
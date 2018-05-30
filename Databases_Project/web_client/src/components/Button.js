import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func
}

const Button = ({ children, onClick }) => (
	<Wrapper onClick={onClick}>
		{ children }
	</Wrapper>
)

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 8px;
	padding: 8px 16px;
	font-weight: 500;
	color: #fff;
	min-width: 88px;
	line-height: 1.4em;
	border-radius: 2px;
	text-transform: uppercase;
	font-size: 0.875rem;
	background-color: ${props => props.theme.primary};
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
	cursor: pointer;
`

Button.propTypes = propTypes

export default Button
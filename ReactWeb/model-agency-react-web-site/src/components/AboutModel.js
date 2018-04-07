import React from 'react'
import styled, { css } from 'styled-components'
import { slideIn, slideOut } from './animations'

const AboutModel = ({ model: { name, city, desc }, anim }) => (
	<Container _in={anim.in} _out={anim.out}>
		<Name>{ name }</Name>
		<City>{ city }</City>
		<Desc>{ desc }</Desc>
		<Button>more details</Button>
	</Container>
)

const Container = styled.div`
	width: 70%;
	margin: auto;
	opacity: 0;
	${props => props._in && css`
		animation: ${slideIn} .5s forwards;
		animation-delay: 1s;
	`}
	${props => props._out && css`
		animation: ${slideOut} .4s forwards;
	`}
`
const Name = styled.h1`
	margin-top: 0;
	font-family: 'Source Sans Pro', sans-serif;
	text-transform: capitalize;
	font-weight: 900;
	font-size: 50px;
	word-spacing: 200px;
	line-height: 46px;
`
const City = styled.h5`
	color: rgba(0 , 0, 0, .3);
	font-size: 16px;
	font-weight: 100;
	margin-bottom: 25px;
`
const Desc = styled.p`
	width: 90%;
	color: rgba(0 , 0, 0, .6);
	padding: 15px 0;
`
const Button = styled.button`
	font-family: 'Source Sans Pro', sans-serif;
	border: none;
	text-transform: uppercase;
	padding: 12px 16px;
	color: #000;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 1px;
	cursor: pointer;
	transition: .2s;
	&:hover {
		background-color: #000;
		color: #fff;
	}
`

export default AboutModel

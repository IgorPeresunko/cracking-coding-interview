import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { fadeIn, fadeOut, zoomIn, zoomOut } from './animations'

const propTypes = {
	src: PropTypes.string.isRequired
}

const Image = ({ src, anim }) => (
	<Container>
		<Shadow _in={anim.in} _out={anim.out}/>
		<Img src={require(`../assets/${src}`)} _in={anim.in} _out={anim.out} />
	</Container>
)

Image.propTypes = propTypes

const Container = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
`
const Shadow = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 50;
	background-color: rgba(255, 255, 255, 1);
	${props => props._in && css`
		animation: ${fadeIn} .5s forwards;
		animation-delay: 1s;
	`}
	${props => props._out && css`
		animation: ${fadeOut} .4s forwards;
	`}
`
const Img = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${props => props.src});
	background-size: cover;
	z-index: 10;
	transform: scale(1.1);
	${props => props._in && css`
		animation: ${zoomIn} .5s forwards;
		animation-delay: 1s;
	`}
	${props => props._out && css`
		animation: ${zoomOut} .4s forwards;
	`}
`

export default Image

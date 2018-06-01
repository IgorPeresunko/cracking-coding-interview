import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from './Image'
import Icons from './Icons'
import AboutModel from './AboutModel'
import Controls from './Controls'

const propTypes = {
	slide: PropTypes.shape({
		name: PropTypes.string,
		city: PropTypes.string,
		desc: PropTypes.string,
		img: PropTypes.string
	}),
	onSlideChange: PropTypes.func.isRequired,
	anim: PropTypes.shape({
		in: PropTypes.bool,
		out: PropTypes.bool
	})
}

const Slide = ({ slide, onSlideChange, indexes, anim }) => (
	<Wrapper>
		<Image src={slide.img} anim={anim} />
		<AboutBar>
			<Icons anim={anim}/>
			<AboutModel model={slide} anim={anim} />
			<Controls onSlideChange={onSlideChange} indexes={indexes} />
		</AboutBar>
	</Wrapper>
)

Slide.propTypes = propTypes

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	@media (max-width: 800px) {
		flex-direction: column;
		height: auto;
	}
`
const AboutBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #fff;
	max-width: 600px;
	padding: 10px;
	@media (max-width: 800px) {
		max-width: 100%;
	}
`

export default Slide

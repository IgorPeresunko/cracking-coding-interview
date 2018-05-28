import React from 'react'
import styled from 'styled-components'

const Wallpaper = () => (
	<Wrapper>

	</Wrapper>
)

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background-image: url('/files/wallpaper.jpg');
	background-size: cover;
	background-color: #000;
	background-position: center 0px;
	background-repeat: no-repeat;
`

export default Wallpaper
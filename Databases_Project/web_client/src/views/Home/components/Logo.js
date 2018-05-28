import React from 'react'
import styled from 'styled-components'

const Logo = () => (
	<Wrapper src="/files/dota_logo.png" />
)

const Wrapper = styled.img`
	width: 30%;
	max-width: 340px;
	margin: auto;
	padding-top: 45px;
	display: block;
`

export default Logo
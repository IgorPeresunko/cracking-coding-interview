import React from 'react'
import styled from 'styled-components'

const Logo = () => (
	<Wrapper src="/files/logo.png" />
)

const Wrapper = styled.img`
	width: 30%;
	max-width: 280px;
	margin: auto;
	padding-top: 45px;
	display: block;
`

export default Logo
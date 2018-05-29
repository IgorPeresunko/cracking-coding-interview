import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => (
	<Wrapper>
		<Text to="/">Coursework. Igor Peresunko</Text>
	</Wrapper>
)

const Wrapper = styled.div`
	position: fixed;
	display: flex;
	width: 100%;
	height: 54px;
	align-items: center;
	justify-content: center;
	background-color: #2196f3;
	
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	z-index: 500;
`
const Text = styled(Link)`
	max-width: 1000px;
	width: 80%;
	color: #fff;
	font-weight: 500;
	text-decoration: none;
`

export default Header
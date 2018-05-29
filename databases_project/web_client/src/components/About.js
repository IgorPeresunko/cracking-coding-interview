import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const About = () => (
	<Wrapper>
		<Logo />
		<H1>DOTA 2</H1>
		<Text>
			A Dota 2 database with matches, players, teams and heroes.
			Made with Node.js, MySQL, React and a bit of love. <span role="img" aria-label="Love">😘</span>
		</Text>
	</Wrapper>
)

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 20px 0 30px;
	align-items: center;
	justify-content: center;
`
const H1 = styled.h1`
	text-indent: .7rem;
	font-weight: 300;
	white-space: nowrap;
	letter-spacing: .7rem;
	text-align: center;
	font-size: 2.8125rem;
	
`
const Text = styled.div`
	max-width: 500px;
	margin-top: 8px;
	font-size: 1.5rem;
	text-align: center;
	line-height: 1.35417em;
`

export default About
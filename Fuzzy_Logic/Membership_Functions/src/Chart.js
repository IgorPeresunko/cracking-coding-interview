import React from 'react'
import styled from 'styled-components'
import Inputs from './Inputs'

const Chart = ({chart, onChange}) =>
	<Wrapper key={chart.name}>
		<Container>
			<H1>{chart.name}</H1>
			<Inputs inputs={chart.inputs} onChange={onChange} />
			<StyledChart className={`${chart.className} ct-chart ct-perfect-fourth`}></StyledChart>
		</Container>
	</Wrapper>

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	position: relative;
`
const Container = styled.div`
	position: relative;
	width: 86%;
	height: 76%;
	margin: auto;
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	justify-content: center;
	background: linear-gradient(180deg,#b9ede6 0,#c6f6ea 29%,#c9f5e6 49%,#d1f3d8 71%,#d4f2d5);

	@media screen and (max-width: 600px) {
		width: 100%;
	}

	box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, .15);
`
const H1 = styled.h1`
	position: absolute;
	top: -27px;
	left: 0;
	right: 0;
	width: 50%;
	padding: 15px;
	margin: auto;
	color: #303030;
	font-weight: 800;
	font-size: 24px;
	background-color: #fff;
	box-shadow: 2px 2px 10px 0 rgba(0,0,0,.14);
	border-radius: 55px;
	text-align: center;
	z-index: 100;

	@media screen and (max-width: 600px) {
		width: 80%;
	}
`
const StyledChart = styled.div`
	width: 80%;
	height: 50%;
	margin: auto;
`

export default Chart

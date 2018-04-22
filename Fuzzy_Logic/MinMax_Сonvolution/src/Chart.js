import React from 'react'
import styled from 'styled-components'
import Inputs, { Label, Input } from './Inputs'
import Modal from './Modal'

const Chart = ({chart, onChange, step, onStepChange, onOperationChange, onModal, isModalOpen, points}) =>
	<Wrapper key={chart.name}>
		<Container>
			<H1>{chart.name}</H1>
			<StyledChart className={`${chart.name} ct-chart ct-perfect-fourth`}></StyledChart>
			<InputsBlock>
				<div>
					<Inputs inputs={chart.inputs0} onChange={onChange} id="inputs0" />
					<Inputs inputs={chart.inputs1} onChange={onChange} id="inputs1" />
				</div>
				<RightWrap>
					<Select onChange={onOperationChange}>
						<option value="sum">Sum</option>
						<option value="sub">Sub</option>
						<option value="mul">Mul</option>
						<option value="div">Div</option>
						<option value="max">Max</option>
						<option value="min">Min</option>
					</Select>
					<Label htmlFor={'step'}>Step =
						<Input type="number" value={step} name="step" onChange={onStepChange} />
					</Label>
				</RightWrap>
			</InputsBlock>
			<Button onClick={onModal}>Show Tabulation</Button>
			<Modal onClose={onModal} open={isModalOpen} data={points}></Modal>
		</Container>
	</Wrapper>

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	position: relative;
`
const Container = styled.div`
	position: relative;
	width: 90%;
	height: 82%;
	margin: auto;
	display: flex;
	flex-direction: column;
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
const InputsBlock = styled.div`
	display: flex;
`
const StyledChart = styled.div`
	width: 90%;
	height: 60%;
	margin: 0 auto;
`
const RightWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const Button = styled.div`
	padding: 9px 35px;
	background: #ff2e7d;
	border: 1px solid #ff2e7d;
	box-shadow: 2px 2px 10px 0 rgba(255,46,125,.75);
	border-radius: 40px;
	color: #fff;
	text-align: center;
	font-size: 20px;
	cursor: pointer;
	
	margin: 5px auto;
`
const Select = styled.select`
	width: 200px;
	padding: 5px;
	margin: 10px 15px;
	border: 2px solid #d8d2f1;
	border-radius: 40px;
	font-size: 16px;
	cursor: pointer;
	outline: none;
`

export default Chart

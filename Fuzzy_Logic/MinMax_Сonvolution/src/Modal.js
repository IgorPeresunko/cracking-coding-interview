import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Button } from './Chart'

const Modal = ({ open, onClose, data }) => open ? (
	<Wrapper>
		<Dialog>
			<Div>
				{data.map((row, i) =>
					<Table key={i}>
						<Title>Function {i+1}</Title>
						
						<Row>
							<Point>
								<span>x</span>
								<span>y</span>
							</Point>
							{row.map((point, i) =>
								<Point key={i}>
									<span>{String(point.x).slice(0, 5)}</span>
									<span>{String(point.y).slice(0, 5)}</span>
								</Point>
						)}</Row>
					</Table>
				)}
			</Div>

			<Button onClick={onClose}>Close</Button>
		</Dialog>
	</Wrapper>
) : null

const shadowAppear = keyframes`
	0% { background-color: transparent; }
	100% { background-color: rgba(0, 0, 0, .4); }
`
const Wrapper = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: transparent;
	align-items: center;
	justify-content: center;
	z-index: 100000;
	animation: ${shadowAppear} .2s forwards;
`
const appear = keyframes`
	0% { transform: translateY(-100px); }
	100% { transform: translateY(0px); }
`
const Dialog = styled.div`
	
	width: 70%;
	max-width: 500px;
	max-height: 70vh;
	overflow: auto;
	padding: 20px;
	border-radius: 20px;
	background-color: #fff;
	animation: ${appear} .3s forwards;
`
const Div = styled.div`
	display: flex;
`
const Table = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 15px;
`
const Row = styled.div`
	display: flex;
	flex-direction: column;
`
const Title = styled.div`
	font-size: 18px;
	font-style: italic;
	padding: 5px 0;
`
const Point = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid rgba(0,0,0,.14);
	padding: 0 15px;
`

export default Modal
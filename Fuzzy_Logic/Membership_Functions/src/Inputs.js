import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	inputs: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
}

const Inputs = ({ inputs, onChange }) => (
	<StyledInputs>{
		inputs.map(({ name, value }, i) =>
			<Label htmlFor={name} key={name}>{name} =
				<Input type="number" value={value} key={name} name={name} onChange={onChange(i)} />
			</Label>)
	}</StyledInputs>
)

const StyledInputs = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	margin-bottom: 35px;
`
const Label = styled.label`
	font-size: 18px;
	margin: 5px 10px;
`
const Input = styled.input`
	width: 80px;
	text-align: center;
	border: 2px solid #d8d2f1;
	border-radius: 40px;
	padding: 5px 16px;
	font-size: 16px;
	outline: none;
	cursor: pointer;
`

Inputs.propTypes = propTypes

export default Inputs
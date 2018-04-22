import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	inputs: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
}

const Inputs = ({ inputs, onChange, id }) => (
	<StyledInputs>
		<Title>{id}</Title>
		{inputs.map(({ name, value }, i) =>
			<Label htmlFor={name} key={name}>{name} =
				<Input type="number" value={value} key={name} name={name} onChange={onChange(id, name)} />
			</Label>)}
	</StyledInputs>
)

const StyledInputs = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	margin: 5px auto;
	align-items: center;
`
const Title = styled.div`
	margin-right: 10px;
`
export const Label = styled.label`
	font-size: 18px;
	margin: 5px 10px;
`
export const Input = styled.input`
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
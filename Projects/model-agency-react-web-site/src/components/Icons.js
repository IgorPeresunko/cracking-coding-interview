import React from 'react'
import styled, { css } from 'styled-components'
import { slideInDown, slideOutDown } from './animations'

import Icon from './Icon'

const Icons = ({ anim }) => (
	<Container _in={anim.in} _out={anim.out}>
		<Icon>keyboard_backspace</Icon>
		<Group>
			<Icon>file_upload</Icon>
			<Icon>bookmark_border</Icon>
		</Group>
	</Container>
)

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	opacity: 0;
	${props => props._in && css`
		animation: ${slideInDown} .5s forwards;
		animation-delay: 1s;
	`}
	${props => props._out && css`
		animation: ${slideOutDown} .4s forwards;
	`}
`
const Group = styled.div``

export default Icons

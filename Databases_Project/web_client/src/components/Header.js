import React from 'react'
import styled from 'styled-components'


const Header = ({ history }) => (
	<Wrapper>
		Header, Just Header
	</Wrapper>
)

const Wrapper = styled.div`
	position: fixed;
	display: flex;
	width: 100%;
	height: 54px;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	box-shadow: 0 7px 15px rgba(0, 9, 128, 0.05), 0 12px 28px rgba(0, 9, 128, 0.075);
	z-index: 500;
`

export default Header
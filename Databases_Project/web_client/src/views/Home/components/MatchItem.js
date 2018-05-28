import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	item: PropTypes.shape({
		radiant_id: PropTypes.number,
		dire_id: PropTypes.number,
		radiant: PropTypes.string,
		dire: PropTypes.string,
		dire_score: PropTypes.number,
		radiant_score: PropTypes.number,
		duration: PropTypes.number,
		league_name: PropTypes.string,
		radiant_win: PropTypes.bool
	})
}

const MatchItem = ({ item }) => (
	<Wrapper>
		<Name bold={item.radiant_win} href={`/team/${item.radiant_id}`}>{item.radiant}</Name>
		<Score>{item.radiant_score} - {item.dire_score}</Score>
		<Name bold={!item.radiant_win} href={`/team/${item.dire_id}`}>{item.dire}</Name>
		<Button>More</Button>
	</Wrapper>
)

const Wrapper = styled.div`
	padding: 16px 20px 12px;
	box-shadow: 0 1px 1px 0 rgba(60,64,67,.08), 0 1px 3px 1px rgba(60,64,67,.16);
	display: flex;
	width: 100%;
	justify-content: space-around;
	margin: 5px 0;
`
const Name = styled.a`
	width: 26%;
	font-weight: ${props => props.bold ? 700 : 300};
	color: #000;
`
const Score = styled.div`
	width: 22%;
`
const Button = styled.div`
	width: 40px;
`

MatchItem.propTypes = propTypes

export default MatchItem
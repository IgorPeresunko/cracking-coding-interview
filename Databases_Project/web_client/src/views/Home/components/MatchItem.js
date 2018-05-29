import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const propTypes = {
	item: PropTypes.shape({
		radiant_id: PropTypes.number,
		dire_id: PropTypes.number,
		radiant: PropTypes.string,
		dire: PropTypes.string,
		dire_score: PropTypes.number,
		radiant_score: PropTypes.number,
		radiant_win: PropTypes.number
	})
}

const MatchItem = ({ item }) => (
	<Wrapper>
		<Name bold={(!!item.radiant_win).toString()} to={`/team/${item.radiant_id}`}>{item.radiant}</Name>
		<Score>{item.radiant_score} - {item.dire_score}</Score>
		<Name bold={(!item.radiant_win).toString()} to={`/team/${item.dire_id}`}>{item.dire}</Name>
		<Button to={`/match/${item.id}`}>More</Button>
	</Wrapper>
)

const Wrapper = styled.div`
	padding: 16px 20px 12px;
	box-shadow: 0 1px 1px 0 rgba(60,64,67,.08), 0 1px 3px 1px rgba(60,64,67,.16);
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 5px 0;
`
const Name = styled(Link)`
	width: 26%;
	font-weight: ${props => props.bold === "true" ? 700 : 300};
	color: #000;
`
const Score = styled.div`
	width: 22%;
`
const Button = styled(Link)`
	text-decoration: none;
	width: 40px;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.23);
	padding: 6px 10px;
	cursor: pointer;
	color: #2196f3;
`

MatchItem.propTypes = propTypes

export default MatchItem
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			logo_url: PropTypes.string,
			losses: PropTypes.number,
			rating: PropTypes.number,
			team_name: PropTypes.string,
			wins: PropTypes.number
		})
	).isRequired
}

const TeamsList = ({ items }) => (
	<Wrapper>{
		items.map(item => (
			<Item key={item.id} to={`/team/${item.id}`}>
				<Image src={item.logo_url} />
				<Text>{item.team_name}</Text>
			</Item>
		))
	}</Wrapper>
)

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`
const Item = styled(Link)`
	width: calc(20% - 60px);
	min-height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	margin: 13px 30px;
	cursor: pointer;
	text-decoration: none;
`
const Image = styled.img`
	width: 70%;
`
const Text = styled.div`
	width: 100%;
	color: #000;
	text-align: center;
	border-radius: 4px;
	margin-top: 6px;
	padding: 16px 20px 12px;
	box-shadow: 0 1px 1px 0 rgba(60,64,67,.08), 0 1px 3px 1px rgba(60,64,67,.16);
`

TeamsList.propTypes = propTypes

export default TeamsList
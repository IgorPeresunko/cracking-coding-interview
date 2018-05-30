import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			attack_type: PropTypes.string,
			hero_name: PropTypes.string,
			id: PropTypes.number,
			img: PropTypes.string,
			legs: PropTypes.number,
			primary_attr: PropTypes.string,
			roles: PropTypes.string
		})
	).isRequired,
	onClick: PropTypes.func.isRequired
}

const HeroesList = ({ items, onClick }) => (
	<Wrapper>{
		items.map(item => (
			<Item
				key={item.id}
				onClick={onClick(item.id)}
				style={{ backgroundImage: `url(http://cdn.dota2.com${item.img})` }} />
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
const Item = styled.div`
	width: 20%;
	min-height: 100px;
	background-size: cover;
	margin: 5px 2px;
	border-radius: 4px;
	padding: 16px 20px 12px;
	box-shadow: 0 1px 1px 0 rgba(60,64,67,.08), 0 1px 3px 1px rgba(60,64,67,.16);
	cursor: pointer;
`

HeroesList.propTypes = propTypes

export default HeroesList
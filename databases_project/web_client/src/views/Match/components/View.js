import React from 'react'
import styled from 'styled-components'

const View = ({ match, loading }) => loading ? <div>loading</div> : (
	<Wrapper>
		<Team>
			<Logo src={match.radiant_logo} />
			<Name>{ match.radiant }</Name>
			<Text>Rating: { match.radiant_rating }</Text>
		</Team>
		<Results>
			<Text>Winner: { match.radiant_win ? match.radiant : match.dire }</Text>
			<Score>{ match.radiant_score } - { match.dire_score }</Score>
			<Text>Duration: { Math.floor(match.duration / 60) }:{ match.duration % 60 }</Text>
			<Text>League: { match.league_name }</Text>
		</Results>
		<Team>
			<Logo src={match.dire_logo} />
			<Name>{ match.dire }</Name>
			<Text>Rating: { match.dire_rating }</Text>
		</Team>
	</Wrapper>
)

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 40px 0;
`
const Team = styled.div`
	display: flex;
	flex-direction: column;
`
const Logo = styled.img`
	width: 100px;
	margin: auto;
	margin-bottom: 10px;
`
const Name = styled.span`
	font-weight: 500;
	font-size: 22px;
	text-align: center;
`
const Text = styled.div`
	margin: 5px 0;
`
const Results = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`
const Score = styled.div`
	font-size: 30px;
	font-weight: 500;
	margin: 14px 0;
`

export default View
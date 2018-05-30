import React from 'react'
import styled from 'styled-components'

const View = ({ team, loading }) => loading ? <div>loading</div> : (
	<Wrapper>
		<Logo src={team.logo_url} />
		<Name>{ team.team_name }</Name>

		<Stats>
			<div>Rating: { team.rating }</div>
			<div>Wins: { team.wins }</div>
			<div>Losses: { team.losses }</div>
		</Stats>

		<Players>
			{ team.players ? team.players.map(p =>
				<Player key={p.id}>
					<Avatar src={p.avatar} />
					<Text>{p.nickname}</Text>
				</Player>
			) : ''}
		</Players>
	</Wrapper>
)

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 0;
`
const Logo = styled.img`
	width: 200px;
	margin: auto;
`
const Name = styled.div`
	margin: 10px;
	font-size: 28px;
	font-weight: 500;
	letter-spacing: 1px;
`
const Stats = styled.div`
	display: flex;
	width: 80%;
	margin: 6px auto;
	justify-content: space-around;
`
const Players = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	margin: 10px auto;
	justify-content: center;
`
const Player = styled.div`
	display: flex;
	align-items: center;
	margin: 6px 8px;
`
const Avatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 8px;
`
const Text = styled.div`

`

export default View
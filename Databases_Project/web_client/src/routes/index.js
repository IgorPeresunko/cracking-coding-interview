import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from '../views/Home'
import Match from '../views/Match'
import Team from '../views/Team'

const Routes = () => (
	<Wrapper>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/team/:id" exact component={Team} />
			<Route path="/match/:id" exact component={Match} />
		</Switch>
	</Wrapper>
)

const Wrapper = styled.div`
	width: 80%;
	max-width: 1000px;
	margin: auto;
	padding-top: 60px;
	position: relative;
`

export default Routes
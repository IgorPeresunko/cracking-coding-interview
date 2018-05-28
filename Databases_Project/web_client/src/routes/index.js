import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../views/Home'

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/team/:id" exact component={Home} />
	</Switch>
)

export default Routes
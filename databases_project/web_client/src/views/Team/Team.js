import React from 'react'

import Teams from '../Home/containers/Teams'
import TeamContainer from './containers/Team'

const Team = ({ history }) => (
	<div>
		<TeamContainer path={history.location.pathname}/>
		<Teams />
	</div>
)

export default Team
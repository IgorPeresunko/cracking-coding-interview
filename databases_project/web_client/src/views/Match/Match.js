import React from 'react'

import MatchContainer from './containers/Match'
import Matches from '../Home/containers/Matches'

const Match = ({ history }) => (
	<div>
		<MatchContainer path={history.location.pathname}/>
		<Matches />
	</div>
)

export default Match
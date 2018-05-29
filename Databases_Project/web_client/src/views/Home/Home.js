import React from 'react'

import Matches from './containers/Matches'
import Heroes from './containers/Heroes'
import Teams from './containers/Teams'
import About from '../../components/About'


const Home = () => (
	<div>
		<About />
		<Matches />
		<Heroes />
		<Teams />
	</div>
)

export default Home
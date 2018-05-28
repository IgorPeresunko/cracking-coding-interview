import React from 'react'
import styled from 'styled-components'

import Matches from './containers/Matches'
import Logo from './components/Logo';


const Home = ({ history }) => (
	<Page>
		
		<Logo />
		<Matches />
		
	</Page>
)

const Page = styled.div`
	min-height: 100vh;
`

export default Home
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import theme from './themes/default'
import Routes from './routes'
import Header from './components/Header'

const App = () => (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<React.Fragment>
				<Header />
				<Routes />
			</React.Fragment>
		</BrowserRouter>
	</ThemeProvider>
)

export default App
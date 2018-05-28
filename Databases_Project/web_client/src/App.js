import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import theme from './themes/default'
import Routes from './routes'

const App = () => (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</ThemeProvider>
)

export default App
import { injectGlobal } from 'styled-components'

injectGlobal`
	body {
		margin: 0;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	}
`

export default {
	primary: '#2196f3',
	secondary: '',

	radius: '',
	buttonShadow: '',

	mainFont: `"Roboto", "Helvetica", "Arial", sans-serif`,
	titleFont: `'Source Sans Pro', sans-serif`,
}
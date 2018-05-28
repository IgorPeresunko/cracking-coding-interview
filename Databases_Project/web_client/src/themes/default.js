import { injectGlobal } from 'styled-components'

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Open+Sans|Source+Sans+Pro:400,700&subset=cyrillic');

	body {
		margin: 0;
	}
`

export default {
	primary: '#ccc',
	secondary: '',

	radius: '',
	buttonShadow: '',

	mainFont: `'Open Sans', sans-serif`,
	titleFont: `'Source Sans Pro', sans-serif`,
}
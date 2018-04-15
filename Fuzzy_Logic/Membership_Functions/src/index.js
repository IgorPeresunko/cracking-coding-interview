import React from 'react'
import ReactDOM from 'react-dom'
import Function from './Function'
import functions from './functions'
import './index.css'

const App = () => functions
	.map((func, i) => <Function key={i} index={i} {...func}/> )

ReactDOM.render(<App />, document.getElementById('root'))
